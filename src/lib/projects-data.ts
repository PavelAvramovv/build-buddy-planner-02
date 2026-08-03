import heroHouse from "@/assets/hero-house.jpg";
import aboutSite from "@/assets/about-site.jpg";
import svcCladding from "@/assets/svc-cladding.jpg";
import aAfter from "@/assets/a-after.jpg.asset.json";
import bAfterFront from "@/assets/b-after-front.jpg.asset.json";
import bAfterSide from "@/assets/b-after-side.jpg.asset.json";
import bBeforeSide from "@/assets/b-before-side.jpg.asset.json";
import cProgress from "@/assets/c-progress.jpg.asset.json";
import dComplete from "@/assets/d-complete.jpg.asset.json";
import eAfter from "@/assets/e-after.jpg.asset.json";
import eProgress from "@/assets/e-progress.jpg.asset.json";
import fGableAfter from "@/assets/f-gable-after.jpg.asset.json";
import fFront from "@/assets/f-front.jpg.asset.json";

export type Project = {
  img: string;
  title: string;
  tag: string;
  location: string;
  summary: string;
  /** Longer write-up shown on the projects page */
  details: string;
  /** Key scope-of-works points */
  scope: string[];
  duration: string;
};

export const projectFilters = ["All projects", "Insulation", "Render", "Cladding"];

export const projects: Project[] = [
  {
    img: fGableAfter.url,
    title: "Re-rendered gable, Birmingham",
    tag: "Render",
    location: "Birmingham",
    summary:
      "Blown, peeling render stripped off the gable, substrate repaired and re-finished in a smooth white silicone render.",
    details:
      "The gable end of this Birmingham semi had decades-old sand and cement render that had blown away from the brickwork, letting damp track into the wall. We scaffolded the elevation, hacked off every hollow section back to sound brick, repaired the substrate and re-beaded the corners and verge before applying a base coat with fibreglass mesh. The finished elevation is a smooth white silicone thin-coat that stays breathable, sheds rain and resists the algae growth that stained the old render.",
    scope: [
      "Full hack-off of blown sand and cement render",
      "Brickwork and substrate repairs",
      "Mesh-reinforced base coat with new beads",
      "White silicone thin-coat top coat",
    ],
    duration: "Approx. 2 weeks",
  },
  {
    img: fFront.url,
    title: "Front elevation render, Birmingham",
    tag: "Render",
    location: "Birmingham",
    summary:
      "Front elevation of the same property finished in crisp white render with the original brickwork and detailing kept clean.",
    details:
      "The front of the same Birmingham property was rendered to match the gable while keeping the original red brick plinth, bay detailing and stone heads exposed. Careful masking and clean bead lines around the bay windows and door surround were the difference here — the render meets the joinery in a straight, shadow-gapped line, and all rainwater goods were removed and refitted rather than rendered around.",
    scope: [
      "Render to upper elevation, brick plinth retained",
      "New stop beads around bays, heads and reveals",
      "Rainwater goods removed and refitted",
      "Brilliant white weather-resistant finish",
    ],
    duration: "Part of the same 2-week programme",
  },
  {
    img: eAfter.url,
    title: "Rendered semi, Birmingham",
    tag: "Render",
    location: "Birmingham",
    summary:
      "Red brick semi wrapped in external wall insulation and finished in a smooth off-white through-coloured render with dark grey trims.",
    details:
      "A solid-wall red brick semi with tile-hung bays that was expensive to heat. We fixed 90mm insulation boards to every external elevation, dressed the reveals and window heads with insulated returns, then finished in an off-white through-coloured silicone render. Dark grey trims around the windows and a matching front door pull the elevation together — the owners report a noticeably warmer house and lower heating bills through winter.",
    scope: [
      "External wall insulation to all elevations",
      "Insulated reveals, sills and window heads",
      "Mesh base coat and off-white silicone render",
      "Dark grey trim detailing",
    ],
    duration: "Approx. 3 weeks",
  },
  {
    img: eProgress.url,
    title: "Scaffolded EWI job, Birmingham",
    tag: "Insulation",
    location: "Birmingham",
    summary:
      "Full scaffold, insulation boards fixed and base coat applied to the front and side elevations of a large family home.",
    details:
      "Work-in-progress shot from the same family home, showing how an external wall insulation system is built up. Boards are bonded and mechanically fixed in a staggered pattern, corners and openings are beaded, and the whole wall is then embedded in a mesh-reinforced base coat before any decorative coat goes on. Working from a full scaffold keeps the coats continuous and lets us finish each elevation in a single day, which is what avoids visible joins.",
    scope: [
      "Full independent scaffold to front and side",
      "Bonded and mechanically fixed insulation boards",
      "Corner, stop and bell-cast beading",
      "Mesh-reinforced base coat",
    ],
    duration: "Approx. 3 weeks",
  },
  {
    img: bAfterFront.url,
    title: "Full render, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Weathered pebble dash replaced with a brilliant white silicone thin-coat render.",
    details:
      "Tired, patchy pebble dash was removed from this Dudley property and replaced with a modern silicone thin-coat system. The old finish had been painted several times and was trapping moisture; the new render is breathable and self-cleaning, so rain washes dirt off rather than letting it streak down the wall. New beads around every opening give the crisp lines the original finish never had.",
    scope: [
      "Removal of failed pebble dash",
      "Substrate preparation and repairs",
      "Base coat with reinforcing mesh",
      "Brilliant white silicone thin-coat render",
    ],
    duration: "Approx. 2 weeks",
  },
  {
    img: aAfter.url,
    title: "EWI + silicone render, Dudley",
    tag: "Insulation",
    location: "Dudley, West Midlands",
    summary: "Failing painted render stripped, insulated and refinished in a warm cream silicone render.",
    details:
      "This detached house in Dudley had cracked green painted render that was flaking off in sheets. We stripped it back, insulated the solid walls and finished in a warm cream silicone render. Alongside the visual change, the insulation cuts heat loss through the walls significantly, which is the single biggest gain available on a pre-1930s solid-wall property.",
    scope: [
      "Strip failed painted render",
      "External wall insulation to solid walls",
      "Insulated reveals and new drip beads",
      "Warm cream silicone render finish",
    ],
    duration: "Approx. 3 weeks",
  },
  {
    img: cProgress.url,
    title: "Semi-detached, work in progress",
    tag: "Insulation",
    location: "West Midlands",
    summary: "Insulation boards and beading going up before the base coat and top coat are applied.",
    details:
      "A mid-programme photograph showing the boarding and beading stage on a semi-detached property. Every board joint is tight, fixings are set flush, and bell-cast beads at the base let water drip clear of the wall instead of running behind the system. Getting this stage right is what determines whether the finished render cracks in five years' time.",
    scope: [
      "Board setting out and fixing",
      "Bell-cast, corner and stop beads",
      "Reveal and sill detailing",
      "Preparation for base and top coats",
    ],
    duration: "Ongoing at time of photo",
  },
  {
    img: dComplete.url,
    title: "Detached house, Solihull",
    tag: "Render",
    location: "Solihull",
    summary: "Complete render refresh with crisp reveals and new rainwater goods.",
    details:
      "A full render refresh on a detached Solihull home. Existing coatings were assessed, sound areas keyed and failed areas cut out, then the whole property was re-coated for a consistent colour and texture. New rainwater goods were fitted on completion so nothing old-looking spoils the finished elevation.",
    scope: [
      "Survey and localised cut-out repairs",
      "Full re-coat for consistent colour",
      "Crisp reveal and sill detailing",
      "New guttering and downpipes",
    ],
    duration: "Approx. 2 weeks",
  },
  {
    img: bAfterSide.url,
    title: "Side elevation, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Side elevation rendered to match the front, with neat bead lines around every opening.",
    details:
      "The side elevation of the Dudley property, rendered in the same system and colour as the front so the corners read as one continuous surface. Boiler flues, soil pipes and meter boxes were all removed and refitted over the finished render rather than rendered around — a small detail that makes the difference between a tidy job and an obviously patched one.",
    scope: [
      "Matched render system and colour",
      "Continuous corner detailing",
      "Flues, pipes and boxes refitted over the finish",
      "Neat beading to all openings",
    ],
    duration: "Part of the same programme",
  },
  {
    img: svcCladding,
    title: "Rear extension, Coventry",
    tag: "Cladding",
    location: "Coventry",
    summary: "Insulated cladding system to a new rear extension for a sharp, low-maintenance finish.",
    details:
      "A new rear extension in Coventry finished with an insulated cladding system rather than render, giving a sharper, more contemporary look with virtually no maintenance. The cladding is fixed over an insulation layer on a ventilated cavity, so the build-up handles both thermal performance and rain screening.",
    scope: [
      "Insulation layer with ventilated cavity",
      "Cladding rails and rain-screen boards",
      "Trim and corner detailing",
      "Low-maintenance contemporary finish",
    ],
    duration: "Approx. 10 days",
  },
  {
    img: heroHouse,
    title: "Detached house, Birmingham",
    tag: "Insulation",
    location: "Birmingham",
    summary: "External wall insulation to all elevations, improving comfort and heating bills.",
    details:
      "Whole-house external wall insulation on a detached Birmingham property. Wrapping every elevation in one continuous layer removes the cold bridges you get from part-treating a house, so rooms hold their heat for far longer and the boiler cycles less. The system was finished in a light neutral render to keep the street-facing look traditional.",
    scope: [
      "Continuous insulation to all elevations",
      "Cold-bridge detailing at reveals and eaves",
      "Mesh base coat and neutral render finish",
      "Works completed to UK Building Regulations",
    ],
    duration: "Approx. 3-4 weeks",
  },
  {
    img: aboutSite,
    title: "Terrace façade, Solihull",
    tag: "Render",
    location: "Solihull",
    summary: "Terrace frontage re-rendered and repaired ready for a long-life decorative finish.",
    details:
      "A terraced frontage in Solihull where previous repairs had left the façade a patchwork of textures. We cut out the loose material, re-rendered to a level plane and prepared the whole face for a long-life decorative coating, keeping the original parapet and string course lines intact.",
    scope: [
      "Cut out loose and hollow render",
      "Re-render to a level plane",
      "Original detailing retained",
      "Prepared for long-life decorative coating",
    ],
    duration: "Approx. 2 weeks",
  },
  {
    img: bBeforeSide.url,
    title: "Gable elevation, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Substrate repairs to a cracked gable wall before insulation and render.",
    details:
      "Before-works condition on a Dudley gable: cracked render, spalled brick and open joints that were letting water into the wall. Substrate repairs like these are carried out and allowed to dry before any insulation or render is applied — putting a new system over damp, unsound brickwork is the most common reason render fails early.",
    scope: [
      "Condition survey and damp check",
      "Crack stitching and brick repairs",
      "Repointing of open joints",
      "Preparation for insulation and render",
    ],
    duration: "Preparation stage",
  },
];
