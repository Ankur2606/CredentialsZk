import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Star } from "lucide-react";

const revenueStreams = [
  {
    icon: TrendingUp,
    title: "Subscription SaaS",
    description: "Enterprises pay monthly for verifications and APIs",
    color: "primary",
  },
  {
    icon: DollarSign,
    title: "Per-Verification Fees",
    description: "Charge small fees ($0.5–$2) per credential validation",
    color: "secondary",
  },
  {
    icon: Star,
    title: "Premium Feature Add-ons",
    description: "AI skills dashboard, compliance reporting, white-label integrations",
    color: "accent",
  },
];

export const RevenueSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Revenue Model
          </h2>
          <p className="text-xl text-muted-foreground">
            Sustainable monetization for enterprise adoption
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br from-${stream.color}/30 to-${stream.color}/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-${stream.color}/20 rounded-2xl blur-xl`} />
                    <div className={`relative bg-${stream.color}/10 p-4 rounded-2xl border border-${stream.color}/30`}>
                      <stream.icon className={`w-8 h-8 text-${stream.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {stream.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stream.description}
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
