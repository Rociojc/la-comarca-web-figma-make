import React from 'react';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => (
  <div className="flex justify-between items-center py-4 border-b border-stone-200 last:border-0 hover:bg-stone-50 px-4 -mx-4 transition-colors rounded-lg">
    <div className="pr-4">
      <h4 className="font-medieval text-xl text-stone-800">{name}</h4>
      <p className="text-stone-500 text-sm md:text-base font-lato mt-1">{description}</p>
    </div>
    <span className="text-amber-700 font-bold font-lato whitespace-nowrap text-lg">{price}</span>
  </div>
);
