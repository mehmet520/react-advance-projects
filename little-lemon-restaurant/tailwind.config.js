import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [forms, aspectRatio],
  darkMode: 'class',
}
