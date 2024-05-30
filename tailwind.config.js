/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#FFC8D7",
        primary: "#001122",
      },
      fontFamily: {
        serif: ["Cactus Classical Serif"]
      }
    },
  },
  plugins: [],
};
