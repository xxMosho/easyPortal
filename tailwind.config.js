/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#8F00FF",
                 
          "secondary": "#EEEEEE",
                 
          "accent": "#ED2B2A",
                 
          "neutral": "#1B1D1D",
                 
          "base-100": "#000000",
                 
          "info": "#2563EB",
          "success": "#16A34A",
                 
          "warning": "#D97706",
                 
          "error": "#DC2626",
        },
      },
    ],
  },
  plugins: [
    
    require("daisyui")
  ],
  
}
