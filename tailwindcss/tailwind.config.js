/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["../*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        "vd": "hsl(238, 29%, 16%)",
        "sred": "hsl(14, 88%, 65 %)",
        "svilt": "hsl(273, 75%, 66%)",
        "sblu": "hsl(240, 73%, 65%)",
        "vdgblu": "hsl(237, 12%, 33%)",
        "dgblu": "hsl(240, 6%, 50%)",
        "lgblue": "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        "kumbh": "Kumbh Sans, sans-serif",
      }
    },
  },
  plugins: [],
}
