/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "from": { width: "0" },
          "to": { width: "100%" }
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "#34d399" } // green-400
        },
        // Add this new keyframe
        fadeIn: {
          "from": { opacity: "0" },
          "to": { opacity: "1" }
        }
      },
      animation: {
        blink: "blink .75s step-end infinite",
      }
    },
  },
  plugins: [],
}