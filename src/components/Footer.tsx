'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

function CastleSilhouette() {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ height: '45px', width: 'auto' }}
    >
      <line x1="0" y1="78" x2="72" y2="78" stroke="#C8822A" strokeWidth="1" />
      <path d="M72 78 L72 52 L75 52 L75 44 L80 44 L80 52 L85 52 L85 44 L90 44 L90 52 L95 52 L95 44 L100 44 L100 52 L104 52 L104 78 Z" stroke="#C8822A" strokeWidth="1.2" fill="none" />
      <rect x="104" y="62" width="18" height="16" stroke="#C8822A" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M122 78 L122 55 L125 55 L125 46 L132 46 L132 55 L139 55 L139 46 L146 46 L146 55 L149 55 L149 78 Z" stroke="#C8822A" strokeWidth="1.2" fill="none" />
      <rect x="149" y="60" width="14" height="18" stroke="#C8822A" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M163 78 L163 14 L166 14 L166 6 L173 6 L173 2 L180 2 L180 6 L187 6 L187 2 L194 2 L194 6 L201 6 L201 2 L208 2 L208 6 L215 6 L215 14 L218 14 L218 78 Z" stroke="#C8822A" strokeWidth="1.4" fill="none" />
      <rect x="218" y="60" width="14" height="18" stroke="#C8822A" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M232 78 L232 55 L235 55 L235 46 L242 46 L242 55 L249 55 L249 46 L256 46 L256 55 L259 55 L259 78 Z" stroke="#C8822A" strokeWidth="1.2" fill="none" />
      <rect x="259" y="62" width="18" height="16" stroke="#C8822A" strokeWidth="1" fill="none" opacity="0.7" />
      <path d="M277 78 L277 52 L281 52 L281 44 L286 44 L286 52 L291 52 L291 44 L296 44 L296 52 L301 52 L301 44 L306 44 L306 52 L310 52 L310 78 Z" stroke="#C8822A" strokeWidth="1.2" fill="none" />
      <line x1="310" y1="78" x2="320" y2="78" stroke="#C8822A" strokeWidth="1" />
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

  return (
    <footer
      style={{
        backgroundColor: '#1C1612',
        borderTop: '1px solid #C8822A',
        padding: '60px clamp(24px, 5vw, 48px) 40px',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0',
        }}
      >

        {/* 1. Castle silhouette */}
        <div style={{ marginBottom: '20px' }}>
          <CastleSilhouette />
        </div>

        {/* 2. Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Wawel Restó — volver al inicio"
          style={{
            position: 'relative',
            width: '200px',
            height: '110px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            marginBottom: '16px',
            transition: 'opacity 180ms ease-out',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          <Image
            src="/images/Logo.png"
            alt="Wawel Restó"
            fill
            className="object-contain"
            style={{ filter: 'brightness(0.9)' }}
          />
        </button>

        {/* 3. Tagline */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
          fontSize: '16px',
          color: 'rgba(242,232,213,0.8)',
          marginBottom: '20px',
        }}>
          {tr.footer.tagline}
        </p>

        {/* 4. Amber divider */}
        <div
          style={{ width: '60px', height: '1px', backgroundColor: '#C8822A', margin: '0 auto 20px' }}
          aria-hidden="true"
        />

        {/* 5. Address */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'rgba(242,232,213,0.7)',
          marginBottom: '8px',
        }}>
          C. de Sicília, 330 · Eixample · 08025 Barcelona
        </p>

        {/* 6. Phone */}
        <a
          href="tel:+34934579550"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 500,
            color: '#C8822A',
            textDecoration: 'none',
            marginBottom: '20px',
            display: 'block',
            transition: 'opacity 180ms ease-out',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.72'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          +34 934 57 95 50
        </a>

        {/* 7. Nav links */}
        <nav
          aria-label="Footer navigation"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4px 16px', marginBottom: '16px' }}
        >
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(242,232,213,0.6)',
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '4px 0',
                minHeight: '28px',
                transition: 'color 180ms ease-out',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C8822A'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.6)'; }}
            >
              {tr.nav[section]}
            </button>
          ))}
        </nav>

        {/* 8. Social links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <a
            href="https://instagram.com/wawelrestobar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Wawel Restó"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C8822A',
              textDecoration: 'none',
              transition: 'opacity 180ms ease-out',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.65'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Instagram @wawelrestobar
          </a>
          <span style={{ color: 'rgba(200,130,42,0.4)', fontSize: '11px' }} aria-hidden="true">·</span>
          <a
            href="https://www.google.com/maps/place/Wawel+Restobar/@41.4031246,2.1714482,19z/data=!3m1!5s0x12a4a2c252dd8b9f:0xa91e31ef991b20d4!4m6!3m5!1s0x12a4a364b350d22d:0x682e3cc4eae0a541!8m2!3d41.4032562!4d2.1715731!16s%2Fg%2F11lk1p5b0k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Wawel Restó en Google Maps"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#C8822A',
              textDecoration: 'none',
              transition: 'opacity 180ms ease-out',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.65'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Google Maps
          </a>
        </div>

        {/* 9. Copyright */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '10px',
          color: 'rgba(242,232,213,0.4)',
        }}>
          © {year} Wawel Restó · {tr.footer.rights} · {tr.footer.madeWith}
        </p>

      </div>
    </footer>
  );
}
