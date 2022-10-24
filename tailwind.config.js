/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    // extend: {
    //   animation: {
    //     pulse: "pulse 0.4s cubic-bezier(1, 4, 0.1, 1) infinite",
    //   },
    // },
  },
  plugins: [],
};
