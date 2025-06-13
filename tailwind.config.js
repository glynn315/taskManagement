/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Montserrat', 'sans-serif'],
        'stylish': ['WDXL Lubrifont SC', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
