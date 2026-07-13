# Ameya Sonic Opteo System — Website

Official website for **Ameya Sonic Opteo System Ltd.**, a venture of **Ameya Labs, Bangalore**.

Built with **Node.js + Next.js + React + TypeScript**.

---

## Project Structure

```
ameya-website-tsx/
├── app/                    ← Pages (each folder = one URL)
│   ├── layout.tsx          ← Shared layout: header, footer, fonts (wraps every page)
│   ├── page.tsx            ← Homepage  →  /
│   ├── globals.css         ← All site styling
│   ├── mission/page.tsx    ← Mission page  →  /mission
│   ├── our-team/page.tsx   ← Our Team  →  /our-team
│   ├── innovation/page.tsx ← Innovation  →  /innovation
│   ├── justdial/page.tsx   ← JustDial listing  →  /justdial
│   ├── contact/page.tsx    ← Contact  →  /contact
│   └── terms/page.tsx      ← Terms & Conditions  →  /terms
├── components/
│   ├── Header.tsx          ← Navigation bar (used on every page via layout.tsx)
│   └── Footer.tsx          ← Footer (used on every page via layout.tsx)
├── public/images/          ← All images (logos, team photos, etc.)
├── package.json            ← Dependencies: Next.js, React, TypeScript
├── tsconfig.json           ← TypeScript configuration
└── next.config.js          ← Next.js configuration
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime — powers the server |
| **Next.js 14** | React framework — handles routing, rendering, image optimization |
| **React 18** | UI library — components, JSX |
| **TypeScript** | Type-safe JavaScript — catches bugs before runtime |

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm run start
```

---

## Pages

| URL | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage with logo banner and hero text |
| `/mission` | `app/mission/page.tsx` | Company mission and stats |
| `/our-team` | `app/our-team/page.tsx` | Team members |
| `/innovation` | `app/innovation/page.tsx` | Innovation showcases and certifications |
| `/justdial` | `app/justdial/page.tsx` | JustDial business listing |
| `/contact` | `app/contact/page.tsx` | Contact information |
| `/terms` | `app/terms/page.tsx` | Terms & Conditions (draft — requires legal review) |

---

## Git Workflow

Every time you make changes and want to save them to GitHub:

```bash
git pull origin main --rebase   # always pull first
git add .
git commit -m "describe what you changed"
git push
```

---

## About

- **Company**: Ameya Sonic Opteo System Ltd.
- **Parent Company**: Ameya Labs, Bangalore
- **JustDial**: [https://jsdl.in/RSL-QCP1782016899](https://jsdl.in/RSL-QCP1782016899)
- **LinkedIn**: [Dr. Soni Gupta](https://www.linkedin.com/in/dr-soni-gupta-198724141/)
- **Email**: Ameyasonicopteosystem@gmail.com
