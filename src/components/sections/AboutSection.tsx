'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';
import WawelDivider from '@/components/ui/WawelDivider';
import {
  InkPierogi,
  InkBeerMug,
  InkWheatSheaf,
  InkCastleTower,
  InkSausage,
} from '@/components/ui/InkIllustrations';

// Watercolor blob SVG — sage/teal wash behind text, organic shape
function WatercolorBlob() {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '-10%',
        left: '-8%',
        width: '115%',
        height: '120%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path
        d="M60 80 C20 40, -10 120, 30 200 C70 280, 10 340, 80 380 C150 420, 260 400, 340 360 C420 320, 500 260, 480 180 C460 100, 380 20, 280 30 C180 40, 100 120, 60 80 Z"
        fill="rgba(106,142,126,0.10)"
      />
      <path
        d="M80 100 C50 60, 10 140, 50 210 C90 280, 40 330, 100 365 C160 400, 250 380, 320 345 C390 310, 460 255, 445 185 C430 115, 360 45, 270 55 C180 65, 110 140, 80 100 Z"
        fill="rgba(106,142,126,0.07)"
      />
    </svg>
  );
}

// Torn/organic edge via clip-path on the photo
const TORN_CLIP =
  'polygon(0% 0%, 98% 0%, 100% 4%, 97% 10%, 100% 16%, 98% 22%, 100% 28%, 97% 35%, 100% 42%, 98% 50%, 100% 56%, 97% 63%, 100% 70%, 98% 77%, 100% 84%, 97% 90%, 100% 96%, 97% 100%, 3% 100%, 0% 96%, 2% 90%, 0% 84%, 2% 77%, 0% 70%, 3% 63%, 0% 56%, 2% 49%, 0% 42%, 2% 35%, 0% 28%, 3% 22%, 0% 16%, 2% 10%, 0% 4%)';

export default function AboutSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const ab = tr.about;
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.65, ease: [0.23, 1, 0.32, 1] as const, delay },
  });

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true as const },
    transition: { duration: 0.8, delay },
  });

  return (
    <>
      <section id="about" className="texture-warm" style={{ padding: 'clamp(72px, 10vw, 112px) 0', overflow: 'hidden', position: 'relative' }}>

        {/* Scattered ink illustrations — positioned absolutely */}
        <motion.div {...fadeIn(0.3)} style={{ position: 'absolute', top: '8%', right: '3%', transform: 'rotate(12deg)', zIndex: 1 }}>
          <InkPierogi size={95} opacity={0.17} />
        </motion.div>
        <motion.div {...fadeIn(0.5)} style={{ position: 'absolute', bottom: '12%', left: '2%', transform: 'rotate(-8deg)', zIndex: 1 }}>
          <InkBeerMug size={78} opacity={0.15} />
        </motion.div>
        <motion.div {...fadeIn(0.4)} style={{ position: 'absolute', top: '18%', left: '1.5%', transform: 'rotate(-14deg)', zIndex: 1 }}>
          <InkWheatSheaf size={72} opacity={0.14} />
        </motion.div>
        <motion.div {...fadeIn(0.6)} style={{ position: 'absolute', bottom: '6%', right: '5%', transform: 'rotate(7deg)', zIndex: 1 }}>
          <InkSausage size={88} opacity={0.14} />
        </motion.div>
        <motion.div {...fadeIn(0.45)} style={{ position: 'absolute', top: '55%', right: '8%', transform: 'rotate(-5deg)', zIndex: 1 }}>
          <InkCastleTower size={60} opacity={0.13} />
        </motion.div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)', position: 'relative', zIndex: 2 }}>

          {/* Section label */}
          <motion.p
            {...fadeUp(0)}
            className="type-eyebrow text-center"
            style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
          >
            Wawel Restó · Barcelona
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-center"
            style={{
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '10px',
            }}
          >
            {ab.title}
          </motion.h2>

          <motion.p
            {...fadeUp(0.18)}
            className="text-center"
            style={{
              color: 'var(--color-accent-2)',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              marginBottom: 'clamp(48px, 7vw, 80px)',
            }}
          >
            {ab.subtitle}
          </motion.p>

          {/* Two-column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>

            {/* Left — text block with watercolor blob */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as const }}
              style={{ position: 'relative' }}
            >
              <WatercolorBlob />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <p
                  style={{
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: 1.78,
                    fontWeight: 300,
                    maxWidth: '58ch',
                  }}
                >
                  {ab.body1}
                </p>
                <p
                  style={{
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                    lineHeight: 1.78,
                    fontWeight: 300,
                    maxWidth: '58ch',
                  }}
                >
                  {ab.body2}
                </p>

                {/* Google rating badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: 'var(--color-primary)',
                    padding: '12px 20px',
                    borderRadius: '2px',
                    alignSelf: 'flex-start',
                    marginTop: '4px',
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: '22px' }}>⭐</span>
                  <div>
                    <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em' }}>
                      {ab.badge}
                    </p>
                    <p style={{ color: 'rgba(242,232,213,0.45)', fontFamily: 'var(--font-body)', fontSize: '11px', marginTop: '2px' }}>
                      C. de Sicília, 330 · Eixample
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="tel:+34934579550"
                  style={{
                    display: 'inline-block',
                    alignSelf: 'flex-start',
                    marginTop: '4px',
                    border: '1px solid var(--color-primary)',
                    color: 'var(--color-primary)',
                    padding: '11px 32px',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    textDecoration: 'none',
                    borderRadius: '1px',
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
                  {ab.cta}
                </a>
              </div>
            </motion.div>

            {/* Right — photo with torn organic edge */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* Offset amber shadow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: 'translate(10px, 10px)',
                  backgroundColor: 'rgba(200,130,42,0.18)',
                  clipPath: TORN_CLIP,
                  borderRadius: '2px',
                }}
                aria-hidden="true"
              />

              {/* Photo with torn clip-path */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/5',
                  clipPath: TORN_CLIP,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/interior.jpg"
                  alt="Interior acogedor de Wawel Restó en Barcelona"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Warm amber tint */}
                <div
                  style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(200,130,42,0.06)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Exterior inset photo — overlapping bottom-right corner */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  right: '-20px',
                  width: '42%',
                  aspectRatio: '4/3',
                  border: '3px solid var(--color-background)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  zIndex: 4,
                }}
              >
                <Image
                  src="/images/exterior.jpg"
                  alt="Exterior de Wawel Restó"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>

              {/* Floating Polish label */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '-8px',
                  backgroundColor: 'var(--color-accent-2)',
                  color: '#F2E8D5',
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                  padding: '6px 16px',
                  borderRadius: '1px',
                  zIndex: 5,
                }}
              >
                🇵🇱 Kuchnia polska
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Castle divider — warm into dark */}
      <div className="texture-dark" style={{ paddingBottom: '4px', paddingTop: '8px' }}>
        <WawelDivider color="#C8822A" opacity={0.45} />
      </div>
    </>
  );
}
