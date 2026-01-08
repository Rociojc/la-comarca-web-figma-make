import React from "react";
import { Home, Bed, Feather, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/8c89f8f661643ffcda66399cfbb883b1767bc5c1.png";

interface DesktopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navItems = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "rooms", label: "Aposentos", icon: Bed },
    { id: "about", label: "Entorno Mágico", icon: Sparkles },
    { id: "booking", label: "Reservas", icon: Feather },
  ];

  return (
    <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-stone-900 text-stone-100 sticky top-0 z-50 shadow-lg border-b border-stone-700">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setActiveTab("home")}
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
            onClick={() => setActiveTab(item.id)}
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
