/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mid': '900px',
        'mid-2': '920px', // Custom breakpoint
        'respon': '1200px',
      },


      
      borderRadius: {
        'lr': '200px',  // Custom radius in pixels
        'hrd': '50px',    // Another custom radius
      },
    },
  },
  plugins: [],
}
