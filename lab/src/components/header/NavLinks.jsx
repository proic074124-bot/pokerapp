import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Contact", path: "/contact" },
];

export default function NavLinks() {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-4 py-2 font-inter text-sm font-medium tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-lg group
              ${isActive 
                ? "text-primary" 
                : "text-muted-foreground hover:text-primary"
              }
            `}
          >
            {item.label}
            {/* Teal Under-Glow */}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isActive 
                  ? "w-6 opacity-100 shadow-[0_0_8px_hsl(var(--accent)/0.5)]" 
                  : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:shadow-[0_0_8px_hsl(var(--accent)/0.4)]"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}