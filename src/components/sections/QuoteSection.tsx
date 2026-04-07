'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const WORDS_LINE1 = ['Saborear', 'Polonia'];
const WORDS_LINE2 = ['no', 'debería', 'requerir'];
const WORDS_LINE3 = ['un', 'vuelo', 'a', 'Cracovia'];

function WordReveal({ words, delay = 0 }: { words: string[]; delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span style={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 0.28em' }}>
      {words.map((word, i) => (
        <motion.span
          key={word + i}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 0.65,
            ease: [0.23, 1, 0.32, 1] as const,
            delay: delay + i * 0.07,
          }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function QuoteSection() {
  return (
    <section
      className="texture-wood"
      style={{
        padding: 'clamp(72px, 10vw, 120px) clamp(24px, 8vw, 120px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle top border in amber */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'rgba(200,130,42,0.25)',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          backgroundColor: 'rgba(200,130,42,0.25)',
        }}
        aria-hidden="true"
      />

      {/* Decorative opening quotation mark */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 'clamp(20px, 4vw, 48px)',
          left: 'clamp(24px, 6vw, 96px)',
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(80px, 12vw, 160px)',
          color: 'rgba(200,130,42,0.12)',
          lineHeight: 1,
          fontStyle: 'italic',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </motion.span>

      {/* Quote text */}
      <blockquote
        lang="es"
        style={{
          margin: 0,
          padding: 0,
          textAlign: 'center',
          maxWidth: '820px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#F2E8D5',
            fontSize: 'clamp(2rem, 4.5vw, 4.2rem)',
            lineHeight: 1.18,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          <WordReveal words={WORDS_LINE1} delay={0.2} />
          <br />
          <WordReveal words={WORDS_LINE2} delay={0.45} />
          <br />
          <WordReveal words={WORDS_LINE3} delay={0.7} />
        </p>

        {/* Amber thin rule below quote */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as const, delay: 1.1 }}
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: 'rgba(200,130,42,0.55)',
            margin: 'clamp(28px, 4vw, 40px) auto 0',
            transformOrigin: 'center',
          }}
          aria-hidden="true"
        />
      </blockquote>
    </section>
  );
}
