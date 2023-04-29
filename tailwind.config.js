/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "ui-sans-serif", "ui-system"],
      roboto: ["Roboto", "ui-sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F4C237",
        "primary-sec": "#FAE3A4",
        "primary-sec-2": "#FEF7E5",
        secondary: "#474747",
        blue: "#045285",
        black: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
