/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        
      }
      ,
      colors: {
        primary: "#17FCFF",
        secondary: "#121314",
        tertiary: "#1985A1",
        quaternary: "#46494C",
        quinary:"#C5C3C6"
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "inferior3d": "inset 0 -10px 10px -7px ;",
        "sup-out-1":" inset 0px 1px 3px 0px ;",
        "navItems": "0px 10px 50px ;"
      },
      animation: {
        indicator: "indicator 4s linear infinite",
        hide: "hide 2s ease 4s 1",
        moveEyes: "moveEyes 2s ease-in-out infinite",
        multicolor: "multicolor 5s ease-in-out infinite",
        multicolor2: "multicolor 5s ease-in-out 1s infinite",
      },
      keyframes: {
        indicator: {
          "25%":{left :'0', animationTimingFunction: 'ease'},
          "50%": { left :'50%', transform: 'translateX(-50%)', animationTimingFunction: 'ease-in-out'},
          "75%":{left :'100%', transform: 'translateX(-50%)', animationTimingFunction: 'ease'},
          "100%": {left :'50%', transform: 'translateX(-50%)', animationTimingFunction: 'ease-in-out'},
        },
        hide: {
          "0%": { opacity: 1 },
          "80%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
        moveEyes: {
          "0%, 100%": { transform: "translateX(0.15rem)" },
          "50%": { transform: "translateX(0) translateY(0.25rem)" },
        },
        multicolor: {
          
          "25%": { fill:  '#1985A1'},
          "50%": { fill: '#17FCFF' },
          "75%": { fill: '#1985A1' },
          "100%": { fill: '#17FCFF' },
        },
      }
    },
    plugins: [],
  },
};
