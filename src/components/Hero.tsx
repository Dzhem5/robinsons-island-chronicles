const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center text-white animate-fade-in-up max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Животът на Робинзон Крузо
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 font-light opacity-95 tracking-wide">
            на самотния остров
          </h2>
          <div className="h-1 w-24 bg-white/60 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 font-light">
            Една одисея на оцеляването и преоткриването
          </p>
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
