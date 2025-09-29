interface ContentSectionProps {
  title: string;
  subtitle: string;
  content: string;
  imagePosition: "left" | "right";
  index: number;
}

const ContentSection = ({ title, subtitle, content, imagePosition, index }: ContentSectionProps) => {
  const isLeft = imagePosition === "left";
  
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
          {/* Image placeholder */}
          <div className={`w-full lg:w-1/2 ${isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
            <div className="relative aspect-[16/11] bg-gradient-card rounded-3xl overflow-hidden shadow-medium border border-border/50 hover:shadow-large transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/30">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    Място за изображение {index}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`w-full lg:w-1/2 animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary leading-tight">
                  {title}
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-semibold text-accent/90 mb-6">
                  {subtitle}
                </h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line font-light">
                  {content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
