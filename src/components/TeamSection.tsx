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
    <section className="py-20 px-4 md:px-6 bg-gradient-sand">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary animate-fade-in-up">
          Нашият Екип
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Създадено с страст и отдаденост
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border overflow-hidden transition-all duration-500 hover:shadow-[var(--shadow-medium)] hover:-translate-y-2">
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 left-0 w-full h-1 ${member.color} opacity-80`}></div>
                
                {/* Icon circle */}
                <div className={`w-20 h-20 rounded-full ${member.color} mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  {member.name[0]}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-center mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-center text-muted-foreground font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
