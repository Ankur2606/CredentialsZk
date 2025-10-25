import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const solutions = [
  "Prove eligibility without revealing personal details",
  "One-click verification for employers, universities, or fintech platforms",
  "ZKPs + blockchain ledger guarantees authenticity",
  "Fully self-sovereign credentials — owned and controlled by users",
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,hsl(var(--background))_100%)]" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The Trustless Credential Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decentralized, privacy-centric system to verify personal or institutional credentials instantly and securely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-card/80 backdrop-blur-xl border border-primary/20 rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">
                    {solution}
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
