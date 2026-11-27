/* ═══════════════════════════════════════════════════════════════
   MARQUEE · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "marquee",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Vivienne",                    // SAMPLE
    partnerTwo: "Alexander",                   // SAMPLE
    initials:  "V · A",                         // SAMPLE — used on seals & monograms
    namesLine: "Vivienne & Alexander"          // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-09-25T17:00:00+05:00",                                        // EDIT
    endIso: "2027-09-26T14:00:00+05:00",                                     // EDIT — end of the celebration
    display: "Saturday, 25 September 2027 · the vows at five o'clock",        // EDIT
    zoneLabel: "PKT",                                                        // EDIT — optional note for guests abroad
    words: "Saturday · The Twenty-Fifth of September · Two Thousand Twenty-Seven", // EDIT
    numerals: "25 · 09 · 2027",                                              // EDIT
    weekday: "Saturday",                                                     // EDIT — the ornamental date row
    month: "September",                                                      // EDIT
    day: "25",                                                               // EDIT — the large numeral
    year: "2027",                                                            // EDIT
    muhuratLabel: "The Ceremony",                                             // EDIT
    muhurat: "at five o'clock, as the band strikes up",                      // EDIT
    eventTitle: "Vivienne & Alexander — The Wedding"                         // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Avalon Ballroom",                                   // SAMPLE
    address: "21 Empress Avenue, Saddar, Karachi 74400",           // SAMPLE
    mapsQuery: "The Avalon Ballroom, Saddar, Karachi",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Vivienne & Alexander · 25 September 2027 — An Art Deco Black-Tie Wedding in Graphite & Champagne Gold",
    pageDescription: "Vivienne and Alexander request the pleasure of your company at The Avalon Ballroom, Karachi — the vows at five o'clock on Saturday the twenty-fifth of September 2027. Black tie and gold. Open your invitation.",
    socialTitle: "Vivienne & Alexander — An Art Deco Wedding · 25.09.2027",
    socialDescription: "A graphite envelope, a champagne seal and a night of jazz — you are cordially invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Programme",
    menuPalette: "The Palette",
    menuWeddingDay: "The Evening",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Toast",
    openingEyebrow: "You are cordially invited to the wedding of",
    openingHint: "Break the champagne seal",
    openButton: "Enter the Grand Ballroom",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the pleasure of your company at the marriage of",
    invitationAnd: "and",
    invitationClosing: "Your presence is the greatest celebration",
    heroVenueLabel: "The Ballroom",
    sceneSignboard: "Written in the age of jazz",
    invitationVenueSuffix: "· Karachi",
    storyKicker: "The Chronicle",
    storyTitle: "Two hearts,",
    storyTitleScript: "one song, still playing",
    storyParagraphOne: "Our story begins on a rainy October night at a jazz bar neither of us meant to enter — one shared table when the room ran out, one record that refused to skip, and one conversation that outlasted the last tram home. He walked her to the station under one umbrella and exactly zero conversation about the weather; she texted him the name of the song before her train had left the platform.",
    storyParagraphTwo: "Four years, two cities and a thousand playlists later, Alexander asked the question beneath the harbour lights with a ring hidden inside a book of Fitzgerald poems — and the city, for once, kept perfectly quiet. Nothing would mean more to us than to have you there when the band strikes up and the next chapter begins.",
    storyQuote: "I like her — and that's the beginning of everything.",
    storyQuoteLabel: "— F. Scott Fitzgerald, underlined twice in the book he never returned",
    storyNote: "chapter one, and every record after",
    storyNoteCredit: "— pencilled on the back of a dance card",
    storyCaptionOne: "the jazz bar and the last tram",
    storyCaptionTwo: "one umbrella through the rain",
    storyCaptionFour: "the question, and the yes",
    storyAside: "and they danced",
    promiseKicker: "The Promise",
    promiseQuote: "Whatever our souls are made of, his and mine are the same.",
    promiseAuthor: "Emily Brontë · Wuthering Heights, 1847",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "an evening of black tie, champagne & jazz",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Programme",
    detailsTitleFirst: "The wedding",
    detailsTitleSecond: "programme",
    detailsIntro: "One grand weekend in black and gold — at a glance.",
    eventOneLabel: "The Rehearsal Dinner",
    eventOneTime: "Friday, 24 September 2027 · eight in the evening",
    eventOneNote: "Farewell-to-singlehood toasts on the rooftop — smart casual, jazz hands optional.",
    eventTwoLabel: "The Ceremony",
    eventTwoTime: "Saturday, 25 September 2027 · five in the evening",
    eventTwoNote: "The vows, the rings and the kiss — beneath the gilded fan arch.",
    eventThreeLabel: "The Cocktail Hour",
    eventThreeTime: "Saturday, 25 September 2027 · six in the evening",
    eventThreeNote: "Champagne coupes, a live sextet and the golden hour on the terrace.",
    eventFourLabel: "The Reception",
    eventFourTime: "Saturday, 25 September 2027 · half past seven in the evening",
    eventFourNote: "Dinner, speeches and dancing until the band packs up — black tie, with a touch of gold.",
    eventFiveLabel: "The Farewell Brunch",
    eventFiveTime: "Sunday, 26 September 2027 · eleven in the morning",
    eventFiveNote: "Coffee, croissants and one last waltz before goodbye.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Black tie & gold",
    particularsAttireNote: "Tuxedos, gowns and a touch of gold — dress as though the marquee lights are for you.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the twenty-fifth of August, 2027",
    particularsCarriagesNote: "So the place settings are right and every seat is saved.",
    paletteKicker: "The Palette",
    paletteTitleFirst: "Graphite &",
    paletteTitleSecond: "champagne",
    paletteIntro: "Polished graphite lacquer and champagne gold, ivory vellum and platinum light — the colours of the ballroom, worn by our favourite people.",
    dressCodeLabel: "Attire · Black Tie & Gold",
    dressCodeTitle: "Colours of the ballroom",
    dressCodeNote: "Black tie and gowns in graphite, ivory, champagne and gold — dress as splendidly as the marquee.",
    weddingDayKicker: "The Evening",
    weddingDayTitleFirst: "The night's",
    weddingDayTitleSecond: "programme",
    venueKicker: "The Place",
    venueDescription: "A 1927 ballroom of black marble and gilded fans — crystal chandeliers above a sprung parquet floor, a stage for the sextet and a terrace that catches the harbour breeze.",
    venueCeremonyLabel: "The Ceremony",
    venueCeremonyText: "beneath the gilded fan arch, at five o'clock",
    venueReceptionLabel: "The Reception",
    venueReceptionText: "dinner and dancing under the chandeliers",
    mapButton: "View Location",
    rsvpKicker: "Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Amelia Chen",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Vegetarian, allergies, non-alcoholic…",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Toasts, memories, song requests…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "The Grand Countdown",
    countdownTitle: "Counting the hours until",
    countdownPromise: "the band strikes up",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the bottom of our hearts, for being part of our story. You taught us the steps, you kept the record playing and you made every milestone along the way feel like opening night. May our home always have one more chair at the table, one more song on the record and one more glass raised to the people we love. Your presence completes our celebration.",
    closingQuote: "To the nights that turn into mornings — and the friends who become family.",
    closingQuoteCredit: "— the toast we will raise, to you",
    footerTagline: "Graphite & champagne — written in the age of jazz."
  },

  palette: [
    { name: "Graphite Lacquer", color: "#121318" },
    { name: "Champagne Gold",  color: "#CBA85C" },
    { name: "Ivory Vellum",    color: "#F1EAD7" },
    { name: "Platinum Light",  color: "#C9C4B4" },
    { name: "Espresso Bronze", color: "#4A4033" },
    { name: "Antique Brass",   color: "#8C6F3F" }
  ],
  theme: "onyx",
  themeColors: {},
  fonts: {
    editorial: "poiretOne",
    display: "limelight",
    script: "italiana",
    hand: "specialElite",
    body: "josefin"
  },

  /* ── Wedding festivities — the marquee bill of the night.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Ceremony", "Champagne & Jazz", "The First Dance", "The Cake", "The Last Song"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 4,
    deadline: "the twenty-fifth of August, 2027"        // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The date is still being engraved — see the programme below.",
    pastMessage: "The band has struck up — thank you for being part of our night."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
