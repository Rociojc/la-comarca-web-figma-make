import React from 'react';
import {
  MapPin,
  Star,
  Users,
} from "lucide-react";

export const BookingScreen: React.FC = () => {
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
    )
}