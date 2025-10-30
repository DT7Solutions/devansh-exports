import { Linkedin, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import devanshLogo from "@/assets/devansh-logo.png";
import footerBg from "@/assets/footer-bg.jpg";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
  </svg>
);

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5">
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
              <a href="https://www.instagram.com/devanshexports/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] hover:opacity-90 transition-opacity" aria-label="Instagram" >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://wa.me/917799884427" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe57] transition-colors inline-block no-underline" aria-label="WhatsApp" >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p> <a href="mailto:devanshexports14@gmail.com" className="flex items-center gap-2 hover:underline"> <Mail className="w-4 h-4 text-white" /> devanshexports14@gmail.com </a> </p>
              <p> <a href="tel:+917799884427" className="flex items-center gap-2 hover:underline"> <Phone className="w-4 h-4 text-white" /> +91 7799884427 </a> </p>
              <p> <a href="https://maps.app.goo.gl/ZfyRgdWy2JPvAe9L7" className="flex items-start gap-2 hover:underline"> <MapPin className="w-6 h-6 text-white" /> 29-295, kothapet, vinukonda. palnadu dist. AP - 522647 </a> </p>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-4 border-t border-border/20 text-center">
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
