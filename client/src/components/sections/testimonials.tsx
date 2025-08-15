import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    category: "Full house move",
    review: "Brilliant company, very professional, excellent communication and good value for money.",
  },
  {
    id: 2,
    category: "Fast, fair & prompt",
    review: "The team made this process a breeze. They accepted and assessed the job easily via photos, arrived promptly and worked efficiently. Friendly, fast and fair pricing. Couldn't ask for more!",
  },
  {
    id: 3,
    category: "House removal",
    review: "Professional, friendly and value for money! They worked out of hours to fit me in and make sure I didn't miss my handover date. Cannot recommend them enough!",
  },
  {
    id: 4,
    category: "Moving boxes",
    review: "Extremely helpful and friendly. Arrived on time and was very careful and clearly an expert at packing and storing. Can't praise him enough!",
  },
  {
    id: 5,
    category: "Highly recommend",
    review: "Kye and Ralph were very professional and friendly. Excellent service and everything arrived as collected. Good value for money and I would highly recommend them.",
  },
  {
    id: 6,
    category: "Excellent removals",
    review: "This firm was exceptional in removal of furniture from my brothers house. The men were very patient and went the extra mile. I would recommend them.",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hm-black mb-4">What Our Customers Say</h2>
          <p className="text-xl text-hm-grey">Trusted by hundreds of satisfied customers across the Northwest</p>
        </div>

        {/* Sliding Testimonials */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-white border-0 shadow-lg mx-4" data-testid={`testimonial-${testimonial.id}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center mb-6">
                        <div className="flex text-yellow-500 mr-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-current" />
                          ))}
                        </div>
                        <img
                          src="https://hampsonmealey.co.uk/images/reviewlogo-1.webp"
                          alt="Checkatrade verified review"
                          className="h-8"
                        />
                      </div>
                      <h4 className="font-bold text-xl text-hm-black mb-4 text-center">{testimonial.category}</h4>
                      <p className="text-hm-grey text-lg leading-relaxed text-center mb-6">"{testimonial.review}"</p>
                      <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full">
                          <span className="text-sm font-medium text-hm-grey">Verified Checkatrade Review</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-hm-red' : 'bg-gray-300'
                }`}
                data-testid={`slide-indicator-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
