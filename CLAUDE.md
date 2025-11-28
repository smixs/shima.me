# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start development server
npm run build  # Production build
npm run lint   # Run ESLint
npm start      # Start production server
```

## Architecture

This is a personal portfolio website for Serge Shima built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components.

### Key Structure

- **`app/page.tsx`** - Single-page application with tab-based navigation
- **`lib/data.ts`** - All portfolio content (personal info, career history, timeline data, skills)
- **`types/index.ts`** - TypeScript interfaces for data structures
- **`components/tabs/`** - Content sections (PersonalTab, CareerTab, SkillsTab, MusicTab, AchievementsTab, TimelineTab)
- **`components/ui/`** - shadcn/ui primitives (do not modify directly)

### Data Flow

Content is centralized in `lib/data.ts` and passed to tab components via props. The main page manages active tab state and renders tab content through `AnimatedTabContent` wrapper.

### Tech Stack

- **UI**: shadcn/ui with Radix primitives, Lucide icons
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion
- **Charts**: Recharts (TimelineChart)
- **Font**: Space Grotesk

### Conventions

- Add `"use client"` directive for components using React hooks (useState, useEffect)
- Use `@/` path aliases for imports
- Dark mode is configured but currently disabled
