import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import ServicesOverview from "@/pages/services-overview";
import LocalMoving from "@/pages/services/local-moving";
import LongDistance from "@/pages/services/long-distance";
import Commercial from "@/pages/services/commercial";
import Packing from "@/pages/services/packing";
import MovingGuide from "@/pages/moving-guide";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Booking from "@/pages/booking";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import AdminDashboard from "@/pages/admin/dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesOverview} />
          <Route path="/services/local-moving" component={LocalMoving} />
          <Route path="/services/long-distance" component={LongDistance} />
          <Route path="/services/commercial" component={Commercial} />
          <Route path="/services/packing" component={Packing} />
          <Route path="/moving-guide" component={MovingGuide} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Blog} />
          <Route path="/posts/:slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" component={Booking} />
          <Route path="/admin" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
