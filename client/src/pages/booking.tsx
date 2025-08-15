import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock, Shield, CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Booking form for customers with confirmed quotes
export default function Booking() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quoteReference: "",
    movingDate: "",
    movingTime: "",
    additionalServices: [] as string[],
    specialInstructions: "",
    insuranceOption: "basic",
    signature: ""
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Booking failed');
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Confirmed!",
        description: "Your move has been successfully booked. We'll send confirmation details shortly.",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        quoteReference: "",
        movingDate: "",
        movingTime: "",
        additionalServices: [],
        specialInstructions: "",
        insuranceOption: "basic",
        signature: ""
      });
    },
    onError: () => {
      toast({
        title: "Booking Failed",
        description: "Please check your details and try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookingMutation.mutate(formData);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  return (
    <div className="min-h-screen bg-hm-grey-light py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-hm-red text-white">Secure Booking</Badge>
          <h1 className="text-4xl font-bold text-hm-black mb-4">Confirm Your Move</h1>
          <p className="text-xl text-hm-grey">
            Complete your booking details to secure your moving date
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarCheck className="mr-2 h-5 w-5 text-hm-red" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Quote Reference *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.quoteReference}
                        onChange={(e) => setFormData({...formData, quoteReference: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Moving Date *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.movingDate}
                        onChange={(e) => setFormData({...formData, movingDate: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-hm-black mb-2">
                        Preferred Time
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                        value={formData.movingTime}
                        onChange={(e) => setFormData({...formData, movingTime: e.target.value})}
                      >
                        <option value="">Select time</option>
                        <option value="early-morning">Early Morning (7-9 AM)</option>
                        <option value="morning">Morning (9-12 PM)</option>
                        <option value="afternoon">Afternoon (12-5 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-hm-black mb-3">
                      Insurance Coverage
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="insurance"
                          value="basic"
                          checked={formData.insuranceOption === "basic"}
                          onChange={(e) => setFormData({...formData, insuranceOption: e.target.value})}
                          className="mr-2"
                        />
                        <span>Basic Coverage (£10,000) - Included</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="insurance"
                          value="enhanced"
                          checked={formData.insuranceOption === "enhanced"}
                          onChange={(e) => setFormData({...formData, insuranceOption: e.target.value})}
                          className="mr-2"
                        />
                        <span>Enhanced Coverage (£25,000) - Additional £25</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="insurance"
                          value="premium"
                          checked={formData.insuranceOption === "premium"}
                          onChange={(e) => setFormData({...formData, insuranceOption: e.target.value})}
                          className="mr-2"
                        />
                        <span>Premium Coverage (£50,000) - Additional £50</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-hm-black mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                      rows={4}
                      value={formData.specialInstructions}
                      onChange={(e) => setFormData({...formData, specialInstructions: e.target.value})}
                      placeholder="Any special requirements or instructions..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-hm-black mb-2">
                      Digital Signature *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Type your full name to sign"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hm-red"
                      value={formData.signature}
                      onChange={(e) => setFormData({...formData, signature: e.target.value})}
                    />
                    <p className="text-xs text-hm-grey mt-1">
                      By typing your name, you agree to our Terms & Conditions
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-hm-red hover:bg-hm-red-bright text-white"
                    disabled={bookingMutation.isPending}
                  >
                    {bookingMutation.isPending ? "Processing..." : "Confirm Booking"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-hm-red" />
                  Your Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fixed-cost pricing
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Professional team
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Fully insured service
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Quality guarantee
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center text-sm text-hm-grey mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Response time: Within 24 hours
                  </div>
                </div>

                <div className="bg-hm-grey-light p-4 rounded-lg">
                  <p className="text-sm text-hm-black font-medium">Need assistance?</p>
                  <p className="text-sm text-hm-grey">Call us at 01772 283 818</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}