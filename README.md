# Marquee — an Art Deco black-tie wedding invitation

A polished onyx-and-champagne-gold invitation in the language of the jazz age:
sunbursts, gilded fans, stepped ziggurat frames, diamond studs and ivory
vellum. Built as a static site + API on Cloudflare Workers with a D1 database
for published invitations and guest replies.

## The suite

1. **The sealed envelope** — black lacquer, gold chevron liner, a champagne
   sunburst seal and stepped corner brackets.
2. **The ballroom card** — an ivory vellum invitation beneath a rising gold
   sunburst, with gilded fans at the shoulders.
3. **The chronicle** — the couple's story, a Fitzgerald keepsake and a
   telegram note.
4. **The promise** — the Brontë promise on a stepped corner plate.
5. **Save the date** — the stepped diamond emblem, calendar links.
6. **The programme** — rehearsal dinner, ceremony, cocktail hour, reception
   and farewell brunch on a gilded rail with diamond studs.
7. **The palette** — onyx, champagne gold, ivory vellum and platinum, with a
   black-tie dress-code note.
8. **The evening** — the marquee programme of the night.
9. **Venue, countdown, RSVP, closing toast** — everything a guest needs.

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

- **Palette** — `css/variables.css`: graphite lacquer `#0B0C0E…#181A1F`,
  champagne gold `#CBA85C`, ivory vellum `#F1EAD7`, platinum `#B5AB97`.
- **Type** — Poiret One (deco geometry headlines), Limelight (marquee
  numerals), Italiana (romance), Special Elite (telegrams), Josefin Sans
  (letterspaced labels).
- **Motifs** — the five canonical Art Deco devices, all hand-drawn inline
  SVG: sunburst, fan, chevron, stepped arch and diamond frame.
- **Moods** — graphite & champagne (default), Empire Midnight, Ruby Marquee,
  Jade Riviera, Espresso Gilt — switchable in the editor.
