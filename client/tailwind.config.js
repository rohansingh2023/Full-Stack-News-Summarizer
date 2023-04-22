/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Greatvibes: ["Great Vibes", "cursive"],
        BraahOne: ["'Braah One'", "cursive"],
        Rampart: ["Rampart One", "cursive"],
       },
      backgroundImage: {
        'bgImg': "url('https://img.freepik.com/free-vector/global-technology-earth-news-bulletin-background_1017-33687.jpg')",
        'bgImg2': "url('https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?cs=srgb&dl=pexels-cottonbro-studio-3944454.jpg&fm=jpg')",
        'bgImg3': "url('https://img.freepik.com/premium-photo/flat-lay-desk-concept-with-copy-space_23-2148459790.jpg')",
        'bgImg4': "url('https://cdn.create.vista.com/api/media/small/233899044/stock-photo-laptop-stack-newspapers-wooden-tabletop')",
      },
    },
  },
  plugins: [],
}

