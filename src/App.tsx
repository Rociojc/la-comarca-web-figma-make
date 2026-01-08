import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  Menu,
  Feather,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";

import { DesktopNav } from "./components/DesktopNav";
import { MobileNav } from "./components/MobileNav";
import { ImageWithFallback } from "./components/ui/ImageWithFallback";
import logoImage from "figma:asset/8c89f8f661643ffcda66399cfbb883b1767bc5c1.png";
import { rooms } from "./data/rooms";
import { RoomDetailScreen } from "./components/screens/RoomDetailScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { AboutScreen } from "./components/screens/AboutScreen";
import { RoomsScreen } from "./components/screens/RoomsScreen";

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MAPS_URL =
    "https://www.google.com/maps/place/5%C2%B044'04.9%22N+72%C2%B051'09.1%22W/@5.7346981,-72.8550908,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.7346981!4d-72.8525159?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  const RoomDetailWrapper = () => {
    const { id } = useParams<{ id: string }>();
    const selectedRoom = rooms.find((r) => r.id === id);
    if (!selectedRoom) return <div>Aposento no encontrado</div>;
    return (
      <RoomDetailScreen
        room={selectedRoom}
        onBack={() => handleNavigate('/rooms')}
        onBook={() => window.open("https://wa.me/573024391651", "_blank")}
      />
    );
  };

  return (
    <div className="min-h-screen w-full font-lato text-stone-800">


      <DesktopNav onNavigate={handleNavigate} />

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

      <div className="min-h-screen">
        {loading ? (
          <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
            <div className="animate-spin text-emerald-400">
              <Feather size={60} />
            </div>
            <p className="font-medieval text-xl text-stone-600 animate-pulse">
              Cargando la magia...
            </p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen onNavigate={handleNavigate} />} />
            <Route path="/rooms" element={<RoomsScreen onNavigate={handleNavigate} />} />
            <Route path="/rooms/:id" element={<RoomDetailWrapper />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        )}
      </div>

      <MobileNav onNavigate={handleNavigate} />

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
              <li>
                <a 
                  href="https://wa.me/573024391651" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  +57 302 4391651
                </a>
              </li>
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
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}