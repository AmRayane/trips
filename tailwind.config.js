/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // ajuste selon ton arborescence
  theme: {
    extend: {
      fontFamily: {
        figtree: ['"Figtree"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        dark: {
          100: "var(--color-dark-100)",
          200: "var(--color-dark-200)",
          300: "var(--color-dark-300)",
          400: "var(--color-dark-400)",
        },
        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          500: "var(--color-gray-500)",
          700: "var(--color-gray-700)",
        },
        primary: {
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          500: "var(--color-primary-500)",
        },
        light: {
          100: "var(--color-light-100)",
          200: "var(--color-light-200)",
          300: "var(--color-light-300)",
          400: "var(--color-light-400)",
          500: "var(--color-light-500)",
        },
        success: {
          50: "var(--color-success-50)",
          500: "var(--color-success-500)",
          700: "var(--color-success-700)",
        },
        pink: {
          50: "var(--color-pink-50)",
          500: "var(--color-pink-500)",
        },
        navy: {
          50: "var(--color-navy-50)",
          500: "var(--color-navy-500)",
        },
        red: {
          50: "var(--color-red-50)",
          100: "var(--color-red-100)",
          500: "var(--color-red-500)",
        },
      },
      borderRadius: {
        20: "var(--radius-20)",
      },
      boxShadow: {
        100: "var(--shadow-100)",
        200: "var(--shadow-200)",
        300: "var(--shadow-300)",
        400: "var(--shadow-400)",
        500: "var(--shadow-500)",
      },
      backgroundImage: {
        auth: "var(--background-image-auth)",
        hero: "var(--background-image-hero)",
        "card-1": "var(--background-image-card-1)",
        "card-2": "var(--background-image-card-2)",
        "card-3": "var(--background-image-card-3)",
        "card-4": "var(--background-image-card-4)",
        "card-5": "var(--background-image-card-5)",
        "card-6": "var(--background-image-card-6)",
        linear100: "var(--background-image-linear100)",
        linear200: "var(--background-image-linear200)",
      },
      spacing: {
        mobile: "30px",
        tablet: "80px",
        desktop: "170px",
        "small-y": "30px",
        "large-y": "40px",
      },
    },
  },
  plugins: [],
};
