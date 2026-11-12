
import { Card, CardContent } from '@/components/ui/card';
import { Users, Trophy, Star, Zap } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Happy Clients" },
    { icon: <Trophy className="h-8 w-8" />, value: "250+", label: "Projects Delivered" },
    { icon: <Star className="h-8 w-8" />, value: "99%", label: "Client Satisfaction" },
    { icon: <Zap className="h-8 w-8" />, value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group glass-effect border-white/10 text-center hover-lift transition-all duration-500 hover:border-neon-blue/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
