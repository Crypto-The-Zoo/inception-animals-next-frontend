module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "inception-green": "#008056",
        "inception-off-white": "#fff9ef",
        "inception-gray": "#A8A2A2",
        "inception-red": "rgb(192, 53, 64)",
        "inception-brown": "#402d28",
        "inception-light-brown": "#bb9772",
      },
      fontFamily: {
        inception: ['"INCEPTION"', "cursive"],
        arcane: ['"ARCANE"', "cursive"],
      },
      backgroundImage: {
        parchment: "url('/images/parchment.png')",
        "parchment-plain": "url('/images/parchment_plain.png')",
        "smoking-hippo": "url('/images/smoking_hippo.png')",
        "cyber-hippo": "url('/images/cyber_hippo.jpg')",
      },
      animation: {
        fadeIn: "fadeIn 2s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
