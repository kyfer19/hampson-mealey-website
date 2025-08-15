import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Job, JobStatusUpdate } from "@shared/schema";

const statusUpdateSchema = z.object({
  status: z.string().min(1, "Status is required"),
  message: z.string().min(1, "Message is required"),
  location: z.string().optional(),
  estimatedTime: z.date().optional(),
  updatedBy: z.string().min(1, "Updated by is required"),
});

type StatusUpdateForm = z.infer<typeof statusUpdateSchema>;

const jobStatuses = [
  { value: "quote_accepted", label: "Quote Accepted" },
  { value: "scheduled", label: "Scheduled" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "quote_accepted":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "scheduled":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "in_progress":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

interface JobStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job: Job | null;
  onClose: () => void;
}

export default function JobStatusDialog({
  open,
  onOpenChange,
  job,
  onClose,
}: JobStatusDialogProps) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<StatusUpdateForm>({
    resolver: zodResolver(statusUpdateSchema),
    defaultValues: {
      status: "",
      message: "",
      location: "",
      updatedBy: "Admin",
    },
  });

  // Fetch existing status updates for this job
  const { data: statusUpdates = [], isLoading: updatesLoading } = useQuery<JobStatusUpdate[]>({
    queryKey: ["/api/admin/jobs", job?.id, "status"],
    enabled: !!job?.id,
  });

  const updateStatusMutation = useMutation({
    mutationFn: async (data: StatusUpdateForm) => {
      if (!job) throw new Error("No job selected");
      
      const updateData = {
        ...data,
        estimatedTime: data.estimatedTime?.toISOString(),
      };
      
      return await apiRequest("POST", `/api/admin/jobs/${job.id}/status`, updateData);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Job status updated successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs", job?.id, "status"] });
      form.reset();
      handleClose();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update job status",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (data: StatusUpdateForm) => {
    updateStatusMutation.mutate(data);
  };

  const handleClose = () => {
    form.reset();
    onClose();
    onOpenChange(false);
  };

  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Update Job Status - {job.jobNumber}</DialogTitle>
          <DialogDescription>
            Update the status for {job.customerName}'s move
          </DialogDescription>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Job Summary */}
          <div className="space-y-4">
            <div className="bg-hm-grey-light p-4 rounded-lg">
              <h3 className="font-semibold text-hm-black mb-3">Job Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-hm-grey">Customer:</span>
                  <span className="text-hm-black font-medium">{job.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hm-grey">Phone:</span>
                  <span className="text-hm-black">{job.customerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hm-grey">Move Date:</span>
                  <span className="text-hm-black">{format(new Date(job.moveDate), "PPP")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hm-grey">Current Status:</span>
                  <Badge className={getStatusColor(job.currentStatus)}>
                    {job.currentStatus.split('_').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Status History */}
            <div>
              <h3 className="font-semibold text-hm-black mb-3">Status History</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {updatesLoading ? (
                  <p className="text-hm-grey">Loading status updates...</p>
                ) : statusUpdates.length === 0 ? (
                  <p className="text-hm-grey">No status updates yet</p>
                ) : (
                  statusUpdates
                    .sort((a, b) => {
                      const dateA = a.actualTime ? new Date(a.actualTime).getTime() : 0;
                      const dateB = b.actualTime ? new Date(b.actualTime).getTime() : 0;
                      return dateB - dateA;
                    })
                    .map((update) => (
                      <Card key={update.id} className="border-l-4 border-l-hm-red">
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between mb-1">
                            <Badge className={getStatusColor(update.status)}>
                              {update.status.split('_').map(word => 
                                word.charAt(0).toUpperCase() + word.slice(1)
                              ).join(' ')}
                            </Badge>
                            <span className="text-xs text-hm-grey">
                              by {update.updatedBy}
                            </span>
                          </div>
                          <p className="text-sm text-hm-black mb-1">{update.message}</p>
                          {update.location && (
                            <div className="flex items-center text-xs text-hm-grey mb-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              {update.location}
                            </div>
                          )}
                          <div className="flex items-center justify-between text-xs text-hm-grey">
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {update.actualTime ? format(new Date(update.actualTime), "PPp") : "Unknown time"}
                            </div>
                            {update.estimatedTime && (
                              <span>ETA: {format(new Date(update.estimatedTime), "PPp")}</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))
                )}
              </div>
            </div>
          </div>

          {/* Update Form */}
          <div>
            <h3 className="font-semibold text-hm-black mb-4">Add Status Update</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-status">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {jobStatuses.map((status) => (
                            <SelectItem key={status.value} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Update Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          placeholder="Describe the current status or what's happening..."
                          className="min-h-[80px]"
                          data-testid="textarea-status-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Location (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="e.g., Loading at origin address"
                          data-testid="input-location"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="estimatedTime"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Estimated Completion Time (Optional)</FormLabel>
                      <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              data-testid="button-estimated-time"
                            >
                              {field.value ? (
                                format(field.value, "PPp")
                              ) : (
                                <span>Pick a date and time</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setDatePickerOpen(false);
                            }}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="updatedBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Updated By</FormLabel>
                      <FormControl>
                        <Input {...field} data-testid="input-updated-by" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    disabled={updateStatusMutation.isPending}
                    data-testid="button-cancel-status-update"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-hm-red hover:bg-hm-red-bright text-white"
                    disabled={updateStatusMutation.isPending}
                    data-testid="button-update-status"
                  >
                    {updateStatusMutation.isPending ? "Updating..." : "Update Status"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}