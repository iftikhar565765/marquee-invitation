# Roseraie — a blush & gold garden wedding invitation

A light romantic invitation in the language of the rose garden in June:
warm ivory paper, blush petal pink, antique gold and sage eucalyptus,
with photoreal floral cutout art (roses, peonies, gold rings, a
hand-poured wax seal) arranged like fine wedding stationery. Built as a
static site + API on Cloudflare Workers with a D1 database for published
invitations and guest replies.

## The suite

1. **The sealed envelope** — blush silk, an ivory floral liner, a
   hand-poured wax seal and rose corner cascades.
2. **The invitation card** — an ivory vellum plate crowned by a floral
   arch, with rose cascades at the shoulders and a wreath halo behind.
3. **Our story** — the couple's story, a bridal bouquet, a keepsake quote
   and a pencilled note.
4. **The promise** — the Brontë promise beneath the gold rings crest.
5. **Save the date** — a rose emblem, calendar links, the wax seal.
6. **The programme** — rehearsal dinner, ceremony, cocktail hour,
   reception and farewell brunch on a gilded vine with petal buds.
7. **The palette** — blush petal, antique gold, ivory silk, eucalyptus,
   rosewood and parchment, with a garden-formal dress-code note.
8. **The day's unfolding** — the moments of the day.
9. **Venue, countdown, RSVP, closing grace** — everything a guest needs.

## Customizer

`customize.html` is a guided studio with a live preview. Step four —
**The events** — edits every wedding event: name, date, time (the readable
line composes itself) and what happens, for all five events plus the
kindly-reply slot. Publish gives a live link on the worker with replies
collected in D1.

## Stack

- Static front-end (plain HTML/CSS/JS), no build step for the guest page
  (`scripts/build.mjs` only versions asset URLs and stamps builds).
- Cloudflare Worker (`worker.js`) serving `dist/` as static assets and
  routing `/api/*` to the functions in `functions/`.
- D1 database `marquee-invitations` for published invitations and RSVPs
  (`migrations/0001_initial.sql`).
- `replies.html` — the couple's private submissions panel.

## The design system

- **Palette** — `css/variables.css`: warm ivory `#F1E6D6…#FDFAF3`,
  blush petal `#EBC3C0/#F3D3CE`, rosewood `#A96872`, antique gold
  `#B28A4E`, eucalyptus `#7C8F78/#A9BBA3`.
- **Type** — Cormorant Garamond (editorial headlines), Bodoni Moda
  (numerals), Great Vibes (the sweeping script), Caveat (pencilled
  notes), EB Garamond (body copy).
- **Art** — photoreal cutout florals in `assets/art/` (WebP with alpha),
  cut from studio backdrops by `scripts/cutout-marquee-roses.py`
  (border flood + dilation + hole-flood + island cleanup), plus hand-
  drawn line SVG ornaments for dividers, stamps and emblems.
- **Moods** — Blush & Ivory (default), Sage & Cream, Rosé Champagne,
  Powder Blue & Cream, Terracotta & Ivory — switchable in the editor.
