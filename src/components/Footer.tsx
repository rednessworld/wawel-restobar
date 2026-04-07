'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import WawelDivider from '@/components/ui/WawelDivider';

// Simple SVG Wawel castle silhouette — sepia ink on parchment
function CastleIllustration() {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '200px', height: 'auto', opacity: 0.22 }}
    >
      {/* Left horizontal line */}
      <line x1="0" y1="78" x2="72" y2="78" stroke="#8B6914" strokeWidth="1" />
      {/* Left small tower */}
      <path d="M72 78 L72 52 L75 52 L75 44 L80 44 L80 52 L85 52 L85 44 L90 44 L90 52 L95 52 L95 44 L100 44 L100 52 L104 52 L104 78 Z" stroke="#8B6914" strokeWidth="1.2" fill="none" />
      {/* Left wall */}
      <rect x="104" y="62" width="18" height="16" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Left inner tower */}
      <path d="M122 78 L122 55 L125 55 L125 46 L132 46 L132 55 L139 55 L139 46 L146 46 L146 55 L149 55 L149 78 Z" stroke="#8B6914" strokeWidth="1.2" fill="none" />
      {/* Left wall to center */}
      <rect x="149" y="60" width="14" height="18" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.6" />
      {/* CENTER TALL TOWER */}
      <path d="M163 78 L163 14 L166 14 L166 6 L173 6 L173 2 L180 2 L180 6 L187 6 L187 2 L194 2 L194 6 L201 6 L201 2 L208 2 L208 6 L215 6 L215 14 L218 14 L218 78 Z" stroke="#8B6914" strokeWidth="1.4" fill="none" />
      {/* Right wall */}
      <rect x="218" y="60" width="14" height="18" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Right inner tower */}
      <path d="M232 78 L232 55 L235 55 L235 46 L242 46 L242 55 L249 55 L249 46 L256 46 L256 55 L259 55 L259 78 Z" stroke="#8B6914" strokeWidth="1.2" fill="none" />
      {/* Right wall */}
      <rect x="259" y="62" width="18" height="16" stroke="#8B6914" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Right small tower */}
      <path d="M277 78 L277 52 L281 52 L281 44 L286 44 L286 52 L291 52 L291 44 L296 44 L296 52 L301 52 L301 44 L306 44 L306 52 L310 52 L310 78 Z" stroke="#8B6914" strokeWidth="1.2" fill="none" />
      {/* Right horizontal line */}
      <line x1="310" y1="78" x2="320" y2="78" stroke="#8B6914" strokeWidth="1" />
    </svg>
  );
}

const NAV_SECTIONS = ['about', 'menu', 'gallery', 'reservations', 'location'] as const;

export default function Footer() {
  const { language } = useLanguage();
  const tr = t(language);
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="texture-warm" style={{ paddingTop: '64px', paddingBottom: 'clamp(80px, 12vw, 120px)' }}>
      {/* Castle divider at top */}
      <div style={{ marginBottom: '48px' }}>
        <WawelDivider color="#8B6914" opacity={0.28} />
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>

        {/* Logo — dark stamp treatment */}
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={handleLogoClick}
          aria-label="Wawel Restó — volver al inicio"
          style={{
            position: 'relative',
            width: '120px',
            height: '64px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '16px',
          }}
        >
          <Image
            src="/images/Logo.png"
            alt="Wawel Restó"
            fill
            className="object-contain"
            style={{ filter: 'sepia(1) saturate(0.8) brightness(0.35)' }}
          />
        </motion.button>

        {/* Castle illustration below logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '28px' }}
        >
          <CastleIllustration />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: 'rgba(28,22,18,0.4)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            textAlign: 'center',
            marginBottom: '36px',
          }}
        >
          {tr.footer.tagline}
        </motion.p>

        {/* Thin amber rule */}
        <div style={{ width: '48px', height: '1px', backgroundColor: 'rgba(139,105,20,0.3)', marginBottom: '32px' }} aria-hidden="true" />

        {/* Address block — centered editorial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ textAlign: 'center', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '6px' }}
        >
          <p style={{ color: 'rgba(28,22,18,0.6)', fontFamily: 'var(--font-body)', fontSize: '14px' }}>
            C. de Sicília, 330 · Eixample, 08025 Barcelona
          </p>
          <a
            href="tel:+34934579550"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '18px', textDecoration: 'none', transition: 'opacity 180ms' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            +34 934 57 95 50
          </a>
          <p style={{ color: 'rgba(28,22,18,0.4)', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
            Lunes 18–23h · Martes–Viernes 9–23h · Sábado 11–23h · Domingo 11–20h
          </p>
        </motion.div>

        {/* Nav links */}
        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-label="Footer navigation"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 20px', marginBottom: '28px' }}
        >
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(28,22,18,0.45)',
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '4px 0',
                transition: 'color 180ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(28,22,18,0.45)'; }}
            >
              {tr.nav[section]}
            </button>
          ))}
        </motion.nav>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 20px', marginBottom: '36px' }}
        >
          <a
            href="https://instagram.com/wawelrestobar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Wawel Restó"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '12px', textDecoration: 'none', transition: 'opacity 180ms' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Instagram @wawelrestobar
          </a>
          <a
            href="https://www.google.com/maps/place/Wawel+Restobar/@41.4032562,2.1715731,19z"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wawel Restó en Google Maps"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '12px', textDecoration: 'none', transition: 'opacity 180ms' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Google Maps
          </a>
        </motion.div>

        {/* Bottom rule + copyright */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(139,105,20,0.18)', marginBottom: '20px' }} aria-hidden="true" />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(28,22,18,0.28)', fontFamily: 'var(--font-body)', fontSize: '11px' }}>
            © {year} Wawel Restó · {tr.footer.rights}
          </p>
          <p style={{ color: 'rgba(28,22,18,0.28)', fontFamily: 'var(--font-body)', fontSize: '11px' }}>
            {tr.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
