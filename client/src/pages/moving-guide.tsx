import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, FileText, Package, Truck, Archive, Heart, Phone } from "lucide-react";
import { Link } from "wouter";

export default function MovingGuide() {
  return (
    <div className="min-h-screen">




      {/* Step-by-Step Guide */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-hm-black mb-6">Your Complete Moving Guide</h1>
            <p className="text-xl text-hm-grey max-w-2xl mx-auto">
              Moving house is stressful enough, our job is to help reduce that stress!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="max-w-3xl mx-auto">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-hm-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <Calculator className="w-8 h-8 text-hm-red" />
                </div>
                <h3 className="text-3xl font-bold text-hm-black mb-4">Quote</h3>
                <p className="text-lg text-hm-grey mb-6">
                  So you've agreed a sale/purchase. Whilst a typical sale takes around 16 weeks in total, it's never too early to start getting some quotes. We can come out and provide a free home visit - we're not pushy and there's no obligation, but viewing your property in person let's us see & discuss all the requirements, so that we can provide a fixed-cost quote.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Detailed assessment of all belongings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Fixed-cost quote with no hidden fees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Professional advice on timing and logistics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="max-w-3xl mx-auto">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-hm-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <FileText className="w-8 h-8 text-hm-red" />
                </div>
                <h3 className="text-3xl font-bold text-hm-black mb-4">Exchange & Completion</h3>
                <p className="text-lg text-hm-grey mb-6">
                  If your conveyancing solicitors are good, you'll start to get an accurate timeframe for completion around one month prior. If your conveyancing solicitors are really good, you'll exchange contracts around one month prior to the completion date, which will then be contractually determined. This is the gold standard, and every house buyer should demand this level of organisation.
                </p>
                <p className="text-lg text-hm-grey mb-6">
                  At the other end of the spectrum, some solicitors will ask, or even expect you to agree to exchange and complete contracts on the same day. We do not recommend this! You could temporarily be made homeless, and have no plan for what to do with your family or your belongings at 5pm on a Friday, after solicitors have gone home for the weekend. At minimum, you should exchange contracts one week for completion.
                </p>
                

                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Demand good solicitor organisation and planning</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Exchange contracts at least one week before completion</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Avoid same-day exchange and completion arrangements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="max-w-3xl mx-auto">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-hm-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <Package className="w-8 h-8 text-hm-red" />
                </div>
                <h3 className="text-3xl font-bold text-hm-black mb-4">Packing Materials</h3>
                <p className="text-lg text-hm-grey mb-6">
                  If you have opted for some of our packing materials, we can deliver them in the weeks up to the moving date, and can flexibly work around your needs. Whilst we can source any packaging product available, we typically supply boxes (cardboard or our reusable lidded boxes), tape, bubble wrap, shrink wrap, and carpet stick wrap.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Flexible delivery timing to suit your schedule</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Choice of cardboard or reusable lidded boxes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Complete range of protective materials available</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Professional-grade tape, bubble wrap, and shrink wrap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="max-w-3xl mx-auto">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-hm-red text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">4</div>
                  <Truck className="w-8 h-8 text-hm-red" />
                </div>
                <h3 className="text-3xl font-bold text-hm-black mb-4">Moving Day</h3>
                <div className="text-lg text-hm-grey mb-6 space-y-4">
                  <p>
                    If you have opted for a packing service the day(s) before, things are fairly straightforward. Make sure you have removed everything you will need overnight/plan to take yourself, and label everything that should remain in the house. Once we begin, we will typically pack each room in an hour or less, so there will be no time to go through things once we've started. Other than that, just make sure everything is in a state that is ready to be packed (no pots in the sink, etc.).
                  </p>
                  <p>
                    On Moving day, we will typically begin at 9am, and start loading with solid items of furniture and appliances. We therefore require appliances be disconnected in advance of our arrival. These appliances & furniture then provide a solid base for further loading. After that, we will load boxes, and finally bags and fragile items. We will do this in cycles until these items run out, and then we will usually finish with upholstery, mattresses, etc.
                  </p>
                  <p>
                    Although every move is different, we will always try and by loaded by 1pm. If you have purchased carpet stick wrap, this should be out down before we arrive as we may not have time to do it ourselves, and the same is true at the new property (from experience, no other options for carpet protection are appropriate, and we do not take shoes off). Once loaded, the team will head off for lunch, and meet you at the new property once you have received keys, usually around 2/3pm. Because our quotes are fixed cost, we don't charge waiting time during this period, so there's no need to panic about delays and extra charges. Finally, we will unload everything into the desired rooms, and complete any reassembly agreed.
                  </p>
                  <p>
                    From experience, if the important rooms in the house begin to get too cluttered with boxes and other items, it's best to make use of the rooms that aren't immediately going to be used (dining room, garage, etc.). This way, you can set up the bedroom(s) & living room and deal with non-urgent stuff another day.
                  </p>
                  <p>
                    If you have opted for our crate rental, there's no rush! We will arrange collection for our plastic crates once you have finished unpacking.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">9am start with furniture and appliances loading</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Fixed-cost pricing means no waiting time charges</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Professional unloading into designated rooms</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-hm-grey">Reassembly service included where agreed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Move?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow our step-by-step guide and let us handle the heavy lifting. Get your fixed-cost quote today.
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
