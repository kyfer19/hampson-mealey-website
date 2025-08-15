import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Truck, Users, CheckCircle } from "lucide-react";
import QuoteRequestsList from "@/components/admin/quote-requests-list";
import JobsList from "@/components/admin/jobs-list";
import type { QuoteRequest, Job } from "@shared/schema";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("quotes");

  const { data: quoteRequests = [], isLoading: quotesLoading } = useQuery<QuoteRequest[]>({
    queryKey: ["/api/quote-requests"],
  });

  const { data: jobs = [], isLoading: jobsLoading } = useQuery<Job[]>({
    queryKey: ["/api/admin/jobs"],
  });

  const pendingQuotes = quoteRequests.length;
  const activeJobs = jobs.filter(job => !job.isCompleted).length;
  const completedJobs = jobs.filter(job => job.isCompleted).length;
  const totalJobs = jobs.length;

  return (
    <div className="min-h-screen bg-hm-grey-light">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-hm-black mb-2">Admin Dashboard</h1>
          <p className="text-hm-grey">Manage quote requests and track removal jobs</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-hm-grey">Pending Quotes</CardTitle>
              <ClipboardList className="h-4 w-4 text-hm-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-hm-black">{pendingQuotes}</div>
              <p className="text-xs text-hm-grey">Awaiting response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-hm-grey">Active Jobs</CardTitle>
              <Truck className="h-4 w-4 text-hm-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-hm-black">{activeJobs}</div>
              <p className="text-xs text-hm-grey">In progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-hm-grey">Completed Jobs</CardTitle>
              <CheckCircle className="h-4 w-4 text-hm-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-hm-black">{completedJobs}</div>
              <p className="text-xs text-hm-grey">Successfully finished</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-hm-grey">Total Jobs</CardTitle>
              <Users className="h-4 w-4 text-hm-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-hm-black">{totalJobs}</div>
              <p className="text-xs text-hm-grey">All time</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="quotes" className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Quote Requests
                  {pendingQuotes > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {pendingQuotes}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="jobs" className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  Jobs
                  {activeJobs > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {activeJobs}
                    </Badge>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="quotes" className="mt-6">
                <QuoteRequestsList 
                  quoteRequests={quoteRequests} 
                  isLoading={quotesLoading}
                />
              </TabsContent>

              <TabsContent value="jobs" className="mt-6">
                <JobsList 
                  jobs={jobs} 
                  isLoading={jobsLoading}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}