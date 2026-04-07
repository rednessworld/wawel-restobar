import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wawel Restó — Cocina Polaca en Barcelona',
  description:
    'Restaurante polaco auténtico en el Eixample de Barcelona. Pierogi, Bigos, Kiełbasa y cerveza artesanal polaca. A 2 minutos de la Sagrada Família. +34 934 57 95 50',
  openGraph: {
    title: 'Wawel Restó — Cocina Polaca en Barcelona',
    description:
      'Cocina polaca auténtica en el Eixample. Pierogi, Bigos y cerveza polaca artesanal.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <a href="#about" className="skip-to-content">
          Saltar al contenido
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
