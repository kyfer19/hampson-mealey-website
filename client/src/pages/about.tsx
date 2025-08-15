import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, MapPin, Star, Phone, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-hm-black mb-4">Our Story</h2>
              <p className="text-xl text-hm-grey">
                Built on trust, reliability, and transparent pricing
              </p>
            </div>

            <div className="space-y-8">
              <div className="text-lg text-hm-grey leading-relaxed">
                <p className="mb-6">
                  Hampson & Mealey Limited was founded with a simple mission: to provide honest, reliable removal services with transparent pricing. Based in Preston, Lancashire, we've grown to become one of the most trusted removal companies in the Northwest.
                </p>
                <p className="mb-6">
                  What sets us apart is our commitment to fixed-cost pricing and innovations for efficiency. We believe moving house is stressful enough without worrying about unexpected charges. That's why we provide detailed, accurate quotes upfront and stick to them - no hidden fees, no last-minute surprises.
                </p>
                <p>
                  With hundreds of successful moves in the Northwest, we pride ourselves on professional service, careful handling of your belongings, and making your move as stress-free as possible. Our team of experienced professionals treats every move with the same care and attention, whether you're moving locally or in or out of the Northwest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Our Values</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Trust & Reliability</h3>
                <p className="text-hm-grey">
                  We keep our promises and deliver on time, every time. Your trust is our most valuable asset.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Transparency</h3>
                <p className="text-hm-grey">
                  Fixed-cost pricing with no hidden charges. What we quote is what you pay.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Customer Care</h3>
                <p className="text-hm-grey">
                  Every customer receives personal attention and professional service tailored to their needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Local Expertise</h3>
                <p className="text-hm-grey">
                  Deep knowledge of the Northwest region combined with nationwide moving capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Our Credentials</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Fully licensed, insured, and certified for your peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-hm-red mr-3" />
                  <h3 className="text-xl font-semibold text-hm-black">Checkatrade Approved</h3>
                </div>
                <p className="text-hm-grey mb-4">
                  Verified Checkatrade trader with excellent customer reviews and background checks to ensure consistently high standards of service.
                </p>
                <div className="flex items-center text-yellow-500">
                  <span className="text-2xl font-bold text-hm-black mr-2">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-hm-grey">Rating</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-hm-red mr-3" />
                  <h3 className="text-xl font-semibold text-hm-black">Fully Insured & Licensed</h3>
                </div>
                <p className="text-hm-grey mb-4">
                  Comprehensive insurance coverage and all necessary licences to operate throughout the UK with complete legal compliance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-hm-grey">Public liability insurance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-hm-grey">Goods in transit coverage</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Where We Operate</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-hm-black mb-6">Our Service Area</h3>
              <p className="text-lg text-hm-grey mb-6">
                Based in Preston, Lancashire, we serve the entire Northwest region and beyond. Our local knowledge combined with nationwide capabilities means we can serve any area on the UK Mainland.
              </p>
              

            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">2000+</div>
                <div className="text-sm text-hm-grey">House Moves</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">250,000+</div>
                <div className="text-sm text-hm-grey">Miles Covered</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">300+</div>
                <div className="text-sm text-hm-grey">5* Reviews</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">200,000+</div>
                <div className="text-sm text-hm-grey">Boxes Shifted</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">50,000+</div>
                <div className="text-sm text-hm-grey">Furniture Items Moved</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-hm-red mb-1">60,000km</div>
                <div className="text-sm text-hm-grey">Carrying Furniture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Company Information</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Official company details and registration information
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-hm-black mb-4">Company Registration</h3>
                <div className="space-y-3 text-hm-grey">
                  <div>
                    <span className="font-medium text-hm-black">Company Name:</span>
                    <br />Hampson & Mealey Limited
                  </div>
                  <div>
                    <span className="font-medium text-hm-black">Company Number:</span>
                    <br />12475304
                  </div>
                  <div>
                    <span className="font-medium text-hm-black">VAT Number:</span>
                    <br />450 4401 34
                  </div>
                  <div>
                    <span className="font-medium text-hm-black">Registration:</span>
                    <br />Registered in England & Wales
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-hm-black mb-4">Business Addresses</h3>
                <div className="space-y-4 text-hm-grey">
                  <div>
                    <span className="font-medium text-hm-black">Operating Address:</span>
                    <br />Holmfield Industrial Estate,
                    <br />Blackpool Road,
                    <br />Kirkham, Lancashire, PR4 2RE
                  </div>
                  <div>
                    <span className="font-medium text-hm-black">Registered Address:</span>
                    <br />Unit 12 Guest House Farm,
                    <br />Runshaw Lane,
                    <br />Euxton, Chorley,
                    <br />Lancashire, PR7 6HD
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Your Free Quote</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a no-obligation quote with transparent, fixed-cost pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white" data-testid="button-get-quote-bottom">
                Get Your Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hm-black" asChild data-testid="button-call-bottom">
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
