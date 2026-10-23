import React from "react";
import { motion } from "framer-motion";
import { Microscope, HeartPulse, Users, Award } from "lucide-react";

const values = [
  { icon: Microscope, title: "Precision", description: "State-of-the-art laboratory equipment ensuring accurate and reliable results every time." },
  { icon: HeartPulse, title: "Patient Care", description: "Your health and comfort are at the center of everything we do." },
  { icon: Users, title: "Expert Team", description: "Qualified pathologists and lab technicians with years of clinical experience." },
  { icon: Award, title: "Accredited", description: "ISO certified laboratory following international quality standards." },
];

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-primary text-xs font-inter font-medium mb-4">About Us</span>
          <h1 className="font-inter font-bold text-4xl sm:text-5xl tracking-tight text-primary">
            Your Trusted Healthcare Partner
          </h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed font-jakarta">
            P-Plus Lab is a leading blood testing and healthcare clinic dedicated to providing accurate, timely, and affordable diagnostic services. With cutting-edge technology and a compassionate team, we make healthcare accessible for everyone.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-inter font-semibold text-primary text-lg">{value.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed font-jakarta">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}