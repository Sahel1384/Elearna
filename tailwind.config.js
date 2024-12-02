/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-1": "#0f252a",
        "main-color-2": "#ffb606",
        "main-color-3": "#eff6f8",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/Home1/hero-bg.avif')",
        aboutHero:
          "url('/src/assets/images/Home1/66d96859eeb82869ca4d5d3f_About One Hero.webp')",
        lap: "url('./assets/images/Home1/66c6fb8bf82fe9cef5f78d85_Woman Using Laptop.webp')",
        courseHero:
          "url('./assets/images/Home1/66eabf15381ba7373e406342_Course One Hero Backgorund.webp')",
        faqHero:
          "url('./assets/images/Home1/66e034b57b97c18456fc8163_FAQ Hero.webp')",
        footer2:
          "url('./assets/images/Home1/66d57c66a83a752540483c24_Noisy Background.webp')",
        event:
          "url('./assets/images/Home1/66e3d9b9b8346ed0ecee24a5_Events Banner.webp')",
        career:
          "url('./assets/images/Home1/66e11aafe5ff2115c3d5d36c_Pricing One Hero.webp')",
        blog: "url('./assets/images/Home1/66eb9e1184c0c12d2244968d_Course Small Image-9-p-800.webp')",
        contact:
          "url('./assets/images/Home1/66e93b734e839a98823ff445_Blog Small Thumbnail-3.webp')",
        login:
          "url('./assets/images/Home1/66e17d14fc5b26abda6ac749_Membership Background.webp')",
      },

      boxShadow: {
        boxShadow: "0 0 40px #bde1e8",
        cardShadow: "0 0 5px #f2f0f0",
      },
    },
  },
  plugins: [],
};
