import { Noto_Serif_JP, Roboto, Yusei_Magic } from "next/font/google";

export const _NotoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],  
  weight: ["700"],
  display: "swap",
});

export const _Roboto = Roboto({
  subsets: ["latin"], 
  weight: ["700"],
  style: "italic",
  display: "swap",
});

export const _YuseiMagic = Yusei_Magic({
  subsets: ["latin"], 
  weight: ["400"],
  style: "normal",
  display: "swap",
});