import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, Shield, Clock, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Packing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hm-red text-white">Packing Service</Badge>
              <h1 className="text-5xl font-bold text-hm-black mb-6">
                Professional Packing & Moving
              </h1>
              <p className="text-xl text-hm-grey mb-8">
                Take the pain out of packing. We'll arrive with enough time to pay full attention to your belongings. We carefully move every item from your home, to our vehicle, and into your new home.
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
                src="/images/FB_IMG_1754409336076_1754430953744.jpg"
                alt="Professional furniture packing with protective blankets and boxes"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Bundles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Packing Materials for Hire</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              For a flat fee of £75, we provide reusable packing materials required for packaging and moving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-hm-red text-white p-8 rounded-xl text-center mb-8">
                <div className="text-3xl font-bold mb-2">Flat Fee</div>
                <div className="text-xl">Reusable Packing Materials</div>
                <div className="text-sm opacity-90 mt-2">No figuring out how many boxes you need</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">All Box Sizes Included</h3>
                    <p className="text-hm-grey">Small, medium, large, and extra-large boxes for all your items.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Protection Materials</h3>
                    <p className="text-hm-grey">Bubble wrap, packing paper, and tissue for fragile items.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Specialty Boxes</h3>
                    <p className="text-hm-grey">Wardrobe boxes, picture boxes, and book boxes included.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-hm-black">Tape & Labels</h3>
                    <p className="text-hm-grey">High-quality packing tape and labels for organisation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/FB_IMG_1754409215026_1754430886859.jpg"
                alt="Variety of packing materials including boxes, bubble wrap, and protective materials"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ aspectRatio: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Professional Packing Service</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Focus on settling into your new space while we do the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Package className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Expert Packing</h3>
                <p className="text-hm-grey">Professional packing techniques to ensure your belongings arrive safely.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Time Efficient</h3>
                <p className="text-hm-grey">We arrive with enough time to give proper attention to each item.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-hm-red mb-4" />
                <h3 className="text-xl font-semibold text-hm-black mb-3">Careful Handling</h3>
                <p className="text-hm-grey">Special attention to fragile and valuable items with appropriate protection.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packing Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Flexible Packing Options</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Choose the level of service that works best for your move
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-hm-black mb-4">Self-Pack Service</h3>
                <div className="text-3xl font-bold text-hm-red mb-4">£75</div>
                <p className="text-hm-grey mb-6">Perfect for those who prefer to pack themselves but need quality materials.</p>
                <ul className="space-y-2 text-sm text-hm-grey">
                  <li>• Unlimited packing materials</li>
                  <li>• All box sizes included</li>
                  <li>• Bubble wrap & protection</li>
                  <li>• Delivery to your door</li>
                  <li>• Collection after move</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-hm-red">
              <CardContent className="pt-6">
                <Badge className="mb-4 bg-hm-red text-white">Most Popular</Badge>
                <h3 className="text-2xl font-semibold text-hm-black mb-4">Partial Pack Service</h3>
                <div className="text-3xl font-bold text-hm-red mb-4">Quote</div>
                <p className="text-hm-grey mb-6">We pack fragile and valuable items while you handle the rest.</p>
                <ul className="space-y-2 text-sm text-hm-grey">
                  <li>• Professional packing of fragiles</li>
                  <li>• China, glassware & artwork</li>
                  <li>• Electronics & appliances</li>
                  <li>• Materials included</li>
                  <li>• Insurance coverage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-hm-black mb-4">Full Pack Service</h3>
                <div className="text-3xl font-bold text-hm-red mb-4">Quote</div>
                <p className="text-hm-grey mb-6">Complete packing service - we handle everything so you can focus on your move.</p>
                <ul className="space-y-2 text-sm text-hm-grey">
                  <li>• Everything packed professionally</li>
                  <li>• Clothes, books & personal items</li>
                  <li>• Kitchen & bathroom items</li>
                  <li>• Unpacking service available</li>
                  <li>• Maximum convenience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">What Our Customers Say</h2>
            <p className="text-xl text-hm-grey">Real feedback about our packing services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-hm-grey mb-4 italic">
                  "Extremely helpful and friendly. Arrived on time and was very careful and clearly an expert at packing and storing. Can't praise him enough!"
                </p>
                <div className="text-sm text-hm-grey">Moving boxes - Verified Checkatrade Review</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-hm-grey mb-4 italic">
                  "They were efficient in getting the items moved out and all furniture was handled with care. I was really impressed that they could disassemble some of our furniture with ease."
                </p>
                <div className="text-sm text-hm-grey">Professional packing - Verified Checkatrade Review</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take the Stress Out of Packing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our flexible packing options and focus on what matters most - your new beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white">
                Get Packing Quote
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
