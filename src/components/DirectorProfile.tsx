import directorImage from "@/assets/director-profile.jpg";

const DirectorProfile = () => {
  return (
    <section id="director" className="section-container bg-muted/30">
      <div className="animate-fade-in">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4 text-center">
          About <span className="text-highlight">Leadership</span>
        </h2>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Image Column - 4/12 */}
          <div className="flex justify-center lg:col-span-4">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-50" />
              <img src={directorImage} alt="Chandolu Manikanta - Director" className="relative rounded-2xl object-cover border-4 border-primary shadow-strong" />
            </div>
          </div>

          {/* Content Column - 8/12 */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="font-display text-3xl font-bold text-secondary">Chandolu Manikanta</h3>
              <p className="text-lg text-primary font-semibold mt-2">Director, Devansh Exports</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-lg text-muted-foreground leading-relaxed">
                "At Devansh Exports, we believe that quality is not just a goal, but a commitment we make with every
                stone we process. Our vision is to deliver excellence through innovation, precision, and unwavering
                dedication to customer satisfaction. We take pride in our state-of-the-art manufacturing capabilities
                and our team's expertise in transforming raw materials into masterpieces."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <p className="text-3xl font-bold text-primary font-display">2017</p>
                <p className="text-sm text-muted-foreground mt-1">Established</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <p className="text-3xl font-bold text-primary font-display">30+</p>
                <p className="text-sm text-muted-foreground mt-1">Product Varieties</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <p className="text-3xl font-bold text-primary font-display">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorProfile;
