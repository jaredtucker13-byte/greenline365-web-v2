# GreenLine365 — The Operating System for the Local Economy

> *Not a directory. Not a listing site. A living command center for local businesses.*

[![Live Site](https://img.shields.io/badge/Live%20Site-greenline365.com-84A98C?style=flat-square)](https://www.greenline365.com)
[![Status](https://img.shields.io/badge/Status-Active%20Development-A7C957?style=flat-square)]()
[![Security](https://img.shields.io/badge/Security-Cloudflare%20%2B%20HTTPS-blue?style=flat-square)]()
[![Phase](https://img.shields.io/badge/Build%20Phase-2%20of%207-E9C46A?style=flat-square)]()

---

## What Is GreenLine365?

GreenLine365 is being built as a **futuristic operating system interface** for local businesses — think command center, control panel, living digital ecosystem. The platform is anchored by a Tampa Bay business directory on the front end, with an AI-powered Command Center sold through personalized outreach on the back end.

The design language is dark, cinematic, and premium — glassmorphism over nature backgrounds, sage green (#84A98C) as the primary signal color, GSAP-powered animations, and a system that feels like it's *alive*.

The directory is the front door. The Command Center is the back room.

---

## Architecture Overview

```
greenline365.com (Public)
├── / ................................. Directory homepage + Founding Member offer
├── /pricing ......................... Directory listing tiers (Free / Pro $45 / Premium $89)
├── /home-ledger ..................... [BUILD NEEDED] Hidden landing — property intelligence module
└── /admin-v2 ........................ Command Center (back-end, sold via outreach)
    ├── /commander ................... Master dashboard + Live Local Pulse widget
    ├── /content ..................... AI content calendar (glassmorphism grid)
    ├── /property-passport ........... GL365 Home Ledger (renamed from Property Passports)
    ├── /filing-cabinet .............. AES-256 encrypted document storage
    ├── /incidents ................... Damage documentation + signature collection
    ├── /referral-network ............ Trusted contractor directory
    └── /campaigns ................... Email sequences, outreach pipelines, lead tracking
```

---

## Product Stack

| Product | Status | Access Model | Pricing |
|---|---|---|---|
| **Directory Listing** | ✅ Live | Public | Free / $45 / $89/mo |
| **Command Center** | ✅ Live (admin) | Email outreach | TBD (target ~$297–$497/mo) |
| **Live Local Pulse** | ✅ Creator only | Waitlist for others | TBD add-on |
| **GL365 Home Ledger** | ✅ Module live | /home-ledger page needed | TBD |
| **AI Booking Widget** | 🔵 In roadmap | White-label ready | TBD |
| **AI Chat Widget** | 🔵 In roadmap | White-label ready | TBD |
| **Campaigns Module** | ✅ Live (admin) | Bundled w/ Command Center | TBD |

---

## Founding Member Programs

Two separate programs. Not the same offer. Do not confuse them.

### Program 1 — Directory Founding Members (Public)
- **Cap:** First 50 verified Tampa Bay businesses
- **Offer:** Featured placement, priority support, locked-in listing rate forever, Founding Member badge
- **Purpose:** Front-door entry point and trust signal (replaces missing testimonials)
- **Homepage section:** "Be the Business Everyone Else References"

### Program 2 — Booking System Founding Members (Private)
- **Cap:** First 30 businesses — hard stop
- **Offer:** $500 off setup + $500/mo off for life + beta access + 25% off all future features
- **Funnel position:** Sold through Email 3 of the outreach sequence — never publicly listed

---

## Email Outreach Sequence

The back-end sales engine. Triggered automatically when a business claims a directory listing.

| Day | Email | Goal |
|---|---|---|
| 1 | **Value Bomb** | Deliver a Local Pulse snapshot for their ZIP. Zero ask. |
| 4 | **Soft Reveal** | Show Command Center dashboard screenshot. No price. |
| 8 | **Personalized Offer** | Founding Member pitch — specific, direct, time-limited. |
| 14 | **Follow-Up** | One gentle bump if no reply. |
| 21 | **Graceful Exit** | Close the loop. Leave door open. |

**Target metrics:** Email 1 open rate >55% · Email 3 booking click >20% · Full funnel conversion >5%

---

## Directory Pricing (Live & Confirmed)

| Tier | Price | Key Features |
|---|---|---|
| **Free** | $0/mo | Basic listing, name/address/phone/hours, search visibility |
| **Pro** | $45/mo | + 2 custom images, Verified badge, Book Now CTA, description |
| **Premium** | $89/mo | + Google photo sync, featured placement, AI Review Response |
| **Founding Member** | Locked-in forever | Featured homepage, priority support, badge, rate never increases |

*Note: Back-end product pricing (Command Center, Booking System, Home Ledger) is TBD and delivered via email — never on the public pricing page.*

---

## Live Local Pulse

Real-time market intelligence widget inside the Command Center.

| Tier | Behavior |
|---|---|
| **Creator (Jared)** | Fully live, ZIP 33619, scans every 3h, AI fallback cards when no live signal |
| **Free Users** | Blurred lock overlay with waitlist CTA — never shows real data |
| **Paid Subscribers** | Full access, ZIP from their listing, same fallback as creator |

Fallback cards rotate by current date using a pre-built seasonal library (Tampa Bay / 33619). The widget should **never** show "No live opportunities" or a sleeping state for the creator.

---

## GL365 Home Ledger

> **Formerly called "Property Passports" — renamed everywhere.**

The property intelligence hub. All modules (Filing Cabinet, Incidents, Referral Network) connect back to it.

**Rename checklist:**
- [x] Sidebar nav: "Passports" → "Home Ledger"
- [x] Sidebar subtitle: → "GL365 Home Ledger"
- [x] Commander quick actions: → "Home Ledger"
- [x] Module page title: → "GL365 Home Ledger"
- [ ] /home-ledger landing page: **Currently 404 — must be built**
- [ ] Empty state copy update

**Target niches for outreach:** Property managers, real estate investors, HVAC/plumbing/electrical contractors, insurance agents, homeowners with active renovations.

---

## Infrastructure & Security

| Layer | Detail |
|---|---|
| **DNS & CDN** | Cloudflare (Free) — joselyn.ns + rohin.ns |
| **SSL** | Universal SSL — active, auto-renewing, covers *.greenline365.com |
| **HTTPS** | Always Use HTTPS enforced |
| **HSTS** | Enabled, 6-month max-age |
| **TLS** | Minimum TLS 1.2 |
| **DDoS** | Cloudflare unmetered protection |
| **AI Bot Blocking** | Enabled — blocks training scrapers on all pages |
| **Origin IP** | Hidden behind Cloudflare proxy |
| **Hosting** | Hostinger VPS |
| **Encryption at rest** | AES-256 (Filing Cabinet module) |

*Setup completed: February 21, 2026*

---

## Design System

The visual language of GL365 is a futuristic OS — not a generic SaaS. Every element should feel like a premium control panel.

| Token | Value |
|---|---|
| **Primary color** | Sage Green `#84A98C` |
| **Background** | Deep dark `#0A0A0A` + nature photo overlay |
| **Glassmorphism** | `backdrop-blur-2xl bg-white/10 border border-white/20` |
| **Heading font** | Playfair Display, Poppins |
| **Body font** | Manrope, Inter |
| **Mono font** | JetBrains Mono |
| **Animation library** | GSAP 3.14.2 + ScrollTrigger |
| **Neon accents** | Green, Teal, Amber |

**Universal guidelines:** No generic AI-slop designs. Use 2–3× more spacing than usual. Every interaction needs a micro-animation. Use `sonner` for toasts.

---

## Build Roadmap

| Phase | Description | Status | ETA |
|---|---|---|---|
| 0 | Foundation (legal pages, DB integration) | ✅ Complete | Done |
| 1 | Design System (GSAP, Glassmorphism, tokens) | ✅ Complete | Done |
| 2 | Navigation & Global UI | 🔵 Next | ~2–3h |
| 3 | Hero Section Transformation | 🔵 Planned | ~3–4h |
| 4 | Content Sections with Glassmorphism | 🔵 Planned | ~4–5h |
| 5 | Advanced Animations (phone draw, pipeline) | 🔵 Planned | ~5–6h |
| 6 | CTA Bands & Footer | 🔵 Planned | ~2–3h |
| 7 | Polish, Performance & Accessibility | 🔵 Planned | ~3–4h |

**Overall progress: 28% complete (Phases 0–1 done)**
**Estimated time remaining: ~19–25 hours of development**

See full details: [`webapp/IMPLEMENTATION_ROADMAP.md`](./webapp/IMPLEMENTATION_ROADMAP.md)

---

## Key Design Decisions

**Directory-first strategy.** GL365 pivoted from service-first to directory-first. The free listing is the low-friction entry point. All premium products are sold on the back-end through email — never through the public site.

**Service pages are hidden.** They exist but are not in the main nav. Accessible via direct links in outreach emails or via the Command Center.

**The absence of testimonials is a feature.** The Founding Member offer flips the script — no social proof becomes a founding identity play. Scarcity > empty carousel.

**Command Center is personal, not SaaS-generic.** The outreach pitch is founder-to-founder. Jared builds it *specifically for their business*. This is positioned closer to a done-for-you service than a software subscription.

---

## Repo Structure

```
greenline365-web-v2/
├── webapp/                    # Next.js frontend application
│   ├── app/                   # App router pages
│   │   ├── admin-v2/          # Command Center (protected)
│   │   ├── pricing/           # Directory listing tiers
│   │   └── home-ledger/       # [NEEDS BUILD] Property module landing
│   ├── components/ui/os/      # Design system components
│   │   ├── GlassCard.tsx      # ✅ Ready
│   │   ├── Button.tsx         # ✅ Ready
│   │   └── NeonText.tsx       # ✅ Ready
│   ├── lib/
│   │   ├── gsap.ts            # Animation utilities
│   │   └── utils.ts           # Helper functions
│   └── IMPLEMENTATION_ROADMAP.md
├── backend/                   # API / server logic
├── docs/
│   └── brainstorming/         # Internal strategy docs (do not publish)
│       ├── founding-members-SOT.md
│       ├── pricing-strategy.md
│       ├── email-outreach-sequence.md
│       ├── live-local-pulse-spec.md
│       └── home-ledger-launch.md
├── design_guidelines.json     # Design token reference
└── README.md                  # This file
```

---

## Open Decisions (Blocking Items)

These must be resolved before certain build steps and outreach can be finalized:

- [ ] **Command Center base price** — needed before Email 3 can be sent (target: $297–$497/mo)
- [ ] **Home Ledger pricing** — standalone tier vs. bundle-only
- [ ] **Live Local Pulse pricing** — add-on or tier-included
- [ ] **Campaigns Module** — separate add-on or bundled
- [ ] **White-label priority** — before or after first 30 founding members?
- [ ] **Annual billing discount** — 2 months free?
- [ ] **/home-ledger page** — must be built before property manager outreach begins

---

## Contact

**Jared Tucker** — Creator, GreenLine365
- Email: [jared@greenline365.com](mailto:jared@greenline365.com)
- Help: [Greenline365help@gmail.com](mailto:Greenline365help@gmail.com)
- Live site: [greenline365.com](https://www.greenline365.com)
- ZIP focus: 33619 (East Tampa / Brandon, FL)

---

*Last updated: February 21, 2026 — This README is a living document. Update it when decisions are made.*
