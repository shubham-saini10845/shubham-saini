import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TOAST_STYLE_CONFIG = { backgroundColor: "darkred", color: "#fff", border: "1px solid #b30000" }
export const TOAST_STYLE_CONFIG_INFO = { backgroundColor: "darkblue", color: "#fff", border: "1px solid #001aff" }