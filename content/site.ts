// =====================================================================================
// SITE CONTENT — this is the ONE file you should need to edit for copy, prices,
// links, FAQ, and testimonials. Component code shouldn't need to change when you
// update this file.
// =====================================================================================

export const business = {
  name: "paint_a_date_sa",
  displayName: "Paint A Date",
  handle: "@paint_a_date_sa",
  tagline: "Where every date night gets a splash of colour.",
  location: "Durban & KwaZulu-Natal, South Africa",
  description:
    "Guided sip & paint sessions in Durban and across KZN — canvas painting, tote bag art, and private events for date nights, girls' nights, birthdays and team socials. No talent required, just good vibes and a blank canvas.",
};

export const contact = {
  // International format, no + or spaces, e.g. South Africa 27...
  whatsappNumber: "27617948455",
  instagramHandle: "@paint_a_date_sa",
  instagramUrl: "https://instagram.com/paint_a_date_sa",
  facebookUrl: "https://facebook.com/paint_a_date_sa",
  email: "hello@paintadate.co.za",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Sessions", href: "/sessions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/book" },
];

export const hero = {
  eyebrow: "Durban's sweetest sip & paint experience",
  heading: "Paint something pretty. Sip something nice. Fall a little more in love.",
  headingLines: ["Paint something pretty.", "Sip something nice.", "Fall a little more in love."],
  subtext:
    "Guided paint sessions for couples, besties, and teams across Durban & KZN — zero art skills needed, just a glass in hand and a blank canvas waiting.",
  ctaLabel: "Book a Session",
  ctaHref: "/book",
  secondaryCtaLabel: "See Sessions",
  secondaryCtaHref: "/sessions",
  socialProof: "500+ happy artists painted with us since we started",
};

export const heroFeatures = [
  {
    icon: "wine",
    title: "Sip & Unwind",
    description: "Enjoy your favorite drink while you paint",
  },
  {
    icon: "paintbrush",
    title: "No Experience",
    description: "Our artists guide you step-by-step",
  },
  {
    icon: "users",
    title: "The Perfect Vibe",
    description: "Good music, good people, great memories",
  },
  {
    icon: "heart",
    title: "Made for Connection",
    description: "Couples, besties, and team experiences",
  },
] as const;

export const services = [
  {
    slug: "canvas-painting",
    title: "Canvas Painting",
    emoji: "🎨",
    blurb:
      "Grab a brush and a glass of something nice — we'll guide you step-by-step to a canvas you'll actually want to hang up. Beginners always welcome.",
    image: "Canvas painting session — group at easels",
    imageSrc: "/images/canvas.png",
  },
  {
    slug: "tote-bag-painting",
    title: "Tote Bag Painting",
    emoji: "👜",
    blurb:
      "Paint it, carry it, flex it. A lighter, giftable session where you design a one-of-a-kind tote bag to actually use afterwards.",
    image: "Tote bag painting session — hand-painted totes drying",
    imageSrc: "/images/totebag.png",
  },
  {
    slug: "private-events",
    title: "Private Events",
    emoji: "🥂",
    blurb:
      "Birthdays, bachelorettes, hens, corporate socials — we bring the easels, the playlist and the chilled energy. You just bring the crew.",
    image: "Private paint party — birthday group celebrating",
    imageSrc: "/images/privateevent.png",
  },
];

export const about = {
  eyebrow: "Hi, I'm Caitlin",
  heading: "The heart behind Paint A Date",
  body: `I started Paint a Date with a simple idea: to create a space where laughter flows, creativity comes alive, and meaningful connections are made.

From date nights to bestie hangs and celebrations, every session is designed to help you slow down, be present, and make beautiful memories.`,
  closing: "Let's paint something beautiful together.",
  photoSrc: "/images/caitlin-portrait.png",
  photoAlt: "Caitlin, founder of Paint A Date, holding a bouquet of roses",
};

export const steps = [
  {
    number: "01",
    title: "Book",
    description: "Pick your session, date and headcount in under two minutes — no app, no fuss.",
  },
  {
    number: "02",
    title: "Show Up",
    description: "Walk in empty-handed. Easels, aprons, brushes, canvases and playlist are all sorted.",
  },
  {
    number: "03",
    title: "Paint, Sip & Take It Home",
    description: "Follow along at your own pace, sip on something nice, and leave with art that's 100% you.",
  },
];

export const testimonials = [
  {
    name: "Nomvula K.",
    context: "Date Night Duo, Durban",
    quote:
      "Such a fun, low-pressure night out! My partner and I still have our canvases hanging side by side. [Placeholder review]",
    rating: 5,
  },
  {
    name: "Thandeka & friends",
    context: "Girls' Night, Ballito",
    quote:
      "Booked this for my birthday and it was the best decision — great music, easy instructions, and everyone left with real art. [Placeholder review]",
    rating: 5,
  },
  {
    name: "Craig M.",
    context: "Team Social, Umhlanga",
    quote:
      "Did this with my whole team and even the least artsy of us walked away proud. Will book again for our next event. [Placeholder review]",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "I can't even draw a stick figure. Can I still come?",
    answer:
      "No experience? No problem — that's basically our whole motto. Every session is guided step-by-step, so whether you're a secret Picasso or you've never held a brush, you'll leave with something you're proud to hang up.",
  },
  {
    question: "What's actually included in a session?",
    answer:
      "Your canvas or tote bag, all paints and brushes, an apron so your outfit stays safe, a guided step-by-step demo, and good music. Just bring yourself (and your own drinks, unless stated otherwise for your venue).",
  },
  {
    question: "How big can our group be?",
    answer:
      "Solo, duo, or a full private event — we host anywhere from 2 people up to large groups for birthdays, hens and corporate bookings. Tell us your headcount when you enquire and we'll sort the setup.",
  },
  {
    question: "Where do sessions happen?",
    answer:
      "We host at partner venues around Durban and KZN, plus we can travel to your chosen venue for private events. Drop us your suburb or venue when you book and we'll confirm the closest option.",
  },
  {
    question: "Can I book a private party for a birthday or hen do?",
    answer:
      "Absolutely — private events are one of our favourite things to host. Head to the Book page, choose \"Private Event\" as your session type, and tell us the occasion. We'll come back with a custom quote.",
  },
];

export const gallery = [
  { id: 1, label: "Canvas Night" },
  { id: 2, label: "Tote Bag Session" },
  { id: 3, label: "Girls' Night Out" },
  { id: 4, label: "Date Night Duo" },
  { id: 5, label: "Birthday Bash" },
  { id: 6, label: "Team Social" },
  { id: 7, label: "Finished Art Wall" },
  { id: 8, label: "Behind the Easels" },
  { id: 9, label: "Sip & Sparkle Evening" },
];

export const sessions = [
  {
    slug: "canvas-painting",
    title: "Canvas Painting",
    emoji: "🎨",
    tagline: "Our signature guided session",
    description:
      "A relaxed, guided painting session where every stroke is optional and every glass is topped up. Perfect for date nights, girls' nights, or a solo treat-yourself evening.",
    price: "R350",
    unit: "/ person",
    features: [
      "2.5 hour guided session",
      "All materials included",
      "1 welcome drink",
      "Take home your canvas",
    ],
    highlighted: false,
    imageSrc: "/images/canvas.png",
  },
  {
    slug: "date-night-duo",
    title: "Date Night Duo",
    emoji: "💕",
    tagline: "Our most-booked package",
    description:
      "Made for two — shared or matching canvases, two drinks, and a night that beats dinner-and-a-movie every time.",
    price: "R650",
    unit: "/ couple",
    features: [
      "2.5 hour guided session",
      "All materials included",
      "2 welcome drinks",
      "Shared or matching canvases",
      "Souvenir photo",
    ],
    highlighted: true,
    imageSrc: "/images/datenightduo.png",
  },
  {
    slug: "tote-bag-painting",
    title: "Tote Bag Painting",
    emoji: "👜",
    tagline: "Lighter, giftable, wearable art",
    description:
      "Design and paint your own tote bag to actually carry afterwards — a great pick for a shorter session or a thoughtful gift day out.",
    price: "R300",
    unit: "/ person",
    features: [
      "1.5–2 hour guided session",
      "Tote bag & fabric paints included",
      "1 welcome drink",
      "Take home your tote same day",
    ],
    highlighted: false,
    imageSrc: "/images/totebag.png",
  },
  {
    slug: "private-events",
    title: "Private Group Event",
    emoji: "🥂",
    tagline: "Birthdays, hens, corporate & more",
    description:
      "Fully hosted private sessions for your crew — birthdays, bachelorettes, corporate team days, book clubs, you name it. Custom theme and venue on request.",
    price: "From R4500",
    unit: "/ event (up to 10)",
    features: [
      "Dedicated host & full venue setup",
      "All materials included",
      "Custom theme on request",
      "Flexible scheduling & venue options",
    ],
    highlighted: false,
    imageSrc: "/images/privateevent.png",
  },
];

export const sessionTypeOptions = [
  "Canvas Painting",
  "Date Night Duo",
  "Tote Bag Painting",
  "Private Event (birthday, hen, corporate, other)",
  "Not sure yet — help me choose",
];

export const seo = {
  siteUrl: "https://paintadate.co.za",
  defaultTitle: "Paint A Date | Sip & Paint Experiences in Durban, KZN",
  defaultDescription:
    "Guided sip & paint sessions in Durban and across KwaZulu-Natal. Canvas painting, tote bag art, and private events for date nights, girls' nights, birthdays and team socials.",
  keywords: [
    "sip and paint Durban",
    "paint date night KZN",
    "tote bag painting Durban",
    "paint and sip KwaZulu-Natal",
    "canvas painting date night",
    "private paint party Durban",
  ],
  ogImage: "/og-image.jpg",
};
