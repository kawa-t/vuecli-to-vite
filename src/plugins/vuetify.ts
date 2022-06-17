import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#f85863",
        secondary: "#5ecbcc",
        accent: "#3072e2",
        error: "#b71c1c",
      },
    },
  },
});
