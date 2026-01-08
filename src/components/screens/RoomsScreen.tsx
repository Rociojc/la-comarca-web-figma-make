import React from 'react';
import { RoomCard } from '../RoomCard';
import { rooms } from '../../data/rooms';

export const RoomsScreen: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
    const handleRoomClick = (roomId: string) => {
        onNavigate(`/rooms/${roomId}`);
        window.scrollTo(0, 0);
    };

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
                  image={room.image}
                  tags={room.tags}
                  onClick={() => handleRoomClick(room.id)}
                />
              ))}
            </div>
        </div>
    );
};
