/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "jade": "#00A67E",
        "bottleGreen": "#0B483A",
        "gravel": "#544F56",
        "silver": "#CCCCCC",
        "spectra": "#2F6457",
        "brightGray": "#35384e", 
      }
    },
  },
  plugins: [],
}
