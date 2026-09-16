# IrrationaL Portfolio // Vũ Đình Nghĩa Hưng

> **Studio-grade Game Client & Infra Engineer Portfolio Website**  
> Live URL: [https://hungvdn1314.github.io/portfolio/](https://hungvdn1314.github.io/portfolio/)

---

## 🎮 Overview

A modern, fast, zero-dependency web portfolio covering 4+ years of game client engineering, deterministic multiplayer simulation, native mobile SDK stability, and internal developer tooling developed at **Gear Games**.

Designed with **UI/UX Pro Max** and **Taste Skill** principles:
- **Zero bloat**: Pure semantic HTML5, modern CSS Grid/Flexbox custom properties, vanilla ES6+ JavaScript.
- **Bilingual i18n**: English & Vietnamese translation engine with persistent state and automatic browser locale detection.
- **Obsidian Vault Bridge**: Bidirectional protocol syncing portfolio project case studies, career notes, and skills directly with a local Obsidian Vault.
- **Accessible & Responsive**: WCAG AA color contrast, fluid mobile layout (375px to 1440px+), keyboard accessibility, and reduced-motion compliance.

---

## 🛠️ Technical Stack Matrix

- **Core Languages**: C# (.NET Tooling), C++ (Native Plugins & Memory Pooling), Python (Automation), Swift (macOS Utilities), JavaScript / TypeScript
- **Game & Systems**: Unity (2D/3D, UGUI, Timelines), Photon Quantum (Deterministic ECS), State Machines (FSM), Physics & Collision, Combat Calculations
- **Infra & Debugging**: Splunk (Crash Triage & Telemetry), Native SDKs (Facebook, Firebase, IAP), Profiling Tools (Xcode Instruments, Profiler), Internal Tooling, Git & CI/CD
- **Web & Platforms**: React, Next.js, Vite, Tailwind CSS, iOS & Android, macOS Environment, Embedded / IoT (Arduino)

---

## 📁 Repository Structure

`	ext
portfolio/
├── assets/                  # High-res screenshots, profile photo, and downloadable CV
│   ├── cv.pdf               # Downloadable CV PDF (Vu_Dinh_Nghia_Hung_CV.pdf)
│   ├── profile.jpg          # Profile portrait
│   └── projects/            # In-game captures and web platform previews
├── css/
│   └── style.css            # Custom responsive design system, typography, and dark palette
├── js/
│   ├── animations.js        # Scroll-reveal intersection observers and smooth motion
│   ├── i18n.js              # Bilingual dictionary and DOM localization engine (EN / VI)
│   └── main.js              # Theme switcher, video modal, mobile drawer, interactive copy
├── index.html               # Main single-page application entry point
├── obsidian-bridge.js       # CLI bridge tool for bidirectional Obsidian vault syncing
└── serve.js                 # Zero-dependency local development HTTP server
`

---

## 🚀 Local Development

No package installation or build step required. Run using standard Node.js:

`ash
# Start local development server (http://localhost:3000)
node serve.js

# Check Obsidian vault sync status
node obsidian-bridge.js status
`

---

## 📜 License

&copy; 2026 Vũ Đình Nghĩa Hưng (IrrationaL). All rights reserved.
