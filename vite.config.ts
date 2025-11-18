// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: '@',
//         replacement: path.resolve(__dirname, './src'),
//       },
//     ],
//   },
//   base: '/Hospital-Website',
// });

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082', // Deep Violet
        secondary: '#4682B4', // Soft Blue
        accent: '#FF7F50', // Sunset Orange
        dark: '#1A1A1A', // Graphite Black
        light: '#F3F3F3', // Light Gray
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        subtitle: ['Cormorant Garamond', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-embryon': 'linear-gradient(135deg, #4B0082 0%, #4682B4 100%)',
      },
    },
  },
  plugins: [],
}