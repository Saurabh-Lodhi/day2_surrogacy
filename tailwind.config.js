// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#128ef3', // Primary color
//         secondary: '#75c6fc', // Secondary color
//         background: '#f7f7f7', // Background color
//       },
//     },
//     screens: {
//       xs: '331px',
//       sm: '480px',
//       md: '768px',
//       lg: '1124px',
//       xl: '1440px',
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    extend: {
      colors: {
        primary: "#1A3D7C",        // Deep medical blue
        secondary: "#4682B4",      // Soft fertility blue
        accent: "#FF7F50",         // Clinic orange
        accentLight: "#FF986A",    // Light orange for gradients
        dark: "#1A1A1A",           // Deep black
        light: "#F8FBFF",          // Clean white-blue
        softGray: "#E8EEF6",       // Section backgrounds
      },

      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        subtitle: ["Cormorant Garamond", "serif"],
        body: ["Lato", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.08)",
        medium: "0 6px 20px rgba(0,0,0,0.12)",
        heavy: "0 12px 30px rgba(0,0,0,0.18)",
      },

      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #1A3D7C 0%, #4682B4 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #FF7F50 0%, #FF986A 100%)",
      },

      screens: {
        xs: "380px",
        sm: "480px",
        md: "768px",
        lg: "1124px",
        xl: "1440px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
