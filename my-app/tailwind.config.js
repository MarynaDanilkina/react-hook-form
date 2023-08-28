/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black_1: "#201F1F",
      black_2: "#343333",
      grey_1: "#CCC6C6",
      grey_2: "#C1BCBC",
      grey_3: "#8D8D8D",
      white: "#FFFFFF",
      error_1: "#862626",
      error_2: "#922525",
      green: "#6FA077",
    },
    spacing: {
      "130px": "130px",
      "110px": "110px",
      "55px": "55px",
      "52px": "52px",
      "50px": "50px",
      "48px": "48px",
      "30px": "30px",
      "27px": "27px",
      "20px": "20px",
      "17px": "17px",
      "12px": "12px",
    },
    gap: {
      "50px": "50px",
      "30px": "30px",
      "10px": "10px",
      "5px": "5px",
    },
    fontSize: {
      48: "48px",
      14: "14px",
    },
    borderRadius: {
      circle: "50px",
      "16px": "16px",
    },
    borderWidth: {
      1: "1px",
    },
    gridTemplateColumns: {
      "1fr": "repeat(1, minmax(0, 1fr))",
      "2fr": "repeat(2, minmax(0, 1fr))",
      "3fr": "repeat(3, minmax(0, 1fr))",
    },
    screens: {
      sm: "768px",
      xl: "1280px",
    },
    plugins: [],
  }
}
