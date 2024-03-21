/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                blackM: '#191919',
                greyM: '#D9D9D9',
                whiteM: '#ffffff',
                green_radial: 'rgb(0,26,14,74)',
                green_dark: '#001a0e',
                sceleton_main: '#f3f4f6',
                sceleton_border: '#e5e7eb',
                sceleton_items: '#d1d5db',
                border_transp: 'rgba(43, 43, 43, 0.568)',
                transp: '#33333331'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(circle, rgba(0,80,34,1) 0%, rgba(0,54,31,1) 100%)',
                sky: "url('/sky.jpg')"
            }
        }
    },
    plugins: []
};

