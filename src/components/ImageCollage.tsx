import collage1 from "@/assets/collage-1.jpg";
import collage2 from "@/assets/collage-2.jpg";
import collage3 from "@/assets/collage-3.jpg";
import collage4 from "@/assets/collage-4.jpg";
import collage5 from "@/assets/collage-5.jpg";

const ImageCollage = () => {
  const images = [
    { src: collage1, alt: "Робинзон Крузо - Корица на книгата" },
    { src: collage2, alt: "Робинзон Крузо с чадър" },
    { src: collage3, alt: "Робинзон Крузо срещу канибали" },
    { src: collage4, alt: "Робинзон Крузо на брега" },
    { src: collage5, alt: "Робинзон Крузо с животни" },
  ];

  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Галерия на приключенията
          </h2>
          <div className="h-1.5 w-24 bg-gradient-island rounded-full mx-auto mb-6"></div>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Илюстрации от епичното пътуване на Робинзон Крузо
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
          {/* Large image - spans 2 rows */}
          <div className="md:col-span-2 md:row-span-2 animate-fade-in group max-h-[600px]">
            <div className="relative p-2 h-full">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary animate-border-flow opacity-50"></div>
              <div className="relative h-full rounded-2xl overflow-hidden shadow-large hover:shadow-large transition-all duration-500">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Smaller images */}
          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="animate-fade-in group h-[285px]"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative p-2 h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-primary to-accent animate-border-flow opacity-50"></div>
                <div className="relative h-full rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stack Layout */}
        <div className="md:hidden space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary animate-border-flow opacity-50"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-large hover:shadow-large transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
