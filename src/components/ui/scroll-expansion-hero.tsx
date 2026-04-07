'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

interface ScrollExpansionHeroProps {
  bgImageSrc?: string;
  mediaSrc?: string;
  logoSrc?: string;
}

export default function ScrollExpansionHero({
  bgImageSrc,
  mediaSrc,
  logoSrc,
}: ScrollExpansionHeroProps) {
  const { language } = useLanguage();
  const tr = t(language);

  const panelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const displayRef = useRef<number>(0);
  const scrollProgressRef = useRef<number>(0);

  const animate = useCallback(() => {
    displayRef.current += (scrollProgressRef.current - displayRef.current) * 0.08;
    const d = displayRef.current;
    const isMobile = window.innerWidth < 768;

    // Container width/height — lerp from start to end
    const startW = isMobile ? 80 : 35;
    const endW   = isMobile ? 95 : 85;
    const startH = isMobile ? 55 : 55;
    const endH   = isMobile ? 72 : 75;
    const unit   = isMobile ? 'vw' : 'vh';

    const w = startW + (endW - startW) * d;
    const h = startH + (endH - startH) * d;
    const br = 12 * (1 - d);

    if (containerRef.current) {
      containerRef.current.style.width = `${w}vw`;
      containerRef.current.style.height = `${h}${unit}`;
      containerRef.current.style.borderRadius = `${br}px`;
    }

    // Logo opacity
    if (logoRef.current) {
      logoRef.current.style.opacity = String(0.7 + d * 0.3);
    }

    // Background blur + slight scale to avoid blur edges
    if (bgRef.current) {
      bgRef.current.style.filter = `blur(${d * 8}px)`;
      bgRef.current.style.transform = `scale(${1 + d * 0.06})`;
    }

    // Scroll hint fade
    if (hintRef.current) {
      hintRef.current.style.opacity = String(Math.max(0, 1 - d * 4));
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const handleReset = useCallback(() => {
    scrollProgressRef.current = 0;
    displayRef.current = 0;
    if (panelRef.current) {
      panelRef.current.style.opacity = '1';
      panelRef.current.style.pointerEvents = 'auto';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      scrollProgressRef.current = Math.min(
        window.scrollY / (window.innerHeight * 0.75),
        1
      );

      if (panelRef.current) {
        if (window.scrollY > window.innerHeight) {
          panelRef.current.style.opacity = '0';
          panelRef.current.style.pointerEvents = 'none';
        } else {
          panelRef.current.style.opacity = '1';
          panelRef.current.style.pointerEvents = 'auto';
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resetHero', handleReset);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resetHero', handleReset);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate, handleReset]);

  const scrollToReservations = () => {
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Fixed fullscreen hero panel ─────────────────────────────────── */}
      <div
        ref={panelRef}
        id="hero"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10,
          transition: 'opacity 0.4s ease',
        }}
      >
        {/* Blurred background */}
        {bgImageSrc && (
          <div
            ref={bgRef}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${bgImageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transformOrigin: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(28, 22, 18, 0.55)',
              }}
            />
          </div>
        )}

        {/* ── Expanding center container — ALL content lives here ──────── */}
        <div
          ref={containerRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',   // MUST keep overflow hidden
            width: '35vw',
            height: '55vh',
            borderRadius: '12px',
          }}
        >
          {/* Center photo — plain <img>, never <Image> for hero center */}
          {mediaSrc && (
            <img
              src={mediaSrc}
              alt="Wawel Restó interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          )}

          {/* Bottom gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(28,22,18,0.90) 0%, rgba(28,22,18,0.35) 45%, transparent 70%)',
            }}
          />

          {/* Logo — inside containerRef */}
          {logoSrc && (
            <img
              ref={logoRef}
              src={logoSrc}
              alt="Wawel Restó"
              style={{
                position: 'absolute',
                top: '32%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(100px, 14vw, 200px)',
                objectFit: 'contain',
                opacity: 0.7,
                filter: 'brightness(0) invert(1)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Tagline + CTA — inside containerRef, NO background color */}
          <div
            style={{
              position: 'absolute',
              bottom: '15%',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              background: 'transparent',
              padding: '0 24px',
            }}
          >
            <p
              style={{
                color: 'rgba(242, 232, 213, 0.92)',
                fontSize: 'clamp(13px, 1.8vw, 22px)',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
                textAlign: 'center',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {tr.hero.tagline}
            </p>
            <button
              onClick={scrollToReservations}
              style={{
                background: 'var(--color-accent)',
                color: '#F2E8D5',
                border: 'none',
                padding: 'clamp(8px, 1vw, 12px) clamp(20px, 3vw, 36px)',
                fontSize: 'clamp(10px, 1.1vw, 13px)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                borderRadius: '2px',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {tr.hero.cta}
            </button>
          </div>
        </div>
        {/* ── end containerRef ─────────────────────────────────────────── */}

        {/* Scroll hint — outside containerRef but inside panel. transparent bg */}
        <div
          ref={hintRef}
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            zIndex: 20,
          }}
        >
          <span
            style={{
              color: 'rgba(242, 232, 213, 0.55)',
              fontSize: '10px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-body)',
            }}
          >
            {tr.hero.scrollHint}
          </span>
          {/* Bouncing chevron arrow */}
          <div className="animate-bounce-down">
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRight: '1.5px solid rgba(242,232,213,0.5)',
                borderBottom: '1.5px solid rgba(242,232,213,0.5)',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        </div>
      </div>
      {/* ── end fixed panel ──────────────────────────────────────────────── */}

      {/* Spacer — gives the hero its scrollable height */}
      <div style={{ height: '100vh', background: 'transparent' }} />
    </>
  );
}
