import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Truck, Menu, Phone } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Moving Guide", href: "/moving-guide" },
    { name: "About", href: "/about" },
    { name: "Posts", href: "/posts" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-hm-black text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Company Logo and Name */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <img 
              src="/images/images_1754432963985.png" 
              alt="Hampson & Mealey Logo" 
              className="h-16 w-auto"
            />
            <div>
              <p className="text-sm text-gray-300">Fixed Cost Removals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-hm-red transition-colors ${
                  location === item.href ? "text-hm-red" : ""
                }`}
                data-testid={`link-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Numbers */}
          <div className="hidden md:flex flex-col text-right text-sm">
            <a
              href="tel:+441772283818"
              className="hover:text-hm-red transition-colors"
              data-testid="phone-preston"
            >
              01772 283 818
            </a>
            <a
              href="tel:+447508884834"
              className="hover:text-hm-red transition-colors"
              data-testid="phone-manchester"
            >
              07508 884 834
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-hm-black border-gray-700">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-hm-red transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-link-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-white">
                    <div className="font-medium mb-2">Contact Us</div>
                    <a
                      href="tel:+441772283818"
                      className="block hover:text-hm-red transition-colors mb-1"
                      data-testid="mobile-phone-preston"
                    >
                      01772 283 818
                    </a>
                    <a
                      href="tel:+447508884834"
                      className="block hover:text-hm-red transition-colors"
                      data-testid="mobile-phone-manchester"
                    >
                      07508 884 834
                    </a>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
