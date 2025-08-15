import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, Phone } from "lucide-react";
import { Link } from "wouter";

export default function LocalMoving() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hm-red text-white">Local Moving Service</Badge>
              <h1 className="text-5xl font-bold text-hm-black mb-6">
                Local Moving & Delivery
              </h1>
              <p className="text-xl text-hm-grey mb-8">
                Get your move started and remove the stress. Book months in advance and guarantee your move date, or call us last minute and we'll help you through the panic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white">
                    Get Free Quote
                  </Button>
                </Link>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+441772283818">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 01772 283 818
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/images/FB_IMG_1754409289850_1754430902580.jpg"
                alt="Hampson & Mealey branded truck at commercial location for local moving service"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Why Choose Our Local Moving Service?</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              No half-measures - we help you at every step of the journey regardless of how much we're moving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">2-Minute Online Booking</h3>
                <p className="text-hm-grey">Quick and easy online booking system gets your move scheduled in just 2 minutes.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Scheduled Move Dates</h3>
                <p className="text-hm-grey">Book months in advance and secure your preferred moving date with confidence.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Last Minute Availability</h3>
                <p className="text-hm-grey">Need to move urgently? Call us for same-day or next-day moving services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-hm-black mb-6">What's Included</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Complete Packing Service</h3>
                    <p className="text-hm-grey">Professional packing of all your belongings with high-quality materials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Furniture Protection</h3>
                    <p className="text-hm-grey">Mattress protectors, furniture blankets, and carpet protection included.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Professional Loading & Unloading</h3>
                    <p className="text-hm-grey">Careful handling and placement of items in both locations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Fixed-Cost Pricing</h3>
                    <p className="text-hm-grey">No hidden charges or surprise fees - the price we quote is what you pay.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Full Insurance Coverage</h3>
                    <p className="text-hm-grey">Comprehensive insurance protection for your peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/FB_IMG_1754409139628_1754430986527.jpg"
                alt="Professional movers carefully loading household items into removal truck"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Local Service Area</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              We provide local moving services throughout the Northwest from our Preston, Lancashire base
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <h3 className="font-semibold text-hm-black mb-2">Preston Base</h3>
              <p className="text-hm-grey text-sm">Our home base in Preston, Lancashire with dedicated local team</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <h3 className="font-semibold text-hm-black mb-2">Northwest Coverage</h3>
              <p className="text-hm-grey text-sm">Local moving services throughout the Northwest region</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Move?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your fixed-cost quote today and take the stress out of your local move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white">
                Get Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hm-black" asChild>
              <a href="tel:+441772283818">
                Call 01772 283 818
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
