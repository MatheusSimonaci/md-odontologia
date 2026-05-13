# Design System: Clínica Odontológica — Template Base

> **Este é o template base do repositório.** Cada projeto deve ter seu próprio `DESIGN.md` na pasta do projeto, derivado deste template e customizado para a identidade visual da clínica (logo, paleta de marca, atmosfera).
>
> **Exemplo de uso:** `projects/md-odontologia-digital/DESIGN.md`
>
> **Processo:** Etapa 1.5 do PROCESS.md — analisar logo/brand assets antes de gerar o site e criar o DESIGN.md do projeto.

---

## 1. Visual Theme & Atmosphere

**Acolhimento Clínico com Elegância Humana**

O sistema de design para clínicas odontológicas equilibra credibilidade médica com calor humano, reduzindo a ansiedade do paciente e transmitindo confiança profissional. É caracterizado por:

- **Acolhedor e sereno** com espaço generoso que transmite organização clínica sem frieza excessiva
- **Limpo e contemporâneo** usando elementos planos com toques quentes que humanizam o ambiente digital
- **Credibilidade-first** com exibição proeminente de credenciais, especializações e anos de experiência
- **Centrado no paciente** com fotografias reais de equipe médica e sorrisos genuínos de pacientes satisfeitos
- **Ancoragem visual clara** através de blocos de informação bem definidos que orientam o paciente pelo fluxo de agendamento
- **Confiança social visível** com depoimentos, avaliações e certificações como elementos estruturais do layout

O clima geral é profissional e acessível — qualidade clínica comunicada através de clareza e acolhimento, não de frieza técnica.

## 2. Color Palette & Roles

| Color Name | Hex Code | Functional Role |
|---|---|---|
| **Warm White** | `#FAFAF8` | Primary background, breathing space — slightly warm to avoid clinical coldness |
| **Deep Charcoal** | `#1A1A2E` | Primary text, high-contrast headers, visual anchors |
| **Soft Gray** | `#F4F4F2` | Secondary background sections, subtle contrast zones |
| **Muted Stone** | `#7A7A72` | Secondary text, captions, metadata, disabled states |
| **Clinical Teal** | `#0096A0` | Primary interactive elements, CTA buttons, active navigation — conveys health and hygiene |
| **Sage Green** | `#5BA08A` | Positive indicators, success states, wellness highlights — softer than vibrant green |
| **Copper Accent** | `#C9956C` | Secondary CTAs, human-warmth highlights, testimonial accents |
| **Silver Divider** | `#E4E4E0` | Borders, dividers, subtle UI separation |
| **Deep Teal** | `#007080` | Hover states, pressed buttons, active emphasis on Clinical Teal elements |

## 3. Typography Rules

**Font Family Primary:** Inter (neutral, trustworthy, universally legible — ideal for healthcare)

**Font Family Accent:** Playfair Display (used exclusively for major section headlines to convey authority and care)

**Hierarchical Scale:**
- **Hero Headlines:** 40-48px, Playfair Display, Font Weight 700 (Bold)
  - Used for main section titles ("Seu Sorriso, Nossa Prioridade")
  - More approachable scale than tech — avoids aggressive visual impact
- **Section Headers:** 28-36px, Inter, Font Weight 600 (Semibold)
  - Service categories, credential blocks, major content groupings
- **Subheaders:** 18-22px, Inter, Font Weight 500-600 (Medium to Semibold)
  - Procedure names, card titles, team member names
- **Body Copy:** 16-18px, Inter, Font Weight 400-500 (Regular to Medium)
  - Procedure descriptions, about text, patient instructions
- **Captions & Fine Print:** 13-15px, Inter, Font Weight 400 (Regular)
  - Footnotes, CRO numbers, address, operating hours metadata

**Character Spacing:** Normal to slightly open with consistent line-height (1.5-1.6) for comfortable reading in healthcare contexts

## 4. Component Stylings

### Buttons
- **Shape:** Generously rounded corners (`border-radius: 20-24px`), appearing as pill-adjacent soft rectangles — more welcoming than sharp tech edges
- **Primary CTA ("Agendar Consulta"):** Clinical Teal background (`#0096A0`), white text, semibold weight (600)
- **Secondary Action ("Saiba Mais"):** Warm White background with Clinical Teal border and text
- **Warm CTA ("Fale Conosco"):** Copper Accent background (`#C9956C`), white text — used for human-touch contact actions
- **Hover State:** Shift to Deep Teal (`#007080`), subtle shadow elevation (`0 4px 12px rgba(0,150,160,0.2)`)
- **Padding:** Comfortable internal spacing (14-18px vertical, 28-36px horizontal)
- **Minimum Touch Target:** 44px height on all interactive elements

### Cards & Containers
- **Corner Treatment:** Generously rounded with 16-20px radius — soft and approachable, never sharp
- **Background:** Warm White (`#FAFAF8`) or Soft Gray (`#F4F4F2`), creating clear visual blocks without clinical coldness
- **Shadows:** Present but soft (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`) — enough weight to convey credibility and structure
- **Service Cards:** Left border accent in Clinical Teal (`4px solid #0096A0`) for visual hierarchy and category identification
- **Testimonial Cards:** Copper Accent left border (`4px solid #C9956C`) to visually distinguish patient voices
- **Borders:** Minimal — Silver Divider lines (`#E4E4E0`) for separation only
- **Padding:** 24-32px internal spacing, consistent across all cards

### Navigation
- **Style:** Clean horizontal nav with underline indicator in Clinical Teal for active state
- **Typography:** Inter Medium (500), 16-18px
- **Sticky behavior:** Navigation sticks on scroll with Warm White background and subtle bottom shadow
- **CTA in Nav:** "Agendar" button always visible in top-right with Clinical Teal fill
- **Active State:** Clinical Teal underline and matching text color
- **Inactive State:** Muted Stone text that transitions smoothly on interaction

### Scheduling Forms & Input Fields
- **Stroke:** 1.5px solid border in Silver Divider (`#E4E4E0`)
- **Background:** White (`#FAFAF8`), consistent visual language
- **Focus State:** Clinical Teal border (`#0096A0`), very subtle teal background tint
- **Corner Radius:** 12px — matching the generous component standard
- **Padding:** 14px vertical, 16px horizontal
- **Inline Icons:** Calendar icon for date fields, clock icon for time fields, user icon for name fields — visual orientation reduces form friction
- **Error State:** Warm red border with helper text below (never alarming, always helpful)

### Credential & Trust Blocks
- **Layout:** Horizontal strip or grid with icon + number + label
- **Icons:** Line-style medical/dental icons in Clinical Teal
- **Numbers:** Large, bold Inter (600-700) in Deep Charcoal — years of experience, patients served, procedures
- **Background:** Soft Gray (`#F4F4F2`) strip spanning full width for visual separation

### Testimonial Section
- **Layout:** Horizontal scroll on mobile, 2-3 column grid on desktop
- **Card style:** Warm White background with Copper Accent left border, patient photo (rounded-full), star rating in Sage Green
- **Typography:** Body Copy for quote text, Subheader weight for patient name
- **Transitions:** Smooth horizontal slide on mobile swipe

### Gallery & Before/After Media
- **Layout:** Two-column side-by-side for before/after comparisons
- **Image Treatment:** Full-width with 12px rounded corners
- **Labels:** "Antes" / "Depois" badges in Clinical Teal, positioned top-left of each image
- **Transitions:** Smooth fade animations on navigation

## 5. Layout Principles

### Spacing & Margins
- **Hero Section:** 40-60px top/bottom padding — informative density without overwhelming; map and hours visible above the fold on mobile
- **Section Gaps:** 48-64px vertical spacing between major content blocks
- **Internal Card Spacing:** 24-32px padding inside containers
- **Horizontal Margins:** 24-48px on desktop, 16-20px on mobile

### Hero Section Priority (Above the Fold)
- **Desktop:** Headline + subheadline + "Agendar Consulta" CTA + trust badges (CRO, anos de experiência)
- **Mobile:** Headline + CTA button + phone number + map pin / address — conversion-first on small screens

### Credential Block (Required Section)
- Displayed within the first two screen-heights — never below the fold on desktop
- Contains: CRO number, years of operation, number of patients served, specializations
- Visual treatment: Icon grid with Clinical Teal accents on Soft Gray background strip

### Grid & Alignment
- **Column-based layout:** Content organized in clear vertical sections with consistent alignment
- **Two-column service layouts:** Procedure name + description + price range, balanced hierarchy
- **Centered hero content:** Key headline and CTA centered for maximum visual impact
- **Staggered team section:** Alternating image/text placements for doctor and team profiles

### Whitespace Strategy
- **Purposeful breathing room:** Space conveys cleanliness and organization — a visual analog to clinic hygiene
- **Vertical rhythm:** Consistent vertical spacing creates calm, trustworthy flow
- **Edge margins:** Content always respects device edges — never cramped
- **Responsive scaling:** Whitespace reduces proportionally on smaller screens without losing legibility

### Mobile-First Priorities
- **Stack-first approach:** All layouts reflow to single column on mobile
- **Touch-friendly buttons:** Minimum 44px touch targets on all interactive elements
- **Map + contact above fold:** Address, phone, and hours immediately accessible on mobile
- **Optimized font sizes:** Hero headline scales to 32-36px on mobile for readability without overflow
- **Full-width CTAs:** Primary action buttons span full width on mobile for maximum tap area

### Required Page Sections (in order)
1. **Hero** — Headline, subheadline, primary CTA, trust badge strip
2. **Credential Block** — CRO, experience, patient count, specializations
3. **Services Grid** — Procedures with icons and brief descriptions
4. **Team Section** — Doctor profiles with credentials and photos
5. **Testimonials** — Patient reviews with photos and star ratings
6. **Before/After Gallery** — Procedure results showcase
7. **Location & Hours** — Map embed, address, operating hours, phone
8. **Scheduling CTA** — Final conversion block with appointment form or WhatsApp link

---

## Design Notes for Implementation

This design system prioritizes **trust, warmth, and conversion**. When extending or creating new screens:

1. **Credential-first mindset** — professional legitimacy must be visible without scrolling on desktop
2. **Use color intentionally** — Clinical Teal for actions, Sage Green for positive outcomes, Copper for human connection, Deep Charcoal for hierarchy
3. **Typography pairing is mandatory** — Playfair Display only for hero headlines; Inter for everything else
4. **Shadows have weight** — `0 4px 12px` is the standard; enough presence to convey structure and credibility
5. **Round everything** — 20-24px border-radius on buttons and cards signals approachability and reduces anxiety
6. **Mobile conversion is primary** — scheduling flow must be friction-free with one tap to call or WhatsApp
7. **Real photography only** — no stock-photo smiles; use authentic team and patient imagery with proper consent
8. **Testimonials are structural** — not optional decoration; they are a required trust mechanism in the layout
