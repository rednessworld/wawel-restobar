'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const GALLERY_PHOTOS = [
  { src: '/images/food17.jpg', caption: 'Pierogi Ruskie' },
  { src: '/images/interior2.jpg', caption: 'Ambiente Wawel' },
  { src: '/images/food18.jpg', caption: 'Placki Ziemniaczane' },
  { src: '/images/ldrink4.jpg', caption: 'Cerveza polaca artesanal' },
  { src: '/images/food19.jpg', caption: 'Pollo Kiev' },
];

const ROTATIONS = [-3, 2, -1.5, 3, -2];

const VIDEOS = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
];

export default function GallerySection() {
  const { language } = useLanguage();
  const tr = t(language);
  const gl = tr.gallery;
  const shouldReduceMotion = useReducedMotion();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section id="gallery" className="texture-dark" style={{ padding: 'clamp(72px, 10vw, 112px) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="type-eyebrow text-center"
          style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
        >
          Wawel Restó
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
          style={{
            color: '#F2E8D5',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: 1.1,
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {gl.title}
        </motion.h2>

        {/* Polaroid grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: 'clamp(56px, 8vw, 96px)' }}>
          {GALLERY_PHOTOS.map((photo, i) => {
            const rotation = shouldReduceMotion ? 0 : ROTATIONS[i % ROTATIONS.length];
            return (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay: i * 0.07 }}
                whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.04, zIndex: 10 }}
                onClick={() => setSelectedImage(photo.src)}
                role="button"
                tabIndex={0}
                aria-label={`Ver ${photo.caption} en tamaño completo`}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(photo.src); }}
                style={{
                  rotate: rotation,
                  cursor: 'pointer',
                  backgroundColor: 'var(--color-parchment-mid)',
                  padding: '8px 8px 36px 8px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
                  marginTop: i % 2 === 1 ? '-18px' : '0',
                  transition: 'box-shadow 300ms ease-out',
                  borderRadius: '1px',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', width: '200px', height: '200px' }}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p
                  className="text-center"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'rgba(28,22,18,0.65)',
                    fontSize: '13px',
                    letterSpacing: '0.03em',
                    marginTop: '10px',
                  }}
                >
                  {photo.caption}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Video strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="type-eyebrow text-center"
            style={{ color: 'rgba(242,232,213,0.35)', marginBottom: '20px' }}
          >
            {gl.videosTitle}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
            {VIDEOS.map((src, i) => (
              <div
                key={src}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: '2px', aspectRatio: '9/16' }}
              >
                <video
                  src={src}
                  autoPlay={!shouldReduceMotion}
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  aria-label={`Video Wawel Restó ${i + 1}`}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(28,22,18,0.5) 0%, transparent 45%)',
                  }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              backgroundColor: 'rgba(20,14,10,0.96)',
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ position: 'relative', maxWidth: '900px', width: '100%', maxHeight: '85vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Galería Wawel Restó"
                width={900}
                height={700}
                style={{ objectFit: 'contain', width: '100%', height: '100%', maxHeight: '80vh', borderRadius: '2px' }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                aria-label={gl.close}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(28,22,18,0.7)',
                  border: '1px solid rgba(200,130,42,0.2)',
                  color: 'rgba(242,232,213,0.8)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  transition: 'color 180ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#F2E8D5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(242,232,213,0.8)'; }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
