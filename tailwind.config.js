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
        custom: {
          primary: {
            lightCyan: "hsl(193, 38%, 86%)",
            neonGreen: "hsl(150, 100%, 66%)"
          },
          neutral: {
            grayishBlue: "hsl(217, 19%, 38%)",
            darkGrayishBlue: "hsl(217, 19%, 24%)",
            darkBlue: "hsl(218, 23%, 16%)"
          }
        }
      },
      boxShadow: {
        dice: "0px 0px 32px 8px rgba(82,255,168,1)"
      }
    },
  },
  plugins: [],
}
