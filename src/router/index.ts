import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultView from "../views/DefaultView.vue";
import EmptyView from "../views/EmptyView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "empty",
      component: EmptyView,
      children: [
        {
          path: "default",
          name: "default",
          component: DefaultView,
          children: [
            {
              path: "",
              name: "home",
              component: HomeView,
            },
            {
              path: "about",
              name: "about",
              component: () => import("../views/AboutView.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
