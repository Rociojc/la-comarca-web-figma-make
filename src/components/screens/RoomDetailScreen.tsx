import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Users,
  Maximize,
  Check,
  Wifi,
  Coffee,
  Shield,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Room } from "../../data/rooms";
import { ImageWithFallback } from "../ui/ImageWithFallback";

interface RoomDetailScreenProps {
  room: Room;
  onBack: () => void;
  onBook: () => void;
}

export const RoomDetailScreen: React.FC<RoomDetailScreenProps> = ({
  room,
  onBack,
  onBook,
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // new: responsive inline height to avoid CSS interference
  const [imageHeight, setImageHeight] = useState<number>(() =>
    typeof window !== "undefined" && window.innerWidth >= 768 ? 500 : 400
  );

  // Default to using the main image repeated if no images array exists (fallback)
  const images =
    room.images && room.images.length > 0
      ? room.images
      : [room.image, room.image, room.image, room.image];

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isGalleryOpen) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight")
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrentImageIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, images.length]);

  useEffect(() => {
    const handleResize = () =>
      setImageHeight(window.innerWidth >= 768 ? 500 : 400);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fade-in pb-24 pt-8 max-w-7xl mx-auto px-6 relative">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-stone-600 hover:text-emerald-400 mb-6 font-medieval text-lg transition-colors cursor-pointer"
      >
        <ArrowLeft size={20} /> Volver a Aposentos
      </button>

      <div className="grid grid-cols-2 gap-12">
        {/* Left Column: Images */}
        <div className="space-y-4">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl flex-none min-h-0 border-4 border-stone-100 cursor-pointer group relative mb-4"
            onClick={() => openGallery(0)}
            style={{ height: imageHeight }}
          >
            <ImageWithFallback
              src={images[0]}
              alt={room.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 right-4 transition-transform duration-300 group-hover:scale-110">
              <div className="bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize className="text-white drop-shadow-lg" size={24} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.slice(0, 4).map((img, idx) => {
              const isLastSlot = idx === 3;
              const remainingCount = images.length - 4;

              return (
                <div
                  key={idx}
                  className={`rounded-xl overflow-hidden shadow-md h-32 border border-stone-200 cursor-pointer transition-all relative group 
          ${idx === 0 ? "ring-2 ring-emerald-400" : "hover:opacity-90"}`}
                  onClick={() => openGallery(idx)}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Vista ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {isLastSlot && remainingCount > 0 && (
                    <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[1px] flex flex-col items-center justify-center text-white border-2 border-emerald-400/50 rounded-xl">
                      <span className="text-xl font-bold">
                        +{remainingCount}
                      </span>
                      <span className="text-xl tracking-tighter font-bold">
                        Ver Más
                      </span>
                    </div>
                  )}

                  {/* Efecto de brillo al pasar el mouse (excepto si es el último con contador) */}
                  {(!isLastSlot || remainingCount <= 0) && (
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-start">
              <h1 className="font-medieval text-4xl md:text-5xl text-stone-900 mb-2">
                {room.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 border-y border-stone-200 py-6 mb-4">
            <div className="flex items-center gap-2 text-stone-700">
              <div className="bg-stone-100 rounded-full">
                <Users size={20} />
              </div>
              <span className="font-bold">{room.maxGuests || 2} Huéspedes</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <div className="bg-stone-100 rounded-full">
                <Maximize size={20} />
              </div>
              <span className="font-bold">{room.size || "45 m²"}</span>
            </div>
          </div>

          <div>
            <p className="text-stone-600 leading-relaxed font-lato text-lg">
              {room.description || "Un lugar maravilloso para descansar."}
            </p>
          </div>

          <div>
            <h3 className="font-medieval text-2xl text-stone-800 mt-4 mb-4">
              Dones del Aposento:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(room.features || ["Cama cómoda", "Desayuno"]).map(
                (feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-stone-600"
                  >
                    <Check size={18} className="text-emerald-500" />
                    <div>
                      <p className="text-lg">{feature.label}</p>
                      <p className="uppercase text-xs text-stone-400">
                        {feature.sub}
                      </p>
                    </div>
                  </div>
                )
              )}
              <div className="flex items-center gap-2 text-stone-600">
                <Wifi size={18} className="text-emerald-500" />{" "}
                <span>Palantir-Fi (Conexión Mágica)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Coffee size={18} className="text-emerald-500" />{" "}
                <span>Té de la tarde</span>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between shadow-xl gap-4 mt-4">
            <div>
              <p className="text-stone-400 text-sm uppercase mb-1">
                Valor de la estancia
              </p>
              <p className="text-3xl text-amber-400">
                {room.price}{" "}
                <span className="text-stone-400 text-sm font-normal italic">
                  / por noche
                </span>
              </p>
            </div>
            <button
              onClick={onBook}
              className="bg-amber-400 hover:bg-amber-500 text-stone-50 font-medieval px-8 py-3 rounded-full text-xl transition-all shadow-lg hover:shadow-amber-400/20 cursor-pointer"
            >
              Reservar Aposento
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 bg-stone-900 flex items-center justify-center p-4 md:p-10 fade-in">
          <button
            onClick={closeGallery}
            className="absolute text-stone-400 hover:text-white transition-colors p-2 z-50 rounded-full"
            style={{ top: "10px", right: "10px" }}
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 text-stone-400 hover:text-white hover:scale-110 transition-all p-2 z-50 bg-black/50 rounded-full"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full h-full max-w-7xl flex items-center justify-center">
            <ImageWithFallback
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              style={{ height: "90vh" }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white font-lato text-sm">
              Imagen {currentImageIndex + 1} de {images.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-stone-400 hover:text-white hover:scale-110 transition-all p-2 z-50 bg-black/50 rounded-full"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};
