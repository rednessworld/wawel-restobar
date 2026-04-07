import type { Language } from '@/context/LanguageContext';

export interface Dish {
  name: string;
  polish: string;
  description: string;
  price: string;
  photo: string;
}

export interface Review {
  author: string;
  text: string;
  stars: number;
}

const dishes = {
  es: [
    { name: 'Pierogi', polish: 'Pierogi Ruskie', description: 'Dumplings caseros rellenos de queso fresco y patata, servidos con nata y cebolla caramelizada', price: '€9', photo: '/images/food17.jpg' },
    { name: 'Placki Ziemniaczane', polish: 'Placki', description: 'Tortitas de patata crujientes servidas con nata agria y salmón ahumado', price: '€8', photo: '/images/food18.jpg' },
    { name: 'Pollo Kiev', polish: 'Kotlet Kijowski', description: 'Pechuga de pollo rellena de mantequilla de hierbas, empanada y frita al punto', price: '€14', photo: '/images/food19.jpg' },
    { name: 'Bigos', polish: 'Bigos Myśliwski', description: 'Estofado tradicional de caza con chucrut, champiñones secos y especias ahumadas', price: '€11', photo: '/images/food17.jpg' },
    { name: 'Kiełbasa', polish: 'Kiełbasa z Grilla', description: 'Salchicha polaca a la brasa con mostaza antigua y pan de centeno casero', price: '€10', photo: '/images/food18.jpg' },
    { name: 'Szarlotka', polish: 'Szarlotka', description: 'Tarta de manzana polaca con canela, servida tibia con nata montada', price: '€5', photo: '/images/food19.jpg' },
  ] as Dish[],
  en: [
    { name: 'Pierogi', polish: 'Pierogi Ruskie', description: 'Homemade dumplings filled with fresh cheese and potato, served with cream and caramelised onion', price: '€9', photo: '/images/food17.jpg' },
    { name: 'Potato Pancakes', polish: 'Placki', description: 'Crispy potato pancakes served with sour cream and smoked salmon', price: '€8', photo: '/images/food18.jpg' },
    { name: 'Chicken Kiev', polish: 'Kotlet Kijowski', description: 'Chicken breast filled with herb butter, breaded and fried to perfection', price: '€14', photo: '/images/food19.jpg' },
    { name: 'Bigos', polish: 'Bigos Myśliwski', description: 'Traditional hunter\'s stew with sauerkraut, dried mushrooms and smoked spices', price: '€11', photo: '/images/food17.jpg' },
    { name: 'Kiełbasa', polish: 'Kiełbasa z Grilla', description: 'Grilled Polish sausage with whole-grain mustard and homemade rye bread', price: '€10', photo: '/images/food18.jpg' },
    { name: 'Szarlotka', polish: 'Szarlotka', description: 'Polish apple pie with cinnamon, served warm with whipped cream', price: '€5', photo: '/images/food19.jpg' },
  ] as Dish[],
  cat: [
    { name: 'Pierogi', polish: 'Pierogi Ruskie', description: 'Dumplings casolans farcits de formatge fresc i patata, servits amb nata i ceba caramel·litzada', price: '€9', photo: '/images/food17.jpg' },
    { name: 'Placki Ziemniaczane', polish: 'Placki', description: 'Creps de patata cruixents servits amb nata agra i salmó fumat', price: '€8', photo: '/images/food18.jpg' },
    { name: 'Pollastre Kíiv', polish: 'Kotlet Kijowski', description: 'Pit de pollastre farcit de mantequilla d\'herbes, arrebossat i fregit al punt', price: '€14', photo: '/images/food19.jpg' },
    { name: 'Bigos', polish: 'Bigos Myśliwski', description: 'Estofat tradicional de caça amb xucrut, bolets secs i espècies fumades', price: '€11', photo: '/images/food17.jpg' },
    { name: 'Kiełbasa', polish: 'Kiełbasa z Grilla', description: 'Salsitxa polonesa a la brasa amb mostassa antiga i pa de sègol casolà', price: '€10', photo: '/images/food18.jpg' },
    { name: 'Szarlotka', polish: 'Szarlotka', description: 'Pastís de poma polonès amb canyella, servit tebi amb nata muntada', price: '€5', photo: '/images/food19.jpg' },
  ] as Dish[],
};

const reviews: Review[] = [
  { author: 'María G.', text: 'Sabores únicos, me encantan los pierogui y estos han sido de los mejores que he probado. Ambiente muy acogedor y personal amabilísimo.', stars: 5 },
  { author: 'Carlos R.', text: 'Un lugar muy cálido, comida casera y elaborada. Los pirogi muy bien hechos, el bigos tenía una profundidad de sabor increíble.', stars: 5 },
  { author: 'Marta L.', text: 'Excelente relación calidad-precio, la comida está súper rica y las raciones generosas. Volveremos seguro.', stars: 5 },
  { author: 'Thomas B.', text: 'Nuestra camarera Julia fue muy amable y paciente explicándonos la comida polaca. El pollo Kiev estaba espectacular.', stars: 5 },
  { author: 'Ana P.', text: 'Como si estuviéramos en Polonia. La szarlotka de postre es una pasada. Sitio pequeño pero con mucho encanto.', stars: 5 },
  { author: 'David M.', text: 'Muy recomendable. Probamos la kiełbasa a la brasa y los placki. Todo fresco y bien hecho. La cerveza polaca es un plus.', stars: 4 },
];

const translations = {
  es: {
    restaurantName: 'Wawel Restó',
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      menu: 'Menú',
      gallery: 'Galería',
      reservations: 'Reservas',
      location: 'Contacto',
    },
    hero: {
      tagline: 'Sabores de Polonia en el corazón de Barcelona',
      subtitle: 'Cocina polaca auténtica en el Eixample',
      cta: 'Reservar Mesa',
      scrollHint: 'Descubre más',
    },
    about: {
      title: 'Nuestra Historia',
      subtitle: 'El alma de Cracovia en Barcelona',
      body1: 'Wawel lleva el nombre del legendario castillo de Cracovia — el corazón de Polonia. En el Eixample de Barcelona, a dos pasos de la Sagrada Família, traemos los sabores auténticos de la cocina polaca: pierogi caseros, bigos de caza y kiełbasa a la brasa.',
      body2: 'Un rincón cálido donde cada plato cuenta una historia de familia. Cerveza artesanal polaca, recetas de generación en generación y la hospitalidad del norte de Europa bajo el sol mediterráneo.',
      badge: '4.7 ⭐ en Google · 514 reseñas',
      cta: 'Reservar Mesa',
    },
    menu: {
      title: 'Nuestra Carta Polaca',
      subtitle: 'Kuchnia polska',
      touchToSee: 'Toca para ver',
      hoverToSee: 'Pasa el ratón',
      dishes: dishes.es,
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Momentos en Wawel',
      videosTitle: 'La vida en Wawel',
      close: 'Cerrar',
    },
    reservations: {
      title: 'Reservar Mesa',
      subtitle: 'Te esperamos en Eixample',
      phoneLabel: 'Teléfono',
      whatsappLabel: 'WhatsApp',
      phone: '+34 934 57 95 50',
      whatsapp: '+34 674 53 98 59',
      hoursTitle: 'Horarios',
      monday: 'Lunes',
      tuesdayFriday: 'Martes – Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
      mondayHours: '18:00 – 23:00',
      weekdayHours: '9:00 – 23:00',
      saturdayHours: '11:00 – 23:00',
      sundayHours: '11:00 – 20:00',
      groupsNote: 'Para grupos de más de 8 personas, llámanos directamente.',
      priceRange: 'Precio medio: €10–20 por persona',
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Opiniones reales de Google',
      rating: '4.7',
      ratingLabel: 'en Google · 514 reseñas',
      googleButton: 'Ver todas las reseñas en Google',
      reviews,
    },
    location: {
      title: 'Dónde Estamos',
      subtitle: 'Eixample · Barcelona',
      address: 'C. de Sicília, 330',
      city: 'Eixample, 08025 Barcelona',
      phone: '+34 934 57 95 50',
      instagram: '@wawelrestobar',
      nearSagrada: 'A 2 minutos de la Sagrada Família',
      transport: 'Metro: Verdaguer (L4/L5)',
      getDirections: 'Cómo llegar',
    },
    footer: {
      tagline: 'El sabor de Polonia en Barcelona',
      rights: 'Todos los derechos reservados',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      madeWith: 'Hecho con ❤️ en Barcelona',
    },
  },

  en: {
    restaurantName: 'Wawel Restó',
    nav: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      gallery: 'Gallery',
      reservations: 'Reservations',
      location: 'Contact',
    },
    hero: {
      tagline: 'Polish flavours in the heart of Barcelona',
      subtitle: 'Authentic Polish cuisine in Eixample',
      cta: 'Book a Table',
      scrollHint: 'Discover more',
    },
    about: {
      title: 'Our Story',
      subtitle: 'The soul of Kraków in Barcelona',
      body1: 'Wawel takes its name from the legendary castle of Kraków — the heart of Poland. In the Eixample district of Barcelona, steps from Sagrada Família, we bring authentic Polish flavours: handmade pierogi, hunter\'s bigos and grilled kiełbasa.',
      body2: 'A warm corner where every dish tells a family story. Polish craft beer, recipes passed down through generations and the hospitality of northern Europe under the Mediterranean sun.',
      badge: '4.7 ⭐ on Google · 514 reviews',
      cta: 'Book a Table',
    },
    menu: {
      title: 'Our Polish Menu',
      subtitle: 'Kuchnia polska',
      touchToSee: 'Tap to see',
      hoverToSee: 'Hover to see',
      dishes: dishes.en,
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments at Wawel',
      videosTitle: 'Life at Wawel',
      close: 'Close',
    },
    reservations: {
      title: 'Book a Table',
      subtitle: 'We await you in Eixample',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      phone: '+34 934 57 95 50',
      whatsapp: '+34 674 53 98 59',
      hoursTitle: 'Opening Hours',
      monday: 'Monday',
      tuesdayFriday: 'Tuesday – Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      mondayHours: '6:00 PM – 11:00 PM',
      weekdayHours: '9:00 AM – 11:00 PM',
      saturdayHours: '11:00 AM – 11:00 PM',
      sundayHours: '11:00 AM – 8:00 PM',
      groupsNote: 'For groups larger than 8, please call us directly.',
      priceRange: 'Average price: €10–20 per person',
    },
    testimonials: {
      title: 'What our guests say',
      subtitle: 'Real Google reviews',
      rating: '4.7',
      ratingLabel: 'on Google · 514 reviews',
      googleButton: 'See all Google reviews',
      reviews,
    },
    location: {
      title: 'Find Us',
      subtitle: 'Eixample · Barcelona',
      address: 'C. de Sicília, 330',
      city: 'Eixample, 08025 Barcelona',
      phone: '+34 934 57 95 50',
      instagram: '@wawelrestobar',
      nearSagrada: '2 minutes from Sagrada Família',
      transport: 'Metro: Verdaguer (L4/L5)',
      getDirections: 'Get directions',
    },
    footer: {
      tagline: 'The taste of Poland in Barcelona',
      rights: 'All rights reserved',
      privacy: 'Privacy',
      cookies: 'Cookies',
      madeWith: 'Made with ❤️ in Barcelona',
    },
  },

  cat: {
    restaurantName: 'Wawel Restó',
    nav: {
      home: 'Inici',
      about: 'Nosaltres',
      menu: 'Carta',
      gallery: 'Galeria',
      reservations: 'Reserves',
      location: 'Contacte',
    },
    hero: {
      tagline: 'Sabors de Polònia al cor de Barcelona',
      subtitle: 'Cuina polonesa autèntica a l\'Eixample',
      cta: 'Reservar Taula',
      scrollHint: 'Descobreix més',
    },
    about: {
      title: 'La Nostra Història',
      subtitle: 'L\'ànima de Cracòvia a Barcelona',
      body1: 'Wawel porta el nom del llegendari castell de Cracòvia — el cor de Polònia. A l\'Eixample de Barcelona, a dos minuts de la Sagrada Família, portem els sabors autèntics de la cuina polonesa: pierogi casolans, bigos de caça i kiełbasa a la brasa.',
      body2: 'Un racó càlid on cada plat explica una història de família. Cervesa artesana polonesa, receptes de generació en generació i l\'hospitalitat del nord d\'Europa sota el sol mediterrani.',
      badge: '4.7 ⭐ a Google · 514 ressenyes',
      cta: 'Reservar Taula',
    },
    menu: {
      title: 'La Nostra Carta Polonesa',
      subtitle: 'Kuchnia polska',
      touchToSee: 'Toca per veure',
      hoverToSee: 'Passa el ratolí',
      dishes: dishes.cat,
    },
    gallery: {
      title: 'Galeria',
      subtitle: 'Moments a Wawel',
      videosTitle: 'La vida a Wawel',
      close: 'Tancar',
    },
    reservations: {
      title: 'Reservar Taula',
      subtitle: 'T\'esperem a l\'Eixample',
      phoneLabel: 'Telèfon',
      whatsappLabel: 'WhatsApp',
      phone: '+34 934 57 95 50',
      whatsapp: '+34 674 53 98 59',
      hoursTitle: 'Horaris',
      monday: 'Dilluns',
      tuesdayFriday: 'Dimarts – Divendres',
      saturday: 'Dissabte',
      sunday: 'Diumenge',
      mondayHours: '18:00 – 23:00',
      weekdayHours: '9:00 – 23:00',
      saturdayHours: '11:00 – 23:00',
      sundayHours: '11:00 – 20:00',
      groupsNote: 'Per a grups de més de 8 persones, truca\'ns directament.',
      priceRange: 'Preu mitjà: €10–20 per persona',
    },
    testimonials: {
      title: 'El que diuen els nostres clients',
      subtitle: 'Opinions reals de Google',
      rating: '4.7',
      ratingLabel: 'a Google · 514 ressenyes',
      googleButton: 'Veure totes les ressenyes a Google',
      reviews,
    },
    location: {
      title: 'On Som',
      subtitle: 'Eixample · Barcelona',
      address: 'C. de Sicília, 330',
      city: 'Eixample, 08025 Barcelona',
      phone: '+34 934 57 95 50',
      instagram: '@wawelrestobar',
      nearSagrada: 'A 2 minuts de la Sagrada Família',
      transport: 'Metro: Verdaguer (L4/L5)',
      getDirections: 'Com arribar-hi',
    },
    footer: {
      tagline: 'El sabor de Polònia a Barcelona',
      rights: 'Tots els drets reservats',
      privacy: 'Privacitat',
      cookies: 'Cookies',
      madeWith: 'Fet amb ❤️ a Barcelona',
    },
  },
};

export type Translations = typeof translations.es;

export function t(language: Language): Translations {
  return translations[language] as unknown as Translations;
}

export default translations;
