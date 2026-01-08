import React from "react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { Coins } from "lucide-react";

interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  title,
  price,
  image,
  tags,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-stone-200 group cursor-pointer transition-all duration-300 hover:-translate-y-1"
  >
    <div className="relative h-64 w-full overflow-hidden">
      <ImageWithFallback
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="flex flex-col justify-between items-start gap-2 mb-4">
        <h3 className="font-medieval text-2xl text-stone-800 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <Coins className="text-amber-400" />
          <p className="text-amber-700 font-bold font-lato text-xl">{price}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs md:text-sm bg-stone-50 text-stone-700 px-3 py-1 rounded-full font-lato border border-stone-100"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition-colors font-medieval cursor-pointer">
        Ver Detalles
      </button>
    </div>
  </div>
);
