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

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const tr = t(language);

  // pinned: false = bottom, true = top (after scrolling past hero)
  const [pinned, setPinned] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const languages: Language[] = ['es', 'en', 'cat'];

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const heroH = window.innerHeight;

      // Transition from bottom to top when scrolled past hero
      setPinned(y > heroH * 0.8);

      // Hide/show on scroll direction (only when pinned to top)
      if (y > heroH * 0.8) {
        setVisible(y < lastY || y < heroH);
      } else {
        setVisible(true);
      }

      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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

  // Shared link style
  const linkStyle: React.CSSProperties = {
    color: 'rgba(242,232,213,0.75)',
    fontFamily: 'var(--font-heading)',
    fontStyle: 'italic',
    fontSize: 'clamp(13px, 1.1vw, 16px)',
    letterSpacing: '0.05em',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 8px',
    transition: 'color 180ms ease-out',
    whiteSpace: 'nowrap',
  };

  if (!loaded) return null;

  return (
    <>
      {/* ── Main Navbar ──────────────────────────────────────────────────── */}
      <motion.nav
        initial={false}
        animate={{
          y: visible ? 0 : (pinned ? -80 : 80),
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] as const }}
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          zIndex: 50,
          // Bottom when over hero, top when scrolled
          ...(pinned
            ? { top: 0, bottom: 'auto' }
            : { bottom: 0, top: 'auto' }
          ),
        }}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* Wood texture bar */}
        <div
          className="texture-wood"
          style={{
            position: 'relative',
            borderTop: pinned ? 'none' : '1px solid rgba(200,130,42,0.2)',
            borderBottom: pinned ? '1px solid rgba(200,130,42,0.2)' : 'none',
            boxShadow: pinned
              ? '0 2px 24px rgba(0,0,0,0.45)'
              : '0 -4px 32px rgba(0,0,0,0.5)',
          }}
        >
          {/* Desktop layout */}
          <div
            className="hidden lg:flex"
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 40px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              height: '64px',
            }}
          >
            {/* Left links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'flex-end', paddingRight: '48px' }}>
              {LEFT_LINKS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.75)'; }}
                >
                  {tr.nav[section]}
                </button>
              ))}
            </div>

            {/* Center logo — elevated medallion */}
            <div
              style={{
                position: 'relative',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Medallion ring */}
              <div
                style={{
                  position: 'absolute',
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  backgroundColor: '#2C1810',
                  border: '1px solid rgba(200,130,42,0.35)',
                  boxShadow: '0 0 0 1px rgba(200,130,42,0.12), 0 4px 20px rgba(0,0,0,0.6)',
                  bottom: pinned ? '-12px' : '12px',
                  transition: 'bottom 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
                }}
                aria-hidden="true"
              />
              <button
                onClick={handleLogoClick}
                aria-label="Wawel Restó — volver al inicio"
                style={{
                  position: 'relative',
                  width: '72px',
                  height: '72px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  bottom: pinned ? '-8px' : '14px',
                  transition: 'bottom 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/Logo.png"
                  alt="Wawel Restó"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  priority
                />
              </button>
            </div>

            {/* Right links + language */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'flex-start', paddingLeft: '48px' }}>
              {RIGHT_LINKS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.75)'; }}
                >
                  {tr.nav[section]}
                </button>
              ))}

              {/* Divider */}
              <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(200,130,42,0.2)', margin: '0 8px' }} aria-hidden="true" />

              {/* Language switcher */}
              <div style={{ display: 'flex', gap: '2px' }}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      padding: '3px 6px',
                      border: 'none',
                      borderRadius: '1px',
                      cursor: 'pointer',
                      transition: 'color 180ms ease-out, background 180ms ease-out',
                      color: language === lang ? 'var(--color-accent)' : 'rgba(242,232,213,0.35)',
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

          {/* Mobile layout */}
          <div
            className="flex lg:hidden"
            style={{
              padding: '0 20px',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '56px',
            }}
          >
            {/* Mobile logo */}
            <button
              onClick={handleLogoClick}
              aria-label="Wawel Restó"
              style={{ position: 'relative', width: '52px', height: '40px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <Image
                src="/images/Logo.png"
                alt="Wawel Restó"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
                priority
              />
            </button>

            {/* Language + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0 6px',
                      minHeight: '44px',
                      minWidth: '36px',
                      border: 'none',
                      borderRadius: '1px',
                      cursor: 'pointer',
                      color: language === lang ? 'var(--color-accent)' : 'rgba(242,232,213,0.35)',
                      backgroundColor: 'transparent',
                    }}
                    aria-pressed={language === lang}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px',
                  minWidth: '44px',
                  minHeight: '44px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    height: '1.5px',
                    width: '22px',
                    backgroundColor: 'rgba(242,232,213,0.85)',
                    transition: 'transform 280ms ease-out, opacity 200ms',
                    transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    height: '1.5px',
                    width: '22px',
                    backgroundColor: 'rgba(242,232,213,0.85)',
                    opacity: menuOpen ? 0 : 1,
                    transition: 'opacity 200ms',
                  }}
                />
                <span
                  style={{
                    display: 'block',
                    height: '1.5px',
                    width: '22px',
                    backgroundColor: 'rgba(242,232,213,0.85)',
                    transition: 'transform 280ms ease-out',
                    transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile fullscreen drawer — slides from bottom ─────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] as const }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              paddingBottom: '80px',
            }}
            className="texture-wood"
          >
            {/* Top amber border */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(200,130,42,0.2)' }} aria-hidden="true" />

            {([...LEFT_LINKS, ...RIGHT_LINKS] as NavSection[]).map((section, i) => (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.4, ease: [0.23, 1, 0.32, 1] as const }}
                onClick={() => scrollToSection(section)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'rgba(242,232,213,0.85)',
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(28px, 7vw, 40px)',
                  letterSpacing: '0.04em',
                  padding: '10px 24px',
                  minHeight: '52px',
                  transition: 'color 180ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.85)'; }}
              >
                {tr.nav[section]}
              </motion.button>
            ))}

            {/* Reservation CTA */}
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
                fontFamily: 'var(--font-body)',
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
