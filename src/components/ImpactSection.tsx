import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

const impacts = [
  {
    icon: Shield,
    title: "Privacy Protection",
    metrics: [
      "100% user-controlled credential sharing",
      "0 centralized data breaches possible",
    ],
    color: "primary",
  },
  {
    icon: Zap,
    title: "Efficiency",
    metrics: [
      "Verify in <3 seconds instead of 3-5 days",
      "95% cost reduction for enterprises",
    ],
    color: "secondary",
  },
  {
    icon: Users,
    title: "Inclusion",
    metrics: [
      "Enables digital verification for refugees and unbanked individuals",
      "Supports compliance with eIDAS 2.0 and GDPR",
    ],
    color: "accent",
  },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Social & Economic Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Building a more secure, efficient, and inclusive digital identity ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-br from-${impact.color}/40 to-${impact.color}/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col">
                  <div className="relative mb-6 inline-flex">
                    <div className={`absolute inset-0 bg-${impact.color}/20 rounded-2xl blur-xl animate-pulse-glow`} />
                    <div className={`relative bg-${impact.color}/10 p-4 rounded-2xl border border-${impact.color}/30`}>
                      <impact.icon className={`w-10 h-10 text-${impact.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    {impact.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {impact.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-background/50 rounded-lg p-4 border border-primary/10"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${impact.color} mt-2 flex-shrink-0`} />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
