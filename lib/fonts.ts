import { Major_Mono_Display, Space_Mono } from "next/font/google"

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: "400",
  display: "swap",
  // preload: false
})

export const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  variable: "--font-major-mono",
  weight: "400",
  display: "swap",
  // preload: false
})
