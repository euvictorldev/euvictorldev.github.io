---
status: in-progress
---

# Plan: Integrate Radial Orbital Timeline

Integrate the `RadialOrbitalTimeline` component into the `TechStack` section, replacing the current `CpuArchitecture` visual. Categorize tech stacks accurately and set up shadcn/ui dependencies.

## User Requirements
- Integrate `RadialOrbitalTimeline` (React component).
- Use user's tech stack icons.
- Accurate technical categorization (researched).
- Support shadcn project structure, Tailwind, and TypeScript.
- Install dependencies: `lucide-react`, `class-variance-authority`, `@radix-ui/react-slot`.

## Architecture & Design
- **Path for components**: `src/components/ui/`
- **Path for styles**: `src/index.css`
- **Tech Stack Mapping**:
    - Groups: Languages, Frontend, Backend, Database, Infrastructure, BaaS.
    - Connections: Logical links between related tools (e.g., Node -> Databases).

## Steps

### 1. Preparation
- [ ] Install npm dependencies: `lucide-react`, `class-variance-authority`, `@radix-ui/react-slot`.
- [ ] Verify `src/lib/utils.ts` exists for `cn` utility.

### 2. Shadcn Components
- [ ] Create `src/components/ui/badge.tsx`.
- [ ] Create `src/components/ui/button.tsx`.
- [ ] Create `src/components/ui/card.tsx`.

### 3. Core Component Integration
- [ ] Create `src/components/ui/radial-orbital-timeline.tsx`.
- [ ] Update `src/index.css` with custom animations and utilities.

### 4. Implementation in Section
- [ ] Modify `src/components/sections/TechStack.tsx`:
    - [ ] Import `RadialOrbitalTimeline`.
    - [ ] Map existing `techIcons` to `timelineData` format with research-based categories.
    - [ ] Replace `CpuArchitecture` with `RadialOrbitalTimeline`.

### 5. Verification
- [ ] Run `npm run dev` to verify visual integration.
- [ ] Check console for errors.
- [ ] Verify responsiveness.
