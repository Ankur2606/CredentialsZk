import { ThirdwebProvider } from "thirdweb/react";
import { HeroSection } from "@/components/HeroSection";
import { WalletConnect } from "@/components/WalletConnect";
import { FeatureCards } from "@/components/FeatureCards";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { TechStackSection } from "@/components/TechStackSection";
import { RevenueSection } from "@/components/RevenueSection";
import { ImpactSection } from "@/components/ImpactSection";

const Index = () => {
  return (
    <ThirdwebProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CredentialZK
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#problem" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Problem
                </a>
                <a href="#solution" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Solution
                </a>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#architecture" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Architecture
                </a>
              </div>
              <div className="scale-90 md:scale-100">
                <WalletConnect />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <FeatureCards />
          <ArchitectureSection />
          <TechStackSection />
          <RevenueSection />
          <ImpactSection />

          {/* CTA Section */}
          <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
            
            <div className="relative max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Ready to Join the Future?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Connect your wallet and start experiencing the power of zero-knowledge credential verification.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="relative group px-8 py-4 rounded-xl font-semibold overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative text-background">Get Started</span>
                </button>
                <button className="px-8 py-4 rounded-xl font-semibold border-2 border-primary/30 hover:border-primary bg-card/50 backdrop-blur-xl transition-all duration-300">
                  Read Documentation
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
            <p>© 2025 CredentialZK Protocol. Built on Web3 technology.</p>
          </div>
        </footer>
      </div>
    </ThirdwebProvider>
  );
};

export default Index;
