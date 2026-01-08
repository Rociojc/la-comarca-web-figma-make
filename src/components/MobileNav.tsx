import React from "react";
import { Home, Bed, Feather, Coffee, Users } from "lucide-react";

interface MobileNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 bg-stone-900/95 backdrop-blur-md text-stone-400 rounded-2xl p-4 shadow-xl flex justify-between items-center z-30 border border-stone-700">
      <button
        onClick={() => setActiveTab("home")}
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === "home" ? "text-amber-400" : ""
        }`}
      >
        <Home size={22} />
      </button>
      <button
        onClick={() => setActiveTab("rooms")}
        className={`flex flex-col items-center gap-1 cursor-pointer ${
          activeTab === "rooms" ? "text-amber-400" : ""
        }`}
      >
        <Bed size={22} />
      </button>
      <div className="relative -top-8">
        <button
          onClick={() => setActiveTab("booking")}
          className="bg-gradient-to-br from-amber-400 to-amber-600 text-white p-4 rounded-full shadow-lg border-4 border-stone-50 cursor-pointer"
        >
          <Feather size={24} />
        </button>
      </div>
      <button
        onClick={() => setActiveTab("about")}
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
