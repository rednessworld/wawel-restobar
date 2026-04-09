'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/lib/translations';

// ─── Data ─────────────────────────────────────────────────────────────────────

type Item = { name: string; desc?: string; price: string };
type Section = { heading: string; items: Item[] };
type Card = {
  id: string;
  photo: string;
  category: string;
  items?: Item[];
  sections?: Section[];
};

const CARDS: Card[] = [
  {
    id: 'sopas',
    photo: '/images/food5.jpg',
    category: 'SOPAS',
    items: [
      { name: 'Żurek', desc: 'Sopa de masa madre con salchicha', price: '7.50€' },
      { name: 'Kapuśniak', desc: 'Sopa de chucrut con carne de cerdo', price: '7.00€' },
      { name: 'De pepinillos', desc: 'Sopa de pepinillos encurtidos (Vegetariana)', price: '7.00€' },
      { name: 'Sopa del día', desc: 'Pregúntale a nuestros camareros', price: '7.00€' },
    ],
  },
  {
    id: 'pierogi',
    photo: '/images/food2.jpg',
    category: 'PIEROGI',
    items: [
      { name: 'Polacos', desc: 'Requesón y patatas con crema agria', price: '13.50€' },
      { name: 'Requesón y pipas de girasol', price: '13.50€' },
      { name: 'Requesón y trigo sarraceno', price: '13.50€' },
      { name: 'Col y setas', price: '13.50€' },
      { name: 'Carne cerdo', price: '13.50€' },
      { name: 'Carne ternera', price: '13.50€' },
      { name: 'Lentejas', price: '13.50€' },
    ],
  },
  {
    id: 'degustacion',
    photo: '/images/food4.jpg',
    category: 'PLATOS DEGUSTACIÓN',
    items: [
      { name: 'KRAKOVIAK', desc: 'Patatas fritas, sopa, pierogi 2, gulash, queso frito, chucrut, kotlet mielony, frankfurterki', price: '37.00€' },
      { name: 'WAWEL', desc: 'Patatas fritas, gołąbki, salchicha, croquetas, queso frito, ensalada, tortitas de patata', price: '29.00€' },
      { name: 'SMOCZA GROTA', desc: 'Patatas fritas, fingers de pollo, bigos, kopytka, ensalada de pepinillo, rolada, pyzy, gulash', price: '37.00€' },
      { name: 'KRUPÓWKI', desc: 'Gołąbki relleno de carne, salchicha polaca, ensaladas, queso rebozado frito, croqueta polaca, tortitas de patata', price: '29.00€' },
    ],
  },
  {
    id: 'carne',
    photo: '/images/food18.jpg',
    category: 'PLATOS DE CARNE',
    items: [
      { name: 'Fasolka po bretońsku', desc: 'Alubias con tomate, panceta y salchicha', price: '9.50€' },
      { name: 'Gołąbki', desc: 'Rollo de col relleno de arroz y carne', price: '9.50€' },
      { name: 'Bigos', desc: 'Chucrut con cerdo y setas', price: '10.00€' },
      { name: 'Embutido polaco', desc: 'Salchicha polaca frita con patatas', price: '11.00€' },
      { name: 'Placek po węgiersku', desc: 'Tortita de patata con gulash y nata', price: '13.00€' },
      { name: 'Kotlet mielony', desc: 'Hamburguesa rebozada con patatas', price: '12.50€' },
      { name: 'Kotlet schabowy', desc: 'Filete de lomo de cerdo rebozado con patatas', price: '13.00€' },
      { name: 'Kotlet de pollo', desc: 'Filete de pechuga rebozada con patatas', price: '13.00€' },
      { name: 'Kotlet de volaille', desc: 'Pechuga rellena de mantequilla y queso con patatas', price: '13.00€' },
    ],
  },
  {
    id: 'ensaladas',
    photo: '/images/food6.jpg',
    category: 'ENSALADAS',
    items: [
      { name: 'Griega', desc: 'Lechuga, tomate, cebolla roja, pepino, aceitunas, queso fetta', price: '10.00€' },
      { name: 'A la César', desc: 'Pechuga de pollo, picatostes, queso manchego, salsa César', price: '11.50€' },
      { name: 'Aguacate y salmón', desc: 'Salmón ahumado, aguacate, pepino, tomate cherry, huevo frito', price: '11.50€' },
      { name: 'Burrata', desc: 'Queso burrata, tomate cherry, aceitunas, pesto verde', price: '12.00€' },
    ],
  },
  {
    id: 'postres',
    photo: '/images/dessert5.jpg',
    category: 'POSTRES',
    items: [
      { name: 'Tarta de queso con chocolate', price: '6.00€' },
      { name: 'Tarta de manzana', price: '6.00€' },
      { name: 'Pierogi dulce (6 unidades)', desc: 'Rellenos de fresa o cereza', price: '10.00€' },
      { name: 'Crepes', desc: 'Con chocolate y plátano / Con queso / Con mermelada', price: '4.00€' },
    ],
  },
  {
    id: 'bebidas',
    photo: '/images/drink4.jpg',
    category: 'BEBIDAS',
    sections: [
      {
        heading: 'CÓCTELES',
        items: [
          { name: 'Aperol Spritz', price: '8.00€' },
          { name: 'Negroni', price: '7.00€' },
          { name: 'Hugo', price: '9.00€' },
          { name: 'Moscow Mule', price: '8.00€' },
          { name: 'Cuba Libre', price: '8.00€' },
          { name: 'Tequila Sunrise', price: '8.00€' },
          { name: 'Long Drink', price: '8.00€' },
          { name: 'Gin Tonic', desc: 'Hendrix / Tanqueray / Bombay', price: '8.50€' },
        ],
      },
      {
        heading: 'VINOS',
        items: [
          { name: 'Copa de vino tinto', price: '3.30€' },
          { name: 'Copa de vino blanco', price: '3.30€' },
          { name: 'Botella de cava (250ml)', price: '3.30€' },
          { name: 'Copa de sangria', price: '5.00€' },
          { name: 'Vermut', price: '3.50€' },
        ],
      },
    ],
  },
];

// ─── Flip Card ─────────────────────────────────────────────────────────────────

function FlipCard({ card, index }: { card: Card; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [autoFlipDone, setAutoFlipDone] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mobile: auto-peek on scroll into view
  useEffect(() => {
    if (autoFlipDone || shouldReduceMotion) return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !autoFlipDone) {
          setAutoFlipDone(true);
          const t1 = setTimeout(() => {
            setFlipped(true);
            const t2 = setTimeout(() => setFlipped(false), 1100);
            return () => clearTimeout(t2);
          }, index * 120);
          return () => clearTimeout(t1);
        }
      },
      { threshold: 0.6 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [autoFlipDone, index, shouldReduceMotion]);

  // Flatten all items for rendering
  const allItems: Array<{ type: 'heading'; text: string } | { type: 'item'; item: Item }> = [];
  if (card.sections) {
    for (const sec of card.sections) {
      allItems.push({ type: 'heading', text: sec.heading });
      for (const item of sec.items) allItems.push({ type: 'item', item });
    }
  } else if (card.items) {
    for (const item of card.items) allItems.push({ type: 'item', item });
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] as const, delay: index * 0.06 }}
      style={{ perspective: '1000px', width: '280px', minHeight: '420px', height: '480px', cursor: 'pointer', flexShrink: 0 }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => { if (window.innerWidth >= 768) setFlipped(true); }}
      onMouseLeave={() => { if (window.innerWidth >= 768) setFlipped(false); }}
      role="button"
      tabIndex={0}
      aria-label={`Ver carta: ${card.category}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f); }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: shouldReduceMotion ? 'none' : 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >

        {/* ── FRONT ─────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid rgba(139,105,20,0.25)',
          }}
        >
          {/* Full-bleed photo */}
          <Image
            src={card.photo}
            alt={card.category}
            fill
            className="object-cover"
            sizes="280px"
          />

          {/* Dark gradient overlay — bottom for text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(20,12,7,0.08) 0%, rgba(20,12,7,0.55) 55%, rgba(20,12,7,0.92) 100%)',
            }}
            aria-hidden="true"
          />

          {/* Category label — centered bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '20px 20px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{ width: '28px', height: '1px', backgroundColor: 'rgba(200,130,42,0.7)' }} aria-hidden="true" />
            <p
              style={{
                color: '#F2E8D5',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: card.category.length > 14 ? '16px' : '20px',
                letterSpacing: '0.06em',
                textAlign: 'center',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {card.category}
            </p>
            <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', margin: 0 }}>
              Ver carta ✦
            </p>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#2C1810',
            border: '1px solid rgba(200,130,42,0.22)',
            borderRadius: '2px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Back header */}
          <div style={{ padding: '18px 20px 12px', borderBottom: '1px solid rgba(200,130,42,0.15)', flexShrink: 0 }}>
            <div style={{ width: '24px', height: '1px', backgroundColor: 'var(--color-accent)', marginBottom: '8px' }} aria-hidden="true" />
            <p
              style={{
                color: '#F2E8D5',
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: card.category.length > 14 ? '15px' : '18px',
                letterSpacing: '0.04em',
                margin: 0,
              }}
            >
              {card.category}
            </p>
          </div>

          {/* Scrollable item list */}
          <div
            style={{
              overflowY: 'auto',
              flex: 1,
              padding: '10px 20px 16px',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(200,130,42,0.25) transparent',
            }}
          >
            {allItems.map((row, i) => {
              if (row.type === 'heading') {
                return (
                  <p
                    key={i}
                    style={{
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '9px',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      margin: i === 0 ? '8px 0 6px' : '14px 0 6px',
                    }}
                  >
                    {row.text}
                  </p>
                );
              }
              const { item } = row;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '10px',
                    padding: '6px 0',
                    borderBottom: '1px solid rgba(200,130,42,0.08)',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p
                      style={{
                        color: '#F2E8D5',
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        fontWeight: 500,
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </p>
                    {item.desc && (
                      <p
                        style={{
                          color: 'rgba(242,232,213,0.45)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '10px',
                          fontWeight: 300,
                          margin: '2px 0 0',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <p
                    style={{
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      fontSize: '14px',
                      fontWeight: 400,
                      margin: 0,
                      flexShrink: 0,
                    }}
                  >
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export default function MenuSection() {
  const { language } = useLanguage();
  const tr = t(language);
  const mn = tr.menu;

  const row1 = CARDS.slice(0, 4);
  const row2 = CARDS.slice(4, 7);

  return (
    <section id="menu" className="texture-warm" style={{ padding: 'clamp(36px, 5vw, 56px) 0 40px', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
          className="type-eyebrow text-center"
          style={{ color: 'var(--color-accent)', marginBottom: '12px' }}
        >
          {mn.subtitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
          className="text-center"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
            lineHeight: 1.1,
            marginBottom: 'clamp(32px, 5vw, 52px)',
          }}
        >
          {mn.title}
        </motion.h2>

        {/* Card grid — 4 top, 3 bottom */}
        <div style={{ border: '1px solid rgba(139,105,20,0.18)', padding: 'clamp(20px, 3vw, 28px)', borderRadius: '2px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Row 1 — 4 cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {row1.map((card, i) => (
                <FlipCard key={card.id} card={card} index={i} />
              ))}
            </div>

            {/* Row 2 — 3 cards */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              {row2.map((card, i) => (
                <FlipCard key={card.id} card={card} index={i + 4} />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
            style={{ marginTop: '28px', color: 'rgba(28,22,18,0.3)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}
          >
            {mn.hoverToSee} · {mn.touchToSee}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
