module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "inception-green": "#C56348",
        "inception-light-green": "#EBD5CA",
        "inception-off-white": "#f4f2ea",
        "inception-gray": "#A8A2A2",
        "inception-red": "rgb(192, 53, 64)",
        "inception-brown": "#402d28",
        "inception-light-brown": "#bb9772",
        "twitter-blue": "#1DA1F2",
        "discord-blue": "#5865F2",
        "inception-blue": "#7eaeff",
        "inception-taro": "#825F6D",
      },
      fontFamily: {
        inception: ['"INCEPTION"', "cursive"],
        arcane: ['"ARCANE"', "cursive"],
        "inception-ink": ['"INCEPTION-INK"', "cursive"],
        "inception-ink-italic": ['"INCEPTION-INK-ITALIC"', "cursive"],
      },
      backgroundImage: {
        parchment: "url('/images/parchment.png')",
        "parchment-plain": "url('/images/parchment_plain.png')",
        "smoking-hippo": "url('/images/smoking_hippo.png')",
        "cyber-hippo": "url('/images/cyber_hippo.jpg')",
        "bp-center": "url('/images/bp_center.png')",
        "bp-center-solid": "url('/images/bp_center_solid.png')",
        "bp-tl": "url('/images/bp_tl.png')",
        "bp-tr": "url('/images/bp_tr.png')",
        "bp-bl": "url('/images/bp_bl.png')",
        "bp-br": "url('/images/bp_br.png')",
        "bp-left": "url('/images/bp_left.png')",
        "bp-left-solid": "url('/images/bp_left_solid.png')",
        "bp-right": "url('/images/bp_right.png')",
        skater: "url('/images/skater.png')",
        airdrop: "url('/images/airdrop.png')",
        merch: "url('/images/merch.png')",
        pole: "url('/images/pole.png')",
        wanted: "url('/images/wanted.png')",
      },
      animation: {
        fadeIn: "fadeIn 0.5s",
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
