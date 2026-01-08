import React from "react";
import { useLocation } from "react-router-dom";
import { Home, Bed, Coffee, Users } from "lucide-react";

interface MobileNavProps {
  onNavigate: (path: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ onNavigate }) => {
  const location = useLocation();
  const activeTab = location.pathname.substring(1) || "home";

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 bg-stone-900/95 backdrop-blur-md text-stone-400 rounded-2xl p-4 shadow-xl flex justify-between items-center z-30 border border-stone-700">
      <button
        onClick={() => onNavigate("/")}
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === "home" ? "text-amber-400" : ""
        }`}
      >
        <Home size={22} />
      </button>
      <button
        onClick={() => onNavigate("/rooms")}
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === "rooms" ? "text-amber-400" : ""
        }`}
      >
        <Bed size={22} />
      </button>
      <button
        onClick={() => onNavigate("/about")}
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === "about" ? "text-amber-400" : ""
        }`}
      >
        <Coffee size={22} />
      </button>
      <button className="flex flex-col items-center gap-1 cursor-pointer">
        <Users size={22} />
      </button>
    </div>
  );
};