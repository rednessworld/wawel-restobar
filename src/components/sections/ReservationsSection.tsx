'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const HOURS = [
  { dayKey: 'monday', hoursKey: 'mondayHours' },
  { dayKey: 'tuesdayFriday', hoursKey: 'weekdayHours' },
  { dayKey: 'saturday', hoursKey: 'saturdayHours' },
  { dayKey: 'sunday', hoursKey: 'sundayHours' },
] as const;

// Outlined contact card — wood background, cream outline
function ContactCard({
  href,
  label,
  number,
  hint,
  delay,
  target,
}: {
  href: string;
  label: string;
  number: string;
  hint: string;
  delay: number;
  target?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: 'clamp(28px, 4vw, 44px) clamp(20px, 3vw, 40px)',
        border: '1px solid rgba(242,232,213,0.18)',
        borderRadius: '2px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'border-color 220ms ease-out, background 220ms ease-out, transform 160ms ease-out',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(200,130,42,0.55)';
        e.currentTarget.style.background = 'rgba(200,130,42,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(242,232,213,0.18)';
        e.currentTarget.style.background = 'transparent';
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.98)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <p className="type-eyebrow" style={{ color: 'rgba(242,232,213,0.4)' }}>
        {label}
      </p>
      <p style={{ color: '#F2E8D5', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, lineHeight: 1 }}>
        {number}
      </p>
      <p className="type-eyebrow" style={{ color: 'var(--color-accent)' }}>
        {hint} →
      </p>
    </motion.a>
  );
}

export default function ReservationsSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const rs = tr.reservations;
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="reservations" className="texture-wood" style={{ padding: 'clamp(72px, 10vw, 112px) 0', position: 'relative' }}>
      {/* Background photo — exterior, dimmed */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden="true">
        <Image
          src="/images/exterior.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(28,14,8,0.82)' }} />
      </div>
      {/* Amber top border */}
      <div style={{ position: 'relative', zIndex: 1, height: '1px', backgroundColor: 'rgba(200,130,42,0.2)', marginBottom: '0' }} aria-hidden="true" />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(72px, 10vw, 112px) clamp(24px, 5vw, 64px) 0', position: 'relative', zIndex: 1 }}>

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
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
          className="text-center"
          style={{
            color: '#F2E8D5',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: 1.1,
            marginBottom: '10px',
          }}
        >
          {rs.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center"
          style={{ color: 'rgba(242,232,213,0.45)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          {rs.subtitle}
        </motion.p>

        {/* Contact cards — outlined style */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <ContactCard
            href={`tel:${rs.phone.replace(/\s/g, '')}`}
            label={rs.phoneLabel}
            number={rs.phone}
            hint="Toca para llamar"
            delay={0.1}
          />
          <ContactCard
            href={`https://wa.me/${rs.whatsapp.replace(/[\s+]/g, '')}`}
            label={rs.whatsappLabel}
            number={rs.whatsapp}
            hint="Abrir WhatsApp"
            delay={0.2}
            target="_blank"
          />
        </div>

        {/* Hours — editorial table style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.25 }}
          style={{ border: '1px solid rgba(200,130,42,0.18)', borderRadius: '2px', padding: 'clamp(28px, 4vw, 44px)' }}
        >
          <h3
            className="text-center"
            style={{
              color: '#F2E8D5',
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              letterSpacing: '0.04em',
              marginBottom: 'clamp(24px, 3vw, 36px)',
            }}
          >
            {rs.hoursTitle}
          </h3>

          <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {HOURS.map(({ dayKey, hoursKey }, i) => (
              <motion.div
                key={dayKey}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] as const, delay: 0.3 + i * 0.07 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(200,130,42,0.1)',
                  gap: '16px',
                }}
              >
                <span style={{ color: 'rgba(242,232,213,0.6)', fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 300 }}>
                  {rs[dayKey]}
                </span>
                <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '18px', fontWeight: 400, flexShrink: 0 }}>
                  {rs[hoursKey]}
                </span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 'clamp(20px, 3vw, 32px)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ color: 'rgba(242,232,213,0.35)', fontFamily: 'var(--font-body)', fontSize: '13px' }}>
              {rs.priceRange}
            </p>
            <p style={{ color: 'rgba(242,232,213,0.35)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '14px' }}>
              {rs.groupsNote}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
