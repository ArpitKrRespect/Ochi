// tailwind.config.js

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      founders: ['Founders Grotesk', 'sans-serif'], // Founders Grotesk font
      neue: ['Neue Montreal', 'sans-serif'],
      icomoon:['Icomoon','sans-serif'],
    },
    fontWeight: {
      semibold: 600, // This is for 'font-semibold'
    },
  },
};
export const plugins = [];
