/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        normal: '#A8A878',
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        ice: '#98D8D8',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        flying: '#A890F0',
        psychic: '#F85888',
        bug: '#A8B820',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#F0B6BC',
      },
    },
  },
  plugins: [],
};
