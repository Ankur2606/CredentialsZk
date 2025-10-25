import { motion } from "framer-motion";
import { Shield, Lock, Key } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center gap-6"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-primary/30 p-4 rounded-2xl">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-secondary/30 p-4 rounded-2xl">
              <Lock className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/50 backdrop-blur-xl border border-accent/30 p-4 rounded-2xl">
              <Key className="w-8 h-8 text-accent" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
        >
          CredentialZK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto"
        >
          Zero-Knowledge Credential Verification Protocol
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
        >
          Secure, private, and verifiable credentials powered by blockchain technology.
          Connect your wallet to access the decentralized credential ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-3xl opacity-50 animate-pulse-glow" />
            <div className="relative">
              {/* WalletConnect component will be placed here */}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow" style={{ animationDelay: "0.5s" }} />
              <span>Private</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow" style={{ animationDelay: "1s" }} />
              <span>Decentralized</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
