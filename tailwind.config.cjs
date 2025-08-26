module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        popxPurple: "#6B21FF",
        popxLight: "#E9D8FF",
        fieldBg: "#FFFFFF",
        pageBg: "#F7F8F9",
        subtle: "#9CA3AF"
      }
    }
  },
  plugins: []
};
