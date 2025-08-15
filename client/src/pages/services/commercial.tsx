import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building, Clock, Shield, Users, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Commercial() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hm-red text-white">Commercial Service</Badge>
              <h1 className="text-5xl font-bold text-hm-black mb-6">
                Commercial Office Relocation
              </h1>
              <p className="text-xl text-hm-grey mb-8">
                Reliable service, perfect for businesses and property owners who need both heavy lifting and a gentle touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white">
                    Get Business Quote
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
                src="/images/FB_IMG_1754409354835_1754430972658.jpg"
                alt="Commercial office relocation with protective equipment covers and furniture"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Why Businesses Choose Us</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Packdown, storage, and installation services included with every job - no hidden surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Reliable Service</h3>
                <p className="text-hm-grey">Professional completion on schedule with minimal business disruption.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Flexible Scheduling</h3>
                <p className="text-hm-grey">Weekend and out-of-hours moves to minimise business downtime.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Dedicated Team</h3>
                <p className="text-hm-grey">Experienced commercial movers who understand business requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-hm-black mb-6">Complete Commercial Service</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Pack Down Services</h3>
                    <p className="text-hm-grey">Systematic dismantling and packing of office furniture and equipment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Secure Storage</h3>
                    <p className="text-hm-grey">Climate-controlled storage facilities for temporary or long-term needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Installation Services</h3>
                    <p className="text-hm-grey">Full setup and installation at your new location to get you operational quickly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">IT Equipment Handling</h3>
                    <p className="text-hm-grey">Specialised handling of sensitive computer and server equipment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Document Security</h3>
                    <p className="text-hm-grey">Secure handling and transport of confidential business documents.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/FB_IMG_1754409296904_1754430915970.jpg"
                alt="Modern office space being prepared for relocation"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Businesses We Serve</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              From small startups to large enterprises, we handle commercial moves of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-semibold text-hm-black mb-2">Corporate Offices</h3>
              <p className="text-hm-grey text-sm">Large-scale office relocations with minimal downtime</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-semibold text-hm-black mb-2">Medical Practices</h3>
              <p className="text-hm-grey text-sm">Specialised handling of medical equipment and records</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-hm-black mb-2">Legal Firms</h3>
              <p className="text-hm-grey text-sm">Secure transport of confidential documents and files</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-semibold text-hm-black mb-2">Retail Businesses</h3>
              <p className="text-hm-grey text-sm">Shop fittings, inventory, and equipment relocations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Competitive Business Pricing</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Transparent, fixed-cost pricing with special rates for ongoing partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-hm-black mb-3">Fixed-Cost Quotes</h3>
                <p className="text-hm-grey">No surprises - the price we quote is exactly what you pay.</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-2 border-hm-red">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-hm-black mb-3">Discounted Rates</h3>
                <p className="text-hm-grey">Special pricing for recurring work and longer-term partnerships.</p>
                <Badge className="mt-2 bg-hm-red text-white">Popular</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-hm-black mb-3">Detailed Invoicing</h3>
                <p className="text-hm-grey">Comprehensive invoices with breakdown for easy expense tracking.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Our Commercial Moving Process</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              A systematic approach designed to minimise business disruption
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Site Survey & Planning</h3>
                <p className="text-hm-grey">Detailed assessment of your current space and requirements for the new location.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Timeline Coordination</h3>
                <p className="text-hm-grey">Work with your schedule to plan the move with minimal business interruption.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Systematic Pack Down</h3>
                <p className="text-hm-grey">Organised dismantling and packing with detailed labelling for easy reassembly.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Secure Transport</h3>
                <p className="text-hm-grey">Professional transport with real-time tracking and insurance coverage.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Installation & Setup</h3>
                <p className="text-hm-grey">Complete setup at your new location to get your business operational quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Relocate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a competitive fixed-cost quote for your commercial move with no hidden charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white">
                Get Business Quote
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
