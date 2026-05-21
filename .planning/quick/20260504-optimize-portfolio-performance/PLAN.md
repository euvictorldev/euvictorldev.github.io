# Plan - Optimize Portfolio Performance

Implement a comprehensive performance overhaul for the Portfolio section and the site in general to eliminate lag and improve responsiveness.

## Proposed Improvements

### 1. Advanced Video Lazy Loading
- **Issue**: `LazyVideo` currently preloads all videos on mount, consuming bandwidth and CPU.
- **Solution**:
    - Modify `LazyVideo` to only set the `src` attribute when `isInView` is true.
    - Change `preload="auto"` to `preload="metadata"` (or `none`).
    - Add a `poster` attribute support to show a thumbnail before the video loads.
    - Implement a skeleton/placeholder state for the video container to prevent Layout Shift (CLS).

### 2. Component Re-render Optimization
- **Issue**: The entire `Portfolio` section re-renders when a modal opens/closes.
- **Solution**:
    - Wrap the list of projects in a `memo`ized sub-component.
    - Isolate the `selectedProject` state if possible, or ensure the expensive visual components don't re-calculate.

### 3. Media & Asset Optimization
- **Issue**: Unoptimized images or videos.
- **Solution**:
    - Verify if images can use modern formats (WebP).
    - Ensure videos are muted and audio tracks removed (if possible) to save space.
    - Implement better image sizing.

### 4. Animation & Interaction Polish
- **Issue**: Heavy animations might be triggering layout reflows.
- **Solution**:
    - Ensure all animations use `transform` and `opacity` only.
    - Add `will-change` properties strategically to promote layers to the GPU.
    - Use `requestAnimationFrame` for any complex scroll-based logic if present.

## Verification Plan
- [ ] Verify that videos only start downloading when they enter the viewport (Network tab).
- [ ] Check for re-renders using React DevTools (if accessible) or console logs.
- [ ] Measure time to interact and frame stability during scroll.
- [ ] Validate that the modal opens smoothly without hitching.

## Checklist
- [ ] Audit `Portfolio.tsx` for unnecessary re-renders.
- [ ] Implement source-level lazy loading in `LazyVideo`.
- [ ] Add poster image support.
- [ ] Optimize `ProjectModal` rendering.
- [ ] General site audit (fonts, global styles).
