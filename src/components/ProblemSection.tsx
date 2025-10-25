import { motion } from "framer-motion";
import { AlertTriangle, Lock, Database, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    text: "Every online verification request exposes sensitive user data",
  },
  {
    icon: Lock,
    text: "Institutions spend millions yearly on slow, manual background checks",
  },
  {
    icon: Database,
    text: "Centralized databases invite hacks, leaks, and identity theft (422M+ records breached in 2022)",
  },
  {
    icon: Clock,
    text: "Cross-border degree and document verifications take weeks or are impossible",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Problem with Identity Validation Today
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-destructive/30 to-destructive/10 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-card/80 backdrop-blur-xl border border-destructive/20 rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-destructive/20 rounded-lg blur-md" />
                    <div className="relative bg-destructive/10 p-3 rounded-lg border border-destructive/30">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.text}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            We're building a world where verification doesn't cost privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
