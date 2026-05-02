/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // base surfaces
        bg: "#0f0f14",          // main background
        surface: "#1a1a23",     // cards / nodes
        'border-color': "#2a2a35",

        // text
        primary: "#a78bfa",     // violet-400
        secondary: "#9ca3af",   // gray-400
        muted: "#6b7280",

        // accents
        accent: "#8b5cf6",      // violet-500
        'accent-hover': "#7c3aed",

        // states
        success: "#22c55e",
        danger: "#ef4444"
      },

      boxShadow: {
        node: "0 4px 20px rgba(0,0,0,0.4)",
      },

      borderRadius: {
        xl: "12px",
      }
    },
  },
  plugins: [],
}