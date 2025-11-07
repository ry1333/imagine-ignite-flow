import { Hero } from "@/components/Hero";
import { CreateSection } from "@/components/CreateSection";
import { FeedSection } from "@/components/FeedSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CreateSection />
      <FeedSection />
      <ChallengesSection />
      <Footer />
    </div>
  );
};

export default Index;
