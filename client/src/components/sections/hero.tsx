import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Phone, CheckCircle, Star } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="bg-hm-grey-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>


            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-hm-red">Fixed-Cost</span>
              <br />
              <span className="text-hm-black">Removals</span>
            </h1>

            <p className="text-xl text-hm-grey mb-8">
              Trusted Preston removals serving the Northwest and beyond. Professional, reliable, and transparent pricing with no hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link href="/contact" data-testid="button-book-now">
                <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white font-semibold w-full sm:w-auto">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Book A Home Visit Now
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-hm-black text-hm-black hover:bg-hm-black hover:text-white font-semibold w-full sm:w-auto"
                asChild
                data-testid="button-call-preston"
              >
                <a href="tel:+441772283818">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 01772 283 818
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="font-bold">No hidden charges</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="font-bold">Free home visits</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                <span className="font-bold">Fully insured</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/fixed-cost.jpg"
              alt="Professional house move showing Hampson & Mealey removal truck at residential property"
              className="rounded-xl shadow-2xl w-full h-auto max-w-full"
              style={{ aspectRatio: 'auto' }}
              data-testid="img-hero"
            />


          </div>
        </div>
      </div>
    </section>
  );
}
