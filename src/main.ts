import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/styles/global.css";
import "@/plugin/registerSvgIcon.ts";
import router from "@/router/index.ts";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");
