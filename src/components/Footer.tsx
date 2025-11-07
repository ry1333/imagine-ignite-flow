import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/20 py-12 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <img src={logo} alt="MixNode" className="w-12 h-12" />
            <p className="text-sm text-muted-foreground">
              Create fire mixes in minutes. The TikTok for house music.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Features</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Challenges</li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Twitter</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Instagram</li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 MixNode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
