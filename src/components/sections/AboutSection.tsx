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
      <section id="about" style={{ padding: 'clamp(72px, 10vw, 112px) 0', overflow: 'hidden', position: 'relative' }}>

        {/* Full-bleed castle2.jpg background with dark overlay */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden="true">
          <Image
            src="/images/castle2.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(20,12,7,0.80)' }} />
        </div>

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
              color: '#F2E8D5',
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

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <p
                  style={{
                    color: 'rgba(242,232,213,0.85)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.3125rem)',
                    lineHeight: 1.85,
                    fontWeight: 400,
                    maxWidth: '58ch',
                  }}
                >
                  {ab.body1}
                </p>
                <p
                  style={{
                    color: 'rgba(242,232,213,0.85)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.125rem, 1.8vw, 1.3125rem)',
                    lineHeight: 1.85,
                    fontWeight: 400,
                    maxWidth: '58ch',
                  }}
                >
                  {ab.body2}
                </p>
              </div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
              style={{ position: 'relative', zIndex: 2, overflow: 'visible' }}
            >
              <Image
                src="/images/food12.jpg"
                alt="Wawel Restobar food"
                width={600}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: '500px', borderRadius: '4px', display: 'block' }}
              />

              {/* food19 small accent photo — bottom-left overlap */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '180px',
                  height: '140px',
                  border: '3px solid #C8822A',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  zIndex: 3,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <Image
                  src="/images/food19.jpg"
                  alt="Plato de Wawel Restó"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="180px"
                />
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
