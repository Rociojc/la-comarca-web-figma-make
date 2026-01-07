import React from 'react';
import { Utensils, Music, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const ServicesScreen: React.FC = () => {
  const services = [
    {
      title: "El Dragón Verde",
      desc: "Nuestra taberna exclusiva con la mejor cerveza de la Comarca y pasteles de carne.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1679943502091-6fb7f2302612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB0YXZlcm4lMjBtZWRpZXZhbCUyMGZvb2QlMjB0YWJsZXxlbnwxfHx8fDE3NjQzNjMxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Fuegos de Gandalf",
      desc: "Espectáculo nocturno de luces y magia para toda la familia.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1656325426374-12edc72af77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2JiaXQlMjBob3VzZSUyMGV4dGVyaW9yJTIwZ3JlZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzY0MzYzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080" // Reusing for now, ideally different
    }
  ];

  return (
    <div className="pb-24 animate-in fade-in duration-500">
      <header className="pt-12 pb-6 px-6 bg-[#FDFBF7] sticky top-0 z-30 shadow-sm">
        <h1 className="text-2xl font-['MedievalSharp'] text-[#3E2723]">Servicios</h1>
      </header>

      <div className="px-6 mt-6 grid gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md">
            <div className="h-40 relative">
              <ImageWithFallback src={s.image} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-full">
                <s.icon className="w-5 h-5 text-[#3E2723]" />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-['MedievalSharp'] text-xl text-[#3E2723] mb-2">{s.title}</h3>
              <p className="text-stone-600 text-sm font-sans leading-relaxed">{s.desc}</p>
              <button className="mt-4 text-[#558B2F] font-bold text-sm uppercase tracking-wider">Reservar Mesa</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
