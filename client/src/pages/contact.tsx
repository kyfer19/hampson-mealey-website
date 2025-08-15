import QuoteForm from "@/components/forms/quote-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-hm-red text-white">Get In Touch</Badge>
            <h1 className="text-5xl font-bold text-hm-black mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-hm-grey mb-8">
              Ready to move? Get in touch for a free, no-obligation quote with fixed-cost pricing. We're here to make your move as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <div>
              <QuoteForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-hm-black mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-hm-red text-white p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hm-black">Phone Numbers</h4>
                      <p className="text-hm-grey">
                        Telephone: 
                        <a href="tel:+441772283818" className="text-hm-red hover:underline ml-1" data-testid="phone-telephone">
                          01772 283 818
                        </a>
                      </p>
                      <p className="text-hm-grey">
                        Mobile: 
                        <a href="tel:+447508884834" className="text-hm-red hover:underline ml-1" data-testid="phone-mobile">
                          07508 884 834
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-hm-red text-white p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hm-black">Email</h4>
                      <p className="text-hm-grey">
                        General enquiries:
                        <a href="mailto:hampsonmealey@outlook.com" className="text-hm-red hover:underline ml-1 block" data-testid="email-general">
                          hampsonmealey@outlook.com
                        </a>
                      </p>
                      <p className="text-hm-grey mt-2">
                        Kye:
                        <a href="mailto:Kye@hampsonmealey.co.uk" className="text-hm-red hover:underline ml-1 block" data-testid="email-kye">
                          Kye@hampsonmealey.co.uk
                        </a>
                      </p>
                      <p className="text-hm-grey mt-2">
                        Ellie:
                        <a href="mailto:Ellie@hampsonmealey.co.uk" className="text-hm-red hover:underline ml-1 block" data-testid="email-ellie">
                          Ellie@hampsonmealey.co.uk
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-hm-red text-white p-3 rounded-lg">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hm-black">WhatsApp</h4>
                      <p className="text-hm-grey">
                        Message us on WhatsApp: 
                        <a href="https://wa.me/447508884834" className="text-hm-red hover:underline ml-1" data-testid="whatsapp-link">
                          +44 7508 884 834
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-hm-red text-white p-3 rounded-lg">
                      <FaFacebook className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hm-black">Social Media</h4>
                      <p className="text-hm-grey">
                        Follow us on Facebook: 
                        <a href="https://www.facebook.com/share/164JZ7xz4u/" target="_blank" rel="noopener noreferrer" className="text-hm-red hover:underline ml-1" data-testid="facebook-link">
                          Hampson & Mealey
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-hm-red text-white p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-hm-black">Working Hours</h4>
                      <p className="text-hm-grey">Monday - Sunday: 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terms & Conditions Link */}
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-hm-grey text-hm-grey hover:bg-hm-grey hover:text-white">
                  <a href="/terms-conditions">View Terms & Conditions</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
