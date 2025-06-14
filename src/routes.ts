import { createMemoryHistory, createRouter } from "vue-router";

import Dashboard from "./pages/dashboard.vue";
import Index from "./pages/index.vue";
let routes = [
  { name: "dashboard", path: "/", component: Dashboard },
  { name: "index", path: `/index/:schema`, component: Index, props: true },
];

console.log(routes);
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
