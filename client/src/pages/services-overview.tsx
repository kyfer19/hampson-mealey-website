import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

// Use your real company images from public directory
const fixedCostImage = "/images/fixed-cost.jpg";
const pianoMoveImage = "/images/piano.jpg";
const longDistanceImage = "/images/long-distance.jpg";
const storageImage = "/images/storage.jpg";
const packingImage = "/images/packing.jpg";
const professionalPackingImage = "/images/professional-packing.jpg";
const dismantlingImage = "/images/dismantling.jpg";
const reusablePackingImage = "/images/reusable-packing.jpg";
const commercialImage = "/images/commercial.jpg";

const services = [
  {
    id: "fixed-cost-moves",
    title: "Fixed-Cost House Moves",
    description: "Transparent pricing with no hidden charges. The quote we give is exactly what you pay - no surprises on moving day.",
    features: [
      "Free home visit for accurate quote",
      "No surprise fees or hidden costs",
      "Professional team and equipment included",
      "Full insurance coverage"
    ],
    image: fixedCostImage,
    alt: "Hampson & Mealey removal truck positioned at residential houses for fixed-cost house move service",

    href: "/services/local-moving"
  },
  {
    id: "piano-moves",
    title: "Piano Moves",
    description: "Specialist upright piano moving service with proper equipment and trained professionals. Safe and secure transport for your upright piano.",
    features: [
      "Specialist piano moving equipment",
      "Trained piano handling team",
      "Full insurance coverage",
      "Upright piano specialists"
    ],
    image: pianoMoveImage,
    alt: "Professional piano moving with protective equipment",

    href: "/contact"
  },
  {
    id: "long-distance",
    title: "Long-Distance Moves",
    description: "Moving in or out of the Northwest with experienced long-distance specialists. From Preston, Lancashire to anywhere in the UK.",
    features: [
      "Any move in or out of the Northwest",
      "Experienced long-distance team",
      "Secure overnight storage if needed",
      "Professional care throughout"
    ],
    image: longDistanceImage,
    alt: "Long-distance moves from Preston to Scotland - Welcome to Scotland sign with Hampson & Mealey branding",

    href: "/services/long-distance"
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description: "Secure storage facilities for when your move timeline doesn't perfectly align. Wind/water tight protection.",
    features: [
      "Wind/water tight facilities",
      "Short and long-term options",
      "Secure storage",
      "Easy access when you need it"
    ],
    image: storageImage,
    alt: "Secure storage containers with professional access and climate-controlled facilities",

    href: "/contact"
  },
  {
    id: "packing-materials",
    title: "Reusable Packing Materials",
    description: "Flat fee for all the packing materials you need - we deliver and collect afterwards. No waste, no guesswork.",
    features: [
      "All box sizes included",
      "Additional protective materials included",
      "Collection after your move",
      "Environmentally friendly reuse"
    ],
    image: reusablePackingImage,
    alt: "Reusable plastic boxes and crates for eco-friendly moving with Hampson & Mealey branding",

    href: "/services/packing"
  },
  {
    id: "packing-service",
    title: "Professional Packing Service",
    description: "Let our team pack your belongings with care and attention while you focus on other moving tasks. Expert techniques for fragile items.",
    features: [
      "Expert packing techniques",
      "Fragile item specialists",
      "Unpacking service available",
      "Time-saving professional approach"
    ],
    image: professionalPackingImage,
    alt: "Professional packing service protecting furniture and belongings in residential living room",

    href: "/services/packing"
  },
  {
    id: "dismantling-assembly",
    title: "Dismantling & Reassembly",
    description: "Professional dismantling of furniture and careful reassembly at your new location. We bring all tools and expertise needed.",
    features: [
      "Furniture dismantling specialists",
      "All tools and expertise provided",
      "Beds, wardrobes, and complex furniture"
    ],
    image: dismantlingImage,
    alt: "Professional furniture assembly specialist assembling metal bed frame in modern residential setting",

    href: "/contact"
  },
  {
    id: "commercial-moves",
    title: "Commercial & Office Moves",
    description: "Specialized commercial moving service for businesses, offices, and retail locations. Minimal downtime with professional project management.",
    features: [
      "Exhibitions",
      "Office moves",
      "Two-person delivery",
      "Stage & production haulage"
    ],
    image: commercialImage,
    alt: "Hampson & Mealey removal truck positioned at modern commercial office building for professional business moves",

    href: "/contact"
  }
];

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Services We Provide</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md">
                <div className="grid md:grid-cols-2 min-h-[320px]">
                  {/* Image */}
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className={`w-full h-full hover:scale-105 transition-transform duration-300 ${
                        service.id === 'reusable-packing' 
                          ? 'object-contain object-center' 
                          : 'object-cover object-center'
                      }`}
                      style={{ 
                        imageRendering: 'auto'
                      }}
                      data-testid={`img-service-${service.id}`}
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-hm-black leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-hm-grey mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-hm-black">
                            <CheckCircle className="w-5 h-5 text-hm-red mr-3 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-hm-red hover:bg-hm-red/90 text-white w-full group">
                      <Link href={service.href} className="flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hm-black mb-4">Why Choose Hampson & Mealey</h2>
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
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hm-black mb-2">Professional Team</h3>
              <p className="text-hm-grey">
                Experienced professionals who treat your belongings with the same care as their own.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-hm-red text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-hm-black mb-2">Northwest Specialists</h3>
              <p className="text-hm-grey">
                Deep knowledge of Preston, Lancashire and throughout the Northwest region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-hm-black">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-hm-grey">
            Contact us today for a free, no-obligation quote. We'll visit your home and provide 
            an accurate fixed-cost estimate.
          </p>
          <div className="flex justify-center">
            <Button className="bg-hm-red hover:bg-hm-red/90 text-white" size="lg">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}