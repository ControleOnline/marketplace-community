import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Shop from "@controleonline/quasar-shop-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Shop.routes,

  {
    path: "/",
    component: () => import("layouts/ShopLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-shop-ui/src/pages/Home.vue"),
      },
    ],
  },

  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
