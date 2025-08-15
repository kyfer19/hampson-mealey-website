import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Shield, Clock, Phone } from "lucide-react";
import { Link } from "wouter";

export default function LongDistance() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hm-red text-white">Long Distance Service</Badge>
              <h1 className="text-5xl font-bold text-hm-black mb-6">
                Long Distance Removals
              </h1>
              <p className="text-xl text-hm-grey mb-8">
                Life-changing moves in or out of the Northwest with 0 friction and satisfied customers. We've experienced hundreds of moves and use that to make yours as smooth as possible.
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
                src="/images/FB_IMG_1754427579502_1754431043541.jpg"
                alt="Professional loading of removal truck for long distance transportation"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Long Distance Coverage</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Moving in or out of the Northwest from our Preston, Lancashire base.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-hm-red mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Moving Out of Northwest</h3>
                <p className="text-hm-grey">Professional long-distance moves from Preston, Lancashire to destinations across the country.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-hm-red mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Moving Into Northwest</h3>
                <p className="text-hm-grey">Seamless relocations from anywhere in the country to the Northwest region.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/FB_IMG_1754409296904_1754430915970.jpg"
                alt="Professional removal team with trucks and equipment"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-hm-black mb-6">Why Choose Our Long Distance Service?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Customer Satisfaction</h3>
                    <p className="text-hm-grey">Professional long-distance moves with careful attention to customer needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Hundreds of Successful Moves</h3>
                    <p className="text-hm-grey">Extensive experience in cross-country relocations of all sizes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Efficient Planning</h3>
                    <p className="text-hm-grey">Detailed route planning and scheduling for timely delivery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Comprehensive Insurance</h3>
                    <p className="text-hm-grey">Full coverage protection for your belongings during long-distance transport.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">What Makes Us Different</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Our experience and attention to detail ensures your long-distance move is handled with care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="font-semibold text-hm-black mb-2">Route Planning</h3>
              <p className="text-hm-grey text-sm">Optimal routes planned for efficiency and safety</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-hm-black mb-2">Regular Updates</h3>
              <p className="text-hm-grey text-sm">Keep you informed throughout your move</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-hm-black mb-2">Fully Insured</h3>
              <p className="text-hm-grey text-sm">Complete peace of mind for long distance moves</p>
            </div>
            <div className="text-center p-6 bg-hm-grey-light rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-hm-black mb-2">Personal Service</h3>
              <p className="text-hm-grey text-sm">Dedicated team member assigned to your move</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Our Long Distance Moving Process</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              A streamlined process designed to make your cross-country move as smooth as possible.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Initial Consultation & Survey</h3>
                <p className="text-hm-grey">Free home visit to assess your belongings and provide accurate fixed-cost quote.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Pre-Move Planning</h3>
                <p className="text-hm-grey">Detailed planning including route optimization, timing, and special requirements.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Professional Packing</h3>
                <p className="text-hm-grey">Expert packing using premium materials designed for long-distance transport.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Secure Transport</h3>
                <p className="text-hm-grey">Safe, insured transport with regular communication and updates throughout the journey.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 max-w-4xl mx-auto">
              <div className="bg-hm-red text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Delivery & Unpacking</h3>
                <p className="text-hm-grey">Careful delivery to your new home with optional unpacking and setup services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Planning a Long Distance Move?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free quote today and let us handle your cross-country relocation with expert care.
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
