'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const IMAGES = [
  '/images/food.jpg',
  '/images/food1.jpg',
  '/images/food2.jpg',
  '/images/food3.jpg',
  '/images/food4.jpg',
  '/images/food5.jpg',
  '/images/food6.jpg',
  '/images/food9.jpg',
  '/images/food10.jpg',
  '/images/food11.jpg',
  '/images/food12.jpg',
  '/images/food13.jpg',
  '/images/food14.jpg',
  '/images/food15.jpg',
  '/images/food16.jpg',
  '/images/food17.jpg',
  '/images/food18.jpg',
  '/images/food19.jpg',
  '/images/dessert1.jpg',
  '/images/dessert4.jpg',
  '/images/dessert5.jpg',
  '/images/drink1.jpg',
  '/images/drink2.jpg',
  '/images/drink3.jpg',
  '/images/drink4.jpg',
  '/images/interior.jpg',
  '/images/interior2.jpg',
  '/images/exterior.jpg',
  '/images/castle1.jpg',
  '/images/castle2.jpg',
];

const IMAGE_ALTS = [
  'Plato de cocina polaca',
  'Especialidad de la casa',
  'Cocina artesanal polaca',
  'Plato tradicional polaco',
  'Sabores de Polonia',
  'Gastronomía polaca',
  'Plato de temporada',
  'Cocina casera polaca',
  'Ingredientes frescos',
  'Plato del día',
  'Especialidad Wawel',
  'Receta tradicional',
  'Cocina de autor polaca',
  'Plato principal',
  'Cocina casera',
  'Especialidad de la carta',
  'Plato de degustación',
  'Gastronomía artesanal',
  'Postre artesanal',
  'Dulce polaco',
  'Pastelería de Polonia',
  'Cerveza polaca Żywiec',
  'Bebidas seleccionadas',
  'Bebidas y cócteles',
  'Selección de bebidas',
  'Interior acogedor de Wawel Restó',
  'Salón de Wawel Restó',
  'Fachada de Wawel Restó, Barcelona',
  'Castillo de Wawel, Cracovia',
  'Paisaje de Cracovia, Polonia',
];

export default function GallerySection() {
  const { language } = useLanguage();
  const tr = t(language);
  const gl = tr.gallery;
  const shouldReduceMotion = useReducedMotion();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + IMAGES.length) % IMAGES.length : i
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % IMAGES.length : i
    );
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeLightbox, goPrev, goNext]);

  // Body scroll lock + focus management + inert backdrop
  useEffect(() => {
    const main = document.querySelector('main');
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      main?.setAttribute('inert', '');
      // Defer focus until AnimatePresence has rendered the close button
      const t = setTimeout(() => closeButtonRef.current?.focus(), 30);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
        main?.removeAttribute('inert');
      };
    }
    document.body.style.overflow = '';
    main?.removeAttribute('inert');
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <>
      <style>{`
        .wawel-gallery {
          columns: 4;
          column-gap: 8px;
          padding: 0;
        }
        @media (max-width: 1023px) {
          .wawel-gallery { columns: 2; }
        }
        @media (max-width: 639px) {
          .wawel-gallery { columns: 1; }
        }
        .wawel-gallery-item {
          break-inside: avoid;
          margin-bottom: 8px;
          overflow: hidden;
          cursor: pointer;
          display: block;
        }
        .wawel-gallery-item img {
          transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1),
                      filter 350ms ease-out;
          display: block;
          width: 100%;
          height: auto;
        }
        .wawel-gallery-item:hover img,
        .wawel-gallery-item:focus img {
          transform: scale(1.08);
          filter: brightness(1.1);
        }
        .wawel-gallery-item:focus-visible {
          outline: 2px solid #C8822A;
          outline-offset: 2px;
        }
      `}</style>

      <section id="gallery" style={{ overflow: 'hidden' }}>

        {/* ── Section header — parchment background ── */}
        <div
          style={{
            backgroundColor: 'var(--color-background)',
            padding: 'clamp(64px, 9vw, 100px) clamp(24px, 5vw, 80px) clamp(36px, 5vw, 52px)',
          }}
        >
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.5 }}
            className="type-eyebrow text-center"
            style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
          >
            Wawel Restó
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.6, delay: 0.1 }}
            className="text-center"
            style={{
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            {gl.title}
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.5, delay: 0.18 }}
            className="text-center"
            style={{
              color: 'rgba(61,43,31,0.5)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            }}
          >
            {gl.subtitle}
          </motion.p>
        </div>

        {/* ── Full-width masonry grid ── */}
        <div className="wawel-gallery">
          {IMAGES.map((src, i) => (
            <motion.div
              key={src}
              className="wawel-gallery-item"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1] as const,
                      delay: (i % 4) * 0.055,
                    }
              }
              onClick={() => setLightboxIndex(i)}
              role="button"
              tabIndex={0}
              aria-label={`Ver imagen ${i + 1} en tamaño completo`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(i);
                }
              }}
            >
              <Image
                src={src}
                alt={IMAGE_ALTS[i] ?? `Wawel Restó — foto ${i + 1}`}
                width={800}
                height={600}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Galería de fotos — Wawel Restó"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9000,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
          >
            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={IMAGES[lightboxIndex]}
                alt={IMAGE_ALTS[lightboxIndex] ?? `Wawel Restó — foto ${lightboxIndex + 1}`}
                width={1400}
                height={1050}
                style={{
                  objectFit: 'contain',
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '2px',
                }}
                priority
              />
            </motion.div>

            {/* ── Prev ── */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Imagen anterior"
              style={{
                position: 'fixed',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(20,14,10,0.75)',
                border: '1px solid rgba(200,130,42,0.3)',
                color: 'rgba(242,232,213,0.85)',
                fontSize: '26px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 160ms ease-out, color 160ms ease-out',
                zIndex: 9001,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,130,42,0.22)';
                e.currentTarget.style.color = '#F2E8D5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(20,14,10,0.75)';
                e.currentTarget.style.color = 'rgba(242,232,213,0.85)';
              }}
            >
              ‹
            </button>

            {/* ── Next ── */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Imagen siguiente"
              style={{
                position: 'fixed',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(20,14,10,0.75)',
                border: '1px solid rgba(200,130,42,0.3)',
                color: 'rgba(242,232,213,0.85)',
                fontSize: '26px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 160ms ease-out, color 160ms ease-out',
                zIndex: 9001,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(200,130,42,0.22)';
                e.currentTarget.style.color = '#F2E8D5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(20,14,10,0.75)';
                e.currentTarget.style.color = 'rgba(242,232,213,0.85)';
              }}
            >
              ›
            </button>

            {/* ── Close ── */}
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              aria-label="Cerrar galería"
              style={{
                position: 'fixed',
                top: '16px',
                right: '16px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(20,14,10,0.75)',
                border: '1px solid rgba(200,130,42,0.2)',
                color: 'rgba(242,232,213,0.75)',
                fontSize: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 160ms ease-out',
                zIndex: 9001,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#F2E8D5'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.75)'; }}
            >
              ✕
            </button>

            {/* ── Counter ── */}
            <div
              aria-live="polite"
              aria-atomic="true"
              style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(242,232,213,0.38)',
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                zIndex: 9001,
                userSelect: 'none',
              }}
            >
              {lightboxIndex + 1} / {IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
