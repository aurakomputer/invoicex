import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import { Quasar, Dialog, Notify } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-mdi-v7";
import "quasar/src/css/index.sass";
import "virtual:uno.css";

const app = createApp(App);
app.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
  },
  iconSet: quasarIconSet,
});
app.use(router);

app.mount("#app");
