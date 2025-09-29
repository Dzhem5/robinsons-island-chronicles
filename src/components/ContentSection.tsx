interface ContentSectionProps {
  title: string;
  subtitle: string;
  content: string;
  imagePosition: "left" | "right";
  index: number;
  backgroundColor?: string;
}

const ContentSection = ({ title, subtitle, content, imagePosition, index, backgroundColor = "bg-background" }: ContentSectionProps) => {
  const isLeft = imagePosition === "left";
  
  return (
    <section className={`py-24 px-6 md:px-8 lg:px-12 ${backgroundColor}`}>
      <div className="container mx-auto max-w-7xl">
        <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}>
          {/* Image placeholder */}
          <div className={`w-full lg:w-1/2 ${isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
            <div className="relative aspect-[16/11] bg-gradient-card rounded-3xl overflow-hidden shadow-large border-2 border-border/50 hover:shadow-large hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/80 to-muted/40">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20">
                    <svg 
                      className="w-12 h-12 text-primary" 
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
                  <p className="text-muted-foreground font-semibold text-lg">
                    Изображение {index}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className={`w-full lg:w-1/2 animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-3xl p-10 md:p-12 shadow-medium hover:shadow-large transition-all duration-300 border border-border/50">
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    Глава {index}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary leading-tight">
                    {title}
                  </h2>
                  <div className="h-1.5 w-20 bg-gradient-island rounded-full mb-6"></div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
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
      </div>
    </section>
  );
};

export default ContentSection;