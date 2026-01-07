import React, { useState, useEffect } from "react";
import {
  Menu,
  Feather,
  Bed,
  Utensils,
  MapPin,
  ChevronRight,
  Users,
  Star,
  Droplets,
  Sun,
  Recycle,
  Instagram,
  Youtube,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { GlobalStyles } from "./components/ui/GlobalStyles";
import { RoomCard } from "./components/RoomCard";
import { MenuItem } from "./components/MenuItem";
import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logoImage from "figma:asset/8c89f8f661643ffcda66399cfbb883b1767bc5c1.png";
import heroImageDesktop from "./assets/hero-image-desktop.png";
import monguiImage from "./assets/imagen-mongui.jpg";
import { rooms } from "./data/rooms";
import { RoomDetailScreen } from "./components/screens/RoomDetailScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MAPS_URL =
    "https://www.google.com/maps/place/5%C2%B044'04.9%22N+72%C2%B051'09.1%22W/@5.7346981,-72.8550908,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.7346981!4d-72.8525159?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";
  // URL de inserción (Embed) para el iframe
  const MAPS_EMBED_URL =
    "https://maps.google.com/maps?q=5.734694,-72.852528&t=&z=16&ie=UTF8&iwloc=&output=embed";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [activeTab, selectedRoomId]);

  const handleRoomClick = (roomId: string) => {
    setSelectedRoomId(roomId);
    setActiveTab("room-detail");
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (loading)
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
          <div className="animate-spin text-emerald-400">
            <Feather size={60} />
          </div>
          <p className="font-medieval text-xl text-stone-600 animate-pulse">
            Cargando la magia...
          </p>
        </div>
      );

    switch (activeTab) {
      case "room-detail":
        const selectedRoom = rooms.find((r) => r.id === selectedRoomId);
        if (!selectedRoom) return <div>Aposento no encontrado</div>;
        return (
          <RoomDetailScreen
            room={selectedRoom}
            onBack={() => setActiveTab("rooms")}
            onBook={() => setActiveTab("booking")}
          />
        );
      case "rooms":
        return (
          <div className="fade-in pb-24 md:pt-12 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-medieval text-4xl md:text-5xl text-stone-800 mb-4">
                Nuestros Aposentos
              </h2>
              <p className="font-lato text-stone-600 max-w-2xl mx-auto text-lg">
                Descansa tus pies peludos en nuestras habitaciones diseñadas
                para el máximo confort de Hobbits, Enanos, Elfos y Hombres por
                igual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  title={room.title}
                  price={room.price}
                  rating={room.rating}
                  image={room.image}
                  tags={room.tags}
                  onClick={() => handleRoomClick(room.id)}
                />
              ))}
            </div>
          </div>
        );
      case "about":
        return (
          <div className="fade-in pb-24 px-6 md:pt-12 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-medieval text-4xl md:text-5xl text-stone-800">
                Entorno de fantasía
              </h2>
              <p className="font-lato text-stone-500 italic mt-2 text-xl">
                "¡Donde el respeto por la tierra es la magia más poderosa!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-medieval text-3xl text-emerald-400 mb-6 relative z-10">
                    Descubre la magia de Monguí
                  </h3>
                  <p className="font-lato text-stone-600">
                    Mongu es un rincón místico en Boyacá donde el tiempo se
                    detiene entre calles empedradas y fachadas coloniales. Es el
                    punto de partida hacia páramos ancestrales, ofreciendo una
                    atmósfera de paz absoluta. Nuestro proyecto se integra en
                    este paisaje como un refugio que honra la historia y la
                    naturaleza del entorno.
                  </p>
                </div>

                <ImageWithFallback
                  src={monguiImage}
                  alt="imagen-pueblo-mongui"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-stone-100 relative overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-amber-400">
                    <Navigation size={32} />
                    <h3 className="font-medieval text-3xl">
                      Encuentra el Camino
                    </h3>
                  </div>
                  <p className="font-lato text-stone-700 text-lg">
                    Estamos ubicados en las faldas místicas de Monguí, Boyacá.
                    Un lugar de fácil acceso pero lo suficientemente retirado
                    para que el silencio de la montaña te brinde descanso.
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <MapPin size={18} className="text-emerald-700" /> Nuestra
                      Dirección
                    </h4>
                    <p className="text-stone-600 font-lato">
                      La Comarca, Monguí - Boyacá, Colombia.
                    </p>
                  </div>
                  <p className="text-stone-500 font-lato text-sm flex items-center gap-2 italic">
                    <Navigation size={14} /> El mapa a tu derecha te guiará
                    directamente a nuestra puerta.
                  </p>
                </div>

                {/* Mapa de Google en miniatura interactivo */}
                <div className="bg-white rounded-2xl h-full w-full overflow-hidden relative shadow-2xl border-white group">
                  <iframe
                    src={MAPS_EMBED_URL}
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de La Comarca"
                  ></iframe>
                  <div className="absolute bottom-4 right-4 z-20">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white backdrop-blur-sm p-3 rounded-full shadow-lg text-amber-400 hover:text-amber-700 transition-colors flex items-center gap-2 font-medieval text-sm"
                    >
                      <ExternalLink size={16} /> Ver pantalla completa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-stone-100 relative overflow-hidden">
              <div>
                <h2 className="font-medieval text-3xl text-emerald-400 mb-6 relative z-10 text-center">
                  Ecología Sostenible
                </h2>
                <p className="font-lato text-stone-600">
                  La Comarca es un proyecto pionero en sostenibilidad. No solo
                  habitamos la tierra, la protegemos mediante sistemas
                  circulares que minimizan nuestro impacto:
                </p>
              </div>

              <div className="max-w-7xl mx-auto mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-100 p-8 rounded-2xl border border-stone-50 flex flex-col items-center text-center">
                    <Droplets className="mb-6" size={40} />
                    <h3 className="font-medieval text-2xl text-stone-800 mb-2">
                      Agua y Sanamiento
                    </h3>
                    <p className="font-lato text-stone-600">
                      Implementamos <strong>baños secos</strong> de última
                      generación y sistemas de{" "}
                      <strong>captación de agua lluvia</strong>, asegurando que
                      cada gota sea utilizada con sabiduría.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-2xl border border-stone-50 flex flex-col items-center text-center">
                    <Sun className="text-amber-400 mb-6" size={48} />
                    <h3 className="font-medieval text-2xl text-stone-800 mb-2">
                      Energías Limpias
                    </h3>
                    <p className="font-lato text-stone-600">
                      Nuestra energía proviene de fuentes renovables,
                      aprovechando la fuerza del sol para brindar confort sin
                      contaminar el cielo de Monguí.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-8 rounded-2xl border border-stone-50 flex flex-col items-center text-center">
                    <Recycle className="text-emerald-500 mb-6" size={48} />
                    <h3 className="font-medieval text-2xl text-stone-800 mb-2">
                      Residuos Cero
                    </h3>
                    <p className="font-lato text-stone-600">
                      Transformamos la materia a través del{" "}
                      <strong>compostaje</strong> y un sistema riguroso de{" "}
                      <strong>reciclaje</strong>, devolviendo nutrientes a la
                      tierra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-stone-900 rounded-2xl p-8 text-center">
              <h2 className="font-medieval text-3xl text-amber-400 mb-2 text-center">
                Proyectos Comunitarios
              </h2>
              <p className="text-stone-300 font-lato">
                Nuestra presencia impulsa iniciativas que benefician a toda la
                comunidad local. Fomentamos el trabajo digno, el apoyo a los
                artesanos locales y la educación ambiental, creando un vínculo
                de prosperidad compartida en el valle de Monguí.
              </p>
            </div>
          </div>
        );
      case "booking":
        return (
          <div className="fade-in pb-24 px-6 md:pt-12">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-medieval text-4xl md:text-6xl text-stone-800 leading-tight">
                  Tu Aventura Comienza Aquí
                </h2>
                <p className="font-lato text-stone-600 text-lg">
                  Ya sea que vengas de una larga caminata desde Mordor o
                  simplemente estés visitando a parientes en Hobbiton, tenemos
                  el lugar perfecto para ti.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-emerald-400/20 p-2 rounded-full text-emerald-400">
                      <MapPin />
                    </div>
                    <span className="font-medieval text-stone-700">
                      Ubicación Privilegiada
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-amber-400/20 p-2 rounded-full text-amber-400">
                      <Star />
                    </div>
                    <span className="font-medieval text-stone-700">
                      Servicio 5 Estrellas
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-200">
                <h3 className="font-medieval text-2xl text-stone-800 mb-6 text-center">
                  Consultar Disponibilidad
                </h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-lato font-bold text-stone-600 mb-1">
                      Nombre del Viajero
                    </label>
                    <div className="relative">
                      <Users
                        className="absolute left-3 top-3 text-stone-400"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="Frodo Bolsón"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 pl-10 font-lato focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-lato font-bold text-stone-600 mb-1">
                        Llegada
                      </label>
                      <input
                        type="date"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 font-lato text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-lato font-bold text-stone-600 mb-1">
                        Partida
                      </label>
                      <input
                        type="date"
                        className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 font-lato text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-lato font-bold text-stone-600 mb-1">
                      Raza / Tipo de Huésped
                    </label>
                    <select className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 font-lato">
                      <option>Hobbit (Techos bajos)</option>
                      <option>Humano / Mago (Techos altos)</option>
                      <option>Elfo (Vista al bosque)</option>
                      <option>Enano (Subterráneo)</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-emerald-400 text-stone-50 font-medieval text-xl py-4 rounded-xl mt-4 hover:bg-emerald-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                  >
                    Confirmar Reserva
                  </button>
                  <p className="text-center text-xs text-stone-400 font-lato">
                    No aceptamos oro de dragón maldito.
                  </p>
                </form>
              </div>
            </div>
          </div>
        );
      default: // Home
        return (
          <div className="fade-in pb-24">
            {/* Hero Section Desktop Enhanced */}
            <div className="relative h-[50vh] md:h-[80vh] w-full bg-stone-900 md:rounded-b-[4rem] rounded-b-[2rem] overflow-hidden mb-12 shadow-2xl">
              <ImageWithFallback
                src={heroImageDesktop}
                alt="hero-image-desktop"
                className="w-full h-full object-cover opacity-50 scale-105 hover:scale-100 transition-transform duration-[20s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <div className="animate-fade-in-up">
                  <p className="text-stone-200 font-medieval text-xl md:text-3xl mb-4 tracking-widest uppercase drop-shadow-md">
                    Bienvenidos a
                  </p>
                  <h1 className="text-6xl md:text-9xl font-medieval text-stone-50 leading-tight mb-6 drop-shadow-2xl">
                    La Comarca
                  </h1>
                  <p className="text-stone-200 font-lato text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed">
                    Donde la comodidad del hogar se encuentra con la magia de la
                    Tierra Media.
                  </p>
                  <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab("booking")}
                      className="bg-amber-400 hover:bg-amber-500 text-stone-50 font-medieval px-8 py-3 rounded-full text-xl transition-all shadow-lg hover:shadow-amber-400/20"
                    >
                      Reservar Ahora
                    </button>
                    <button
                      onClick={() => setActiveTab("rooms")}
                      className="bg-transparent border-2 border-stone-300 text-stone-100 hover:bg-stone-800 hover:border-stone-800 font-medieval px-8 py-3 rounded-full text-xl transition-all"
                    >
                      Explorar Habitaciones
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
              {/* Features Section Desktop Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-20 relative z-10">
                <div className="bg-stone-50 p-8 rounded-2xl shadow-xl border border-stone-200 hover:translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                  <div className="bg-emerald-400/20 p-4 rounded-full text-emerald-400 mb-4">
                    <Bed size={32} />
                  </div>
                  <h3 className="font-medieval text-2xl text-stone-800 mb-2">
                    Descanso Épico
                  </h3>
                  <p className="font-lato text-stone-600">
                    Habitaciones temáticas desde agujeros hobbit hasta suites
                    reales.
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
                    Disfruta de hasta 7 comidas al día, preparadas con
                    ingredientes locales.
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
                    Tours guiados a las Montañas Nubladas y caminatas por el
                    Bosque Viejo.
                  </p>
                </div>
              </div>

              {/* Featured Experiences */}
              <div className="mb-16">
                <div className="flex justify-between items-end mb-8">
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
    }
  };

  return (
    <div className="min-h-screen w-full font-lato text-stone-800">
      <GlobalStyles />

      {/* Navbar Desktop */}
      <DesktopNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 w-full z-40 bg-stone-900 text-white p-4 flex justify-between items-center shadow-md">
        <ImageWithFallback
          src={logoImage}
          alt="La Comarca Logo"
          className="h-12 w-auto object-contain rounded-full"
        />
        <Menu
          className="cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {/* Main Content Area */}
      <div className="min-h-screen">{renderContent()}</div>

      {/* Mobile Bottom Navigation */}
      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Footer Desktop */}
      <footer className="hidden md:block bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-medieval text-2xl text-stone-50 mb-4">
              La Comarca
            </h3>
            <p className="text-sm italic">
              "No olvides que el camino siempre estará esperando a tus pies 🍀"
            </p>
          </div>
          <div>
            <h4 className="font-bold text-stone-200 mb-4">Redes Sociales</h4>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/lacomarca_mongui/"
                target="_blank"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/watch?v=LeCYr3czKMg"
                target="_blank"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-stone-200 mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>+57 xxx xx xx</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-stone-200 mb-4">Ubicación</h4>
            <p
              className="text-stone-400 text-sm flex items-center gap-2 cursor-pointer hover:text-amber-500 transition-colors"
              onClick={() => window.open(MAPS_URL, "_blank")}
            >
              <MapPin size={14} /> La Comarca, Monguí - Boyacá, Colombia
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-xs">
          © 2026 La Comarca. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
