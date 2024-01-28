/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Hind-Vadodara": ['Hind-Vadodara'],
        "Playfair-Display": ['Playfair-Display']
      },
      colors : {
        "biru" : '#331B3B',
        "kuning" : '#FDC221',
        "biru-muda" : '#ECF7FF',
        "abu" : '#331B3BA8',
        "pink" : '#FFDED44D'
      }
    },
  },
  plugins: [],
}

