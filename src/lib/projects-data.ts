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
};

export const projectFilters = ["All projects", "Insulation", "Render", "Cladding"];

export const projects: Project[] = [
  {
    img: eAfter.url,
    title: "Rendered semi, Birmingham",
    tag: "Render",
    location: "Birmingham",
    summary:
      "Red brick semi wrapped in external wall insulation and finished in a smooth off-white through-coloured render with dark grey trims.",
  },
  {
    img: eProgress.url,
    title: "Scaffolded EWI job, Birmingham",
    tag: "Insulation",
    location: "Birmingham",
    summary:
      "Full scaffold, insulation boards fixed and base coat applied to the front and side elevations of a large family home.",
  },
  {
    img: bAfterFront.url,
    title: "Full render, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Weathered pebble dash replaced with a brilliant white silicone thin-coat render.",
  },
  {
    img: aAfter.url,
    title: "EWI + silicone render, Dudley",
    tag: "Insulation",
    location: "Dudley, West Midlands",
    summary: "Failing painted render stripped, insulated and refinished in a warm cream silicone render.",
  },
  {
    img: cProgress.url,
    title: "Semi-detached, work in progress",
    tag: "Insulation",
    location: "West Midlands",
    summary: "Insulation boards and beading going up before the base coat and top coat are applied.",
  },
  {
    img: dComplete.url,
    title: "Detached house, Solihull",
    tag: "Render",
    location: "Solihull",
    summary: "Complete render refresh with crisp reveals and new rainwater goods.",
  },
  {
    img: bAfterSide.url,
    title: "Side elevation, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Side elevation rendered to match the front, with neat bead lines around every opening.",
  },
  {
    img: svcCladding,
    title: "Rear extension, Coventry",
    tag: "Cladding",
    location: "Coventry",
    summary: "Insulated cladding system to a new rear extension for a sharp, low-maintenance finish.",
  },
  {
    img: heroHouse,
    title: "Detached house, Birmingham",
    tag: "Insulation",
    location: "Birmingham",
    summary: "External wall insulation to all elevations, improving comfort and heating bills.",
  },
  {
    img: aboutSite,
    title: "Terrace façade, Solihull",
    tag: "Render",
    location: "Solihull",
    summary: "Terrace frontage re-rendered and repaired ready for a long-life decorative finish.",
  },
  {
    img: bBeforeSide.url,
    title: "Gable elevation, Dudley",
    tag: "Render",
    location: "Dudley, West Midlands",
    summary: "Substrate repairs to a cracked gable wall before insulation and render.",
  },
];
