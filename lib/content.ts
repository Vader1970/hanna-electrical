export const PHONE_DISPLAY = "027 412 2479";
export const PHONE_HREF = "tel:0274122479";
export const EMAIL = "hannaelectricalnz@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const SHOW_NOTES = true;

export const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "work", label: "Our Work" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
] as const;

export type NavId = (typeof NAV)[number]["id"];

export const TRUST = [
  {
    n: "01",
    title: "30+ Years Industry Experience",
    body: "Three decades in the trade, across homes old and new.",
    icon: "history",
  },
  {
    n: "02",
    title: "Locally Owned & Operated",
    body: "An independent business, owned and run right here.",
    icon: "house",
  },
  {
    n: "03",
    title: "Christchurch Based",
    body: "Local electricians who know the city and its homes.",
    icon: "pin",
  },
  {
    n: "04",
    title: "Friendly & Reliable Service",
    body: "Clear communication, tidy work and no surprises.",
    icon: "badge",
  },
] as const;

export type Service = {
  title: string;
  description: string;
  image?: string;
  position?: string;
  alt?: string;
  note?: string;
};

export const SERVICES: Service[] = [
  {
    title: "New Builds & Installations",
    description:
      "Complete electrical for new homes — from pre-wire and cabling through to fit-off and final checks. We work alongside your builder to keep the job on track.",
    image: "/img/svc-newbuild.jpg",
    position: "75% 50%",
    alt: "Hanna Electrical van parked outside a new home under construction",
  },
  {
    title: "Renovations & Rewiring",
    description: "New circuits, rewiring and modern fittings for older homes and extensions.",
    image: "/img/s0.webp",
    position: "55% 35%",
    alt: "Electrician drilling through timber framing to run new cabling",
  },
  {
    title: "Lighting & LED Upgrades",
    description: "Downlights, feature lighting and energy-efficient LED upgrades, planned room by room.",
    image: "/img/led-lights.webp",
    position: "50% 32%",
    alt: "LED downlights across a kitchen and living room ceiling",
  },
  {
    title: "Switchboards & Power",
    description: "Switchboard upgrades, extra power points and dedicated circuits for kitchens and appliances.",
    image: "/img/p1.webp",
    position: "40% 25%",
    alt: "Electrician wiring a new switchboard",
  },
  {
    title: "Home Security",
    description: "Security lighting, alarms and camera systems — installed neatly and wired properly.",
    image: "/img/home-security.webp",
    position: "78% 42%",
    alt: "Security camera and floodlights on the wall of a home at dusk",
  },
  {
    title: "Heating & Ventilation",
    description: "Bathroom heaters, extraction fans and heating circuits to keep your home warm and dry.",
    image: "/img/p0.jpg",
    position: "50% 45%",
    alt: "New wall-mounted bathroom heater",
    // note: "To confirm: scope",
  },
];

export type GalleryItem = {
  src: string;
  caption: string;
  size: string;
  position: string;
};

export const GALLERY: GalleryItem[] = [
  { src: "/img/p3.webp", caption: "On site at a new home build", size: "auto 150%", position: "12% 85%" },
  { src: "/img/p1.webp", caption: "Wiring a new switchboard", size: "cover", position: "35% 50%" },
  { src: "/img/p2.webp", caption: "Kitchen power, lighting and appliances", size: "cover", position: "50% 50%" },
  {
    src: "/img/p5.webp",
    caption: "Switch and controller tidy-up — before (left), after (right)",
    size: "cover",
    position: "50% 40%",
  },
  { src: "/img/s0.webp", caption: "Pre-wiring through timber framing", size: "cover", position: "55% 50%" },
  {
    src: "/img/p0.webp",
    caption: "Bathroom heater — new unit (top), old unit (bottom)",
    size: "cover",
    position: "50% 50%",
  },
  { src: "/img/p6.webp", caption: "Fitting downlights in a raked ceiling", size: "cover", position: "42% 50%" },
  { src: "/img/p4.webp", caption: "Ready for the day on a new build", size: "auto 150%", position: "80% 85%" },
];

export type Review = {
  n: string;
  quote: string;
  name: string;
  date: string;
  initials: string;
  image?: string;
};

export const REVIEWS: Review[] = [
  {
    n: "Review 01",
    // The supplied Google card is cut off after "reasona". The rest of this
    // sentence was already in the project and is not verified by that screenshot.
    quote:
      "Had our new house done in Lincoln -- Satisfied -- reasonable price and professional service -- Highly recommended.",
    name: "Manmohan Singh",
    date: "20/12/2021",
    initials: "MS",
    image: "/img/review-manmohan.png",
  },
  {
    n: "Review 02",
    quote: "Friendly, good service and always on time.",
    name: "H D",
    date: "16/09/2021",
    initials: "HD",
    image: "/img/review-hd.png",
  },
  {
    n: "Review 03",
    quote: "Great service, would recommend.",
    name: "Nigel O",
    date: "14/09/2021",
    initials: "NO",
    image: "/img/review-nigel.png",
  },
];

export const PRINCIPLES = [
  ["01", "Straight advice", "We'll tell you what you need — and what you don't."],
  ["02", "Careful workmanship", "Neat, well-planned work that's built to last."],
  ["03", "Local and accountable", "We live and work here, and we stand behind our work."],
] as const;

export const SERVICE_OPTIONS = [
  "New builds & installations",
  "Renovations & rewiring",
  "Lighting & LED upgrades",
  "Switchboards & power",
  "Home security",
  "Heating & ventilation",
  "Something else",
] as const;

export function pad2(n: number) {
  return String(n).padStart(2, "0");
}
