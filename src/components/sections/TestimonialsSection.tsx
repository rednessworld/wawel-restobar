'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import type { Review } from '@/lib/translations';

function StarRating({ stars }: { stars: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }} aria-label={`${stars} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ color: i < stars ? 'var(--color-accent)' : 'rgba(28,22,18,0.15)', fontSize: '13px' }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        minWidth: '280px',
        maxWidth: '320px',
        backgroundColor: 'var(--color-primary)',
        border: '1px solid rgba(139,105,20,0.18)',
        padding: '24px 22px',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        flexShrink: 0,
        borderTop: '2px solid rgba(200,130,42,0.4)',
      }}
    >
      <StarRating stars={review.stars} />
      <p
        style={{
          color: 'rgba(242,232,213,0.72)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.9375rem',
          lineHeight: 1.72,
          fontWeight: 300,
          fontStyle: 'italic',
          flexGrow: 1,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <p
        style={{
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          fontSize: '14px',
          letterSpacing: '0.03em',
        }}
      >
        — {review.author}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const tm = tr.testimonials;
  const shouldReduceMotion = useReducedMotion();

  const allReviews: Review[] = [...tm.reviews, ...tm.reviews];

  return (
    <section id="testimonials" className="texture-warm" style={{ padding: 'clamp(72px, 10vw, 112px) 0', overflow: 'hidden' }}>
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
          Google Reviews
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          {tm.title}
        </motion.h2>

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(2.8rem, 5vw, 4rem)', color: 'var(--color-accent)', fontWeight: 400, lineHeight: 1 }}>
            {tm.rating}
          </span>
          <div>
            <div style={{ display: 'flex', gap: '3px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: 'var(--color-accent)', fontSize: '16px' }} aria-hidden="true">★</span>
              ))}
            </div>
            <p style={{ color: 'rgba(28,22,18,0.4)', fontSize: '12px', fontFamily: 'var(--font-body)', marginTop: '4px' }}>
              {tm.ratingLabel}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite carousel — full width */}
      <div style={{ overflow: 'hidden', width: '100%', marginBottom: 'clamp(40px, 5vw, 56px)' }}>
        <div
          className={shouldReduceMotion ? '' : 'animate-carousel'}
          style={{ display: 'flex', gap: '16px', width: 'max-content', padding: '8px 20px' }}
        >
          {allReviews.map((review, i) => (
            <ReviewCard key={`${review.author}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Google button */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px' }}>
        <motion.a
          href="https://www.google.com/maps/place/Wawel+Restobar/@41.4032562,2.1715731,19z"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            border: '1px solid var(--color-primary)',
            color: 'var(--color-primary)',
            padding: '11px 32px',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            textDecoration: 'none',
            borderRadius: '1px',
            display: 'inline-block',
            transition: 'background 200ms ease-out, color 200ms ease-out, transform 160ms ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
            e.currentTarget.style.color = '#F2E8D5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--color-primary)';
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          {tm.googleButton}
        </motion.a>
      </div>
    </section>
  );
}
