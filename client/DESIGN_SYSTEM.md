/**
 * @file DESIGN_SYSTEM.md
 * @description Frontend color system and design tokens documentation
 * @tags documentation, design-system, colors
 */

# AffNet Frontend Design System

## 🎨 Color System Overview

The frontend uses a centralized color configuration system to maintain consistent branding and theming across all components.

### Color Palette

#### Primary Colors (Black & Dark Tones)
```
Black Primary:           #000000 (bg-black)
Dark Secondary:          #050505 (bg-[#050505])
Dark Tertiary:           #0A0A0A (bg-[#0A0A0A])
```

#### Accent Colors (Gold/Amber)
```
Accent Primary:          #C9A14A (Premium Gold)
Accent Light:            #d6ae57 (Light Gold)
Accent Dark:             #b8961d (Dark Gold)
```

#### Text & Neutral Colors
```
Text Primary:            #FFFFFF (White)
Text Secondary:          rgba(255, 255, 255, 0.6) (60% opacity)
Text Tertiary:           rgba(255, 255, 255, 0.4) (40% opacity)
Text Muted:              rgba(255, 255, 255, 0.2) (20% opacity)
```

#### Background with Opacity
```
Backdrop Light:          rgba(255, 255, 255, 0.05)
Backdrop Medium:         rgba(255, 255, 255, 0.1)
Backdrop Dark:           rgba(255, 255, 255, 0.2)
```

#### Accent Backgrounds
```
Accent Background Light: rgba(201, 161, 74, 0.05)
Accent Background Med:   rgba(201, 161, 74, 0.1)
Accent Background Dark:  rgba(201, 161, 74, 0.2)
```

## 📦 Using the Color System

### Import Colors
```typescript
import { COLORS } from "@/constants/colors"
```

### Available Color Objects

#### Background Colors
```typescript
COLORS.bg.primary      // "bg-black"
COLORS.bg.secondary    // "bg-[#050505]"
COLORS.bg.tertiary     // "bg-[#0A0A0A]"
COLORS.bg.overlay      // "bg-black/40"
```

#### Text Colors
```typescript
COLORS.text.primary    // "text-white"
COLORS.text.secondary  // "text-white/60"
COLORS.text.tertiary   // "text-white/40"
COLORS.text.muted      // "text-white/20"
```

#### Border Colors
```typescript
COLORS.border.primary      // "border-white/10"
COLORS.border.secondary    // "border-white/5"
COLORS.border.accent       // "border-[#C9A14A]/30"
COLORS.border.accentLight  // "border-[#C9A14A]/20"
```

#### Accent Colors (Direct Values)
```typescript
COLORS.accent.primary  // "#C9A14A"
COLORS.accent.light    // "#d6ae57"
COLORS.accent.dark     // "#b8961d"
```

#### Backdrop Colors
```typescript
COLORS.backdrop.light   // "bg-white/5"
COLORS.backdrop.medium  // "bg-white/10"
COLORS.backdrop.dark    // "bg-white/20"
```

#### Accent Backgrounds
```typescript
COLORS.accentBg.light   // "bg-[#C9A14A]/5"
COLORS.accentBg.medium  // "bg-[#C9A14A]/10"
COLORS.accentBg.dark    // "bg-[#C9A14A]/20"
```

## 🎯 Usage Examples

### Example 1: Page Background
```tsx
import { COLORS } from "@/constants/colors"

export default function Page() {
  return (
    <main className={`min-h-screen ${COLORS.bg.primary} pb-24`}>
      {/* Content */}
    </main>
  )
}
```

### Example 2: Card Component
```tsx
import { COLORS } from "@/constants/colors"

export function Card({ children }) {
  return (
    <div className={`
      rounded-2xl 
      ${COLORS.border.primary}
      ${COLORS.bg.tertiary}
      transition-colors duration-300 
      hover:${COLORS.border.accent}
    `}>
      {children}
    </div>
  )
}
```

### Example 3: Button with Accent Color
```tsx
import { COLORS } from "@/constants/colors"

export function PrimaryButton({ children }) {
  return (
    <button
      style={{ backgroundColor: COLORS.accent.primary }}
      className="px-6 py-3 rounded-lg font-semibold text-black hover:opacity-90"
    >
      {children}
    </button>
  )
}
```

### Example 4: Text with Hierarchy
```tsx
import { COLORS } from "@/constants/colors"

export function Article({ title, content, meta }) {
  return (
    <article>
      <h1 className={`text-3xl font-bold ${COLORS.text.primary}`}>
        {title}
      </h1>
      <p className={`mt-2 ${COLORS.text.secondary}`}>
        {content}
      </p>
      <span className={`text-sm ${COLORS.text.tertiary}`}>
        {meta}
      </span>
    </article>
  )
}
```

### Example 5: Form Input
```tsx
import { COLORS } from "@/constants/colors"

export function Input({ label, ...props }) {
  return (
    <div>
      <label className={COLORS.text.secondary}>{label}</label>
      <input
        {...props}
        className={`
          w-full mt-2 px-4 py-2
          ${COLORS.bg.secondary}
          ${COLORS.border.primary}
          ${COLORS.text.primary}
          border rounded-lg
          focus:outline-none focus:${COLORS.border.accent}
        `}
      />
    </div>
  )
}
```

## 🎨 Utility Functions

### Get Accent Color with Opacity
```typescript
import { getAccentColor } from "@/constants/colors"

// Returns: "bg-[#C9A14A]/10"
const bgClass = getAccentColor(10)

// Usage in JSX
<div className={getAccentColor(20)}>
  {/* Component with 20% opacity accent background */}
</div>
```

### Get White Color with Opacity
```typescript
import { getWhiteColor } from "@/constants/colors"

// Returns: "text-white/10"
const textClass = getWhiteColor(10, "text")

// Returns: "bg-white/20"
const bgClass = getWhiteColor(20, "bg")

// Returns: "border-white/5"
const borderClass = getWhiteColor(5, "border")
```

## 📱 Responsive Design

Combine colors with Tailwind's responsive utilities:

```tsx
import { COLORS } from "@/constants/colors"

<div className={`
  ${COLORS.bg.tertiary}
  sm:${COLORS.bg.secondary}
  md:${COLORS.bg.primary}
`}>
  Responsive background color
</div>
```

## ♿ Accessibility

Always ensure sufficient contrast:
- Text on dark backgrounds should use `COLORS.text.primary` or `COLORS.text.secondary`
- Use `COLORS.accent.primary` for important interactive elements
- Avoid using only color to convey information

## 🔄 Dark Mode Support

The color system is built for dark mode by default. For light mode support in the future:
1. Add light theme colors to `COLORS` object
2. Create theme toggle in header
3. Use CSS variables or class-based switching

## 📚 CSS Variables

The system also defines CSS variables for Tailwind configuration:

```css
:root {
  --color-primary: #000000;
  --color-accent: #C9A14A;
  --color-accent-light: #d6ae57;
  --color-bg: #0A0A0A;
  --color-fg: #ffffff;
}
```

## ⚡ Performance Tips

1. Use class-based colors instead of inline styles when possible
2. Import colors once at component level
3. Leverage Tailwind's purging for unused colors
4. Use CSS variables for dynamic theming

## 🐛 Troubleshooting

### Colors not applying?
1. Check if `COLORS` is imported
2. Verify class names use Tailwind format (`bg-`, `text-`, `border-`)
3. Ensure Tailwind CSS is properly configured

### Opacity values not working?
- Tailwind requires explicit opacity values: `/5`, `/10`, `/20`, etc.
- Use utility functions for consistency

## 📖 Additional Resources

- [Color Constants](/constants/colors.ts)
- [Tailwind Config](/tailwind.config.ts)
- [Global Styles](/app/globals.css)

---

**Last Updated:** June 7, 2026
