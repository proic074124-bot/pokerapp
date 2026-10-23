import { Link } from "react-router-dom";
import { CalendarPlus } from "lucide-react";

export default function BookButton({ className = "" }) {
  return (
    <Link
      to="/contact"
      className={`relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter text-sm font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${className}`}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </span>
      <CalendarPlus className="w-4 h-4 relative z-10" />
      <span className="relative z-10">Book a Lab Test</span>
    </Link>
  );
}