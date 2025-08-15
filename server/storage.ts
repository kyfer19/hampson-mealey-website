import { 
  type QuoteRequest, 
  type InsertQuoteRequest,
  type Job,
  type InsertJob,
  type JobStatusUpdate,
  type InsertJobStatusUpdate,
  type User,
  type UpsertUser,
  quoteRequests,
  jobs,
  jobStatusUpdates,
  users
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, asc } from "drizzle-orm";

export interface IStorage {
  // Quote Request operations
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  
  // User operations (required for auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Job operations
  createJob(job: InsertJob): Promise<Job>;
  getJob(id: string): Promise<Job | undefined>;
  getJobByNumber(jobNumber: string): Promise<Job | undefined>;
  getJobsByCustomer(customerId: string): Promise<Job[]>;
  getJobsByEmail(email: string): Promise<Job[]>;
  getAllJobs(): Promise<Job[]>;
  updateJobStatus(jobId: string, status: string): Promise<void>;
  
  // Job Status Update operations
  createStatusUpdate(statusUpdate: InsertJobStatusUpdate): Promise<JobStatusUpdate>;
  getStatusUpdatesForJob(jobId: string): Promise<JobStatusUpdate[]>;
  getLatestStatusForJob(jobId: string): Promise<JobStatusUpdate | undefined>;
}

export class DatabaseStorage implements IStorage {
  // Quote Request operations
  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const [quoteRequest] = await db
      .insert(quoteRequests)
      .values(insertQuoteRequest)
      .returning();
    return quoteRequest;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    const [quoteRequest] = await db
      .select()
      .from(quoteRequests)
      .where(eq(quoteRequests.id, id));
    return quoteRequest;
  }

  // User operations (required for auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Job operations
  async createJob(insertJob: InsertJob): Promise<Job> {
    const [job] = await db
      .insert(jobs)
      .values(insertJob)
      .returning();
    return job;
  }

  async getJob(id: string): Promise<Job | undefined> {
    const [job] = await db
      .select()
      .from(jobs)
      .where(eq(jobs.id, id));
    return job;
  }

  async getJobByNumber(jobNumber: string): Promise<Job | undefined> {
    const [job] = await db
      .select()
      .from(jobs)
      .where(eq(jobs.jobNumber, jobNumber));
    return job;
  }

  async getJobsByCustomer(customerId: string): Promise<Job[]> {
    return await db
      .select()
      .from(jobs)
      .where(eq(jobs.customerId, customerId))
      .orderBy(desc(jobs.createdAt));
  }

  async getJobsByEmail(email: string): Promise<Job[]> {
    return await db
      .select()
      .from(jobs)
      .where(eq(jobs.customerEmail, email))
      .orderBy(desc(jobs.createdAt));
  }

  async getAllJobs(): Promise<Job[]> {
    return await db
      .select()
      .from(jobs)
      .orderBy(desc(jobs.createdAt));
  }

  async updateJobStatus(jobId: string, status: string): Promise<void> {
    await db
      .update(jobs)
      .set({ 
        currentStatus: status, 
        updatedAt: new Date(),
        isCompleted: status === 'completed'
      })
      .where(eq(jobs.id, jobId));
  }

  // Job Status Update operations
  async createStatusUpdate(insertStatusUpdate: InsertJobStatusUpdate): Promise<JobStatusUpdate> {
    const [statusUpdate] = await db
      .insert(jobStatusUpdates)
      .values(insertStatusUpdate)
      .returning();
    
    // Also update the job's current status
    await this.updateJobStatus(insertStatusUpdate.jobId, insertStatusUpdate.status);
    
    return statusUpdate;
  }

  async getStatusUpdatesForJob(jobId: string): Promise<JobStatusUpdate[]> {
    return await db
      .select()
      .from(jobStatusUpdates)
      .where(eq(jobStatusUpdates.jobId, jobId))
      .orderBy(asc(jobStatusUpdates.createdAt));
  }

  async getLatestStatusForJob(jobId: string): Promise<JobStatusUpdate | undefined> {
    const [latestStatus] = await db
      .select()
      .from(jobStatusUpdates)
      .where(eq(jobStatusUpdates.jobId, jobId))
      .orderBy(desc(jobStatusUpdates.createdAt))
      .limit(1);
    return latestStatus;
  }
}

export const storage = new DatabaseStorage();
