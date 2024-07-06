/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-pink": "#EB4B6E",
        "disable-gray": "#E1E1E1",
        "accent-green": "#73B9AF",
        "shaded-gray": "#F0F0F0",
      },
      borderRadius: {
        "20px": "20px",
      },
      maxWidth: {
        "420px": "420px",
        "360px": "360px",
      },
      minWidth: {
        "350px": "350px",
      },
      inset: {
        "-15px": "-15px",
      },
    },
  },
  plugins: [],
};
