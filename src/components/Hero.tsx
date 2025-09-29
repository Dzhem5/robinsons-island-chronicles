import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-island.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const firstSection = document.querySelector('section:nth-of-type(2)');
    firstSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center text-white animate-fade-in-up max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              📚 Училищен Проект
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Животът на Робинзон Крузо
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 font-light opacity-95 tracking-wide">
            на самотния остров
          </h2>
          <div className="h-1 w-24 bg-white/60 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 font-light mb-12">
            Една одисея на оцеляването и преоткриването
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            onClick={scrollToContent}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-large transition-all duration-300 hover:scale-105 font-semibold"
          >
            Разгледай историята →
          </Button>
          
          <div className="mt-16 animate-float">
            <svg 
              className="w-10 h-10 mx-auto opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
