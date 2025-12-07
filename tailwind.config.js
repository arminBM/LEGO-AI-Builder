/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        legoYellow: '#ffcf00',
        legoRed: '#da291c',
        legoBlue: '#0055bf',
        legoBlack: '#000',
        legoWhite: '#fff',
        bgSoft: '#f5fbff',
      },
      borderRadius: {
        card: '18px',
      },
    },
  },
  plugins: [],
}
