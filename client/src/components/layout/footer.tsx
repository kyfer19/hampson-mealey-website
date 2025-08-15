import { Link } from "wouter";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hm-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/images_1754432963985.png" 
                alt="Hampson & Mealey Logo" 
                className="h-10 w-auto"
              />
              <div>
                <p className="text-sm text-gray-300">Fixed Cost Removals</p>
              </div>
            </div>


          </div>

          {/* Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-hm-red transition-colors" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services/local-moving" className="hover:text-hm-red transition-colors" data-testid="footer-link-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/moving-guide" className="hover:text-hm-red transition-colors" data-testid="footer-link-moving-guide">
                  Moving Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hm-red transition-colors" data-testid="footer-link-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hm-red transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/local-moving" className="hover:text-hm-red transition-colors" data-testid="footer-link-fixed-cost-moves">
                  Fixed-Cost House Moves
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hm-red transition-colors" data-testid="footer-link-piano-moves">
                  Piano Moves
                </Link>
              </li>
              <li>
                <Link href="/services/long-distance" className="hover:text-hm-red transition-colors" data-testid="footer-link-long-distance">
                  Long-Distance Moves
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hm-red transition-colors" data-testid="footer-link-storage">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="hover:text-hm-red transition-colors" data-testid="footer-link-packing-materials">
                  Reusable Packing Materials
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="hover:text-hm-red transition-colors" data-testid="footer-link-packing-service">
                  Professional Packing Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hm-red transition-colors" data-testid="footer-link-dismantling">
                  Dismantling & Reassembly
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-medium">Telephone</div>
                <a
                  href="tel:+441772283818"
                  className="hover:text-hm-red transition-colors"
                  data-testid="footer-phone-telephone"
                >
                  01772 283 818
                </a>
              </div>
              <div>
                <div className="font-medium">Mobile</div>
                <a
                  href="tel:+447508884834"
                  className="hover:text-hm-red transition-colors"
                  data-testid="footer-phone-mobile"
                >
                  07508 884 834
                </a>
              </div>
              <div>
                <div className="font-medium">Email</div>
                <a
                  href="mailto:hampsonmealey@outlook.com"
                  className="hover:text-hm-red transition-colors"
                  data-testid="footer-email-general"
                >
                  hampsonmealey@outlook.com
                </a>
                <a
                  href="mailto:Kye@hampsonmealey.co.uk"
                  className="hover:text-hm-red transition-colors block"
                  data-testid="footer-email-kye"
                >
                  Kye@hampsonmealey.co.uk
                </a>
                <a
                  href="mailto:Ellie@hampsonmealey.co.uk"
                  className="hover:text-hm-red transition-colors block"
                  data-testid="footer-email-ellie"
                >
                  Ellie@hampsonmealey.co.uk
                </a>
              </div>
              <div>
                <div className="font-medium">Working Hours</div>
                <div className="text-sm">Mon - Sun: 8am - 6pm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-300">
              <p>© 2023 Hampson & Mealey Limited. All rights reserved.</p>
              <p>VAT no. 450 4401 34 | Company no. 12475304 | Registered in England & Wales</p>
            </div>
            <div className="md:text-right">
              <div className="flex md:justify-end space-x-4 text-sm text-gray-300">
                <a href="#" className="hover:text-hm-red transition-colors" data-testid="footer-link-terms">
                  Terms
                </a>
                <a href="#" className="hover:text-hm-red transition-colors" data-testid="footer-link-privacy">
                  Privacy
                </a>
                <a href="#" className="hover:text-hm-red transition-colors" data-testid="footer-link-complaints">
                  Complaints Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
