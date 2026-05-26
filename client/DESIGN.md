---
name: Affnet-v2-design
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d1c5b2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9a8f7e'
  outline-variant: '#4e4637'
  surface-tint: '#ecc166'
  primary: '#ecc166'
  on-primary: '#402d00'
  primary-container: '#c9a14a'
  on-primary-container: '#4e3800'
  inverse-primary: '#795901'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#afc6ff'
  on-tertiary: '#102e64'
  tertiary-container: '#8da6e3'
  on-tertiary-container: '#1f3a70'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea0'
  primary-fixed-dim: '#ecc166'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#5c4300'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d9e2ff'
  tertiary-fixed-dim: '#afc6ff'
  on-tertiary-fixed: '#001944'
  on-tertiary-fixed-variant: '#2b457c'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  h4:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  h5:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  h6:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  lead:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.03em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  '0': '0'
  '4': 4px
  '8': 8px
  '12': 12px
  '16': 16px
  '24': 24px
  '32': 32px
  '48': 48px
  '64': 64px
  '80': 80px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system for this commercial real estate firm is built on a foundation of **Dark Luxury** and **Institutional Trust**. It evokes the atmosphere of a high-end, late-night boardroom in a metropolitan skyscraper. 

The aesthetic is **Modern Corporate Minimalism**, prioritizing precision and clarity over decorative flair. The interface should feel expensive, authoritative, and stable. Visual noise is eliminated to allow property data and high-resolution architectural photography to lead the experience. The emotional response is one of exclusive access and professional competence.

## Colors
This design system utilizes a "Void" palette—a deep, layered dark mode that uses subtle shifts in hexadecimal values to create structural depth rather than shadows. 

- **Primary Accent:** The Gold (#C9A14A) is used sparingly for call-to-actions, status indicators, and premium markers. It should never be used for large background areas.
- **Surface Hierarchy:** The background is absolute black to maximize contrast with high-end photography. Interactive surfaces step up in luminosity from `#111111` to `#181818`.
- **Borders:** Use `#262626` for all structural divisions. This maintains a sharp, architectural grid without the softness of shadows.

## Typography
The typographic scale is designed for high-impact hierarchy. **Hanken Grotesk** provides a sharp, contemporary corporate feel for headlines, while **Inter** ensures maximum legibility for complex data and property descriptions.

- **Headlines:** Use H1 and H2 for hero sections and property titles. Tighten letter spacing on larger sizes to maintain a "locked-in" architectural look.
- **Data Display:** Use H6 (Uppercase) for section headers and technical specifications.
- **Lead Text:** Use the Lead style for property summaries and executive bios to provide a softer entry point for long-form content.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop and a **Fluid** model on mobile. Content is housed within a 12-column grid with a maximum width of 1440px.

- **Spaciousness:** To convey "premium" positioning, avoid overcrowding. Use the 64px and 80px units for vertical section spacing to create an "airy" gallery feel.
- **Alignment:** Align text strictly to the grid. Use 24px gutters for property cards to ensure a clean visual break between high-contrast images.
- **Mobile:** Reduce side margins to 16px, but maintain 32px vertical rhythm between elements to ensure the UI remains easy to scan.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** rather than heavy shadows. 

- **Surface Levels:** The background is `#0A0A0A`. Interactive cards and containers use `#181818`. 
- **Borders:** All containers must have a 1px solid border of `#262626`. This creates a crisp, "technical drawing" appearance.
- **Shadows:** Use shadows only for floating elements like dropdowns or modals. Use a deep, high-spread shadow: `0 20px 40px rgba(0,0,0,0.8)`. 
- **Hover States:** On hover, card backgrounds should transition slightly to `#202020` to indicate interactivity without using bright highlights.

## Shapes
Shapes are **Soft** but leaning towards **Sharp** (0.25rem / 4px). This small radius softens the edge enough to feel modern while maintaining the rigid, trustworthy structure of a commercial building.

- **Standard Elements:** Inputs, buttons, and cards use the base 4px radius.
- **Imagery:** Large property hero images should remain sharp (0px) to maximize the architectural impact.
- **Small Components:** Tags and chips should also utilize the 4px radius; avoid pill shapes as they are too casual for this brand.

## Components

### Buttons
- **Primary:** Background `#C9A14A`, Text `#0A0A0A`. Rectangular with 4px radius. No gradients.
- **Secondary:** Transparent background, 1px Border `#262626`, Text `#FFFFFF`.
- **Tertiary:** Text-only, `#FFFFFF`, with the Gold accent used only for a 2px bottom border on hover.

### Cards
- **Property Cards:** Background `#181818`, 1px Border `#262626`. Images should have a subtle 10% black overlay to ensure text legibility if overlaying labels.
- **Stats Cards:** Large H3 Gold text for the number, H6 Secondary Text for the label.

### Input Fields
- **Default:** Background `#111111`, Border `#262626`, Text `#FFFFFF`.
- **Focus:** Border changes to `#C9A14A`. No outer glow.

### Lists & Tables
- Used for financial data and square footage specs.
- Rows separated by 1px Border `#262626`. 
- Alternate row striping is not permitted; use hover states instead.

### Chips/Badges
- Small, rectangular tags with 4px radius.
- For "Available" status: Background `#3D3421`, Text `#C9A14A`.
- For "Sold/Leased": Background `#262626`, Text `#A1A1AA`.