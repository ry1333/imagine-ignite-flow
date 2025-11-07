import { Music2, Wand2, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CreateSection = () => {
  const features = [
    {
      icon: <Music2 className="h-8 w-8" />,
      title: "Loop Packs",
      description: "Curated drums, bass, and leads that auto-align to your BPM and key.",
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI Generation",
      description: "Describe your vibe and let AI create a unique 30-40s house mix instantly.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Templates",
      description: "Choose from Intro→Build→Drop structures or quick-mix presets.",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Create in <span className="bg-gradient-primary bg-clip-text text-transparent">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complex DAWs. No music theory needed. Just pick your style and drop that fire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all p-8 space-y-4 group hover:shadow-glow-cyan"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Visual mockup */}
        <div className="mt-16 relative">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-glow-primary">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-sm text-primary font-medium">1. Choose Style</div>
                  <div className="flex gap-2 flex-wrap">
                    {["House", "Tech House", "Trance", "EDM Pop"].map((style) => (
                      <div
                        key={style}
                        className="px-4 py-2 bg-muted rounded-full text-sm hover:bg-primary/20 cursor-pointer transition-colors"
                      >
                        {style}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-primary font-medium">2. Pick Template</div>
                  <div className="space-y-2">
                    <div className="p-3 bg-muted rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                      Intro → Build → Drop
                    </div>
                    <div className="p-3 bg-muted rounded-lg hover:bg-primary/10 cursor-pointer transition-colors">
                      Quick Mix
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Waveform visualization mockup */}
                <div className="bg-background rounded-lg p-6 space-y-4">
                  <div className="flex gap-1 h-32 items-end justify-between">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-primary rounded-t-sm"
                        style={{
                          height: `${Math.random() * 100}%`,
                          opacity: 0.6 + Math.random() * 0.4,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>0:00</span>
                    <span>0:35</span>
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-glow-cyan">
                    <Music2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
