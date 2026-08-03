import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2, Sparkles, Upload } from "lucide-react";

import { renderAfterImage } from "@/lib/renovate.functions";

const finishes = [
  "Silicone thin-coat render",
  "Monocouche through-colour render",
  "Smooth skim plaster finish",
  "Brick-effect render",
  "Pebble dash / textured render",
];

const colours = ["Brilliant white", "Ivory cream", "Light grey", "Anthracite grey", "Sand beige"];

export function BeforeAfterAI() {
  const generate = useServerFn(renderAfterImage);
  const fileRef = useRef<HTMLInputElement>(null);

  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);
  const [finish, setFinish] = useState(finishes[0]);
  const [colour, setColour] = useState(colours[0]);
  const [notes, setNotes] = useState("");
  const [slider, setSlider] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onFile = (file?: File | null) => {
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      setError("Please upload an image smaller than 8 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setBefore(String(reader.result));
      setAfter(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const onGenerate = async () => {
    if (!before) return;
    setLoading(true);
    setError(null);
    try {
      const result = await generate({ data: { image: before, finish, colour, notes } });
      setAfter(result.image);
      setSlider(50);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="visualiser" className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <p className="eyebrow">AI visualiser</p>
          <h2 className="mt-2 text-4xl font-bold">See your home before &amp; after</h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-foreground/70">
            Upload a photo of your property, choose a render or plaster finish, and our AI will show
            you how it could look once the work is done.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Controls */}
          <div className="rounded-sm bg-ink-soft p-6">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex w-full items-center justify-center gap-2 rounded-sm border border-dashed border-ink-foreground/30 px-4 py-6 font-display text-xs font-bold tracking-widest uppercase transition-colors hover:border-primary hover:text-primary"
            >
              <Upload className="size-4" />
              {before ? "Change photo" : "Upload a photo"}
            </button>

            <label className="mt-6 block font-display text-xs font-bold tracking-widest uppercase">
              Finish
            </label>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              className="mt-2 w-full rounded-sm bg-ink px-3 py-2.5 text-sm text-ink-foreground focus:ring-2 focus:ring-primary focus:outline-hidden"
            >
              {finishes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>

            <label className="mt-4 block font-display text-xs font-bold tracking-widest uppercase">
              Colour
            </label>
            <select
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              className="mt-2 w-full rounded-sm bg-ink px-3 py-2.5 text-sm text-ink-foreground focus:ring-2 focus:ring-primary focus:outline-hidden"
            >
              {colours.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <label className="mt-4 block font-display text-xs font-bold tracking-widest uppercase">
              Notes (optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. keep the brick around the porch"
              className="mt-2 w-full rounded-sm bg-ink px-3 py-2.5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:ring-2 focus:ring-primary focus:outline-hidden"
            />

            <button
              type="button"
              disabled={!before || loading}
              onClick={onGenerate}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3.5 font-display text-xs font-bold tracking-widest text-primary-foreground uppercase disabled:opacity-50"
            >
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Sparkles className="size-4" />}
              {loading ? "Generating…" : "Generate after photo"}
            </button>

            {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            <p className="mt-3 text-xs text-ink-foreground/50">
              AI previews are for illustration only and are not a guarantee of the final result.
            </p>
          </div>

          {/* Preview */}
          <div className="rounded-sm bg-ink-soft p-4">
            {!before && (
              <div className="flex aspect-16/10 items-center justify-center rounded-sm border border-ink-foreground/10 text-sm text-ink-foreground/50">
                Your photo will appear here
              </div>
            )}

            {before && !after && (
              <img
                src={before}
                alt="Your property before the work"
                className="aspect-16/10 w-full rounded-sm object-cover"
              />
            )}

            {before && after && (
              <>
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-sm select-none">
                  <img
                    src={after}
                    alt="AI preview of the property after rendering"
                    className="absolute inset-0 size-full object-cover"
                  />
                  <img
                    src={before}
                    alt="The property before the work"
                    className="absolute inset-0 size-full object-cover"
                    style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}
                  />

                  <div
                    className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
                    style={{ left: `${slider}%` }}
                  />
                  <span className="absolute top-3 left-3 rounded-sm bg-ink/80 px-2 py-1 font-display text-[0.65rem] font-bold tracking-widest uppercase">
                    Before
                  </span>
                  <span className="absolute top-3 right-3 rounded-sm bg-primary px-2 py-1 font-display text-[0.65rem] font-bold tracking-widest text-primary-foreground uppercase">
                    After
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={slider}
                  aria-label="Compare before and after"
                  onChange={(e) => setSlider(Number(e.target.value))}
                  className="mt-4 w-full accent-[var(--primary)]"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
