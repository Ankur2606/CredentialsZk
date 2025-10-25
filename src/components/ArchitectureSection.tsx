import { motion } from "framer-motion";
import { Wallet, Code, Server, Blocks, Shield, Database } from "lucide-react";

const layers = [
  {
    icon: Wallet,
    title: "User Layer",
    description: "Web3 Wallets (MetaMask, WalletConnect)",
    color: "primary",
  },
  {
    icon: Code,
    title: "Frontend Layer",
    description: "React + Next.js 14 + TailwindCSS UI",
    color: "secondary",
  },
  {
    icon: Server,
    title: "Backend Layer",
    description: "thirdweb SDK, Alchemy for node access",
    color: "accent",
  },
  {
    icon: Blocks,
    title: "Blockchain Layer",
    description: "Polygon PoS smart contracts + DID registry",
    color: "primary",
  },
  {
    icon: Shield,
    title: "ZKP Engine",
    description: "Circom for proof generation",
    color: "secondary",
  },
  {
    icon: Database,
    title: "Storage",
    description: "Encrypted IPFS via Lit Protocol and Pinata",
    color: "accent",
  },
];

export const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Architecture
          </h2>
          <p className="text-xl text-muted-foreground">
            A multi-layer privacy stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${layer.color}/30 to-${layer.color}/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-${layer.color}/20 rounded-xl blur-md`} />
                    <div className={`relative bg-${layer.color}/10 p-4 rounded-xl border border-${layer.color}/30`}>
                      <layer.icon className={`w-8 h-8 text-${layer.color}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {layer.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground bg-card/50 backdrop-blur-xl border border-primary/20 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent border-2 border-card"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span>6-Layer Privacy Stack</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
