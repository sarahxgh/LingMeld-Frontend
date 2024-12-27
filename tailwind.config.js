/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/TSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"], 
      },
    },
  },
  plugins: [],
}

