import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, decimal, boolean, index, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  moveFrom: text("move_from"),
  moveTo: text("move_to"),
  propertyType: text("property_type"),
  moveDate: text("move_date"),
  additionalInfo: text("additional_info"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Jobs table for confirmed bookings
export const jobs = pgTable("jobs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  jobNumber: varchar("job_number").notNull().unique(),
  customerId: varchar("customer_id").references(() => users.id),
  customerName: text("customer_name").notNull(),
  customerPhone: text("customer_phone").notNull(),
  customerEmail: text("customer_email").notNull(),
  moveFrom: text("move_from").notNull(),
  moveTo: text("move_to").notNull(),
  moveDate: timestamp("move_date").notNull(),
  estimatedStartTime: text("estimated_start_time"),
  estimatedDuration: text("estimated_duration"),
  quotedPrice: decimal("quoted_price", { precision: 10, scale: 2 }),
  finalPrice: decimal("final_price", { precision: 10, scale: 2 }),
  propertyType: text("property_type"),
  specialInstructions: text("special_instructions"),
  teamAssigned: text("team_assigned"),
  vehicleAssigned: text("vehicle_assigned"),
  currentStatus: text("current_status").notNull().default("quote_accepted"),
  isCompleted: boolean("is_completed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Job status updates for tracking progress
export const jobStatusUpdates = pgTable("job_status_updates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  jobId: varchar("job_id").references(() => jobs.id).notNull(),
  status: text("status").notNull(),
  message: text("message"),
  location: text("location"),
  estimatedTime: text("estimated_time"),
  actualTime: timestamp("actual_time"),
  updatedBy: text("updated_by"),
  isVisible: boolean("is_visible").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const jobsRelations = relations(jobs, ({ one, many }) => ({
  customer: one(users, {
    fields: [jobs.customerId],
    references: [users.id],
  }),
  statusUpdates: many(jobStatusUpdates),
}));

export const jobStatusUpdatesRelations = relations(jobStatusUpdates, ({ one }) => ({
  job: one(jobs, {
    fields: [jobStatusUpdates.jobId],
    references: [jobs.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  jobs: many(jobs),
}));

// Type definitions
export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export const insertJobSchema = createInsertSchema(jobs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertJobStatusUpdateSchema = createInsertSchema(jobStatusUpdates).omit({
  id: true,
  createdAt: true,
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertJob = z.infer<typeof insertJobSchema>;
export type Job = typeof jobs.$inferSelect;
export type InsertJobStatusUpdate = z.infer<typeof insertJobStatusUpdateSchema>;
export type JobStatusUpdate = typeof jobStatusUpdates.$inferSelect;
