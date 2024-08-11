/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      // Background Colors
      main_bg_1: "var(--main_bg_1)",
      main_bg_2: "var(--main_bg_2)",
      main_bg_3: "var(--main_bg_3)",
      main_bg_4: "var(--main_bg_4)",
      main_bg_5: "var(--main_bg_5)",

      // Page Colors
      page_color_1: "var(--page_color_1)",
      page_color_2: "var(--page_color_2)",
      page_color_3: "var(--page_color_3)",
      page_color_4: "var(--page_color_4)",
      page_color_5: "var(--page_color_5)",

      // Input Colors
      input_color_1: "var(--input_color_1)",
      input_color_2: "var(--input_color_2)",
      input_color_3: "var(--input_color_3)",
      input_color_4: "var(--input_color_4)",
      input_color_5: "var(--input_color_5)",

      // Line/Border Colors
      line_color_1: "var(--line_color_1)",
      line_color_2: "var(--line_color_2)",
      line_color_3: "var(--line_color_3)",
      line_color_4: "var(--line_color_4)",
      line_color_5: "var(--line_color_5)",

      // Primary Background Colors
      primary_bg_1: "var(--primary_bg_1)",
      primary_bg_2: "var(--primary_bg_2)",
      primary_bg_3: "var(--primary_bg_3)",
      primary_bg_4: "var(--primary_bg_4)",
      primary_bg_5: "var(--primary_bg_5)",

      // Secondary Background Colors
      secondary_bg_1: "var(--secondary_bg_1)",
      secondary_bg_2: "var(--secondary_bg_2)",
      secondary_bg_3: "var(--secondary_bg_3)",
      secondary_bg_4: "var(--secondary_bg_4)",
      secondary_bg_5: "var(--secondary_bg_5)",

      // Accent Background Colors
      accent_bg_1: "var(--accent_bg_1)",
      accent_bg_2: "var(--accent_bg_2)",
      accent_bg_3: "var(--accent_bg_3)",
      accent_bg_4: "var(--accent_bg_4)",
      accent_bg_5: "var(--accent_bg_5)",

      // Text Colors
      text_color_1: "var(--text_color_1)",
      text_color_2: "var(--text_color_2)",
      text_color_3: "var(--text_color_3)",
      text_color_4: "var(--text_color_4)",
      text_color_5: "var(--text_color_5)",

      // Secondary Text Colors
      secondary_text_color_1: "var(--secondary_text_color_1)",
      secondary_text_color_2: "var(--secondary_text_color_2)",
      secondary_text_color_3: "var(--secondary_text_color_3)",
      secondary_text_color_4: "var(--secondary_text_color_4)",
      secondary_text_color_5: "var(--secondary_text_color_5)",

      // Muted Text Colors
      muted_text_color_1: "var(--muted_text_color_1)",
      muted_text_color_2: "var(--muted_text_color_2)",
      muted_text_color_3: "var(--muted_text_color_3)",
      muted_text_color_4: "var(--muted_text_color_4)",
      muted_text_color_5: "var(--muted_text_color_5)",

      // Error Colors
      error_color_1: "var(--error_color_1)",
      error_color_2: "var(--error_color_2)",
      error_color_3: "var(--error_color_3)",
      error_color_4: "var(--error_color_4)",
      error_color_5: "var(--error_color_5)",

      // Success Colors
      success_color_1: "var(--success_color_1)",
      success_color_2: "var(--success_color_2)",
      success_color_3: "var(--success_color_3)",
      success_color_4: "var(--success_color_4)",
      success_color_5: "var(--success_color_5)",

      // Warning Colors
      warning_color_1: "var(--warning_color_1)",
      warning_color_2: "var(--warning_color_2)",
      warning_color_3: "var(--warning_color_3)",
      warning_color_4: "var(--warning_color_4)",
      warning_color_5: "var(--warning_color_5)",

      // Info Colors
      info_color_1: "var(--info_color_1)",
      info_color_2: "var(--info_color_2)",
      info_color_3: "var(--info_color_3)",
      info_color_4: "var(--info_color_4)",
      info_color_5: "var(--info_color_5)",
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
