import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#58BF73",
        borderColor: "#7C7C7C",
        
      },
    },
  },
  plugins: [],
});
