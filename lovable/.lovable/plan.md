## Goal

Rebuild Hikma Institute's content using Edupro's visual design system, as a static front-end you can later drop into Salla.sa.

## Design system (from Edupro)

- Background: warm off-white `#F4F2EE`, surfaces white
- Text: near-black `#0E0E0E`, muted `#6B6B6B`
- Accent buttons: solid black pill with white text + arrow
- Typography: bold geometric sans (Bricolage Grotesque / Space Grotesk for headings, Inter for body — close stand-ins for Edupro's display face)
- Generous whitespace, oversized hero type, rounded-2xl cards, soft shadows, subtle floating decorative elements
- Section pattern: small centered eyebrow → big headline → short paragraph → pill CTA → content grid

All tokens go into `src/styles.css` as oklch variables. No hardcoded colors in components.

## Page structure (single landing route `/`)

1. **Nav** — Hikma logo (text mark), links: About, Programs, Approach, Why Hikma, Contact + black pill "Request Consultation"
2. **Hero** — eyebrow "Saudi Arabia's Premier B2B Training Partner", H1 "Training that delivers results.", subcopy, two CTAs (Schedule a Consultation / Explore Programs), floating stat chips (47+ Enterprise Clients, 3+ Years, 9 Domains, 79% Customized) styled as Edupro's floating pills
3. **Trusted by** — marquee row of client name chips (Aramco, SABIC, STC, SEC, NEOM, Maaden, ACWA, Riyad Bank, Al Rajhi, SNB, Mobily, Zain, Saudia, SASO, Tasnee, SPL, Sipchem, Almarai, Mawani, Hassana) + industry breakdown chips (Oil & Gas 15+, Banking 12+, Telecom 8+, Government 10+, Healthcare 7+, Logistics 8+)
4. **About** — "Wisdom as the keystone of corporate excellence", vision/mission, 4 value cards (Partnership, Excellence, Innovation, Integrity), ISO 9001:2015 badge, est. 2020
5. **Training domains grid** — 12 domain cards in Edupro's rounded card style: Corporate Training, Leadership, Oil & Gas, Medical, Project Management, HR, Sales, Finance, Logistics, Marketing, Team Building, Procurement (each: title, sub, short blurb, cert chips)
6. **Programs catalogue** — filter chips (All 28, Leadership 3, HR 3, Sales 3, Finance 2, PM 2, Oil & Gas 3, Medical 3, Marketing 2, Supply Chain 2, Team Building 2, Soft Skills 3) + 9 featured program cards (LDP, New Leader Accelerator, Executive Leadership, SHRM-CP, HRBP Masterclass, Recruitment, B2B Sales Mastery, Advanced Negotiation, Challenger Sale) with level, duration, delivery mode, certification, topics, "View Program Details" link. "Load More" CTA noting 19 more.
7. **TNA-to-ROI methodology** — 4 numbered steps (Training Needs Analysis, Bespoke Program Design, World-Class Delivery, Measurement & ROI) as horizontal timeline cards
8. **Every engagement includes** — 7 deliverables grid (Training Objectives, Participants List, Pre/Post Assessment, Lessons Learnt, Recommendations, Certificates, Invoices & ROI)
9. **Why Hikma** — 4 advantage stats (100% Customized, 12+ Domains, 50+ Certifications, 60+ Clients) + comparison table Hikma vs Industry Standard
10. **Qiwa & IKTVA compliance** — 4 compliance badges (QIWA, IKTVA, Saudi Labor Law, Local Content) + CTA
11. **Experiential learning** — 4 numbered cards (Indoor/Outdoor Challenges, Business Simulations, Creative Workshops, CSR Activities)
12. **Global partnerships** — university logos as text chips (Harvard, Yale, Stanford, MIT, Penn, Michigan, Northwestern, Rice, Illinois)
13. **Contact / CTA section** — "Schedule a consultation" with phone 9200 14205 and form (name, company, email, phone, message)
14. **Footer** — logo, short tagline, link columns, copyright

## Implementation

- One route file `src/routes/index.tsx` rendering composable section components in `src/components/sections/*`
- Design tokens in `src/styles.css` (background, foreground, muted, accent, card, border, radius, shadows)
- Use shadcn `Button`, `Card`, `Badge`, `Input`, `Textarea`, `Tabs` where useful — restyled via tokens to match Edupro
- Marquee built with pure CSS animation
- Generate 2 hero/about imagery placeholders (boardroom scene + training session) via `imagegen` — keep light, editorial, photographic style consistent with Edupro's clean look
- Update `<head>` meta: title "Hikma Institute — B2B Training & Consulting", description from hero copy, og tags
- No backend — purely static, ready to embed in Salla as a theme/landing

## Out of scope

- No multi-page routing (About/Contact remain in-page anchors) — keeps it Salla-friendly as a single landing
- No actual form submission wiring
- No RTL/Arabic version unless you ask
- No Salla integration code itself — this is the front-end you'll port

After approval I'll build it end-to-end in one pass and let you preview.
