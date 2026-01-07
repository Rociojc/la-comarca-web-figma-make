import React from 'react';
import { Home, Calendar, Utensils, User } from 'lucide-react';
import { cn } from './ui/utils';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'booking', icon: Calendar, label: 'Reservas' },
    { id: 'services', icon: Utensils, label: 'Servicios' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FDFBF7] border-t border-stone-200 px-6 py-4 pb-6 md:pb-4 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors duration-300",
                isActive ? "text-[#558B2F]" : "text-stone-400 hover:text-stone-600"
              )}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn(
                "text-[10px] font-sans uppercase tracking-wider",
                isActive ? "font-bold" : "font-medium"
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
