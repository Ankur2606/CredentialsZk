import { motion } from "framer-motion";
import { Shield, Fingerprint, Blocks, Zap, Users, Brain } from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Decentralized Identity (DID) Layer",
    description: "Verifiable credentials linked to your crypto wallet with W3C DID standards",
    tech: "Polygon ID, thirdweb SDK, Alchemy RPC",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Proofs (ZKP)",
    description: "Generate proofs like 'has a verified degree' or 'is over 18' without exposing sensitive data",
    tech: "Circom, Polygon ID zk-SNARKs, Groth16 verifier",
    color: "secondary",
  },
  {
    icon: Blocks,
    title: "Smart Contract Infrastructure",
    description: "Credential issuance, revocation, and verification executed on-chain with transparent audit trails",
    tech: "Solidity, Hardhat, thirdweb Deployer",
    color: "accent",
  },
  {
    icon: Brain,
    title: "AI/NLP Skill Tagging",
    description: "Extract and classify skills from credentials for smarter, semantic searches",
    tech: "ContextGNN (PyTorch Geometric), FAISS, Hugging Face",
    color: "primary",
  },
  {
    icon: Users,
    title: "Web3 Interface",
    description: "Connect MetaMask → Issue or verify instantly → View credential proofs",
    tech: "React, Next.js 14, TailwindCSS, thirdweb Connect",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Verify in <3 seconds instead of 3-5 days with 95% cost reduction for enterprises",
    tech: "Real-time on-chain validation",
    color: "accent",
  },
];

export const FeatureCards = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-muted-foreground text-lg">
            A multi-layer privacy stack for trustless credential verification
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${feature.color} to-${feature.color}/50 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-primary/50">
                <div className="mb-4">
                  <div className="relative inline-block">
                    <div className={`absolute inset-0 bg-${feature.color}/20 rounded-xl blur-md`} />
                    <div className={`relative bg-${feature.color}/10 p-3 rounded-xl border border-${feature.color}/30`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-muted-foreground/60 font-mono">
                    Tech: {feature.tech}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
