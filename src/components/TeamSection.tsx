const teamMembers = [
  {
    name: "Dzhem",
    role: "Дизайн и кодиране",
    color: "bg-gradient-ocean",
    icon: "💻",
  },
  {
    name: "Denislav",
    role: "Изображения",
    color: "bg-gradient-sand",
    icon: "📸",
  },
  {
    name: "İsa",
    role: "Текст",
    color: "bg-gradient-island",
    icon: "✍️",
  },
  {
    name: "Emir",
    role: "Проектиране",
    color: "bg-gradient-ocean",
    icon: "🎨",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            👥 Екипът зад проекта
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Нашият Екип
          </h2>
          <div className="h-1.5 w-24 bg-gradient-island mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
            Създадено с страст и отдаденост
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-card rounded-3xl p-8 shadow-medium border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-large hover:-translate-y-4">
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${member.color} rounded-t-3xl`}></div>
                
                {/* Icon circle with gradient */}
                <div className="relative mb-6">
                  <div className={`w-28 h-28 rounded-2xl ${member.color} mx-auto flex items-center justify-center text-white shadow-large transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <span className="text-5xl">{member.icon}</span>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-28 h-28 mx-auto rounded-2xl border-4 border-primary/20 transition-all duration-500 group-hover:scale-125 group-hover:border-primary/0"></div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {member.name}
                  </h3>
                  <div className="h-0.5 w-12 bg-gradient-island mx-auto rounded-full"></div>
                  <p className="text-muted-foreground font-medium text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;