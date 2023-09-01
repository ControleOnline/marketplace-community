import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";
import * as Shop from "@controleonline/quasar-shop-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Queues.routes,
  ...Shop.routes,
  {
    path: "/",
    component: () => import("@controleonline/quasar-layout-ui/src/layouts/ShopLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-shop-ui/src/pages/Categories.vue"),
      },
    ],
  },
  /*
  {
    path: "*",
    redirect: "/",
  },
  */
];

export default routes;
