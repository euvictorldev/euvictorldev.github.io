---
status: in-progress
---

# Plan: Professional Mobile Responsiveness & Optimization

Optimize the portfolio for high-end mobile performance and responsiveness using professional techniques like fluid typography (`clamp`), dynamic viewport units (`dvh`), and performance-first asset loading.

## User Requirements
- Make the site fully responsive for mobile.
- Use professional techniques (Fluid typography, Mobile-first).
- Research and apply optimizations (Vite/React specific).
- Maintain "premium" aesthetic.

## Architecture & Design
- **Fluid Typography**: Define `clamp()` based font-size utilities in `src/index.css`.
- **Spacing System**: Implement fluid spacing for section margins and padding.
- **Viewport Units**: Switch from `vh` to `dvh` for full-screen sections (Hero).
- **Asset Optimization**: 
    - Ensure videos/images have proper `aspect-ratio` to prevent CLS (Cumulative Layout Shift).
    - Implement lazy loading for off-screen media.
- **Mobile-Specific UI**:
    - Ensure CTAs are thumb-friendly (min 44px height).
    - Refine the `Portfolio` list for better vertical scrolling.
    - Adjust `TechStack` orbital timeline for small screens.

## Steps

### 1. Global Styles (Fluid Foundation)
- [ ] Update `src/index.css`:
    - [ ] Add fluid typography variables using `clamp()`.
    - [ ] Add fluid spacing variables.
    - [ ] Update global reset for `dvh` support.

### 2. Section-by-Section Refinement
- [ ] **Hero Section**: 
    - [ ] Use `h-[100dvh]` for the hero background.
    - [ ] Apply fluid typography to the main headline.
- [ ] **Portfolio Section**:
    - [ ] Adjust grid gaps and padding for mobile.
    - [ ] Ensure video/image frames scale correctly without overflow.
    - [ ] Optimize modal for small screens (padding, close button position).
- [ ] **TechStack Section**:
    - [ ] Ensure `RadialOrbitalTimeline` scales down correctly for mobile.
    - [ ] Refine the bottom icon list for multi-line wrapping.
- [ ] **AIDifferential & Services**:
    - [ ] Apply fluid spacing and typography.
    - [ ] Verify card stacking order.

### 3. Performance & Asset Polish
- [ ] Add `loading="lazy"` to all non-hero images.
- [ ] Ensure all videos have `playsInline` and `muted` for mobile autoplay compatibility.
- [ ] Audit `index.html` for preconnect/preload opportunities.

### 4. Verification
- [ ] Run `npm run dev` and test with Browser DevTools (iPhone/Pixel presets).
- [ ] Check for horizontal overflow.
- [ ] Verify touch targets.
- [ ] Check console for layout shift warnings.

## Verification
- [ ] Fluid typography transition is smooth (no jumps).
- [ ] 0 horizontal scroll on mobile.
- [ ] Performance score improvement (LCP, CLS).
