import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-background">
      <div className="grid lg:grid-cols-2 gap-12 items-stretch">
        {/* Image Column */}
        <div className="order-2 lg:order-1 animate-fade-in flex">
          <img src={aboutImage} alt="Devansh Exports Facility" className="rounded-lg shadow-strong w-full h-full object-cover" />
        </div>

        {/* Content Column */}
        <div className="order-1 lg:order-2 space-y-8 animate-slide-up flex flex-col justify-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">
              About <span className="text-highlight">Devansh Exports</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Established in 2017, Devansh Exports has emerged as a trusted name in the granite and quartz
              manufacturing industry. We specialize in precision cutting, expert polishing, and custom solutions,
              serving architects, construction firms, and residential clients across India and international markets.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality craftsmanship and innovative manufacturing techniques ensures that every stone
              we deliver meets the highest standards of excellence.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid gap-6">
            <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-wrap md:flex-nowrap items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-secondary mb-2">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To become a trusted global name in the granite industry by delivering exceptional quality,
                      innovative finishes, and reliable services that exceed customer expectations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-wrap md:flex-nowrap items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-secondary mb-2">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide premium-quality granites through advanced manufacturing techniques, ensuring precision in
                      every cut and polish while maintaining sustainable practices and customer satisfaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
