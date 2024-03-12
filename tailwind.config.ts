/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackM: '#191919',
        greyM: "#D9D9D9",
        whiteM: "#ffffff",
        green_radial: "hsl(145deg, 100%, 16%)", 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(0,80,34,1) 0%, rgba(0,54,31,1) 100%)',
      },
    },
  },
  plugins: [],
}
