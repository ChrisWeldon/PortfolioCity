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
            "peach": "#E9D1B7",
            "morningsky": "#dce6ff",
            "morningorange": "#ffc87e",
            "morningsun": "#fffddc",
            "grass": "#8E7F4A",
            "blush": "#D65780",
            "giantsorange": "#FF521B",
            "cordovan": "#8C4843",
            "periwinkle":"#DAC4F7"
        },
        fontFamily: {
            sans: ['var(--font-poiretone)']
        }
    },
  },
  plugins: [],
}
