import { motion } from "framer-motion";
import { Shield, Fingerprint, Blocks, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Zero-Knowledge Proofs",
    description: "Verify credentials without revealing underlying data",
    color: "primary",
  },
  {
    icon: Fingerprint,
    title: "Privacy First",
    description: "Your identity, your control. Complete data sovereignty",
    color: "secondary",
  },
  {
    icon: Blocks,
    title: "Blockchain Verified",
    description: "Immutable and transparent credential verification",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description: "Real-time credential validation on-chain",
    color: "primary",
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Protocol Features
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for the decentralized future of identity verification
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
