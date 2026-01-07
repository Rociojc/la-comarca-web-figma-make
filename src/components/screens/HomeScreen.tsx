import React from 'react';
import { MapPin, Search, Bell } from 'lucide-react';
import { Input } from '../ui/input';
import { RoomCard } from '../RoomCard';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const HomeScreen: React.FC<{ onBookRoom: () => void }> = ({ onBookRoom }) => {
  return (
    <div className="pb-24 animate-in fade-in duration-500">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 flex justify-between items-center bg-[#FDFBF7] sticky top-0 z-30 shadow-sm">
        <div>
          <p className="text-stone-500 text-sm font-sans mb-1">Bienvenido a</p>
          <h1 className="text-2xl font-['MedievalSharp'] text-[#3E2723]">La Comarca</h1>
        </div>
        <div className="p-2 bg-white rounded-full shadow-sm border border-stone-100 relative">
          <Bell className="w-5 h-5 text-stone-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4AF37] rounded-full border border-white"></span>
        </div>
      </header>

      {/* Search Section */}
      <div className="px-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
          <Input 
            placeholder="Busca tu estancia perfecta..." 
            className="pl-10 bg-white border-stone-200 h-12 rounded-xl font-sans text-stone-600 focus-visible:ring-[#558B2F]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-['MedievalSharp'] text-[#3E2723] mb-4">Categorías</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {['Todos', 'Hobbit Holes', 'Elfos', 'Rohan', 'Gondor'].map((cat, i) => (
            <button 
              key={cat}
              className={`
                px-5 py-2.5 rounded-full whitespace-nowrap font-sans text-sm transition-all
                ${i === 0 
                  ? 'bg-[#3E2723] text-[#FDFBF7] shadow-md' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-[#3E2723]'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Hero */}
      <div className="px-6 mb-8">
        <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg group cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1656325426374-12edc72af77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2JiaXQlMjBob3VzZSUyMGV4dGVyaW9yJTIwZ3JlZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzY0MzYzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hobbit House"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2C1810]/90 to-transparent p-6 pt-20">
            <h3 className="text-white font-['MedievalSharp'] text-xl mb-1">Experiencia La Colina</h3>
            <p className="text-stone-200 text-sm font-sans line-clamp-1">Vive como un verdadero Hobbit en nuestras suites bajo tierra.</p>
          </div>
        </div>
      </div>

      {/* Popular Rooms */}
      <div className="px-6">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-['MedievalSharp'] text-[#3E2723]">Estancias Populares</h2>
          <button className="text-sm text-[#558B2F] font-bold font-sans">Ver todo</button>
        </div>
        
        <RoomCard
          title="Suite Bolsón Cerrado"
          description="Acogedora estancia con chimenea de piedra, muebles de roble y vistas al jardín de la fiesta."
          price={150}
          rating={4.9}
          capacity={2}
          size={45}
          imageUrl="https://images.unsplash.com/photo-1749665833257-5a7938ffe00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbWVkaWV2YWwlMjBiZWRyb29tJTIwc3RvbmUlMjB3YWxscyUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc2NDM2MzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          onBook={onBookRoom}
        />
        
        <RoomCard
          title="Cámara de Rivendel"
          description="Elegancia élfica con arcos tallados, luz natural y sábanas de seda de la mejor calidad."
          price={280}
          rating={5.0}
          capacity={3}
          size={60}
          imageUrl="https://images.unsplash.com/photo-1667375185276-13b00bf723bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlbGVnYW50JTIwZmFudGFzeSUyMGJlZHJvb20lMjB3b29kJTIwaW50cmljYXRlfGVufDF8fHx8MTc2NDM2MzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
          onBook={onBookRoom}
        />
      </div>
    </div>
  );
};
