import { FontName, actionman, komika, vtc } from "@/lib/fonts"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"

export type ComicFamily =
  | "american"
  | "asian"
  | "european"

export type ComicColor =
  | "color"
  | "grayscale"
  | "monochrome"

export interface Preset {
  label: string
  family: ComicFamily
  color: ComicColor
  font: FontName
  llmPrompt: string
  imagePrompt: (prompt: string) => string[]
  negativePrompt: (prompt: string) => string[]
}

// ATTENTION!! negative prompts are not supported by the VideoChain API yet

export const presets: Record<string, Preset> = {
  japanese_manga: {
    label: "Japanese",
    family: "asian",
    color: "grayscale",
    font: "actionman",
    llmPrompt: "japanese manga",
    imagePrompt: (prompt: string) => [
      `japanese manga about ${prompt}`,
      "single panel",
      "manga",
      "japanese",
      "grayscale",
      "intricate",
      "detailed",
      "drawing"
    ],
    negativePrompt: () => [
      "franco-belgian comic",
      "color album",
      "color",
      "american comic",
      "photo",
      "painting",
      "3D render"
    ],
  },
  franco_belgian: {
    label: "Franco-Belgian",
    family: "european",
    color: "color",
    font: "actionman",
    llmPrompt: "Franco-Belgian comic (a \"bande dessinée\"), in the style of Franquin, Moebius etc",
    imagePrompt: (prompt: string) => [
      `franco-belgian color comic about ${prompt}`,
      "bande dessinée",
      "franco-belgian comic",
      "comic album",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  american_comic_90: {
    label: "American (modern)",
    family: "american",
    color: "color",
    font: "actionman",
    llmPrompt: "american comic",
    imagePrompt: (prompt: string) => [
      `american comic about ${prompt}`,
      "single panel",
      "modern american comic",
      "comicbook style",
      "2010s",
      "digital print",
      "color comicbook",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "action",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },

  /*
  american_comic_40: {
    label: "American (1940)",
    family: "american",
    color: "color",
    font: "actionman",
    llmPrompt: "american comic",
    imagePrompt: (prompt: string) => [
      `american comic about ${prompt}`,
      "single panel",
      "american comic",
      "comicbook style",
      "1940",
      "40s",
      "color comicbook",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "action",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  */
  american_comic_50: {
    label: "American (1950)",
    family: "american",
    color: "color",
    font: "actionman",
    llmPrompt: "american comic",
    imagePrompt: (prompt: string) => [
      `american comic about ${prompt}`,
      "single panel",
      "american comic",
      "comicbook style",
      "1950",
      "50s",
      "color comicbook",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "action",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  /*
  american_comic_60: {
    label: "American (1960)",
    family: "american",
    color: "color",
    font: "actionman",
    llmPrompt: "american comic",
    imagePrompt: (prompt: string) => [
      `american comic about ${prompt}`,
      "single panel",
      "american comic",
      "comicbook style",
      "1960",
      "60s",
      "color comicbook",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "action",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  */

  
  flying_saucer: {
    label: "Flying saucer",
    family: "european",
    color: "color",
    font: "actionman",
    llmPrompt: "new pulp science fiction",
    imagePrompt: (prompt: string) => [
      `color comic panel`,
      `${prompt}`,
      "40s",
      "1940",
      "vintage comic",
      "pulp magazine",
      "pulp science fiction",
      "vintage science fiction",
      "single panel",
      "comic album"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
 
  humanoid: {
    label: "Humanoid",
    family: "european",
    color: "color",
    font: "actionman",
    llmPrompt: "new album by moebius",
    imagePrompt: (prompt: string) => [
      `color comic panel`,
      `${prompt}`,
      "style of Moebius",
      "by Moebius",
      "french comic panel",
      "franco-belgian style",
      "bande dessinée",
      "single panel",
      "comic album"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  milou: {
    label: "Haddock",
    family: "european",
    color: "color",
    font: "actionman",
    llmPrompt: "new album by Hergé",
    imagePrompt: (prompt: string) => [
      `color comic panel`,
      `${prompt}`,
      "style of Hergé",
      "by Hergé",
      "tintin style",
      "french comic panel",
      "franco-belgian style",
      "color panel",
      "bande dessinée",
      "single panel",
      "comic album"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  },
  armorican: {
    label: "Armorican",
    family: "european",
    color: "monochrome",
    font: "actionman",
    llmPrompt: "new color album",
    imagePrompt: (prompt: string) => [
      `color comic panel`,
      `about ${prompt}`,
      "romans",
      "gauls",
      "french comic panel",
      "franco-belgian style",
      "bande dessinée",
      "single panel",
      "comical",
      "comic album",
      "color drawing"
    ],
    negativePrompt: () => [
      "manga",
      "anime",
      "american comic",
      "grayscale",
      "monochrome",
      "photo",
      "painting",
      "3D render"
    ],
  }
}

export type PresetName = keyof typeof presets

export const defaultPreset: PresetName = "japanese_manga"

export const getPreset = (preset?: PresetName): Preset => presets[preset || defaultPreset] || presets[defaultPreset]