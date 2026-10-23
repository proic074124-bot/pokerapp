import { Link, useLocation } from "react-router-dom";
import { X, Home, Info, ClipboardList, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookButton from "./BookButton";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  { label: "Programs", path: "/programs", icon: ClipboardList },
  { label: "Contact", path: "/contact", icon: Phone },
];

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl z-50 lg:hidden flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-inter font-bold text-lg text-primary">Menu</span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 p-6 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-inter text-base font-medium transition-all duration-300 min-h-[48px]
                        ${isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                      {isActive && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-accent" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="p-6 border-t border-border">
              <BookButton className="w-full justify-center" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}