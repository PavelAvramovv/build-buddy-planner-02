import heroHouse from "@/assets/hero-house.jpg";
import aboutSite from "@/assets/about-site.jpg";
import svcInsulation from "@/assets/svc-insulation.jpg";
import svcRender from "@/assets/svc-render.jpg";
import svcCladding from "@/assets/svc-cladding.jpg";
import svcPlaster from "@/assets/svc-plaster.jpg";
import svcRockwool from "@/assets/svc-rockwool.jpg";

export const company = {
  name: "Eco Insulate Limited",
  phone: "07979 112991",
  phoneHref: "tel:+447979112991",
  email: "ecoisulatelimited@gmail.com",
  address: "692-696 Stratford Road, Sparkhill, Birmingham, United Kingdom",
  facebook: "https://facebook.com/profile.php?id=100090297229480",
  instagram: "https://instagram.com/ecoisulatelimited",
  mapEmbed:
    "https://www.google.com/maps?q=52.4762122,-2.0792682&hl=en&z=13&output=embed",
  mapLink: "https://maps.app.goo.gl/xcGRwYZxYVbqAiFEA",
};

export type Service = {
  slug: string;
  title: string;
  img: string;
  text: string;
  points: string[];
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "insulation-installation",
    title: "Insulation Installation",
    img: svcInsulation,
    text: "Our team of experts will install high-quality insulation in your home, ensuring maximum energy efficiency and comfort, using eco-friendly materials that minimise environmental impact.",
    points: ["Professional installation", "Eco-friendly materials", "Energy-saving benefits"],
    intro:
      "From solid wall and cavity insulation to loft and floor upgrades, we install certified systems that keep the heat where it belongs — inside your home.",
    sections: [
      {
        heading: "What the work involves",
        body: "We start with a free survey of the property, checking wall construction, existing insulation, damp risk and ventilation. You then receive a written recommendation with U-value improvements, timescales and a fixed price. Installation is carried out by our own time-served fitters, working to UK Building Regulations and PAS 2035 guidance, with the site left clean at the end of every day.",
      },
      {
        heading: "Systems we install",
        body: "External wall insulation (EPS, mineral wool and phenolic boards), internal wall insulation on battens or bonded boards, loft roll and rigid board upgrades, cavity wall injection and under-floor insulation. Every system is fitted with the correct fixings, beads, mesh and basecoat so the finish lasts.",
      },
      {
        heading: "Typical results",
        body: "Most homeowners see heating demand drop noticeably in the first winter, with fewer cold spots, less condensation on external walls and a warmer, quieter home. A well-insulated property also improves its EPC banding, which helps at resale or when letting.",
      },
    ],
    faqs: [
      {
        q: "How long does an installation take?",
        a: "A typical three-bedroom semi takes between one and three weeks depending on the system, access and weather.",
      },
      {
        q: "Will I need to move out?",
        a: "No. External work happens outside the building, and internal work is scheduled room by room so you can stay at home.",
      },
    ],
  },
  {
    slug: "eco-friendly-materials",
    title: "Eco-friendly Materials",
    img: svcRockwool,
    text: "A wide range of eco-friendly insulation materials, carefully selected for their sustainability and effectiveness — from natural fibres to recycled options.",
    points: ["Variety of materials", "Sustainability", "Effectiveness"],
    intro:
      "We help you choose insulation that performs well thermally and has a low environmental footprint, from natural fibres to recycled mineral products.",
    sections: [
      {
        heading: "Natural and recycled options",
        body: "Wood fibre, sheep's wool and recycled cellulose offer excellent thermal performance with high moisture buffering, which suits older, breathable buildings. Mineral wool made with a high recycled content gives strong fire performance and acoustic benefits at a competitive price.",
      },
      {
        heading: "Choosing the right material",
        body: "The right material depends on wall build-up, moisture risk, fire requirements and budget. We explain the trade-offs in plain English and never specify a board simply because it is the cheapest — the wrong choice can trap moisture and cause problems years later.",
      },
      {
        heading: "Responsible sourcing",
        body: "We buy from established UK suppliers with third-party certification and full technical support, so every system is covered by manufacturer guarantees and installed exactly to specification.",
      },
    ],
    faqs: [
      {
        q: "Are natural materials as effective as synthetic boards?",
        a: "For most applications yes — they may need slightly more thickness, but they handle moisture better and are far kinder environmentally.",
      },
    ],
  },
  {
    slug: "energy-efficiency-consultation",
    title: "Energy Efficiency Consultation",
    img: svcPlaster,
    text: "Personalised recommendations to optimise your home's energy usage. We identify areas for improvement and implement sustainable solutions for long-term savings.",
    points: ["Customised consultation", "Maximised savings", "Reduced carbon footprint"],
    intro:
      "A practical, whole-house assessment that tells you exactly where your home is losing heat and which upgrades pay back fastest.",
    sections: [
      {
        heading: "How the assessment works",
        body: "We walk the property with you, record construction details, check existing insulation, glazing, heating controls and ventilation, and look for draughts and thermal bridging. You receive a clear report with prioritised recommendations and indicative costs.",
      },
      {
        heading: "Prioritised, not pushy",
        body: "Not every home needs every measure. We tell you what is worth doing first — often loft top-up, draught-proofing and heating controls before major fabric work — so your budget goes where it makes the biggest difference.",
      },
      {
        heading: "Compliance and grants",
        body: "We advise on UK Building Regulations Part L requirements, PAS 2035 retrofit standards, and point you towards any funding schemes you may qualify for.",
      },
    ],
    faqs: [
      {
        q: "Is the consultation free?",
        a: "The initial consultation and quotation are free of charge for properties in our coverage area.",
      },
    ],
  },
  {
    slug: "external-wall-cladding",
    title: "External Wall Cladding",
    img: svcCladding,
    text: "Ventilated façades and cladding systems that protect the building fabric while giving your property a modern, lasting finish.",
    points: ["Modern appearance", "Moisture protection", "Minimal maintenance"],
    intro:
      "Rainscreen and decorative cladding systems that shield the structure from driving rain while transforming how the property looks.",
    sections: [
      {
        heading: "Ventilated façade build-up",
        body: "A cladding system fixed on a treated or aluminium sub-frame creates a ventilated cavity that keeps insulation dry and lets the wall breathe. We detail every reveal, corner and junction properly so water is always taken away from the building.",
      },
      {
        heading: "Finishes available",
        body: "Fibre cement boards, composite timber, brick slips and metal panels in a wide colour range. We can mix cladding with render for a contemporary two-tone façade.",
      },
      {
        heading: "Maintenance",
        body: "Cladding needs little more than an occasional wash down. Panels can be replaced individually if damaged, without disturbing the rest of the façade.",
      },
    ],
    faqs: [
      {
        q: "Is cladding fire safe?",
        a: "We specify systems with the appropriate reaction-to-fire classification for the building type and height, along with cavity barriers where required.",
      },
    ],
  },
  {
    slug: "render-and-plaster",
    title: "Render & Plaster Finishes",
    img: svcRender,
    text: "Smooth silicone render, monocouche and internal plaster finishes applied by time-served plasterers for a flawless, durable surface.",
    points: ["Crisp, smooth finishes", "Colour of your choice", "Clear timescales and pricing"],
    intro:
      "External render and internal plastering carried out to a high standard — the finish everyone sees, so we take it seriously.",
    sections: [
      {
        heading: "External rendering",
        body: "Silicone thin-coat, monocouche and traditional sand and cement systems, applied over correctly prepared and beaded substrates. Silicone render is self-cleaning, breathable and holds its colour for years, which makes it the most popular choice for insulated façades.",
      },
      {
        heading: "Internal plastering",
        body: "Skim over plasterboard, full re-plastering of older walls, and repairs to damaged areas. Walls are left flat, sharp at the corners and ready for decoration.",
      },
      {
        heading: "Colour and texture",
        body: "Hundreds of colours and grain sizes are available. Use our AI before & after visualiser on the home page to see your own property in the finish you are considering before committing.",
      },
    ],
    faqs: [
      {
        q: "How long before I can paint new plaster?",
        a: "Allow the plaster to dry fully — usually four to seven days depending on thickness, ventilation and the time of year.",
      },
      {
        q: "Can you render over old pebbledash?",
        a: "In most cases yes, once the surface has been checked for hollow areas and correctly prepared or meshed.",
      },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  readMins: number;
  excerpt: string;
  img: string;
  paragraphs: { heading?: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "external-wall-insulation-cost-uk",
    title: "How much does external wall insulation cost in the UK?",
    date: "2026-07-14",
    readMins: 6,
    excerpt:
      "A straightforward breakdown of what external wall insulation costs on a typical UK home, what drives the price up or down, and how long it takes to pay back.",
    img: svcInsulation,
    paragraphs: [
      {
        body: "External wall insulation is one of the biggest single improvements you can make to a solid-wall property, and it is also one of the most misunderstood when it comes to price. Costs vary widely because no two houses are the same.",
      },
      {
        heading: "What drives the price",
        body: "The main factors are the wall area, the insulation thickness required to hit the target U-value, the finish you choose, and access. A detached house needing full scaffolding will always cost more per square metre than a mid-terrace. Removing and refitting pipework, downpipes, meter boxes and canopies also adds to the day count.",
      },
      {
        heading: "Typical ranges",
        body: "As a guide, most UK homeowners budget between £100 and £160 per square metre of wall for a complete insulated render system, including scaffold, boards, mesh, basecoat and a silicone topcoat. A three-bedroom semi commonly lands somewhere between £9,000 and £16,000.",
      },
      {
        heading: "Payback",
        body: "Savings depend on how you heat the home, but many households see heating costs fall by a third or more. Combined with the improvement in EPC rating and the fresh appearance of the property, most owners consider the work worthwhile well before the pure energy payback period is reached.",
      },
      {
        heading: "Getting an accurate figure",
        body: "The only reliable number comes from a survey. We measure the elevations, check the substrate and give you a written fixed price with no surprises.",
      },
    ],
  },
  {
    slug: "silicone-render-vs-monocouche",
    title: "Silicone render vs monocouche: which should you choose?",
    date: "2026-06-28",
    readMins: 5,
    excerpt:
      "Both give a modern, low-maintenance finish, but they behave differently. Here is how to pick the right one for your property.",
    img: svcRender,
    paragraphs: [
      {
        body: "Silicone thin-coat and monocouche are the two most common modern renders in the UK. They look similar once finished, but the systems behind them are quite different.",
      },
      {
        heading: "Silicone thin-coat",
        body: "Applied at 1.5–3mm over a reinforced basecoat, silicone render is flexible, highly breathable and water repellent. It resists cracking, sheds dirt in the rain and comes pre-coloured, so there is no painting afterwards. It is the standard choice over insulation boards.",
      },
      {
        heading: "Monocouche",
        body: "A through-coloured cement-based render applied in a single thicker pass, usually 15mm, and scraped back. It is robust and cost-effective on masonry, but it is more rigid, so movement joints and good substrate preparation matter a great deal.",
      },
      {
        heading: "Which to pick",
        body: "If you are insulating, choose silicone. If you are rendering directly onto sound blockwork and want a traditional, hard-wearing finish at a lower cost, monocouche is a sensible option.",
      },
    ],
  },
  {
    slug: "signs-your-home-needs-insulation",
    title: "Seven signs your home badly needs insulation",
    date: "2026-06-05",
    readMins: 4,
    excerpt:
      "Cold walls, condensation and rocketing bills are all telling you something. Here is what to look for before winter arrives.",
    img: heroHouse,
    paragraphs: [
      {
        body: "Most poorly insulated homes give clear warning signs long before the bills arrive. If several of these sound familiar, it is worth booking a survey.",
      },
      {
        heading: "1. Cold internal walls",
        body: "Put your hand on an external wall in winter. If it feels noticeably colder than an internal partition, heat is escaping through it.",
      },
      {
        heading: "2. Condensation and black mould",
        body: "Moisture condenses on the coldest surfaces. Mould in corners and behind furniture usually points to cold spots rather than a leak.",
      },
      {
        heading: "3. Rooms that never warm up",
        body: "A room above a garage or with three external walls will always struggle if the fabric is uninsulated.",
      },
      {
        heading: "4. Heating running constantly",
        body: "If the boiler rarely switches off in cold weather, the fabric is losing heat as fast as you make it.",
      },
      {
        heading: "5. Snow melting quickly on the roof",
        body: "A roof that clears before your neighbours' is leaking heat through the loft.",
      },
      {
        heading: "6. Draughts you cannot trace",
        body: "Gaps around floors, skirtings and loft hatches all add up to a measurable heat loss.",
      },
      {
        heading: "7. A poor EPC rating",
        body: "Anything at band D or below usually has straightforward fabric improvements available.",
      },
    ],
  },
  {
    slug: "pas-2035-explained",
    title: "PAS 2035 explained for homeowners",
    date: "2026-05-19",
    readMins: 5,
    excerpt:
      "The UK retrofit standard sounds technical, but it exists to protect you. Here is what it means in practice.",
    img: aboutSite,
    paragraphs: [
      {
        body: "PAS 2035 is the British standard for retrofitting domestic buildings for energy efficiency. It sets out how a whole-house assessment should be carried out and how measures should be designed and installed.",
      },
      {
        heading: "Whole-house thinking",
        body: "The core idea is simple: you cannot change one part of a building without affecting the rest. Add insulation without considering ventilation and you risk condensation. PAS 2035 forces that thinking into the process.",
      },
      {
        heading: "What it means for your project",
        body: "You get a documented assessment, a designed solution rather than a guess, a clear ventilation strategy and an installer who is accountable for the outcome. For grant-funded work, following the standard is mandatory.",
      },
      {
        heading: "Why it matters",
        body: "Most retrofit failures in the UK trace back to poor detailing and ignored ventilation. Working to the standard is the most reliable way of avoiding them.",
      },
    ],
  },
  {
    slug: "preparing-your-home-for-render",
    title: "Preparing your home for rendering work",
    date: "2026-04-30",
    readMins: 4,
    excerpt:
      "A little preparation makes the job faster, cleaner and cheaper. Here is what we ask homeowners to do before we arrive.",
    img: svcPlaster,
    paragraphs: [
      {
        body: "Rendering is disruptive for a few days, but some simple preparation keeps everything moving.",
      },
      {
        heading: "Clear access around the property",
        body: "Scaffolding needs a clear run along each elevation. Move bins, garden furniture, planters and anything fragile away from the walls.",
      },
      {
        heading: "Protect what stays",
        body: "We sheet windows, doors and paths, but delicate plants close to the wall are best moved or cut back beforehand.",
      },
      {
        heading: "Parking and deliveries",
        body: "Materials arrive on a pallet. If parking is tight, let us know early so we can arrange a permit or a suitable drop point.",
      },
      {
        heading: "Weather",
        body: "Render cannot be applied in frost or heavy rain. We build a little flexibility into the programme and keep you updated day by day.",
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
