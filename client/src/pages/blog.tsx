import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Home, Package, Truck, Shield } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Moving Tips for a Stress-Free House Move",
    excerpt: "Moving house doesn't have to be overwhelming. Follow our expert tips from 20+ years in the removals industry to make your move smooth and stress-free.",
    date: "15th January 2024",
    readTime: "5 min read",
    category: "Moving Tips",
    slug: "essential-moving-tips",
    content: `Moving house is one of life's most stressful events, but with proper planning and the right removals company, it doesn't have to be. Here are our top 10 tips from over 20 years in the removals industry:

**1. Start Planning Early**
Begin planning your move at least 6-8 weeks in advance. This gives you time to research removal companies, book dates, and organize your belongings without rushing.

**2. Declutter Before You Pack**
Use your move as an opportunity to declutter. Donate, sell, or dispose of items you no longer need. This reduces moving costs and makes unpacking easier.

**3. Book a Removal Company Early**
Peak moving times (summer months and end of month) book up quickly. Secure your preferred moving date by booking early with a reputable company.

**4. Get a Fixed-Cost Quote**
Avoid surprise charges by choosing a company that offers fixed-cost pricing. At Hampson & Mealey, we believe in transparent pricing with no hidden fees.

**5. Pack Room by Room**
Pack one room at a time and clearly label boxes with their contents and destination room. This makes unpacking much more efficient.

**6. Pack an Essentials Box**
Pack a box of essentials for your first day: toiletries, medications, change of clothes, phone chargers, and important documents.

**7. Take Photos of Valuable Items**
Document valuable items with photos for insurance purposes before packing them.

**8. Confirm Details 48 Hours Before**
Call your removal company 48 hours before moving day to confirm arrival times and any special requirements.

**9. Prepare Your Properties**
Ensure both your old and new properties are ready: clear pathways, protect floors if needed, and arrange parking for the removal truck.

**10. Stay Flexible and Calm**
Moving day rarely goes exactly to plan. Stay flexible, keep important phone numbers handy, and remember that any minor delays are usually quickly resolved.

With these tips and a professional removal team, your move can be smooth and stress-free. Contact Hampson & Mealey for your fixed-cost removal quote today.`
  },
  {
    id: 2,
    title: "The Complete Guide to Packing Fragile Items Safely",
    excerpt: "Learn professional packing techniques to ensure your delicate belongings arrive at your new home in perfect condition.",
    date: "8th January 2024",
    readTime: "7 min read",
    category: "Packing Guide",
    slug: "packing-fragile-items",
    content: `Protecting fragile items during a move requires the right materials, techniques, and care. Here's our complete guide to packing delicate belongings:

**Essential Packing Materials**
- Bubble wrap (various sizes)
- Packing paper (newspaper can stain)
- Strong cardboard boxes
- Packing tape
- Foam sheets
- Wardrobe boxes for hanging items

**China and Glassware**
Wrap each piece individually in bubble wrap or packing paper. Place heavier items at the bottom of boxes and lighter items on top. Fill empty spaces with bubble wrap to prevent movement. Never overfill boxes - they should feel solid but not too heavy to lift safely.

**Electronics and Appliances**
If possible, use original packaging. If not available, wrap in anti-static bubble wrap and use plenty of padding. Remove batteries from remote controls and small devices. Take photos of cable connections before disconnecting.

**Artwork and Mirrors**
Use picture boxes or create protection with cardboard. Tape an 'X' across glass surfaces to prevent shattering if broken. Wrap frames in bubble wrap and use corner protectors.

**Professional Packing Services**
For valuable or extremely fragile items, consider professional packing services. At Hampson & Mealey, our team has extensive experience packing delicate items and can provide specialized materials and techniques.

Remember: when in doubt, use more padding rather than less. It's better to overprotect than to risk damage to irreplaceable items.`
  },
  {
    id: 3,
    title: "Moving House Timeline: When to Start Each Task",
    excerpt: "A comprehensive week-by-week timeline to help you organize your move efficiently and avoid last-minute stress.",
    date: "2nd January 2024",
    readTime: "6 min read",
    category: "Moving Guide",
    slug: "moving-timeline",
    content: `Proper timing is crucial for a successful house move. Here's our recommended timeline:

**8 Weeks Before Moving**
- Start researching removal companies
- Get multiple quotes
- Begin decluttering
- Notify your current landlord (if renting)

**6 Weeks Before Moving**
- Book your removal company
- Confirm moving date
- Start using up frozen and perishable food
- Begin collecting packing materials

**4 Weeks Before Moving**
- Notify utility companies (gas, electricity, water, internet)
- Update your address with banks, insurance, employer
- Arrange mail redirection with Royal Mail
- Book time off work for moving day

**2 Weeks Before Moving**
- Confirm details with removal company
- Start packing non-essential items
- Use up cleaning supplies
- Arrange cleaning services if needed

**1 Week Before Moving**
- Pack everything except essentials
- Prepare an essentials box
- Confirm arrival times
- Check weather forecast

**Moving Day**
- Be ready before the removal team arrives
- Do a final walkthrough
- Keep important documents with you
- Check inventory before signing

**After Moving**
- Unpack essentials first
- Register with local GP and dentist
- Update driver's license and vehicle registration
- Register to vote at new address

Following this timeline helps ensure nothing is forgotten and reduces moving day stress. Our team at Hampson & Mealey can help adjust this timeline based on your specific requirements.`
  },
  {
    id: 4,
    title: "Storage Solutions: When and How to Use Self-Storage During Your Move",
    excerpt: "Sometimes you need extra space during a move. Learn when storage solutions can help and how to choose the right option.",
    date: "28th December 2023",
    readTime: "4 min read",
    category: "Storage Tips",
    slug: "storage-solutions",
    content: `Storage solutions can be invaluable during complex moves. Here's when and how to use them effectively:

**When You Need Storage**
- Chain moves where completion dates don't align
- Downsizing to a smaller property
- Renovating your new home before moving in
- International moves with extended timelines
- Temporary accommodation between homes

**Types of Storage Available**
At Hampson & Mealey, we offer secure containerized storage that's both wind and watertight. Your belongings are loaded directly into secure containers, eliminating multiple handling.

**What to Store**
- Seasonal items (Christmas decorations, garden furniture)
- Items that won't fit in your new home immediately
- Valuable items during renovations
- Furniture for rooms not yet ready

**Storage Tips**
- Create an inventory of stored items
- Pack storage items in clearly labeled boxes
- Store frequently needed items near the front
- Use dust covers for furniture
- Avoid storing perishables or hazardous materials

**Cost Considerations**
Factor storage costs into your moving budget. Sometimes short-term storage is more cost-effective than rushing into a larger property or expensive temporary accommodation.

Our storage solutions are designed to integrate seamlessly with your move, providing peace of mind that your belongings are safe and secure until you're ready for them.`
  },
  {
    id: 5,
    title: "Commercial Relocation: Minimizing Business Downtime During Office Moves",
    excerpt: "Moving your business doesn't have to mean lost productivity. Our guide to efficient commercial relocations.",
    date: "22nd December 2023",
    readTime: "8 min read",
    category: "Commercial Moving",
    slug: "commercial-relocation",
    content: `Business relocations require careful planning to minimize downtime and maintain productivity. Here's our approach:

**Pre-Move Planning**
Start planning 3-6 months ahead for large offices. Create a detailed timeline working backwards from your target move date. Consider staff communication and training needs.

**IT and Technology**
Plan IT infrastructure first. Coordinate with your IT department or provider to ensure servers, networks, and phone systems are ready at the new location. Test everything before the move.

**Staff Communication**
Keep employees informed throughout the process. Provide packing guidelines, new office layouts, and clear timelines. Consider staff representatives for different departments.

**Phased Moves**
For large businesses, consider phased moves. Move departments over several weekends to maintain some business operations. Archive storage can house non-essential items during transition.

**Essential Services First**
Prioritize getting essential operations running first: main server room, reception area, key management offices. Secondary areas can be organized later.

**Weekend and Evening Moves**
Most commercial moves happen outside business hours. Plan for Friday evening packing and weekend moving to resume operations Monday morning.

**Professional Project Management**
Commercial moves benefit from dedicated project management. Our team coordinates with your facilities manager to ensure seamless execution.

**Post-Move Setup**
Plan workspace setup and IT restoration carefully. Have key personnel available on the first day to address any issues quickly.

With proper planning and an experienced commercial removal team, business relocations can be completed with minimal disruption to your operations.`
  },
  {
    id: 6,
    title: "Removals Insurance: What's Covered and What You Need to Know",
    excerpt: "Understanding insurance coverage for your move is crucial. Learn about different types of protection available.",
    date: "18th December 2023",
    readTime: "5 min read",
    category: "Insurance Guide",
    slug: "removals-insurance",
    content: `Insurance coverage is an important consideration for any move. Here's what you need to know:

**Standard Carrier Liability**
All professional removal companies provide basic carrier liability coverage. This typically covers a limited amount per item and per pound of weight, but may not cover the full replacement value of your belongings.

**Full Value Protection**
This comprehensive coverage ensures your belongings are repaired, replaced, or compensated at full replacement value if damaged or lost during the move. While more expensive, it provides peace of mind for valuable items.

**Homeowner's/Renter's Insurance**
Check your existing home insurance policy. Some policies provide limited coverage for belongings during a move, but this often excludes damage caused by the moving process itself.

**High-Value Items**
Items like jewelry, art, antiques, and collectibles may require separate coverage or professional appraisal before moving. Discuss these items specifically with your removal company.

**What's Typically Excluded**
- Items packed by the customer (unless using professional packing services)
- Damage from natural disasters
- Items left in dressers or other furniture
- Perishable items
- Personal documents (always carry these yourself)

**Documentation Requirements**
Take photos of valuable items before packing. Keep receipts and appraisals for high-value belongings. Create a detailed inventory with your removal company.

**At Hampson & Mealey**
We provide comprehensive insurance options and will discuss coverage levels that suit your specific needs and budget. Our goal is ensuring your belongings are protected throughout the moving process.

Always read insurance terms carefully and ask questions about coverage limits, deductibles, and claim procedures before your move.`
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hm-grey-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-hm-red text-white">Moving Insights</Badge>
            <h1 className="text-5xl font-bold text-hm-black mb-6">
              Moving & Removals Blog
            </h1>
            <p className="text-xl text-hm-grey mb-8">
              Expert advice, tips, and insights from Lancashire's trusted removal specialists. 
              Over 20 years of experience helping families and businesses move with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-hm-black mb-8">Featured Article</h2>
            <Card className="overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-hm-grey-light p-8 lg:p-12 flex items-center">
                  <Home className="w-16 h-16 text-hm-red" />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="border-hm-red text-hm-red">
                      {blogPosts[0].category}
                    </Badge>
                    <div className="flex items-center text-hm-grey text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center text-hm-grey text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-hm-black mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-hm-grey mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link href={`/posts/${blogPosts[0].slug}`}>
                    <Button className="bg-hm-red hover:bg-hm-red-bright text-white" data-testid={`button-read-${blogPosts[0].id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-hm-grey-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-hm-black mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-hm-red text-hm-red">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-hm-black mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-hm-grey mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-hm-grey mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link href={`/posts/${post.slug}`}>
                      <Button variant="outline" className="w-full border-hm-red text-hm-red hover:bg-hm-red hover:text-white" data-testid={`button-read-${post.id}`}>
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-hm-black mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Home className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-hm-black">Moving Tips</h3>
                <p className="text-sm text-hm-grey">Essential advice for stress-free moves</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Package className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-hm-black">Packing Guide</h3>
                <p className="text-sm text-hm-grey">Professional packing techniques</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Truck className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-hm-black">Commercial Moving</h3>
                <p className="text-sm text-hm-grey">Business relocation insights</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Shield className="w-12 h-12 text-hm-red mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-hm-black">Insurance Guide</h3>
                <p className="text-sm text-hm-grey">Protecting your belongings</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hm-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Professional Moving Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your fixed-cost removal quote today. No hidden fees, no surprises - just professional, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-hm-red hover:bg-hm-red-bright text-white" data-testid="button-get-quote-blog">
                Get Your Free Quote
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-hm-black" asChild data-testid="button-call-blog">
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