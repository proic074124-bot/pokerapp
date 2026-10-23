import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <img
          src="https://media.base44.com/images/public/6a0acbf599798cbd48861a6e/0e7c9e70c_generated_aa53330e.png"
          alt="P-Plus Lab Logo"
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "h-9 w-9" : "h-11 w-11"
          }`}
        />
      </motion.div>
      <div className="flex flex-col">
        <span className={`font-inter font-bold tracking-tight leading-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "text-lg" : "text-xl"
        } text-primary`}>
          P-Plus Lab
        </span>
        <span className={`font-jakarta text-muted-foreground leading-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "text-[10px] mt-0.5" : "text-xs mt-1"
        }`}>
          Blood Testing & Healthcare
        </span>
      </div>
    </Link>
  );
}