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
      },
      fontFamily: {
        inception: ['"INCEPTION"', "cursive"],
        arcane: ['"ARCANE"', "cursive"],
      },
      backgroundImage: {
        parchment: "url('/images/parchment.png')",
        "parchment-plain": "url('/images/parchment_plain.png')",
        "smoking-hippo": "url('/images/smoking_hippo.png')",
        "cyber-hippo": "url('/images/hippo_7.jpg')",
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
