'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const CONTACT_ITEMS = [
  {
    icon: '📍',
    labelKey: 'address' as const,
    valueKey: 'address' as const,
    subKey: 'city' as const,
    href: null,
  },
  {
    icon: '📞',
    labelKey: 'phone' as const,
    valueKey: 'phone' as const,
    subKey: null,
    hrefPrefix: 'tel:',
  },
  {
    icon: '📸',
    labelKey: 'instagram' as const,
    valueKey: 'instagram' as const,
    subKey: null,
    href: 'https://instagram.com/wawelrestobar',
  },
  {
    icon: '🚇',
    labelKey: 'transport' as const,
    valueKey: 'transport' as const,
    subKey: 'nearSagrada' as const,
    href: null,
  },
];

export default function LocationSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const lc = tr.location;

  return (
    <section id="location" className="texture-warm py-20 md:py-28 px-6" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Castle photo — subtle decorative background right side */}
      <div
        style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '35%', pointerEvents: 'none', zIndex: 0 }}
        aria-hidden="true"
      >
        <Image
          src="/images/castle1.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'left center' }}
          sizes="35vw"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--color-background) 0%, rgba(242,232,213,0.7) 40%, rgba(242,232,213,0.25) 100%)' }} />
      </div>
      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}
        >
          Barcelona · Eixample
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-4xl md:text-5xl mb-3"
          style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 400 }}
        >
          {lc.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-xl italic mb-12"
          style={{ color: 'var(--color-accent-2)', fontFamily: 'var(--font-heading)' }}
        >
          {lc.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — Google Maps iframe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-sm"
            style={{ boxShadow: '6px 6px 0px var(--color-accent)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8!2d2.1715731!3d41.4032562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a364b350d22d%3A0x682e3cc4eae0a541!2sWawel%20Restobar!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wawel Restó en Google Maps"
            />
          </motion.div>

          {/* Right — contact info staggered */}
          <div className="flex flex-col gap-6">
            {CONTACT_ITEMS.map(({ icon, labelKey, valueKey, subKey, href, hrefPrefix }, i) => {
              const value = lc[valueKey];
              const sub = subKey ? lc[subKey] : null;
              const linkHref = href ?? (hrefPrefix ? `${hrefPrefix}${value.replace(/\s/g, '')}` : null);

              return (
                <motion.div
                  key={labelKey}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start py-4"
                  style={{ borderBottom: '1px solid rgba(28,22,18,0.12)' }}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                    {icon}
                  </span>
                  <div>
                    {linkHref ? (
                      <a
                        href={linkHref}
                        target={href ? '_blank' : undefined}
                        rel={href ? 'noopener noreferrer' : undefined}
                        className="hover:opacity-70 transition-opacity"
                        style={{
                          color: 'var(--color-primary)',
                          fontSize: '18px',
                          fontFamily: 'var(--font-heading)',
                          textDecoration: 'none',
                          display: 'block',
                        }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          color: 'var(--color-primary)',
                          fontSize: '18px',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {value}
                      </p>
                    )}
                    {sub && (
                      <p
                        style={{
                          color: 'rgba(28,22,18,0.5)',
                          fontSize: '13px',
                          fontFamily: 'var(--font-body)',
                          marginTop: '2px',
                        }}
                      >
                        {sub}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Directions button */}
            <motion.a
              href="https://www.google.com/maps/place/Wawel+Restobar/@41.4032562,2.1715731,19z"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="self-start mt-2"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#F2E8D5',
                padding: '12px 28px',
                fontSize: '12px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              {lc.getDirections} →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
