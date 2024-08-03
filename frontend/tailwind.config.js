/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      primary_bg: "var(--primary_bg)",
      secondary_bg: "var(--secondary_bg)",
      accent_bg: "var(--accent_bg)",
      text_color: "var(--text_color)",
      secondary_text_color: "var(--secondary_text_color)",
      muted_text_color: "var(--muted_text_color)",
      error_color: "var(--error_color)",
      success_color: "var(--success_color)",
      warning_color: "var(--warning_color)",
      info_color: "var(--info_color)",
    },
    fontFamily: {
      gilroyLight: ["Gilroy Light"],
      gilroyRegular: ["Gilroy Regular"],
      gilroyMedium: ["Gilroy Medium"],
      gilroySemiBold: ["Gilroy SemiBold"],
      gilroyBold: ["Gilroy Bold"],
      gilroyBlack: ["Gilroy Black"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1620px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
