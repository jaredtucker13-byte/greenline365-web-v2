# GL365 Home Ledger — Launch Spec
## Brainstorming Document

**Status:** Draft — Internal Only
**Created:** 2026-02-21
**Author:** Jared Tucker (Creator, GL365)
**File:** `docs/brainstorming/home-ledger-launch.md`

---

## NAME CHANGE — OFFICIAL

The module formerly called **"Property Passports"** is now officially called:

> **GL365 Home Ledger**

This rename must be applied everywhere it currently appears:

| Location | Old Text | New Text |
|---|---|---|
| Sidebar nav item | "Passports" | "Home Ledger" |
| Sidebar subtitle | "Every address tells a story" | "GL365 Home Ledger" |
| Commander quick actions panel | "Property Passports" | "Home Ledger" |
| Module page title | "Property Passports" | "GL365 Home Ledger" |
| Module page subtitle | "Every address tells a story" | "Your property's complete intelligence file" |
| Empty state message | "Properties are created when calls come in..." | "Your GL365 Home Ledger is ready. Add your first property." |
| URL (`/admin-v2/property-passport`) | Keep URL as-is for now (routing), update display text only |
| `/home-ledger` page | Currently 404 — NEEDS TO BE BUILT (see below) |
| Any email copy | "Property Passports" | "GL365 Home Ledger" |
| Any onboarding text | "Property Passports" | "GL365 Home Ledger" |

---

## THE /home-ledger PAGE (Currently 404 — Must Be Built)

This is a hidden landing page — NOT in the public nav. Accessed via:
- Direct link shared in email outreach
- Footer link ("For Property Owners" or similar)
- Internal link from the Command Center when users encounter the module

### Page Goal

Convert a warm lead (business owner, property manager, or homeowner)
who received a link from Jared's outreach into a waitlist signup or booking.

### Page Structure

**Section 1 — Hero**
- Headline: "Meet the GL365 Home Ledger — The Only Property File Your Business Will Ever Need"
- Subheadline: "Every property you manage or own, organized in one intelligent file.
  Documents, contacts, incidents, warranties, contractors — all connected."
- CTA: "Join the Waitlist — Get Early Access" → email capture form
- Visual: Screenshot of the Home Ledger module (Property Passports grid view)

**Section 2 — Who It's For**
Three-column panel:
- 🏠 **Homeowners** — "Track every repair, warranty, and contractor in one place.
  Never lose a receipt again."
- 🏢 **Property Managers** — "Manage multiple properties without the spreadsheet chaos.
  Every address has its own file."
- 🏡 **Real Estate Investors** — "Know the exact status, health score, and history
  of every property in your portfolio."

**Section 3 — What's Inside (Feature Walkthrough)**
Show the actual modules with context:
- **Property Passport** — the master file for each address (contacts, notes, status)
- **Filing Cabinet** — AES-256 encrypted doc storage (receipts, warranties, contracts, tax docs)
- **Incidents** — damage documentation with photo capture and signature collection
- **Referral Network** — your trusted contractor directory (plumbers, electricians, HVAC, etc.)

**Section 4 — Trust Bar**
- 🔐 AES-256 Military-Grade Encryption
- 📁 Your files are private — GL365 cannot access them
- 🚫 No long-term contracts
- ✅ Cancel anytime

**Section 5 — Single CTA**
- "Create Your First Property — Free"
- Sub-line: "No credit card required. Takes 2 minutes."
- Links to onboarding wizard or waitlist form

### Page URL

`/home-ledger` — currently returns 404, must be built

### Page Visibility

- NOT in main nav
- Accessible via: direct link in emails, footer ("For Property Owners"), or internal CTA
- This is the back-end product page for the Home Ledger pitch in outreach sequences

---

## MODULE FEATURES (Current State)

Based on audit of `/admin-v2/property-passport`:

| Feature | Current State | Notes |
|---|---|---|
| Property grid | Shows empty state ("No properties yet") | Empty state message needs update |
| Search bar | "Search by address or contact name..." | Good |
| Empty state copy | "Properties are created when calls come in through the AI agent" | Confusing — update to actionable CTA |
| Add property flow | Not tested | Need to test and document |

### Empty State Fix

Current: "Properties are created when calls come in through the AI agent"
Problem: This is confusing for a new user — sounds passive, like they can't do anything.

**Recommended:**
> "Your GL365 Home Ledger is empty — but your first property is one click away."
> [+ Add Your First Property] button

---

## RELATED PRODUCTS THAT FEED INTO HOME LEDGER

The Home Ledger is the hub. These modules connect to it:

- **Filing Cabinet** (`/admin-v2/filing-cabinet`) — documents tagged to properties
- **Incidents** (`/admin-v2/incidents`) — damage reports linked to properties
- **Referral Network** (`/admin-v2/referral-network`) — contractors linked to properties
- **Commander** (`/admin-v2/commander`) — property intelligence overview dashboard

Each of these should cross-link back to the relevant Home Ledger entry.

---

## TARGET NICHES FOR HOME LEDGER OUTREACH

These are the industries most likely to pay for the Home Ledger:

1. **Property managers** (managing 2-20 residential or commercial units)
2. **Real estate investors** (fix-and-flip or rental portfolios)
3. **HVAC / plumbing / electrical contractors** (who manage customer property records)
4. **Insurance agents** (who help clients document property for claims)
5. **Homeowners** with recent renovations or older homes (high repair activity)

---

## OPEN QUESTIONS

- [ ] Is the Home Ledger sold separately or only as part of the Command Center bundle?
- [ ] Is there a standalone pricing tier for Home Ledger only? (e.g., a homeowner who doesn't
      need the booking system or content calendar)
- [ ] What is the founding member offer for Home Ledger specifically?
      (Currently only Booking System has a defined founding member offer)
- [ ] Should `/home-ledger` be built before the first property manager outreach begins?
- [ ] The Filing Cabinet "CPA Export" feature — is this a premium feature or included?
- [ ] Incidents module — is digital signature collection already functional?

---

## RELATED DOCUMENTS

- `docs/brainstorming/founding-members-SOT.md` — founding member tiers
- `docs/brainstorming/pricing-strategy.md` — Home Ledger pricing tier TBD
- `docs/brainstorming/email-outreach-sequence.md` — outreach sequence template

---

*Last updated: 2026-02-21*
*Status: Name change is CONFIRMED. Page build and outreach are pending pricing decisions.*
