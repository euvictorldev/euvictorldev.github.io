---
title: Fix glow clipping between About and Knowledge sections
status: in-progress
---

# Problem
The emerald green glow in the `Knowledge` section is being cut by a sharp straight line at the top. This happens because the `Knowledge` section has `overflow: hidden`, and the `ShapeDivider` at the bottom of the `About` section (which matches the background) is overlapping the glow.

# Proposed Solution
1. Remove `overflow: hidden` from the `Knowledge` section to allow the glow to bleed vertically.
2. Use `overflow-x: clip` (or `overflow-x: hidden`) to prevent horizontal scroll from the large glow.
3. Adjust the `z-index` of the glow and content in the `Knowledge` section to ensure the glow sits correctly relative to the `ShapeDivider` from the section above.
4. Set the `Knowledge` section background to `transparent` so it doesn't cover the `ShapeDivider` transition, relying on the global background color instead.

# Tasks
- [ ] Modify `src/components/sections/Knowledge.tsx` to fix overflow and z-index.
- [ ] Verify visual transition.
