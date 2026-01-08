import hobbitImage from "../assets/rooms/frodo/frodo-imagen-2.webp";

export interface Room {
  id: string;
  title: string;
  price: string;
  rating: string | number;
  image: string;
  tags: string[];
  description?: string;
  features?: string[];
  maxGuests?: number;
  size?: string;
}

export const rooms: Room[] = [
  {
    id: "hobbit-standard",
    title: "Agujero Hobbit Estándar",
    price: "15 Monedas de Plata",
    rating: "4.8",
    image: hobbitImage,
    tags: ["Acogedor", "Puerta Redonda", "Desayuno Incluido"],
    description:
      "Un auténtico agujero hobbit con todas las comodidades. Techos bajos, chimenea acogedora y una despensa siempre llena. Perfecto para descansar después de una aventura o simplemente para disfrutar de una vida tranquila.",
    features: [
      "Chimenea de leña",
      "Despensa surtida",
      "Jardín privado",
      "Biblioteca de mapas",
    ],
    maxGuests: 2,
    size: "45 m²",
  },
  {
    id: "gondor-suite",
    title: "Suite Real de Gondor",
    price: "50 Monedas de Plata",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
    tags: ["Vista a la Montaña", "Cama King", "Baño de Mármol"],
    description:
      "Digna de un rey. Esta suite ofrece vistas espectaculares de la Ciudad Blanca (o al menos de las montañas cercanas). Decorada con mármol blanco y tapices de plata, es el lujo definitivo en la Tierra Media.",
    features: [
      "Balcón privado",
      "Baño de mármol con tina",
      "Servicio de mayordomo",
      "Cama King Size",
    ],
    maxGuests: 3,
    size: "80 m²",
  },
  {
    id: "lorien-cabin",
    title: "Cabaña de Lorien",
    price: "35 Monedas de Plata",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&w=800&auto=format&fit=crop",
    tags: ["En los árboles", "Mágico", "Luz Estelar"],
    description:
      "Duerme entre las copas de los árboles Mallorn. Una experiencia mágica con luz suave, arquitectura élfica y una paz que solo los Elfos pueden ofrecer. No se permiten orcos.",
    features: [
      "Plataforma en árbol",
      "Iluminación mágica",
      "Hamaca de seda",
      "Desayuno élfico",
    ],
    maxGuests: 2,
    size: "50 m²",
  },
  {
    id: "rivendell-retreat",
    title: "Refugio de Rivendel",
    price: "45 Monedas de Plata",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    tags: ["Cascadas", "Lectura", "Paz"],
    description:
      "El lugar perfecto para sanar y descansar. Rodeado de cascadas y jardines, este refugio ofrece una biblioteca extensa y música de arpa suave por las noches.",
    features: [
      "Vista a cascada",
      "Biblioteca privada",
      "Zona de meditación",
      "Té de hierbas ilimitado",
    ],
    maxGuests: 2,
    size: "60 m²",
  },
  {
    id: "prancing-pony",
    title: "Posada del Poney Pisador",
    price: "10 Monedas de Plata",
    rating: "4.5",
    image:
      "https://images.unsplash.com/photo-1572935633135-caed67d46413?q=80&w=800&auto=format&fit=crop",
    tags: ["Rústico", "Cerveza Gratis", "Animado"],
    description:
      "Para el viajero que busca ambiente y buena compañía. Habitaciones sencillas pero cómodas, justo encima de la taberna más famosa de Bree. ¡Cuidado con los Nazgûl!",
    features: [
      "Acceso directo al bar",
      "Cerveza de cortesía",
      "Ambiente rústico",
      "Chimenea común",
    ],
    maxGuests: 4,
    size: "35 m²",
  },
  {
    id: "isengard-tower",
    title: "Torre de Isengard (Eco)",
    price: "25 Monedas de Plata",
    rating: "4.2",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    tags: ["Vista 360", "Industrial", "Minimalista"],
    description:
      "Una experiencia moderna e industrial con vistas de 360 grados. Ideal para magos que buscan soledad o planes de dominación mundial. (Nota: La administración no se hace responsable por Ents enfurecidos).",
    features: [
      "Vista panorámica",
      "Decoración obsidiana",
      "Mesa de trabajo",
      "Insonorización",
    ],
    maxGuests: 1,
    size: "40 m²",
  },
];
