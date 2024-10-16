import imgage from "./src/assets/HeroAssets/MobileImg.png";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('./src/assets/HeroAssets/MobileImg.png')",
        "hero-tablet": "url('./src/assets/HeroAssets/TabImg.png')",
        "hero-desktop": "url('./src/assets/HeroAssets/HeroImage.png')",
      },

      screens: {
        smallSm: { raw: "(min-width: 320px) and (min-height: 1080px)" },
        iPadMini: { raw: "(min-width: 768px) and (max-height: 1024px)" },
        customMd: { raw: "(min-width: 1024px) and (min-height: 1366px)" },
        "3xl": { raw: "(min-width: 2220px) and (min-height: 1080px)" },
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Flowbite plugin to be added here
  ],
};