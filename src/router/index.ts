import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/empty/default/HomeView.vue";
import DefaultView from "../views/empty/DefaultView.vue";
import EmptyView from "../views/EmptyView.vue";
import TestView from "../views/empty/TestView.vue";

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
              component: () => import("../views/empty/default/AboutView.vue"),
            },
          ],
        },
        {
          path: "test",
          name: "test",
          component: TestView
        }
      ],
    },
  ],
});

export default router;
