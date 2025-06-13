import { createMemoryHistory, createRouter } from "vue-router";

import Index from "./pages/index.vue";
import Customers from "./pages/customers.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/customers", component: Customers },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
