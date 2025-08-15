import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, MapPin, Truck, Package, Home as HomeIcon, ArrowRight, Clock, CheckCircle, Video, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Our Moving Services</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Professional removal services across the Northwest with fixed-cost pricing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <HomeIcon className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hm-black mb-2">House Moves</h3>
                <p className="text-hm-grey mb-4">Complete house removals with fixed-cost pricing. No hidden charges, no surprises.</p>
                <Button variant="outline" asChild>
                  <Link href="/services/local-moving">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Truck className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hm-black mb-2">Long Distance</h3>
                <p className="text-hm-grey mb-4">Moving in or out of the Northwest. Professional long-distance specialists.</p>
                <Button variant="outline" asChild>
                  <Link href="/services/long-distance">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Package className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hm-black mb-2">Packing Services</h3>
                <p className="text-hm-grey mb-4">Professional packing and reusable materials to protect your belongings.</p>
                <Button variant="outline" asChild>
                  <Link href="/services/packing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Moving Guide Teaser */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/professional-packing.jpg"
                alt="Professional furniture packing with protective blankets in Hampson & Mealey warehouse"
                className="rounded-xl shadow-lg w-full h-auto max-w-full"
                style={{ 
                  aspectRatio: 'auto',
                  filter: 'brightness(1.1) contrast(1.05) saturate(1.1) blur(0.3px)'
                }}
              />
            </div>
            <div>
              <Badge className="mb-4 bg-hm-red text-white">New Guide</Badge>
              <h2 className="text-4xl font-bold text-hm-black mb-4">Moving House Step-by-Step</h2>
              <p className="text-xl text-hm-grey mb-6">
                Our comprehensive guide makes your move as smooth as possible, from initial quote to settling in.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-hm-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-hm-black">Initial Quote</h3>
                    <p className="text-hm-grey text-sm">Free home visit and comprehensive fixed-cost quote</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-hm-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-hm-black">Planning & Scheduling</h3>
                    <p className="text-hm-grey text-sm">Move coordination and timeline confirmation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-hm-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-hm-black">Packing & Preparation</h3>
                    <p className="text-hm-grey text-sm">Professional packing materials and pre-move preparation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-hm-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-hm-black">Moving Day</h3>
                    <p className="text-hm-grey text-sm">Professional loading, transport, and safe delivery</p>
                  </div>
                </div>
              </div>
              <Button className="bg-hm-red hover:bg-hm-red-bright text-white" asChild>
                <Link href="/moving-guide">
                  View Complete Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Video Quote Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-green-400"></div>
              <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-green-300"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-green-200"></div>
            </div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 text-white rounded-full p-6 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Video className="w-8 h-8" />
                    <Smartphone className="w-8 h-8" />
                  </div>
                </div>
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-hm-black mb-6 leading-tight">
                Too busy for a home visit?
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                Send us a video through WhatsApp now for a <span className="text-green-600 font-bold">same-day quote</span>
              </p>
              
              {/* Features */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Send a video of house and contents</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Same-day response</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Fixed-cost quote</span>
                </div>
              </div>
              
              {/* WhatsApp Button */}
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open('https://wa.me/447508884834?text=Hi%20Hampson%20%26%20Mealey%2C%20I%27d%20like%20to%20send%20a%20video%20for%20a%20same-day%20quote', '_blank')}
                data-testid="whatsapp-video-quote"
              >
                <FaWhatsapp className="w-6 h-6 mr-3" />
                Send a video now
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Just film a quick walkthrough of your rooms and items to move
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Why Choose Hampson & Mealey?</h2>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Based in Preston, Lancashire, we've built our reputation on honest service and transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hm-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hm-black mb-2">Fixed-Cost Promise</h3>
              <p className="text-hm-grey">
                The quote we give is exactly what you pay. No hidden fees, no last-minute surprises.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hm-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hm-black mb-2">Professional Team</h3>
              <p className="text-hm-grey">
                Experienced professionals who treat your belongings with the same care as their own.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hm-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hm-black mb-2">Northwest Specialists</h3>
              <p className="text-hm-grey">
                Deep knowledge of Preston, Lancashire and throughout the Northwest region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Promise */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-hm-black mb-4">We Protect Your Belongings And Your Home</h2>
            <p className="text-xl text-hm-grey max-w-3xl mx-auto">
              All our customers' homes are protected as standard during the moving process. We provide mattress protectors, furniture blankets, and carpet protection at no charge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🛏️</div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Mattress Protectors</h3>
                <p className="text-hm-grey">Keep your mattresses clean and protected during transport.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🛋️</div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Furniture Blankets</h3>
                <p className="text-hm-grey">Protective blankets to prevent scratches and damage to furniture.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold text-hm-black mb-2">Carpet Protection</h3>
                <p className="text-hm-grey">Floor protection to keep your carpets and flooring pristine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
