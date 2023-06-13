/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "newBlue": "#3b5998",
        "bgColor": "#ebf2fc",
        "textColor": "#9E9E9E"
      },
      
    },
  },
  plugins: [],
}

