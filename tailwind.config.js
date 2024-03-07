/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit"],
      },
    },
  },
  //   plugins: [require("flowbite/plugin")],
  plugins: [],
};
