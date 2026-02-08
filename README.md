# SideKick Incorporated

**Every hero needs a SideKick.**

A single-page website for SideKick Incorporated, a flexible support services business based in Cape Town.

## Features

- 🎨 Comic book-inspired theme with pigeon color palette
- 📱 Fully responsive design (mobile-first)
- ♿ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- ⚡ Fast static site built with Vite + React + TypeScript
- 🚀 Ready for GitHub Pages deployment?

## Tech Stack

- **React 18** - Component-based UI
- **TypeScript** - Type safety with strict mode
- **Vite** - Fast build tooling
- **CSS Modules** - Scoped styling
- **CSS Custom Properties** - Design tokens for consistent theming

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build static files
npm run build
```

Built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Manual Deployment

1. Build the project: `npm run build`
2. Push the `dist/` folder contents to a `gh-pages` branch
3. Enable GitHub Pages in your repository settings, selecting the `gh-pages` branch

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Important: Base Path Configuration

If deploying to a repository other than `username.github.io`, update the `base` in `vite.config.ts`:

```typescript
// For https://username.github.io/repo-name/
base: '/repo-name/',
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header/          # Navigation header
│   ├── Hero/            # Hero section
│   ├── Missions/        # Services (CREATE, MOVE, LOOKOUT)
│   ├── WhySideKick/     # Value proposition
│   ├── Pricing/         # Pricing information
│   ├── HowItWorks/      # Process steps
│   ├── Info/            # Additional information
│   ├── Contact/         # Contact CTA
│   └── Footer/          # Site footer
├── styles/
│   ├── tokens.css       # Design tokens (colors, spacing, etc.)
│   └── global.css       # Global styles and utilities
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Color Palette

Inspired by the common city pigeon:

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Green | `#264a3a` | Primary brand color |
| Purple | `#6b5b7a` | Secondary accent |
| Teal | `#4a9595` | Highlights |
| Grey | `#4a4a4a` | Text and borders |
| Orange | `#e85d3b` | Call-to-action accent |

## Contact

📲 WhatsApp: [082 321 4044](https://wa.me/27823214044)

---

© SideKick Incorporated
