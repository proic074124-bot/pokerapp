import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

const badges = [
  { icon: ShieldCheck, label: "Certified Lab" },
  { icon: Clock, label: "Fast Results" },
  { icon: Award, label: "ISO Accredited" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-primary text-xs font-inter font-medium"
                >
                  <badge.icon className="w-3.5 h-3.5" />
                  {badge.label}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-primary"
            >
              Precision Blood
              <br />
              Testing You Can{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trust
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg font-jakarta"
            >
              Advanced laboratory diagnostics with state-of-the-art technology.
              Get accurate results, fast turnaround, and personalized healthcare
              guidance from our expert team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/programs"
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </span>
                <span className="relative z-10">View Health Programs</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-inter text-sm font-semibold text-primary border border-border hover:bg-muted transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://media.base44.com/images/public/6a0acbf599798cbd48861a6e/dcff8d02d_generated_c77e9637.png"
                alt="Laboratory professional examining samples through a modern microscope in a bright, clean lab"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
              {/* Teal overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -left-4 sm:left-6 bg-card border border-border rounded-xl p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-inter font-bold text-primary text-sm">10,000+</p>
                  <p className="text-muted-foreground text-xs">Tests Completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}