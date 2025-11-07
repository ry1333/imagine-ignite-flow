import { Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const FeedSection = () => {
  const mockPosts = [
    { user: "DJ_Nova", track: "Deep House Vibes", likes: "2.4K", comments: 342 },
    { user: "BeatsBy_K", track: "Tech House Drop", likes: "1.8K", comments: 189 },
    { user: "SynthWave", track: "Trance Journey", likes: "3.1K", comments: 421 },
  ];

  return (
    <section className="py-24 px-6 bg-card/20 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your <span className="bg-gradient-primary bg-clip-text text-transparent">Social</span> Feed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scroll through fire mixes, drop likes, join remix challenges, and build your following.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-4">
          {mockPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border p-6 space-y-4 hover:border-primary/30 transition-all"
            >
              {/* User header */}
              <div className="flex items-center gap-3">
                <Avatar className="border-2 border-primary/50">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                    {post.user.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{post.user}</div>
                  <div className="text-sm text-muted-foreground">2h ago</div>
                </div>
              </div>

              {/* Waveform preview */}
              <div className="bg-background rounded-lg p-4">
                <div className="flex gap-0.5 h-20 items-end justify-between">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-primary rounded-t-sm"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: 0.5 + Math.random() * 0.5,
                      }}
                    />
                  ))}
                </div>
                <div className="mt-3 font-medium">{post.track}</div>
              </div>

              {/* Engagement buttons */}
              <div className="flex items-center justify-between pt-2">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center space-y-3">
            <div className="inline-flex p-4 bg-primary/10 rounded-full">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Like & Save</h3>
            <p className="text-sm text-muted-foreground">Show love to tracks and save your favorites.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex p-4 bg-primary/10 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Remix & Duet</h3>
            <p className="text-sm text-muted-foreground">Create reply mixes tied to other posts.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="inline-flex p-4 bg-primary/10 rounded-full">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Engage</h3>
            <p className="text-sm text-muted-foreground">Comment and connect with creators.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
