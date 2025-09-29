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
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
          {/* Image placeholder */}
          <div className={`w-full md:w-1/2 ${isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
            <div className="relative aspect-[4/3] bg-gradient-sand rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg 
                    className="w-20 h-20 mx-auto mb-4 text-muted-foreground opacity-40" 
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
                  <p className="text-muted-foreground text-sm">
                    Място за изображение {index}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`w-full md:w-1/2 animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
                {title}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
                {subtitle}
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
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
