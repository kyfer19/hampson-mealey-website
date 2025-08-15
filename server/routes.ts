import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertJobSchema, insertJobStatusUpdateSchema } from "@shared/schema";
import { sendQuoteRequestEmail, sendCustomerConfirmationEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoints
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // Send email notifications
      try {
        await sendQuoteRequestEmail(quoteRequest);
        await sendCustomerConfirmationEmail(quoteRequest);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with success response even if email fails
      }
      
      res.json(quoteRequest);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create quote request" });
      }
    }
  });

  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getQuoteRequests();
      res.json(quoteRequests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quote requests" });
    }
  });

  app.get("/api/quote-requests/:id", async (req, res) => {
    try {
      const quoteRequest = await storage.getQuoteRequest(req.params.id);
      if (!quoteRequest) {
        res.status(404).json({ message: "Quote request not found" });
        return;
      }
      res.json(quoteRequest);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quote request" });
    }
  });

  // Admin endpoints for job management
  app.get("/api/admin/jobs", async (req, res) => {
    try {
      const jobs = await storage.getAllJobs();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });

  app.post("/api/admin/jobs", async (req, res) => {
    try {
      const validatedData = insertJobSchema.parse(req.body);
      const job = await storage.createJob(validatedData);
      res.json(job);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid job data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create job" });
      }
    }
  });

  app.get("/api/admin/jobs/:id", async (req, res) => {
    try {
      const job = await storage.getJob(req.params.id);
      if (!job) {
        res.status(404).json({ message: "Job not found" });
        return;
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job" });
    }
  });

  app.post("/api/admin/jobs/:id/status", async (req, res) => {
    try {
      const { status, message, location, estimatedTime, updatedBy } = req.body;
      const statusUpdate = {
        jobId: req.params.id,
        status,
        message,
        location,
        estimatedTime,
        updatedBy,
        actualTime: new Date(),
        isVisible: true
      };
      
      const validatedData = insertJobStatusUpdateSchema.parse(statusUpdate);
      const update = await storage.createStatusUpdate(validatedData);
      res.json(update);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid status update data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create status update" });
      }
    }
  });

  app.get("/api/admin/jobs/:id/status", async (req, res) => {
    try {
      const statusUpdates = await storage.getStatusUpdatesForJob(req.params.id);
      res.json(statusUpdates);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch status updates" });
    }
  });

  // Convert quote request to job
  app.post("/api/admin/quote-requests/:id/convert-to-job", async (req, res) => {
    try {
      const quoteRequest = await storage.getQuoteRequest(req.params.id);
      if (!quoteRequest) {
        res.status(404).json({ message: "Quote request not found" });
        return;
      }

      const { jobNumber, quotedPrice, moveDate, estimatedStartTime, estimatedDuration, teamAssigned, vehicleAssigned, specialInstructions } = req.body;
      
      const jobData = {
        jobNumber,
        customerName: quoteRequest.name,
        customerPhone: quoteRequest.phone,
        customerEmail: quoteRequest.email,
        moveFrom: quoteRequest.moveFrom || '',
        moveTo: quoteRequest.moveTo || '',
        moveDate: new Date(moveDate),
        estimatedStartTime,
        estimatedDuration,
        quotedPrice,
        propertyType: quoteRequest.propertyType,
        specialInstructions: specialInstructions || quoteRequest.additionalInfo,
        teamAssigned,
        vehicleAssigned,
        currentStatus: "quote_accepted"
      };

      const validatedData = insertJobSchema.parse(jobData);
      const job = await storage.createJob(validatedData);
      
      // Create initial status update
      const initialStatus = {
        jobId: job.id,
        status: "quote_accepted",
        message: "Quote accepted and job created",
        updatedBy: "Admin",
        actualTime: new Date(),
        isVisible: true
      };
      
      await storage.createStatusUpdate(initialStatus);
      
      res.json(job);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid job conversion data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to convert quote to job" });
      }
    }
  });

  // Customer tracking endpoint (public)
  app.get("/api/track/:jobNumber", async (req, res) => {
    try {
      const job = await storage.getJobByNumber(req.params.jobNumber);
      if (!job) {
        res.status(404).json({ message: "Job not found" });
        return;
      }
      
      const statusUpdates = await storage.getStatusUpdatesForJob(job.id);
      const visibleUpdates = statusUpdates.filter(update => update.isVisible);
      
      res.json({
        job: {
          jobNumber: job.jobNumber,
          customerName: job.customerName,
          moveFrom: job.moveFrom,
          moveTo: job.moveTo,
          moveDate: job.moveDate,
          estimatedStartTime: job.estimatedStartTime,
          currentStatus: job.currentStatus,
          teamAssigned: job.teamAssigned,
          isCompleted: job.isCompleted
        },
        statusUpdates: visibleUpdates
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job tracking info" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
