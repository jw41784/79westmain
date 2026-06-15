# 79th on Main - Digital Guest Guidebook

## Project Overview
A digital guidebook and marketing site for "79th on Main," a luxury barn retreat at
**79 West Main Street, Trumansburg, NY 14886**, in the Finger Lakes region of New York
(lat 42.5437827, lon -76.6688425). The site is a small set of static, hand-written
HTML pages: a marketing landing page, an in-stay guest guidebook, a regional area
guide, and a standalone booking page. It is QR-code driven — guests scan codes placed
around the property to deep-link into guidebook sections.

> **Location note:** the property is in Trumansburg, NY. The owners (Jason & Kristen)
> are originally from State College, PA — keep that distinction; the property's address,
> geo coordinates, and Google Business data must stay NY, not PA.

## Development Status
**Live in production.** The original "coming soon" / barn-raising animation page has
been replaced by the full multi-page site below.

## Pages
- **index.html** — Marketing landing page (brand hero, copy, links into the guides).
- **house-guide.html** — Core in-stay guest guidebook: WiFi, door lock (Schlage Encode),
  TV / Apple TV, appliances, emergency contacts, check-out. Includes host bio.
- **regional-guide.html** — Finger Lakes area guide: wine trails, breweries, farmers
  markets, waterfalls, Watkins Glen and Ithaca attractions. Largest page.
- **book.html** — Standalone booking page, SEO-tuned for Google Business (LodgingBusiness
  structured data). Intentionally isolated — no links to the guidebook pages.
- **google-banner.html** — Utility page that generates a Google Maps banner image.

Cross-linking: index ↔ house-guide ↔ regional-guide. book.html stands alone by design.

## Key Features
- **Typography**: Custom Charlton font with wide letter spacing (0.405em).
- **Brand Colors**: Sage green (#9BAE9B), warm taupe (#7C766C), cream beige (#D8C9B4),
  rust brown (#8E4B35).
- **SEO**: Per-page meta description, Open Graph tags, canonical URLs; book.html carries
  schema.org LodgingBusiness data for Google Business.
- **Auto-deploy**: GitHub push → Cloudflare Workers.

## Tech Stack
- **Frontend**: Vanilla HTML/CSS, no build step, no framework.
- **Fonts**: Charlton (custom OTF), Raleway, Libre Baskerville (Google Fonts).
- **Deployment**: Cloudflare Workers (static assets, see wrangler.toml).
- **Repository**: https://github.com/jw41784/79westmain
- **Production URL**: https://79westmain.com  (Workers dev URL: https://79westmain.jw41784.workers.dev/)

## File Structure
```
├── index.html              # Marketing landing page
├── house-guide.html        # In-stay guest guidebook
├── regional-guide.html     # Finger Lakes regional guide
├── book.html               # Standalone booking / SEO page
├── google-banner.html      # Google Maps banner image generator
├── plan.md                 # Original project plan (historical)
├── guidebook.md            # Guidebook content draft
├── airbnb-listing-copy.md  # Listing copy
├── wrangler.toml           # Cloudflare Workers config
├── Charlton.otf            # Custom display font
├── favicon.svg / logo.svg  # Brand marks
├── BARN transparent.png    # Barn logo image
├── main house.jpg          # Hero / OG image
└── CLAUDE.md               # This development guide
```

## Development Commands
No build process — static HTML. Edit a page and push; Cloudflare Workers deploys.

## Git Workflow
All changes should be automatically committed and pushed to git after completion unless
explicitly told not to.

## Brand Voice
**Tone**: Warm, romantic, and aspirational—but never pretentious. Speaks directly to the
guest's desire for escape.

**Current Copy**: "Wake up to the sound of birdsong and the scent of fresh coffee drifting
through the kitchen. Trade your to-do list for a front porch rocking chair and a good book.
The perfect blend of barn charm and boutique hotel comfort."
