import { useState } from "react";

import aBeforeFront from "@/assets/a-before-front.jpg.asset.json";
import aBeforeSide from "@/assets/a-before-side.jpg.asset.json";
import aAfter from "@/assets/a-after.jpg.asset.json";
import bBeforeFront from "@/assets/b-before-front.jpg.asset.json";
import bBeforeSide from "@/assets/b-before-side.jpg.asset.json";
import bAfterFront from "@/assets/b-after-front.jpg.asset.json";
import bAfterSide from "@/assets/b-after-side.jpg.asset.json";

type Pair = {
  id: string;
  title: string;
  location: string;
  work: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

const pairs: Pair[] = [
  {
    id: "pair-1",
    title: "Tired painted render replaced",
    location: "Dudley, West Midlands",
    work: "External wall insulation + silicone thin-coat render",
    before: aBeforeFront.url,
    after: aAfter.url,
    beforeAlt: "Detached house with cracked and peeling green painted render before the work",
    afterAlt: "The same house after external wall insulation and a cream silicone render finish",
  },
  {
    id: "pair-2",
    title: "Front elevation transformation",
    location: "Dudley, West Midlands",
    work: "Insulated render to upper elevations, brick retained below",
    before: bBeforeFront.url,
    after: bAfterFront.url,
    beforeAlt: "Semi-detached house with weathered pebble dash to the upper walls before rendering",
    afterAlt: "The same house after a smooth brilliant white render finish to the upper walls",
  },
  {
    id: "pair-3",
    title: "Side elevation, same property",
    location: "Dudley, West Midlands",
    work: "Insulated render, crisp bead lines and neat reveals",
    before: bBeforeSide.url,
    after: bAfterSide.url,
    beforeAlt: "Side elevation with old textured render before the work",
    afterAlt: "Side elevation after a smooth white render finish",
  },
  {
    id: "pair-4",
    title: "Gable wall made good",
    location: "Dudley, West Midlands",
    work: "Substrate repairs before insulation and render",
    before: aBeforeSide.url,
    after: aAfter.url,
    beforeAlt: "Cracked gable wall with failing render before the work",
    afterAlt: "Completed property after external wall insulation and render",
  },
];

function Compare({ pair }: { pair: Pair }) {
  const [slider, setSlider] = useState(50);

  return (
    <article className="overflow-hidden rounded-sm bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="relative aspect-4/3 w-full overflow-hidden select-none">
        <img src={pair.after} alt={pair.afterAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />
        <img
          src={pair.before}
          alt={pair.beforeAlt}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
        />
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${slider}%` }} />
        <span className="absolute top-3 left-3 rounded-sm bg-ink/80 px-2 py-1 font-display text-[0.65rem] font-bold tracking-widest text-ink-foreground uppercase">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-sm bg-primary px-2 py-1 font-display text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
          After
        </span>
      </div>
      <div className="p-5">
        <input
          type="range"
          min={0}
          max={100}
          value={slider}
          aria-label={`Compare before and after — ${pair.title}`}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="w-full accent-[var(--primary)]"
        />
        <h3 className="mt-4 text-lg leading-tight font-semibold">{pair.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{pair.work}</p>
        <p className="mt-2 font-display text-xs font-bold tracking-widest text-primary uppercase">
          {pair.location}
        </p>
      </div>
    </article>
  );
}

export function RealProjects() {
  return (
    <section id="before-after" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <p className="eyebrow">Real jobs</p>
          <h2 className="mt-2 text-4xl font-bold">Before &amp; after — our own work</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Genuine photographs from recent Eco Insulate Limited projects across the West Midlands.
            Drag the slider on each project to reveal the finished result.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pairs.map((p) => (
            <Compare key={p.id} pair={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
