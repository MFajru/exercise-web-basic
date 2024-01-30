/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "4%",
        lg: "8%",
      },
    },
    extend: {
      colors: {
        "primary-color": "#0042C8",
        "primary-text-color": "#152C5B",
        "secondary-text-color": "#717171",
        "custom-gray": "#E5E5E5",
        "custom-red": "#EB5757",
      },
    },
  },
  plugins: [],
};
