import React from "react";
import { useLocation } from "react-router-dom";
import { Home, Bed, Feather, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import logoImage from "figma:asset/8c89f8f661643ffcda66399cfbb883b1767bc5c1.png";

interface DesktopNavProps {
  onNavigate: (path: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ onNavigate }) => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || "home";

  const navItems = [
    { id: "home", path: "/", label: "Inicio", icon: Home },
    { id: "rooms", path: "/rooms", label: "Aposentos", icon: Bed },
    { id: "about", path: "/about", label: "Entorno Mágico", icon: Sparkles },
    { id: "booking", path: "/booking", label: "Reservas", icon: Feather },
  ];

  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-stone-900 text-stone-100 sticky top-0 z-50 shadow-lg border-b border-stone-700">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onNavigate("/")}
      >
        <ImageWithFallback
          src={logoImage}
          alt="La Comarca Logo"
          className="rounded-full"
          style={{ height: "90px", width: "auto", objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.path)}
            className={`flex items-center gap-2 font-medieval text-lg transition-colors duration-200 cursor-pointer ${
              activeTab === item.id
                ? "text-amber-400"
                : "text-stone-300 hover:text-white"
            }`}
          >
            {activeTab === item.id && <item.icon size={18} />}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};