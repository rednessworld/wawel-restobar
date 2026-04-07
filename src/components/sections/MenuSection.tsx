'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import type { Dish } from '@/lib/translations';
import {
  InkPierogi,
  InkWheatSheaf,
  InkCastleTower,
  InkSausage,
} from '@/components/ui/InkIllustrations';

// Flip card — cream front, dark amber back, thin ruled border
function FlipCard({ dish, index }: { dish: Dish; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [autoFlipDone, setAutoFlipDone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (autoFlipDone || shouldReduceMotion) return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoFlipDone) {
          setAutoFlipDone(true);
          const t1 = setTimeout(() => {
            setFlipped(true);
            const t2 = setTimeout(() => setFlipped(false), 1200);
            return () => clearTimeout(t2);
          }, index * 150);
          return () => clearTimeout(t1);
        }
      },
      { threshold: 0.6 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [autoFlipDone, index, shouldReduceMotion]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay: index * 0.07 }}
      style={{ perspective: '1000px', width: '260px', height: '400px', cursor: 'pointer', flexShrink: 0 }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => { if (window.innerWidth >= 768) setFlipped(true); }}
      onMouseLeave={() => { if (window.innerWidth >= 768) setFlipped(false); }}
      role="button"
      tabIndex={0}
      aria-label={dish.name}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f); }}
    >
      {/* Inner wrapper — 3D flip */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: shouldReduceMotion ? 'none' : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Front face — cream parchment ─────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: '#F2E8D5',
            border: '1px solid rgba(139,105,20,0.2)',
            overflow: 'hidden',
            borderRadius: '2px',
          }}
        >
          {/* Photo top half */}
          <div style={{ position: 'relative', height: '55%', overflow: 'hidden' }}>
            <Image
              src={dish.photo}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="260px"
            />
            {/* Warm gradient into parchment */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, rgba(242,232,213,0.95) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/* Text bottom half */}
          <div style={{ padding: '16px 18px 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {/* Thin ruled top border */}
            <div style={{ height: '1px', backgroundColor: 'rgba(139,105,20,0.25)', marginBottom: '8px' }} aria-hidden="true" />

            <p className="type-eyebrow" style={{ color: 'rgba(28,22,18,0.4)' }}>
              {dish.polish}
            </p>

            <h3 style={{
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: '22px',
              lineHeight: 1.2,
              margin: 0,
            }}>
              {dish.name}
            </h3>

            {/* Flip hint */}
            <p className="type-eyebrow" style={{ color: 'var(--color-accent)', marginTop: '6px' }}>
              ✦ Ver más
            </p>
          </div>
        </div>

        {/* ── Back face — dark amber ────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: 'var(--color-espresso-mid)',
            border: '1px solid rgba(200,130,42,0.25)',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '28px 22px',
            gap: '14px',
          }}
        >
          {/* Amber accent line */}
          <div style={{ height: '1px', width: '36px', backgroundColor: 'var(--color-accent)' }} aria-hidden="true" />

          <p className="type-eyebrow" style={{
            color: 'rgba(242,232,213,0.35)',
          }}>
            {dish.polish}
          </p>

          <h3 style={{
            color: '#F2E8D5',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: 1.2,
            margin: 0,
          }}>
            {dish.name}
          </h3>

          <p style={{
            color: 'rgba(242,232,213,0.68)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            lineHeight: 1.72,
            fontWeight: 300,
            flexGrow: 1,
          }}>
            {dish.description}
          </p>

          {/* Price */}
          <p style={{
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-heading)',
            fontSize: '30px',
            fontWeight: 400,
            letterSpacing: '0.02em',
            marginTop: '4px',
          }}>
            {dish.price}
          </p>

          <div style={{ height: '1px', backgroundColor: 'rgba(200,130,42,0.2)' }} aria-hidden="true" />
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const mn = tr.menu;

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true as const },
    transition: { duration: 0.8, delay },
  });

  return (
    <section id="menu" className="texture-warm" style={{ padding: 'clamp(72px, 10vw, 112px) 0', overflow: 'hidden', position: 'relative' }}>

      {/* Scattered ink illustrations on parchment */}
      <motion.div {...fadeIn(0.3)} style={{ position: 'absolute', top: '6%', right: '2%', transform: 'rotate(-10deg)', zIndex: 1 }}>
        <InkCastleTower size={65} opacity={0.13} />
      </motion.div>
      <motion.div {...fadeIn(0.5)} style={{ position: 'absolute', bottom: '10%', left: '1.5%', transform: 'rotate(8deg)', zIndex: 1 }}>
        <InkWheatSheaf size={80} opacity={0.13} />
      </motion.div>
      <motion.div {...fadeIn(0.4)} style={{ position: 'absolute', top: '40%', right: '1%', transform: 'rotate(5deg)', zIndex: 1 }}>
        <InkSausage size={85} opacity={0.12} />
      </motion.div>
      <motion.div {...fadeIn(0.55)} style={{ position: 'absolute', bottom: '15%', right: '4%', transform: 'rotate(-12deg)', zIndex: 1 }}>
        <InkPierogi size={78} opacity={0.13} />
      </motion.div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
          className="type-eyebrow text-center"
          style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
        >
          {mn.subtitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
          className="text-center"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: 1.1,
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {mn.title}
        </motion.h2>

        {/* Thin ruled border around card grid — Manship style */}
        <div style={{
          border: '1px solid rgba(139,105,20,0.2)',
          padding: 'clamp(24px, 4vw, 48px)',
          borderRadius: '2px',
        }}>
          {/* Flip cards */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {mn.dishes.map((dish, i) => (
              <FlipCard key={dish.name} dish={dish} index={i} />
            ))}
          </div>

          {/* Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
            style={{ marginTop: '32px', color: 'rgba(28,22,18,0.3)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}
          >
            {mn.hoverToSee} · {mn.touchToSee}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
