# Wawel Restobar — Project Memory

## Client Info
- Name: Wawel Restobar
- Address:
- Phone:
- Instagram:
- Hours:
- Google Maps Place ID:
- Google Maps Embed URL:
- Email:

## Brand Colors
- Primary (dark background/text): #3D2B1F
- Secondary (accent/highlight): #C4956A
- Accent (soft highlight): #E8C9A0
- Accent 2 (price/highlight): #D4A857
- Background: #FAF6F0
- Surface: #F0E6D6

Change these in `src/app/globals.css` under `:root`.

## Fonts
- Heading: Cormorant Garamond (elegant serif)
- Body: DM Sans (clean sans-serif)
- Custom font: none yet (place .otf/.ttf in public/fonts/ if provided)

## Images Available
Place images in `public/images/` — all lowercase, no spaces:
- [ ] logo.png (white version for dark backgrounds)
- [ ] hero-bg.jpg (blurred background, full-width interior/exterior)
- [ ] hero-center.jpg (center expanding photo — best food or interior shot)
- [ ] about-1.jpg
- [ ] about-2.jpg
- [ ] gallery-1.jpg through gallery-6.jpg (or more)
- [ ] menu-starters.jpg, menu-mains.jpg, menu-desserts.jpg, menu-drinks.jpg (flip card fronts)

## Videos Available
Place videos in `public/videos/`:
- (no video in hero center — use hero-center.jpg per template rules)

## TODO Before Launch
- [x] Colors set in globals.css (Wawel palette)
- [x] Menu dishes filled in translations.ts (6 Polish dishes)
- [x] Real phone/address/hours in translations.ts
- [x] Google Maps embed in LocationSection.tsx (placeholder — replace with real embed from Google Maps → Share → Embed)
- [x] Real Google reviews in TestimonialsSection.tsx (5 real reviews)
- [x] Metadata filled in layout.tsx
- [ ] Add Logo.png (white version for dark backgrounds)
- [ ] Add interior.jpg (hero background, blurred)
- [ ] Add Hero.png (hero center expanding photo)
- [ ] Add interior2.jpg (about section right column)
- [ ] Add food17.jpg, food18.jpg, food19.jpg (menu flip cards + gallery)
- [ ] Add ldrink4.jpg (gallery polaroid — drinks)
- [ ] Add video1.mp4, video2.mp4, video3.mp4 (gallery video strip)
- [ ] Replace Google Maps iframe src with real embed from Google Maps → Share → Embed a map
- [ ] Test on real mobile device (iPhone + Android)

## Tech Stack
- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Trilingual: ES / EN / CAT

## Hero Rules (hard-won)
- Center container: photo only (never video — causes grey box bugs)
- All content (logo, tagline, button) INSIDE containerRef as absolute overlays
- containerRef must always have overflow: hidden
- Fixed panel fades out when scrollY > window.innerHeight
- Use window scroll listener + rAF lerp, not touch/wheel preventDefault

## Section Order
1. Navbar → 2. Hero → 3. About → 4. Menu (flip cards) → 5. Gallery (polaroids) →
6. Reservations → 7. Testimonials → 8. Location → 9. Footer
