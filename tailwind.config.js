/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: '#02e38b',
        grisAzulado: '#1b222c',
        grisAzuladoBG: '#12151c',
        grisAzuladoIcons: '#2a303d',
      },
      fontFamily: {
        sans: [
          'Inter var, sans-serif',
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32',
          },
        ],
      },
    },
  },
  plugins: [],
};
