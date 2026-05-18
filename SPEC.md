# RENO VALUE — AI Renovation Value Predictor

## 1. Concept & Vision

A professional internal tool for property owners and agents in Swiss Romandie to estimate the post-renovation value of a property. The user inputs property details (location, purchase price, renovation scope) and gets a data-driven predicted sale price after full renovation — with clear margins, benchmarks, and actionable insights.

The tool feels like a premium Swiss financial product: precise, trustworthy, clean — not flashy. Think private banking app energy: confident typography, muted palette, zero clutter.

---

## 2. Design Language

**Aesthetic:** Swiss minimalism meets fintech — clean grids, confident typography, subtle depth. Inspired by Swissquote / Raiffeisen digital products.

**Color Palette:**
- Background: `#FAFAF8` (warm off-white)
- Surface: `#FFFFFF`
- Primary: `#1A1A2E` (deep navy-black)
- Accent: `#C8A96E` (Swiss gold — warm, premium)
- Muted: `#6B7280`
- Success: `#059669`
- Warning: `#D97706`
- Border: `#E5E7EB`

**Typography:**
- Headings: `Inter` (700, tight tracking)
- Body: `Inter` (400/500)
- Mono (values/numbers): `JetBrains Mono` — for all financial figures

**Motion:**
- Subtle fade-ins on load (150ms ease-out)
- Number counters animate on result reveal
- Tab/switch transitions: 200ms ease

---

## 3. Layout & Structure

```
┌─────────────────────────────────────────────────────┐
│  HEADER: Logo + Language Toggle (EN/FR)             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO: Title + One-liner intro                       │
│                                                     │
├──────────────────────┬──────────────────────────────┤
│   INPUT FORM         │   RESULTS PANEL              │
│   (left, 40%)        │   (right, 60%)               │
│                      │                              │
│   Property Type      │   📊 Post-Renovation Value   │
│   Location (Commune) │   💰 Purchase Price           │
│   Purchase Price     │   🔨 Renovation Cost Est.    │
│   Living Area (m²)   │   📈 Estimated Margin        │
│   Year Built         │                              │
│   Current Condition  │   📍 Price/m² Benchmarks     │
│                      │   🏠 Comparable Sales        │
│   [CALCULATE]        │                              │
│                      │   💡 Recommendations         │
├──────────────────────┴──────────────────────────────┤
│  FOOTER: Disclaimer + Version                       │
└─────────────────────────────────────────────────────┘
```

**Responsive:** Single column on mobile (inputs above results).

---

## 4. Features & Interactions

### Input Form
| Field | Type | Options/Range |
|---|---|---|
| Property Type | Select | Apartment, Villa, Row House, Building (2-4 units), Farmhouse |
| Location (Commune) | Select + Search | Top Romandie communes (Geneva, Lausanne, Fribourg, Bern, Neuchâtel, Sion, etc.) |
| Purchase Price (CHF) | Number input | 100,000 – 10,000,000 |
| Living Area (m²) | Number input | 20 – 1,000 |
| Year Built | Number input | 1800 – 2025 |
| Current Condition | Select | Poor / Fair / Good |
| Estimated Renovation Cost (CHF) | Number input (optional override) | auto-calculated if blank |

### Calculation Logic (Rule-Based)

**Base price/m² by commune** (hardcoded Swiss Romandie benchmarks):
```
Geneva (Centre):    ~9,500 CHF/m²
Geneva (Suburbs):   ~7,500 CHF/m²
Lausanne:           ~8,000 CHF/m²
Montreux/Vevey:     ~6,500 CHF/m²
Fribourg:           ~5,500 CHF/m²
Bern:               ~6,000 CHF/m²
Neuchâtel:          ~5,000 CHF/m²
Sion:               ~4,500 CHF/m²
Yverdon:            ~4,000 CHF/m²
Other Romandie:     ~4,000–5,500 CHF/m²
```

**Condition multiplier:**
- Poor: 0.70 (property is undervalued due to condition)
- Fair: 0.85
- Good: 0.95

**Renovation uplift factor:**
Full renovation adds value based on property type:
- Apartment: +15% to post-renovation value
- Villa: +20%
- Row House: +18%
- Building: +22%
- Farmhouse: +25% (more upside in rural)

**Renovation cost estimation** (CHF/m²):
- Poor condition: 1,200 CHF/m²
- Fair condition: 800 CHF/m²
- Good condition: 500 CHF/m²

**Post-renovation value formula:**
```
current_value = purchase_price
post_renovation_value = current_value × condition_multiplier × location_base_multiplier + renovation_cost × uplift_factor
estimated_sale_price = post_renovation_value × 1.05 (market buffer factor)
```

### Results Panel
- Animated number reveal on calculate
- Color-coded margin (green = good, yellow = marginal, red = loss)
- Benchmarks section: price/m² comparison vs commune average
- Recommendations: short bullet list (e.g., "Consider a higher renovation budget in Geneva for better ROI")

### Language Toggle
- EN / FR toggle in header
- All labels, values, recommendations translated
- Locale-aware number formatting (CHF)

### Edge Cases
- If purchase price is 0 or negative → show error
- If area is outside range → clamp and warn
- If renovation cost > 70% of estimated post-renovation value → show warning

---

## 5. Component Inventory

### `<Header>`
- Logo text: "RENO VALUE" (gold accent on "VALUE")
- Language toggle: EN | FR pill buttons

### `<PropertyForm>`
- All fields with labels (bilingual)
- Tooltip icons for help text
- Error state: red border + inline message
- Loading state: spinner on calculate button

### `<ResultsPanel>`
- Skeleton loader while calculating (300ms artificial delay for feel)
- Numbers animate via count-up effect
- Margin badge: 🟢 Favorable / 🟡 Tight / 🔴 Negative
- Expandable "Details" section for formula breakdown

### `<BenchmarkChart>`
- Simple horizontal bar showing: Your property vs Commune avg vs Canton avg

### `<Recommendations>`
- 3 bullet points max, prioritized by impact

---

## 6. Technical Approach

**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

**Project Structure:**
```
/app
  /page.tsx          — main calculator page
  /layout.tsx        — root layout with fonts + i18n
/components
  /PropertyForm.tsx
  /ResultsPanel.tsx
  /BenchmarkChart.tsx
  /Recommendations.tsx
  /Header.tsx
  /LanguageToggle.tsx
/lib
  /calculator.ts     — all calculation logic
  /data.ts           — commune benchmarks data
  /i18n.ts           — translations
/public
  /favicon.ico
```

**State:** React useState + useEffect (no external state library needed)

**i18n:** Simple JSON-based translations stored in `/lib/i18n.ts`, language stored in React context / useState

**Deployment:** Vercel (connected to GitHub repo `DigitalCoa-ch/ai-native-team-07`)

---

## 7. Data — Commune Benchmarks (CHF/m²)

```typescript
const communeData: Record<string, { basePricePerSqm: number; label: string }> = {
  "geneva-centre": { basePricePerSqm: 9500, label: "Genève Centre" },
  "geneva-suburbs": { basePricePerSqm: 7500, label: "Genève Banlieue" },
  "lausanne": { basePricePerSqm: 8000, label: "Lausanne" },
  "montreux": { basePricePerSqm: 6500, label: "Montreux / Vevey" },
  "fribourg": { basePricePerSqm: 5500, label: "Fribourg" },
  "bern": { basePricePerSqm: 6000, label: "Berne" },
  "neuchatel": { basePricePerSqm: 5000, label: "Neuchâtel" },
  "sion": { basePricePerSqm: 4500, label: "Sion" },
  "yverdon": { basePricePerSqm: 4000, label: "Yverdon-les-Bains" },
  "bulle": { basePricePerSqm: 4500, label: "Bulle" },
  "laneuveville": { basePricePerSqm: 4200, label: "La Neuveville" },
  "other-romandie": { basePricePerSqm: 4000, label: "Autre Suisse Romande" },
}
```

---

## 8. Translations (EN / FR)

Full bilingual support for all labels, placeholders, results text, and recommendations. See `/lib/i18n.ts` for full dictionary.