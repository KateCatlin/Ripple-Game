import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shuffles an array using Fisher-Yates algorithm.
 * Returns a new array with shuffled elements and a mapping of new index → original index.
 */
export function shuffleWithMapping<T>(array: T[]): { shuffled: T[]; indexMap: number[] } {
  const indices = array.map((_, i) => i);
  
  // Fisher-Yates shuffle on indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  return {
    shuffled: indices.map(i => array[i]),
    indexMap: indices, // indexMap[newIndex] = originalIndex
  };
}
