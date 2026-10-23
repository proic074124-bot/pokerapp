import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, HeartPulse, Shield, Activity, Stethoscope, Pill } from "lucide-react";

const programs = [
  { icon: Droplets, title: "Complete Blood Count", description: "Comprehensive blood analysis including RBC, WBC, hemoglobin, and platelets.", price: "750" },
  { icon: HeartPulse, title: "Cardiac Health Panel", description: "Full cardiovascular screening with lipid profile, troponin, and CRP markers.", price: "2,500" },
  { icon: Shield, title: "Executive Health Checkup", description: "Complete health screening package covering 50+ parameters for professionals.", price: "5,900" },
  { icon: Activity, title: "Diabetes Panel", description: "Glucose tolerance, HbA1c, insulin levels, and metabolic markers.", price: "1,200" },
  { icon: Stethoscope, title: "Women's Wellness", description: "Thyroid, hormonal balance, vitamin levels, and reproductive health markers.", price: "3,800" },
  { icon: Pill, title: "Allergy Profile", description: "Comprehensive allergy testing for food, environmental, and drug sensitivities.", price: "2,100" },
];

export default function Programs() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-primary text-xs font-inter font-medium mb-4">Health Programs</span>
          <h1 className="font-inter font-bold text-4xl sm:text-5xl tracking-tight text-primary">
            Checkup Programs
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed font-jakarta">
            Choose from our carefully designed health screening packages, each tailored to provide comprehensive insights into your well-being.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-xl border border-border bg-card hover:shadow-xl hover:shadow-accent/10 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02] flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <program.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-primary text-lg">{program.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed font-jakarta flex-1">{program.description}</p>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <span className="font-inter font-bold text-2xl text-primary tracking-tight">฿{program.price}</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-inter font-medium text-accent hover:text-primary transition-colors duration-300"
                >
                  Book Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}