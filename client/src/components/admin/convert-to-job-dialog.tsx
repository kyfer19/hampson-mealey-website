import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { QuoteRequest } from "@shared/schema";

const jobConversionSchema = z.object({
  jobNumber: z.string().min(1, "Job number is required"),
  quotedPrice: z.string().min(1, "Quoted price is required"),
  moveDate: z.date({
    required_error: "Move date is required",
  }),
  estimatedStartTime: z.string().optional(),
  estimatedDuration: z.string().optional(),
  teamAssigned: z.string().optional(),
  vehicleAssigned: z.string().optional(),
  specialInstructions: z.string().optional(),
});

type JobConversionForm = z.infer<typeof jobConversionSchema>;

interface ConvertToJobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  quote: QuoteRequest | null;
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export default function ConvertToJobDialog({
  open,
  onOpenChange,
  quote,
  onSubmit,
  isLoading,
}: ConvertToJobDialogProps) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const form = useForm<JobConversionForm>({
    resolver: zodResolver(jobConversionSchema),
    defaultValues: {
      jobNumber: "",
      quotedPrice: "",
      estimatedStartTime: "09:00",
      estimatedDuration: "4-6 hours",
      teamAssigned: "",
      vehicleAssigned: "",
      specialInstructions: quote?.additionalInfo || "",
    },
  });

  // Generate job number when dialog opens
  React.useEffect(() => {
    if (open && quote) {
      const jobNumber = `HM${Date.now().toString().slice(-6)}`;
      form.setValue("jobNumber", jobNumber);
      form.setValue("specialInstructions", quote.additionalInfo || "");
      
      // Set move date if available in quote
      if (quote.moveDate) {
        try {
          const moveDate = new Date(quote.moveDate);
          if (!isNaN(moveDate.getTime())) {
            form.setValue("moveDate", moveDate);
          }
        } catch (error) {
          // Invalid date format, ignore
        }
      }
    }
  }, [open, quote, form]);

  const handleSubmit = (data: JobConversionForm) => {
    onSubmit({
      ...data,
      moveDate: data.moveDate.toISOString(),
      quotedPrice: data.quotedPrice,
    });
  };

  const handleClose = () => {
    form.reset();
    onOpenChange(false);
  };

  if (!quote) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Convert Quote to Job</DialogTitle>
          <DialogDescription>
            Convert the quote request from {quote.name} into a confirmed job.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Quote Summary */}
          <div className="bg-hm-grey-light p-4 rounded-lg">
            <h3 className="font-semibold text-hm-black mb-2">Quote Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-hm-grey">Customer:</span>
                <span className="ml-2 text-hm-black">{quote.name}</span>
              </div>
              <div>
                <span className="text-hm-grey">Phone:</span>
                <span className="ml-2 text-hm-black">{quote.phone}</span>
              </div>
              <div>
                <span className="text-hm-grey">Email:</span>
                <span className="ml-2 text-hm-black">{quote.email}</span>
              </div>
              <div>
                <span className="text-hm-grey">Property:</span>
                <span className="ml-2 text-hm-black">{quote.propertyType || "Not specified"}</span>
              </div>
              <div className="col-span-2">
                <span className="text-hm-grey">From:</span>
                <span className="ml-2 text-hm-black">{quote.moveFrom || "Not specified"}</span>
              </div>
              <div className="col-span-2">
                <span className="text-hm-grey">To:</span>
                <span className="ml-2 text-hm-black">{quote.moveTo || "Not specified"}</span>
              </div>
            </div>
          </div>

          {/* Job Details Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="jobNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Number</FormLabel>
                      <FormControl>
                        <Input {...field} data-testid="input-job-number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quotedPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quoted Price (£)</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          step="0.01" 
                          placeholder="0.00" 
                          {...field} 
                          data-testid="input-quoted-price"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="moveDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Move Date</FormLabel>
                      <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                              data-testid="button-move-date"
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
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
                  name="estimatedStartTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Start Time</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="09:00" data-testid="input-start-time" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="estimatedDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Duration</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="4-6 hours" data-testid="input-duration" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="teamAssigned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Assigned</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Team A" data-testid="input-team-assigned" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vehicleAssigned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vehicle Assigned</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Van 1" data-testid="input-vehicle-assigned" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="specialInstructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Instructions</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Any special requirements or notes..."
                        className="min-h-[100px]"
                        data-testid="textarea-special-instructions"
                      />
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
                  disabled={isLoading}
                  data-testid="button-cancel-conversion"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-hm-red hover:bg-hm-red-bright text-white"
                  disabled={isLoading}
                  data-testid="button-create-job"
                >
                  {isLoading ? "Creating Job..." : "Create Job"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}