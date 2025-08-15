import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Users, 
  Truck, 
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import JobStatusDialog from "./job-status-dialog";
import type { Job } from "@shared/schema";

interface JobsListProps {
  jobs: Job[];
  isLoading: boolean;
}

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

const getStatusIcon = (status: string) => {
  switch (status) {
    case "quote_accepted":
      return <AlertCircle className="h-4 w-4" />;
    case "scheduled":
      return <Calendar className="h-4 w-4" />;
    case "in_progress":
      return <Truck className="h-4 w-4" />;
    case "completed":
      return <CheckCircle2 className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const formatStatus = (status: string) => {
  return status.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

export default function JobsList({ jobs, isLoading }: JobsListProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);

  const handleUpdateStatus = (job: Job) => {
    setSelectedJob(job);
    setStatusDialogOpen(true);
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

  if (jobs.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Truck className="h-12 w-12 text-hm-grey mb-4" />
          <p className="text-hm-grey text-lg mb-2">No jobs yet</p>
          <p className="text-hm-grey text-sm">Converted quote requests will appear here</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg text-hm-black">{job.customerName}</CardTitle>
                  <p className="text-sm text-hm-grey">Job #{job.jobNumber}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(job.currentStatus)}>
                    {getStatusIcon(job.currentStatus)}
                    <span className="ml-1">{formatStatus(job.currentStatus)}</span>
                  </Badge>
                  {job.isCompleted && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Completed
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center text-hm-grey">
                    <Mail className="h-4 w-4 mr-2" />
                    {job.customerEmail}
                  </div>
                  <div className="flex items-center text-hm-grey">
                    <Phone className="h-4 w-4 mr-2" />
                    {job.customerPhone}
                  </div>
                  <div className="flex items-center text-hm-grey">
                    <Calendar className="h-4 w-4 mr-2" />
                    {format(new Date(job.moveDate), "PPP")}
                    {job.estimatedStartTime && ` at ${job.estimatedStartTime}`}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start text-hm-grey">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">From:</p>
                      <p>{job.moveFrom}</p>
                    </div>
                  </div>
                  <div className="flex items-start text-hm-grey">
                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">To:</p>
                      <p>{job.moveTo}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                {job.quotedPrice && (
                  <div>
                    <p className="text-sm font-medium text-hm-grey">Quoted Price</p>
                    <p className="text-lg font-semibold text-hm-black">£{job.quotedPrice}</p>
                  </div>
                )}
                {job.teamAssigned && (
                  <div className="flex items-center text-hm-grey">
                    <Users className="h-4 w-4 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Team</p>
                      <p>{job.teamAssigned}</p>
                    </div>
                  </div>
                )}
                {job.vehicleAssigned && (
                  <div className="flex items-center text-hm-grey">
                    <Truck className="h-4 w-4 mr-2" />
                    <div>
                      <p className="text-sm font-medium">Vehicle</p>
                      <p>{job.vehicleAssigned}</p>
                    </div>
                  </div>
                )}
              </div>

              {job.specialInstructions && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-hm-grey mb-1">Special Instructions:</p>
                  <p className="text-hm-grey bg-hm-grey-light p-3 rounded">{job.specialInstructions}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t">
                <p className="text-sm text-hm-grey">
                  Created: {format(new Date(job.createdAt), "PPp")}
                </p>
                <Button
                  onClick={() => handleUpdateStatus(job)}
                  variant="outline"
                  className="border-hm-red text-hm-red hover:bg-hm-red hover:text-white"
                  data-testid={`button-update-status-${job.id}`}
                >
                  Update Status
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <JobStatusDialog
        open={statusDialogOpen}
        onOpenChange={setStatusDialogOpen}
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  );
}