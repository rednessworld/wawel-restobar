'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function HeroSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const shouldReduceMotion = useReducedMotion();

  const scrollToReservations = () => {
    document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      aria-label="Inicio"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/Hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay: deep vignette bottom + subtle top */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(28,22,18,0.35) 0%, rgba(28,22,18,0.05) 35%, rgba(28,22,18,0.05) 55%, rgba(28,22,18,0.75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Centered editorial content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
          padding: '0 24px',
          textAlign: 'center',
          maxWidth: '900px',
        }}
      >
        {/* Eyebrow label */}
        <motion.p
          {...fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
          className="type-eyebrow"
          style={{ color: 'rgba(242,232,213,0.6)' }}
        >
          Wawel Restó · Barcelona · Eixample
        </motion.p>

        {/* Main editorial headline — Cormorant Garamond Italic, large */}
        <motion.h1
          {...fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const, delay: 0.25 }}
          style={{
            color: '#F2E8D5',
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            margin: 0,
          }}
        >
          El alma de Cracovia,
          <br />
          en el corazón de Barcelona
        </motion.h1>

        {/* Thin amber rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as const, delay: 0.55 }}
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-accent)',
            transformOrigin: 'center',
          }}
          aria-hidden="true"
        />

        {/* CTA — outlined ghost button */}
        <motion.button
          {...fadeUp}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.7 }}
          onClick={scrollToReservations}
          style={{
            background: 'transparent',
            border: '1px solid rgba(242,232,213,0.65)',
            color: '#F2E8D5',
            padding: 'clamp(10px, 1.2vw, 14px) clamp(28px, 4vw, 48px)',
            fontSize: 'clamp(10px, 1.1vw, 12px)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            borderRadius: '1px',
            transition: 'background 220ms ease-out, border-color 220ms ease-out, color 220ms ease-out, transform 160ms ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(242,232,213,0.12)';
            e.currentTarget.style.borderColor = 'rgba(242,232,213,0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(242,232,213,0.65)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.97)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {tr.hero.cta}
        </motion.button>
      </div>
    </section>
  );
}
