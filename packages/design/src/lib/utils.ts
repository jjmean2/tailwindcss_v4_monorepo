import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { withDesign } from "../config/tailwind-merge-plugin";

const twMerge = extendTailwindMerge(withDesign);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

cn("text-h1 leading-3 font-thin"); //?
cn("font-thin leading-3 text-h1"); //?

cn("typo-h1 leading-3 font-thin"); //?
cn("font-thin leading-3 typo-h1"); //?
