import React from 'react';
import {
  Navigation,
  ExternalLink,
  MapPin,
  Droplets,
  Sun,
  Recycle,
} from "lucide-react";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import monguiImage from "../../assets/imagen-mongui.jpg";

const MAPS_URL =
    "https://www.google.com/maps/place/5%C2%B044'04.9%22N+72%C2%B051'09.1%22W/@5.7346981,-72.8550908,17z/data=!3m1!4b1!4m4!3m3!8m2!3d5.7346981!4d-72.8525159?hl=es&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";
const MAPS_EMBED_URL =
    "https://maps.google.com/maps?q=5.734694,-72.852528&t=&z=16&ie=UTF8&iwloc=&output=embed";

export const AboutScreen: React.FC = () => {
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
    )
}
