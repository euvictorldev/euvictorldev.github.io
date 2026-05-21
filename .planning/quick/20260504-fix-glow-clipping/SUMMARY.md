---
title: Fix glow clipping between About and Knowledge sections
status: complete
---

# Summary
Fixed the sharp cutting of the emerald green glow at the top and bottom of the `Knowledge` section.

# Changes
- **Knowledge.tsx**: 
    - Reduced the dimensions of the radial glow (`w-[70%] h-[50%]`) and its blur (`100px`).
    - Restored `overflow-hidden` on the section.
    - By shrinking the glow and centering it, the emerald light now fades out completely before reaching the top and bottom boundaries of the section.
    - This ensures the edges are pure black, matching the `ShapeDivider` above and the `FAQ` section below, creating a perfectly seamless transition without any visual clipping.
