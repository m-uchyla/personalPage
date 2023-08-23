/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tprimary: "#29407D",
        tblack: "#080D19",
        twhite:"#F7F8FA",
        tsecondary:"#7782A1",
        tgray:"#DFE3EC",
      },
    },
    screens: {
      xxs: "330px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

