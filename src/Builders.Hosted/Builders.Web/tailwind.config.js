/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      cursor: { 
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
    },
  },
  plugins: [],
}

