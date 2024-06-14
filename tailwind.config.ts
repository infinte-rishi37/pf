import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "336px",
        xsm: "420px",
        lg: "1024px",
      },

      colors: {
        cblue: {
          DEFAULT: "#0C2695",
          50: "#4C6BF1;",
          100: "#0C2695",
        },
        black: "#000",
        heading: "#0C2695",
        sub_heading: "#4C6BF1",
        gray_color: "#6D6D6D",
        footer_bg: "#3C5ADA",
        lightText: "#0c2595d0",
        lightText2: "#4c6af1b3",
        timetable_color: "#FAFAFA",
        result_name: "#551A8B",
        pall: {
          DD : "#0F044C",
          Dd : "#141E61",
          dd : "#577B8D",
          dl : "#787A91",
          ll : "#EEEEEE"
        }
      },

      boxShadow:{
        box_shadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        club_box:"0px 0px 8px 0px rgba(0, 0, 0, 0.25)",
        result_card:"0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);",
        faculty_card:"0.1px 0.1px 3px rgba(0, 0,0,0.2);",
        syllabus_card:"0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);",
        magazine_card:"1px 1px 5px #6D6D6D;",
        header_shadow:" 0px 5px 10px rgba(0, 0, 0, 0.4) ",
      },
      fontSize: {
        h1: "2rem",
        h2: "1.5rem",
        h3: "1.25rem",
        text: "1rem",
      },

      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
    }
  },
  plugins: [],
};
export default config;
