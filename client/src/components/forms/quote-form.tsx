import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { NotebookPen } from "lucide-react";

export default function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      moveFrom: "",
      moveTo: "",
      propertyType: "",
      moveDate: "",
      additionalInfo: "",
    },
  });

  const createQuoteRequest = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const response = await apiRequest("POST", "/api/quote-requests", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
      setIsSubmitted(true);
      toast({
        title: "Quote Request Submitted",
        description: "Thanks for your enquiry. We should be in touch within two working days.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    createQuoteRequest.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-hm-grey-light">
        <CardContent className="p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-semibold text-hm-black mb-4">Thank You!</h3>
          <p className="text-hm-grey mb-6">
            Thanks for your enquiry. We should be in touch within two working days.
          </p>
          <div className="space-y-2 text-sm text-hm-grey">
            <p>Need immediate assistance?</p>
            <div className="flex justify-center space-x-4">
              <a href="tel:+441772283818" className="text-hm-red hover:underline">
                01772 283 818
              </a>
              <a href="tel:+447508884834" className="text-hm-red hover:underline">
                07508 884 834
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-hm-grey-light">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-hm-black">Request a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-quote">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="moveFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Moving From</FormLabel>
                    <FormControl>
                      <Input placeholder="Current postcode" {...field} value={field.value || ""} data-testid="input-move-from" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="moveTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Moving To</FormLabel>
                    <FormControl>
                      <Input placeholder="Destination postcode" {...field} value={field.value || ""} data-testid="input-move-to" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger data-testid="select-property-type">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-bed-flat">1 bedroom flat</SelectItem>
                      <SelectItem value="2-bed-flat">2 bedroom flat</SelectItem>
                      <SelectItem value="3-bed-flat">3 bedroom flat</SelectItem>
                      <SelectItem value="2-bed-house">2 bedroom house</SelectItem>
                      <SelectItem value="3-bed-house">3 bedroom house</SelectItem>
                      <SelectItem value="4-bed-house">4 bedroom house</SelectItem>
                      <SelectItem value="5-bed-house">5+ bedroom house</SelectItem>
                      <SelectItem value="office-commercial">Office/Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="moveDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Moving Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} value={field.value || ""} data-testid="input-move-date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about any special requirements, access issues, or anything else we should know..."
                      rows={4}
                      {...field}
                      value={field.value || ""}
                      data-testid="textarea-additional-info"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-hm-red hover:bg-hm-red-bright text-white font-semibold"
              disabled={createQuoteRequest.isPending}
              data-testid="button-submit-quote"
            >
              <NotebookPen className="mr-2 h-5 w-5" />
              {createQuoteRequest.isPending ? "Submitting..." : "Request Free Quote"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
