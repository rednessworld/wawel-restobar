'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

const HOURS = [
  { dayKey: 'monday', hoursKey: 'mondayHours' },
  { dayKey: 'saturday', hoursKey: 'saturdayHours' },
  { dayKey: 'sunday', hoursKey: 'sundayHours' },
] as const;

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
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '24px',
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
      <p style={{
        color: '#F2E8D5',
        fontFamily: 'var(--font-heading)',
        fontStyle: 'italic',
        fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
        fontWeight: 400,
        lineHeight: 1,
      }}>
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
    <section
      id="reservations"
      className="texture-wood"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Background — interior, dimmed */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} aria-hidden="true">
        <Image
          src="/images/interior.jpg"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(20,10,6,0.84)' }} />
      </div>

      {/* Amber top border */}
      <div
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(200,130,42,0.2)', zIndex: 1 }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          margin: '0 auto',
          padding: 'clamp(48px, 8vh, 80px) clamp(24px, 5vw, 48px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.5 }}
          className="type-eyebrow text-center"
          style={{ color: 'var(--color-accent)', marginBottom: '10px' }}
        >
          Wawel Restó
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.08 }}
          className="text-center"
          style={{
            color: '#F2E8D5',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            lineHeight: 1.1,
            marginBottom: '8px',
          }}
        >
          {rs.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.5, delay: 0.13 }}
          className="text-center"
          style={{
            color: 'rgba(242,232,213,0.4)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            marginBottom: 'clamp(24px, 4vh, 36px)',
          }}
        >
          {rs.subtitle}
        </motion.p>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: 'clamp(24px, 4vh, 36px)' }}>
          <ContactCard
            href={`tel:${rs.phone.replace(/\s/g, '')}`}
            label={rs.phoneLabel}
            number={rs.phone}
            hint={rs.phoneHint}
            delay={0.1}
          />
          <ContactCard
            href={`https://wa.me/${rs.whatsapp.replace(/[\s+]/g, '')}`}
            label={rs.whatsappLabel}
            number={rs.whatsapp}
            hint={rs.whatsappHint}
            delay={0.18}
            target="_blank"
          />
        </div>

        {/* Hours — no box, just rows */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay: 0.22 }}
        >
          <p
            className="type-eyebrow text-center"
            style={{ color: 'rgba(242,232,213,0.35)', marginBottom: '14px' }}
          >
            {rs.hoursTitle}
          </p>

          <div style={{ maxWidth: '360px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {HOURS.map(({ dayKey, hoursKey }, i) => (
              <motion.div
                key={dayKey}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={shouldReduceMotion ? {} : { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const, delay: 0.28 + i * 0.06 }}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  padding: '9px 0',
                  borderBottom: '1px solid rgba(200,130,42,0.08)',
                  gap: '16px',
                }}
              >
                <span style={{ color: 'rgba(242,232,213,0.55)', fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 300 }}>
                  {rs[dayKey]}
                </span>
                <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '15px', fontWeight: 400, flexShrink: 0 }}>
                  {rs[hoursKey]}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <p style={{ color: 'rgba(242,232,213,0.28)', fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: '13px', textAlign: 'center', marginTop: '20px' }}>
            {rs.groupsNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
