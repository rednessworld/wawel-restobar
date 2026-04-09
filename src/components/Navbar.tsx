'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import type { Language } from '@/context/LanguageContext';

type NavSection = 'about' | 'menu' | 'gallery' | 'reservations' | 'location';

const LEFT_LINKS: NavSection[] = ['about', 'menu', 'gallery'];
const RIGHT_LINKS: NavSection[] = ['reservations', 'location'];

const WOOD_STYLE: React.CSSProperties = {
  backgroundColor: '#2C1810',
  backgroundImage: [
    'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 3px)',
    'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,0,0,0.08) 40px, rgba(0,0,0,0.08) 41px)',
  ].join(', '),
};

const LINK_STYLE: React.CSSProperties = {
  color: '#F2E8D5',
  fontFamily: 'var(--font-navbar)',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '11px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '0 14px',
  height: '56px',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'color 200ms ease-out',
  whiteSpace: 'nowrap',
};

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const tr = t(language);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const languages: Language[] = ['es', 'en', 'cat', 'pl'];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    setLoaded(true);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollToSection = useCallback((section: string) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  if (!loaded) return null;

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '16px',
          zIndex: 9999,
          pointerEvents: 'none',
          width: '960px',
          maxWidth: 'calc(100vw - 24px)',
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* ── Centered floating bar ── */}
        <div
          style={{
            ...WOOD_STYLE,
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible',
            pointerEvents: 'auto',
            border: '1px solid rgba(200,130,42,0.25)',
            boxShadow: '0 -2px 40px rgba(0,0,0,0.55), 0 4px 24px rgba(0,0,0,0.4)',
          }}
        >
          {/* ── Medallion — floats above bar center ── */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '0%',
              transform: 'translate(-50%, -50%)',
              zIndex: 20,
              pointerEvents: 'auto',
            }}
          >
            <button
              onClick={handleLogoClick}
              aria-label="Wawel Restó — volver al inicio"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '2px solid #C8822A',
                boxShadow: '0 0 0 4px rgba(200,130,42,0.15), 0 6px 24px rgba(0,0,0,0.65)',
                ...WOOD_STYLE,
                cursor: 'pointer',
                padding: 0,
                overflow: 'hidden',
                flexShrink: 0,
                transition: 'box-shadow 200ms ease-out, transform 160ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(200,130,42,0.35), 0 8px 28px rgba(0,0,0,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 4px rgba(200,130,42,0.15), 0 6px 24px rgba(0,0,0,0.65)';
              }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.96)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <div style={{ position: 'relative', width: '100px', height: '100px', padding: '10px' }}>
                <Image
                  src="/images/LogoNavbar.png"
                  alt="Wawel Restó"
                  fill
                  style={{ objectFit: 'contain', filter: 'brightness(0.75)', padding: '10px' }}
                  priority
                />
              </div>
            </button>
          </div>

          {/* ── DESKTOP layout ── */}
          {!isMobile && (
            <div
              style={{
                padding: '0 24px',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                alignItems: 'center',
                height: '56px',
              }}
            >
              {/* Left: Nosotros · Menú · Galería */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', paddingRight: '52px' }}>
                {LEFT_LINKS.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    style={LINK_STYLE}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8822A'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#F2E8D5'; }}
                  >
                    {tr.nav[section]}
                  </button>
                ))}
              </div>

              {/* Center: 100px medallion placeholder */}
              <div style={{ width: '100px' }} aria-hidden="true" />

              {/* Right: Reservas · Contacto · ES EN CAT PL */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '52px' }}>
                {RIGHT_LINKS.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    style={LINK_STYLE}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C8822A'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#F2E8D5'; }}
                  >
                    {tr.nav[section]}
                  </button>
                ))}

                {/* Divider */}
                <div
                  style={{ width: '1px', height: '14px', backgroundColor: 'rgba(200,130,42,0.3)', margin: '0 8px', flexShrink: 0 }}
                  aria-hidden="true"
                />

                {/* Language switcher */}
                <div style={{ display: 'flex', gap: '2px' }}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      style={{
                        fontFamily: 'var(--font-navbar)',
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        padding: '0 6px',
                        height: '44px',
                        minWidth: '32px',
                        border: 'none',
                        borderRadius: '1px',
                        cursor: 'pointer',
                        transition: 'color 200ms ease-out, background 200ms ease-out',
                        color: language === lang ? '#C8822A' : 'rgba(242,232,213,0.4)',
                        backgroundColor: language === lang ? 'rgba(200,130,42,0.1)' : 'transparent',
                      }}
                      aria-pressed={language === lang}
                      aria-label={`Cambiar idioma a ${lang.toUpperCase()}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── MOBILE layout ── */}
          {isMobile && (
            <div
              style={{
                padding: '0 12px 0 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '56px',
              }}
            >
              {/* Left spacer — empty for symmetry with hamburger on right */}
              <div style={{ width: '44px' }} aria-hidden="true" />

              {/* Right: ES + PL language + hamburger */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <div style={{ display: 'flex' }}>
                  {(['es', 'pl'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      style={{
                        fontFamily: 'var(--font-navbar)',
                        fontSize: '10px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '0 6px',
                        minHeight: '44px',
                        minWidth: '32px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: language === lang ? '#C8822A' : 'rgba(242,232,213,0.35)',
                        transition: 'color 200ms ease-out',
                      }}
                      aria-pressed={language === lang}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                  aria-expanded={menuOpen}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '8px 4px 8px 8px', minWidth: '44px', minHeight: '44px',
                    display: 'flex', flexDirection: 'column', gap: '5px',
                    alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  {[
                    menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
                    null,
                    menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                  ].map((transform, i) => (
                    <span
                      key={i}
                      style={{
                        display: 'block', height: '1.5px', width: '22px',
                        backgroundColor: 'rgba(242,232,213,0.85)',
                        transition: transform !== null ? 'transform 280ms ease-out' : 'opacity 200ms',
                        ...(transform !== null ? { transform } : { opacity: menuOpen ? 0 : 1 }),
                      }}
                    />
                  ))}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ── Mobile fullscreen drawer ── */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] as const }}
            style={{
              ...WOOD_STYLE,
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              paddingBottom: '80px',
            }}
          >
            <div
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(200,130,42,0.25)' }}
              aria-hidden="true"
            />

            {([...LEFT_LINKS, ...RIGHT_LINKS] as NavSection[]).map((section, i) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(242,232,213,0.85)',
                  fontFamily: 'var(--font-heading)', fontStyle: 'italic',
                  fontSize: 'clamp(28px, 7vw, 40px)',
                  letterSpacing: '0.04em',
                  padding: '10px 24px', minHeight: '52px',
                  transition: 'color 200ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C8822A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.85)'; }}
              >
                {tr.nav[section]}
              </motion.button>
            ))}

            <motion.a
              href="tel:+34934579550"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: '20px',
                border: '1px solid rgba(242,232,213,0.45)',
                color: '#F2E8D5',
                padding: '12px 40px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-navbar)',
                textDecoration: 'none',
                borderRadius: '1px',
              }}
            >
              {tr.hero.cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
