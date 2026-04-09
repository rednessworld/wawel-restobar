'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

export default function LocationSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const lc = tr.location;
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true as const },
          transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay },
        };

  return (
    <>
      <style>{`
        .wawel-location-grid {
          display: grid;
          grid-template-columns: 9fr 11fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .wawel-location-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }
      `}</style>

      <section
        id="location"
        style={{
          backgroundColor: 'var(--color-background)',
          padding: 'clamp(32px, 4vw, 48px) clamp(24px, 5vw, 80px)',
          overflow: 'hidden',
          maxHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div className="wawel-location-grid">

            {/* LEFT — address info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              {/* Eyebrow */}
              <motion.p
                {...fadeUp(0)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                }}
              >
                Barcelona · Eixample
              </motion.p>

              {/* Heading */}
              <motion.h2
                {...fadeUp(0.07)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '42px',
                  lineHeight: 1.05,
                  color: 'var(--color-primary)',
                }}
              >
                {lc.title}
              </motion.h2>

              {/* Amber divider */}
              <motion.div
                {...fadeUp(0.12)}
                style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--color-accent)', opacity: 0.7 }}
                aria-hidden="true"
              />

              {/* Address */}
              <motion.div {...fadeUp(0.16)} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '22px', color: 'var(--color-primary)', lineHeight: 1.3 }}>
                  {lc.address}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: 'rgba(61,43,31,0.6)', lineHeight: 1.3 }}>
                  {lc.city}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.a
                {...fadeUp(0.2)}
                href={`tel:${lc.phone.replace(/\s/g, '')}`}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'opacity 180ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.72'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                {lc.phone}
              </motion.a>

              {/* Instagram */}
              <motion.a
                {...fadeUp(0.24)}
                href="https://instagram.com/wawelrestobar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: 'rgba(61,43,31,0.7)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 180ms ease-out',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(61,43,31,0.7)'; }}
              >
                {lc.instagram}
              </motion.a>

              {/* Metro */}
              <motion.p
                {...fadeUp(0.27)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  color: 'rgba(61,43,31,0.65)',
                }}
              >
                {lc.transport}
              </motion.p>

              {/* Near Sagrada */}
              <motion.p
                {...fadeUp(0.3)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: 'rgba(61,43,31,0.5)',
                }}
              >
                {lc.nearSagrada}
              </motion.p>

              {/* Directions button */}
              <motion.a
                {...fadeUp(0.34)}
                href="https://www.google.com/maps/place/Wawel+Restobar/@41.4031246,2.1714482,19z/data=!3m1!5s0x12a4a2c252dd8b9f:0xa91e31ef991b20d4!4m6!3m5!1s0x12a4a364b350d22d:0x682e3cc4eae0a541!8m2!3d41.4032562!4d2.1715731!16s%2Fg%2F11lk1p5b0k?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  border: '1.5px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  padding: '10px 24px',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '2px',
                  transition: 'background 200ms ease-out, color 200ms ease-out, transform 150ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-accent)';
                  e.currentTarget.style.color = '#F2E8D5';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.97)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                {lc.getDirections} →
              </motion.a>
            </div>

            {/* RIGHT — Google Maps */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? {} : { duration: 0.65, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 40px rgba(28,22,18,0.12)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8!2d2.1715731!3d41.4032562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a364b350d22d%3A0x682e3cc4eae0a541!2sWawel%20Restobar!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block', filter: 'sepia(0.4) saturate(0.8) brightness(0.95) hue-rotate(5deg)', borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wawel Restó en Google Maps"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
