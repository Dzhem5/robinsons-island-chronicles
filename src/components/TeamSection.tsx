const teamMembers = [
  {
    name: "Dzhem",
    role: "Дизайн и кодиране",
    color: "bg-primary",
  },
  {
    name: "Denislav",
    role: "Изображения",
    color: "bg-secondary",
  },
  {
    name: "İsa",
    role: "Текст",
    color: "bg-accent",
  },
  {
    name: "Emir",
    role: "Проектиране",
    color: "bg-primary",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 md:px-8 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
            Нашият Екип
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6 rounded-full"></div>
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
              <div className="relative bg-gradient-card rounded-3xl p-8 shadow-soft border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-large hover:-translate-y-3">
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${member.color} rounded-t-3xl`}></div>
                
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-2xl ${member.color} mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-medium transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {member.name[0]}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
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
