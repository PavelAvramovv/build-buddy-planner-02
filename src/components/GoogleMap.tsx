import { MapPin } from "lucide-react";

import { company } from "@/lib/site-content";

export function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-sm border border-border bg-card ${className}`}>
      <iframe
        title={`${company.name} location on Google Maps`}
        src={company.mapEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full border-0 md:h-[26rem]"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4 text-sm">
        <p className="flex items-start gap-2 text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
          {company.address}
        </p>
        <a
          href={company.mapLink}
          target="_blank"
          rel="noreferrer"
          className="font-display text-xs font-bold tracking-widest uppercase hover:text-primary"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
