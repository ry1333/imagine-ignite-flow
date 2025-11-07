import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-radial opacity-50 animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-radial opacity-30 animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-float">
            <img src={logo} alt="MixNode" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          {/* Hero text */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Create
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Fire Mixes </span>
            in Minutes
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The TikTok for house music. Generate 30-40s EDM clips with AI, share to a social feed, and level up your DJ skills.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow-cyan transition-all text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Mixes
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">30s</div>
              <div className="text-sm text-muted-foreground">Quick Creation</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">Social</div>
              <div className="text-sm text-muted-foreground">Feed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
