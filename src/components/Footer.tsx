import { Linkedin, Instagram, MessageCircle } from "lucide-react";
import devanshLogo from "@/assets/devansh-logo.png";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-secondary text-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={footerBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Identity */}
          <div>
            <div className="mb-4 rounded-md bg-white px-5 my-2 w-max">
              <img src={devanshLogo} alt="Devansh Exports" className="h-20 w-auto object-contain p-1"/>
            </div>
            <p className="text-sm text-white/70"> Devansh Exports delivers premium granite and quartz across India since 2017, offering precise cutting, expert polishing, and quality stone solutions for architects, builders, and homeowners. </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Products", id: "products" },
                { label: "Machinery", id: "machinery" },
                { label: "Director", id: "director" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}> <button onClick={() => scrollToSection(link.id)} className="text-sm text-white hover:text-highlight transition-colors" > {link.label} </button> </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Our Products</h3>
            <ul className="space-y-2">
              <li> <button onClick={() => scrollToSection("products")} className="text-sm text-white hover:text-highlight transition-colors" > Granite Products </button> </li>
              <li> <button onClick={() => scrollToSection("products")} className="text-sm text-white hover:text-highlight transition-colors" > Quartz Products </button> </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-white">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors" aria-label="LinkedIn" >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors" aria-label="Instagram" >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-colors" aria-label="WhatsApp" >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p> <a href="mailto:sales@devanshexports.com" className="hover:underline"> sales@devanshexports.com </a> </p>
              <p> <a href="tel:+917799884427" className="hover:underline"> +91 7799884427 </a> </p>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-white/70">
            Copyright 2025 © <span className="text-highlight">Devansh Exports</span> All Rights Reserved. | Website developed by{" "}
            <a href="https://dt7.agency" target="_blank" rel="noopener noreferrer" className="hover:underline text-highlight"> DT7Agency </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
