import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        productInterest: "",
        message: "",
      });

      toast({
        title: "Success!",
        description: "Your enquiry has been received. We'll contact you within 24-48 hours.",
      });

      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-container bg-background">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Get in Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Share your requirements and we'll respond within 24-48 hours
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6 animate-slide-up">
          <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0"> <MapPin className="w-5 h-5 text-primary" /> </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">Address</h3>
              <p className="text-sm text-muted-foreground"> <a href="https://maps.app.goo.gl/ZfyRgdWy2JPvAe9L7" className="hover:underline" target="_blank" rel="noopener noreferrer"> Devansh Exports, 29-295, ground floor, kothapet, vinukonda. palnadu dist. AP - 522647. </a> </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0"> <Phone className="w-5 h-5 text-primary" /> </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground"> <a href="tel:+917799884427" className="hover:underline">+91 7799884427</a> </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0"> <Mail className="w-5 h-5 text-primary" /> </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">Email</h3>
              <p className="text-sm text-muted-foreground"> <a href="mailto:sales@devanshexports.com" className="hover:underline"> Sales@devanshexports.com </a> </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0"> <Clock className="w-5 h-5 text-primary" /> </div>
            <div>
              <h3 className="font-semibold text-secondary mb-1">Business Hours</h3>
              <p className="text-sm text-muted-foreground"> Monday - Friday: 10:00 AM - 7:00 PM <br /> Saturday & Sunday: Closed </p>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="lg:col-span-2 animate-fade-in">
          <div className="bg-white rounded-lg border border-border shadow-soft p-8">
            <h3 className="font-display text-2xl font-bold text-secondary mb-2">Send Your Enquiry</h3>
            <p className="text-sm text-muted-foreground mb-6"> Fill out the form below and we'll get back to you as soon as possible. </p>
            {showSuccess && (
              <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary"> Thank you! Your enquiry has been received. We'll contact you within 24-48 hours. </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5"> Full Name <span className="text-destructive">*</span> </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className={errors.name ? "border-destructive" : ""} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5"> Email Address <span className="text-destructive">*</span> </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5"> Phone Number <span className="text-destructive">*</span> </label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className={errors.phone ? "border-destructive" : ""} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary mb-1.5"> Company/Organization </label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name (optional)" />
                </div>
                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-secondary mb-1.5"> Product Interest </label>
                  <select id="productInterest" name="productInterest" value={formData.productInterest} onChange={handleChange} className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" >
                    <option value="">Select Product Type</option>
                    <option value="general">General Enquiry</option>
                    <option value="granite">Granite Order</option>
                    <option value="quartz">Quartz Order</option>
                    <option value="custom">Custom Project</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5"> Message <span className="text-destructive">*</span> </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={5} className={errors.message ? "border-destructive" : ""} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}> {isSubmitting ? "Sending..." : "Submit Enquiry"} </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
