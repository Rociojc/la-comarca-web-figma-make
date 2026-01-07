import React from 'react';
import { Calendar as CalendarIcon, Users, Check } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const BookingScreen: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="pt-12 pb-6 px-6 bg-[#FDFBF7] sticky top-0 z-30 shadow-sm">
        <h1 className="text-2xl font-['MedievalSharp'] text-[#3E2723] text-center">Tu Reserva</h1>
      </header>

      <div className="px-6 mt-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
          <div className="flex gap-4 items-center mb-4 pb-4 border-b border-stone-100">
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1749665833257-5a7938ffe00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbWVkaWV2YWwlMjBiZWRyb29tJTIwc3RvbmUlMjB3YWxscyUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc2NDM2MzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-['MedievalSharp'] text-[#3E2723]">Suite Bolsón Cerrado</h3>
              <p className="text-stone-500 text-sm font-sans">150$ / noche</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center font-sans text-sm">
            <span className="text-stone-600">Total (3 noches)</span>
            <span className="font-bold text-[#3E2723] text-lg">450$</span>
          </div>
        </div>

        <h2 className="text-lg font-['MedievalSharp'] text-[#3E2723] mb-4">Selecciona Fechas</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border-none"
          />
        </div>

        <h2 className="text-lg font-['MedievalSharp'] text-[#3E2723] mb-4">Huéspedes</h2>
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-stone-100 p-2 rounded-full">
                <Users className="w-5 h-5 text-[#3E2723]" />
              </div>
              <div>
                <p className="font-bold text-[#3E2723]">Adultos</p>
                <p className="text-xs text-stone-500">Mayores de 13 años</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500">-</button>
              <span className="font-bold text-[#3E2723]">2</span>
              <button className="w-8 h-8 rounded-full bg-[#3E2723] text-white flex items-center justify-center">+</button>
            </div>
          </div>
        </div>

        <Button className="w-full bg-[#558B2F] hover:bg-[#33691E] text-white font-['MedievalSharp'] h-14 text-lg rounded-xl shadow-lg shadow-green-900/20">
          Confirmar Reserva
        </Button>
      </div>
    </div>
  );
};
