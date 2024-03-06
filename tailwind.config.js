/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "purpleo": '#9747FF',
    },
    screens: {
      'xs': { 'max': '375px' }, // Özel kırılma noktası tanımı
      'min-xs': { 'min': '375px' }, // Özel kırılma noktası tanımı
      'menu-breakmax': { 'max': '960px' }, // Özel kırılma noktası tanımı
      'menu-breakmin': { 'min': '960px' }, // Özel kırılma noktası tanımı
      'padding-breakmax': { 'max': '600px' }, // Özel kırılma noktası tanımı
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}