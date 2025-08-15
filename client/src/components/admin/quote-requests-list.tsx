import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import ConvertToJobDialog from "./convert-to-job-dialog";
import { apiRequest } from "@/lib/queryClient";
import type { QuoteRequest } from "@shared/schema";

interface QuoteRequestsListProps {
  quoteRequests: QuoteRequest[];
  isLoading: boolean;
}

export default function QuoteRequestsList({ quoteRequests, isLoading }: QuoteRequestsListProps) {
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [convertDialogOpen, setConvertDialogOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const convertMutation = useMutation({
    mutationFn: async (data: { quoteId: string; jobData: any }) => {
      return await apiRequest("POST", `/api/admin/quote-requests/${data.quoteId}/convert-to-job`, data.jobData);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Quote successfully converted to job",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/jobs"] });
      setConvertDialogOpen(false);
      setSelectedQuote(null);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to convert quote to job",
        variant: "destructive",
      });
    },
  });

  const handleConvertToJob = (quote: QuoteRequest) => {
    setSelectedQuote(quote);
    setConvertDialogOpen(true);
  };

  const handleSubmitConversion = (jobData: any) => {
    if (selectedQuote) {
      convertMutation.mutate({
        quoteId: selectedQuote.id,
        jobData,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (quoteRequests.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Mail className="h-12 w-12 text-hm-grey mb-4" />
          <p className="text-hm-grey text-lg mb-2">No quote requests yet</p>
          <p className="text-hm-grey text-sm">New quote requests will appear here</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {quoteRequests.map((quote) => (
          <Card key={quote.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-hm-black">{quote.name}</CardTitle>
                <Badge variant="outline" className="text-hm-red border-hm-red">
                  New Quote
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center text-hm-grey">
                    <Mail className="h-4 w-4 mr-2" />
                    {quote.email}
                  </div>
                  <div className="flex items-center text-hm-grey">
                    <Phone className="h-4 w-4 mr-2" />
                    {quote.phone}
                  </div>
                  {quote.moveDate && (
                    <div className="flex items-center text-hm-grey">
                      <Calendar className="h-4 w-4 mr-2" />
                      {quote.moveDate}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  {quote.moveFrom && (
                    <div className="flex items-start text-hm-grey">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">From:</p>
                        <p>{quote.moveFrom}</p>
                      </div>
                    </div>
                  )}
                  {quote.moveTo && (
                    <div className="flex items-start text-hm-grey">
                      <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">To:</p>
                        <p>{quote.moveTo}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {quote.propertyType && (
                <div className="mb-4">
                  <span className="text-sm font-medium text-hm-grey">Property Type: </span>
                  <Badge variant="secondary">{quote.propertyType}</Badge>
                </div>
              )}

              {quote.additionalInfo && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-hm-grey mb-1">Additional Information:</p>
                  <p className="text-hm-grey bg-hm-grey-light p-3 rounded">{quote.additionalInfo}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-sm text-hm-grey">
                  Received: {format(new Date(quote.createdAt), "PPp")}
                </p>
                <Button
                  onClick={() => handleConvertToJob(quote)}
                  className="bg-hm-red hover:bg-hm-red-bright text-white"
                  data-testid={`button-convert-${quote.id}`}
                >
                  Convert to Job
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ConvertToJobDialog
        open={convertDialogOpen}
        onOpenChange={setConvertDialogOpen}
        quote={selectedQuote}
        onSubmit={handleSubmitConversion}
        isLoading={convertMutation.isPending}
      />
    </>
  );
}