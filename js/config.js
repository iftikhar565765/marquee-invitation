/* ═══════════════════════════════════════════════════════════════
   THE ROSERAIE · config.js
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
    muhurat: "at five o'clock, as the roses bloom",                           // EDIT
    eventTitle: "Vivienne & Alexander — The Wedding"                         // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Rose Pavilion",                                     // SAMPLE
    address: "14 Rosewood Lane, Bath Island, Karachi 75500",       // SAMPLE
    mapsQuery: "The Rose Pavilion, Bath Island, Karachi",
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Vivienne & Alexander · 25 September 2027 — A Romantic Garden Wedding in Blush & Gold",
    pageDescription: "Vivienne and Alexander request the honour of your presence at The Rose Pavilion, Karachi — garden vows at five o'clock on Saturday the twenty-fifth of September 2027. Blush, gold and roses. Open your invitation.",
    socialTitle: "Vivienne & Alexander — A Garden Wedding · 25.09.2027",
    socialDescription: "A blush envelope, a hand-poured wax seal and a garden of roses — you are warmly invited.",
    navStory: "Story",
    navDetails: "Events",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Programme",
    menuPalette: "The Palette",
    menuWeddingDay: "The Day",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Grace",
    openingEyebrow: "You are warmly invited to the wedding of",
    openingHint: "Break the wax seal",
    openButton: "Enter the Rose Garden",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their beloved family & friends",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the honour of your presence at the marriage of",
    invitationAnd: "and",
    invitationClosing: "Your presence is the greatest gift",
    heroVenueLabel: "The Garden Pavilion",
    sceneSignboard: "A garden romance in blush & gold",
    invitationVenueSuffix: "· Karachi",
    storyKicker: "Our Story",
    storyTitle: "Two hearts,",
    storyTitleScript: "written among the roses",
    storyParagraphOne: "Our story begins on a bright spring morning at the botanical gardens' rose festival — one shared bench beneath the pergola when the arbours ran out of shade, one paper cup of chai passed back and forth, and one conversation that outlasted every bloom on the trellis. He pointed out the rose named after a poet; she corrected him with the gardener's own catalogue, and neither of them noticed the afternoon slip away.",
    storyParagraphTwo: "Four years, two cities and a balcony full of roses later, Alexander asked the question in the golden hour among the peonies, with the ring tucked into a bouquet he had grown himself — and the garden, for once, kept perfectly quiet. Nothing would mean more to us than to have you there when the garden gates open and the next chapter begins.",
    storyQuote: "You must allow me to tell you how ardently I admire and love you.",
    storyQuoteLabel: "— read aloud beneath the pergola, once, and then every year after",
    storyNote: "chapter one, and every garden after",
    storyNoteCredit: "— pencilled in the margin of her gardening journal",
    storyCaptionOne: "the rose garden where we met",
    storyCaptionTwo: "one blanket through endless summers",
    storyCaptionFour: "the question among the peonies",
    storyAside: "and they danced",
    promiseKicker: "The Promise",
    promiseQuote: "Whatever our souls are made of, his and mine are the same.",
    promiseAuthor: "Emily Brontë · Wuthering Heights, 1847",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "an afternoon of garden vows, champagne & waltzes",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "The Programme",
    detailsTitleFirst: "The wedding",
    detailsTitleSecond: "weekend",
    detailsIntro: "One unforgettable weekend in blush and gold — at a glance.",
    eventOneLabel: "The Rehearsal Dinner",
    eventOneTime: "Friday, 24 September 2027 · eight in the evening",
    eventOneNote: "Toasts under the vine-lit courtyard — smart casual, happy hearts required.",
    eventTwoLabel: "The Ceremony",
    eventTwoTime: "Saturday, 25 September 2027 · five in the evening",
    eventTwoNote: "The vows, the rings and the kiss — beneath the rose arch.",
    eventThreeLabel: "The Garden Cocktail Hour",
    eventThreeTime: "Saturday, 25 September 2027 · six in the evening",
    eventThreeNote: "Champagne coupes, a string quartet and the golden hour on the lawn.",
    eventFourLabel: "The Reception",
    eventFourTime: "Saturday, 25 September 2027 · half past seven in the evening",
    eventFourNote: "Dinner, speeches and dancing beneath the garden lights — garden formal, with a touch of gold.",
    eventFiveLabel: "The Farewell Brunch",
    eventFiveTime: "Sunday, 26 September 2027 · eleven in the morning",
    eventFiveNote: "Coffee, croissants and one last waltz before goodbye.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garden formal",
    particularsAttireNote: "Suits and summer gowns in blush, ivory, sage and gold — dress as though the garden grew for you.",
    particularsCarriagesLabel: "Kindly Reply",
    particularsCarriagesTime: "the twenty-fifth of August, 2027",
    particularsCarriagesNote: "So the place settings are right and every seat is saved.",
    paletteKicker: "The Palette",
    paletteTitleFirst: "Blush &",
    paletteTitleSecond: "gold",
    paletteIntro: "Blush petal and antique gold, ivory silk and eucalyptus sage — the colours of the garden, worn by our favourite people.",
    dressCodeLabel: "Attire · Garden Formal",
    dressCodeTitle: "Colours of the garden",
    dressCodeNote: "Suits and gowns in blush, ivory, sage and antique gold — dress as beautifully as the roses.",
    weddingDayKicker: "The Day",
    weddingDayTitleFirst: "The day's",
    weddingDayTitleSecond: "unfolding",
    venueKicker: "The Place",
    venueDescription: "A glasshouse pavilion wrapped in rose arbours — candlelit tables on the lawn, a string quartet beneath the pergola and a terrace that catches the last of the golden hour.",
    venueCeremonyLabel: "The Ceremony",
    venueCeremonyText: "beneath the rose arch, at five o'clock",
    venueReceptionLabel: "The Reception",
    venueReceptionText: "dinner and dancing beneath the garden lights",
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
    countdownPromise: "the garden gates open",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the bottom of our hearts, for being part of our story. You watered every seedling, you admired every bloom and you made every milestone along the way feel like the first day of summer. May our home always have one more chair at the table, one more rose in the garden and one more glass raised to the people we love. Your presence completes our celebration.",
    closingQuote: "To the love that grows like a garden — and the friends who help it bloom.",
    closingQuoteCredit: "— the toast we will raise, to you",
    footerTagline: "Blush & gold — written among the roses."
  },

  palette: [
    { name: "Blush Petal",   color: "#F3D3CE" },
    { name: "Antique Gold",  color: "#B28A4E" },
    { name: "Ivory Silk",    color: "#FDFAF3" },
    { name: "Eucalyptus",    color: "#A9BBA3" },
    { name: "Rosewood",      color: "#A96872" },
    { name: "Warm Parchment",color: "#F4E9D8" }
  ],
  theme: "onyx",
  themeColors: {},
  fonts: {
    editorial: "cormorant",
    display: "bodoni",
    script: "greatVibes",
    hand: "caveat",
    body: "ebGaramond"
  },

  /* ── Wedding festivities — the moments of the day.
     Use one short phrase per entry; an empty list hides the section. */
  moments: ["The Ceremony", "The Vows", "The First Dance", "The Cake", "The Last Waltz"],

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
    pastMessage: "The garden gates have opened — thank you for being part of our day."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
