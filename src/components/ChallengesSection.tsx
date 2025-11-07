import { Trophy, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ChallengesSection = () => {
  const challenges = [
    {
      title: "#DeepHouseWk45",
      participants: "2.3K",
      prize: "Featured",
      tag: "Live Now",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "#TechHouseDrop",
      participants: "1.8K",
      prize: "Pro Badge",
      tag: "3 Days Left",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "#RemixChallenge",
      participants: "3.1K",
      prize: "Pack Access",
      tag: "Trending",
      gradient: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-20" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Weekly <span className="bg-gradient-primary bg-clip-text text-transparent">Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete in themed challenges, climb leaderboards, and earn badges while leveling up your skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all p-6 space-y-4 group relative overflow-hidden"
            >
              {/* Tag badge */}
              <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground border-0">
                {challenge.tag}
              </Badge>

              {/* Gradient accent */}
              <div className={`h-1 w-full bg-gradient-to-r ${challenge.gradient} rounded-full mb-4`} />

              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{challenge.title}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{challenge.participants} joined</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Win: {challenge.prize}</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Join Challenge
              </Button>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-gradient-primary rounded-full shadow-glow-cyan">
              <Trophy className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Earn Badges</h3>
            <p className="text-muted-foreground">
              Complete challenges to unlock creator badges and perks.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-gradient-primary rounded-full shadow-glow-cyan">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Weekly Themes</h3>
            <p className="text-muted-foreground">
              Fresh challenges every week with new styles and themes.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-gradient-primary rounded-full shadow-glow-cyan">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Leaderboards</h3>
            <p className="text-muted-foreground">
              Climb the ranks and get featured on the discover page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
