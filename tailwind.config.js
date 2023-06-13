module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#f3f3f3;',
      },
      dropShadow: {
        '4xl': '2px 3px 4px #4f46e5',
        '5xl': '0 10px 8px rgb(0 0 0 / 71%)',
        '6xl': '-1px 2px 8px rgb(0 0 0 / 40%)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
