import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Frontend",
    technologies: ["Next.js 14", "React", "TailwindCSS", "Framer Motion"],
    color: "primary",
  },
  {
    category: "Blockchain",
    technologies: ["Polygon PoS", "Solidity", "thirdweb SDK"],
    color: "secondary",
  },
  {
    category: "Identity",
    technologies: ["Polygon ID", "DID Registry"],
    color: "accent",
  },
  {
    category: "ZKP Engine",
    technologies: ["Circom", "SnarkJS"],
    color: "primary",
  },
  {
    category: "AI Layer",
    technologies: ["ContextGNN", "Sentence Transformers"],
    color: "secondary",
  },
  {
    category: "APIs",
    technologies: ["Alchemy SDK", "OpenAI API"],
    color: "accent",
  },
  {
    category: "Storage & Encryption",
    technologies: ["IPFS", "Lit Protocol"],
    color: "primary",
  },
  {
    category: "Wallets",
    technologies: ["MetaMask", "WalletConnect", "Coinbase"],
    color: "secondary",
  },
];

export const TechStackSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with cutting-edge Web3 and AI technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${tech.color}/20 to-${tech.color}/5 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-card border border-primary/20 rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
