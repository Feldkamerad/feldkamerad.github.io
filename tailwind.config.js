/** @type {import('tailwindcss').Config} */
export default {
  // 'class' = Dark Mode wird über die CSS-Klasse "dark" am <html> gesteuert
  // (manuell umschaltbar), nicht nur über die System-Einstellung.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Grüne Markenfarbe – hoher Kontrast für die Nutzung im Freien
        garten: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
