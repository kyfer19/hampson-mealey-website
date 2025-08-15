import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "fixed-cost-moves",
    title: "Fixed-Cost House Moves",
    description: "Transparent pricing with no hidden charges. The quote we give is exactly what you pay.",
    features: [
      "Free home visit for accurate quote",
      "No surprise fees or hidden costs",
      "Professional team and equipment"
    ],
    image: "/images/FB_IMG_1754409289850_1754430902580.jpg",
    alt: "Hampson & Mealey branded truck ready for fixed-cost house move",
    href: "/services/local-moving"
  },
  {
    id: "piano-moves",
    title: "Piano Moves",
    description: "Specialist piano moving service with proper equipment and trained professionals.",
    features: [
      "Specialist piano moving equipment",
      "Trained piano handling team",
      "Full insurance coverage"
    ],
    image: "/images/FB_IMG_1754409336076_1754430953744.jpg",
    alt: "Professional piano moving with protective equipment",
    href: "/services/piano-moves"
  },
  {
    id: "long-distance",
    title: "Long-Distance Moves",
    description: "Moving in or out of the Northwest with experienced long-distance specialists.",
    features: [
      "Preston, Lancashire to anywhere",
      "Experienced long-distance team",
      "Secure overnight storage if needed"
    ],
    image: "/images/FB_IMG_1754409139628_1754430986527.jpg",
    alt: "Hampson & Mealey long-distance removal truck",
    href: "/services/long-distance"
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description: "Secure storage facilities for when your move timeline doesn't perfectly align.",
    features: [
      "Climate-controlled facilities",
      "Short and long-term options",
      "Secure monitored storage"
    ],
    image: "/images/FB_IMG_1754409271635_1754431026305.jpg",
    alt: "Hampson & Mealey secure storage facility",
    href: "/services/storage"
  },
  {
    id: "packing-materials",
    title: "Reusable Packing Materials",
    description: "Flat fee for all the packing materials you need - we deliver and collect afterwards.",
    features: [
      "All box sizes included",
      "Bubble wrap and protection materials",
      "Collection after your move"
    ],
    image: "/images/FB_IMG_1754409215026_1754430886859.jpg",
    alt: "Range of reusable packing materials and boxes",
    href: "/services/packing-materials"
  },
  {
    id: "packing-service",
    title: "Professional Packing Service",
    description: "Let our team pack your belongings with care and attention while you focus on other things.",
    features: [
      "Expert packing techniques",
      "Fragile item specialists",
      "Unpacking service available"
    ],
    image: "/images/FB_IMG_1754409098384_1754431079601.jpg",
    alt: "Professional packing service with protective materials",
    href: "/services/packing-service"
  },
  {
    id: "dismantling-assembly",
    title: "Dismantling & Reassembly",
    description: "Professional dismantling of furniture and careful reassembly at your new location.",
    features: [
      "Furniture dismantling specialists",
      "Safe reassembly guarantee",
      "All tools and expertise provided"
    ],
    image: "/images/FB_IMG_1754409354835_1754430972658.jpg",
    alt: "Professional furniture dismantling and assembly service",
    href: "/services/dismantling-assembly"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-white" data-testid="section-services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hm-black mb-4">Our Removal Services</h2>
          <p className="text-xl text-hm-grey max-w-2xl mx-auto">
            Professional removal services from Preston, Lancashire throughout the Northwest
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="bg-hm-grey-light hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover"
                    data-testid={`img-service-${service.id}`}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-hm-black mb-3">
                  {service.title}
                </CardTitle>
                <p className="text-hm-grey mb-4">{service.description}</p>
                <ul className="text-sm text-hm-grey space-y-1 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <Link href={service.href} data-testid={`link-service-${service.id}`}>
                  <Button variant="ghost" className="text-hm-red hover:text-hm-red-bright p-0">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
