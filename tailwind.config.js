/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "peach":"#E9D1B7",
            "grass":"#8E7F4A"
        },
        fontFamily: {
            sans: ['var(--font-poiretone)']
        }
    },
  },
  plugins: [],
}
