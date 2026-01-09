import React from "react";
import { Bed, Utensils, MapPin, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import heroImageDesktop from "../../assets/hero-image-desktop.png";
import { useIsMobile } from "../ui/use-mobile";

export const HomeScreen: React.FC<{ onNavigate: (path: string) => void }> = ({
  onNavigate,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="fade-in pb-24">
      {/* Hero Section Desktop Enhanced */}
      <div
        className="relative w-full bg-stone-900 md:rounded-b-[4rem] rounded-b-[2rem] overflow-hidden mb-12 shadow-2xl"
        style={{
          height: isMobile ? "70vh" : "80vh",
        }}
      >
        <ImageWithFallback
          src={heroImageDesktop}
          alt="hero-image-desktop"
          className="w-full h-full object-cover opacity-50 scale-105 hover:scale-100 transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in-up w-full">
            <p className="text-stone-200 font-medieval text-xl md:text-3xl mb-4 tracking-widest uppercase drop-shadow-md">
              Bienvenidos a
            </p>
            <h1 className="text-6xl md:text-9xl font-medieval text-stone-50 leading-tight mb-6 drop-shadow-2xl">
              La Comarca
            </h1>
            <p className="text-stone-200 font-lato text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed px-4">
              Donde la comodidad del hogar se encuentra con la magia de la
              Tierra Media.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phone = import.meta.env.VITE_WHATSAPP_PHONE;
                  const message = encodeURIComponent(
                    import.meta.env.VITE_WHATSAPP_HOME_MESSAGE
                  );
                  window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank"
                  );
                }}
                className="bg-amber-400 hover:bg-amber-500 text-stone-50 font-medieval px-8 py-3 rounded-full text-xl transition-all shadow-lg hover:shadow-amber-400/20 cursor-pointer"
              >
                Reservar Ahora
              </button>
              <button
                onClick={() => onNavigate("/rooms")}
                className="bg-transparent border-2 border-stone-300 text-stone-100 hover:bg-stone-800 hover:border-stone-800 font-medieval px-8 py-3 rounded-full text-xl transition-all cursor-pointer"
              >
                Explorar Habitaciones
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Features Section Desktop Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10"
          style={{ marginTop: isMobile ? "-4rem" : "-5rem" }}
        >
          <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border border-stone-200 hover:translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-emerald-400/20 p-4 rounded-full text-emerald-400 mb-4">
              <Bed size={32} />
            </div>
            <h3 className="font-medieval text-2xl text-stone-800 mb-2">
              Descanso Épico
            </h3>
            <p className="font-lato text-stone-600">
              Habitaciones temáticas desde agujeros hobbit hasta suites reales.
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border border-stone-200 hover:translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-amber-400/20 p-4 rounded-full text-amber-400 mb-4">
              <Utensils size={32} />
            </div>
            <h3 className="font-medieval text-2xl text-stone-800 mb-2">
              Gastronomía
            </h3>
            <p className="font-lato text-stone-600">
              Disfruta de hasta 7 comidas al día, preparadas con ingredientes
              locales.
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border border-stone-200 hover:translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="bg-emerald-400/10 p-4 rounded-full text-emerald-400 mb-4">
              <MapPin size={32} />
            </div>
            <h3 className="font-medieval text-2xl text-stone-800 mb-2">
              Aventuras
            </h3>
            <p className="font-lato text-stone-600">
              Tours guiados a las Montañas Nubladas y caminatas por el Bosque
              Viejo.
            </p>
          </div>
        </div>

        {/* Featured Experiences */}
        <div className="mb-16">
          <div 
            className="flex mb-8 gap-4"
            style={{ 
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'flex-start' : 'flex-end'
            }}
          >
            <div>
              <h3 className="font-medieval text-4xl text-stone-800 mb-2">
                Experiencias Destacadas
              </h3>
              <p className="font-lato text-stone-500">
                Más allá de una simple estancia.
              </p>
            </div>
            <button className="text-emerald-400 hover:text-emerald-500 font-lato font-bold flex items-center gap-1 group">
              Ver todas las actividades{" "}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tour a Hobbiton",
                img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Cata de Vinos",
                img: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Taller de Forja",
                img: "https://images.unsplash.com/photo-1596627689623-2882196191b6?q=80&w=400&auto=format&fit=crop",
              },
              {
                title: "Noche de Cuentos",
                img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=400&auto=format&fit=crop",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="h-64 rounded-2xl relative overflow-hidden group cursor-pointer shadow-md"
              >
                <ImageWithFallback
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
                <span className="absolute bottom-4 left-4 font-medieval text-white text-2xl drop-shadow-md group-hover:text-amber-400 transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
