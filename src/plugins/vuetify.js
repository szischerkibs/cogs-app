import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#ff9800",
        secondary: "#00bcd4",
        accent: "#f44336",
        error: "#ffeb3b",
        warning: "#ffc107",
        info: "#3f51b5",
        success: "#4caf50",
      },
    },
  },
});
