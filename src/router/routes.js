import * as Login from "@controleonline/ui-login/src/vue/router/routes";
import * as Products from "@controleonline/ui-products/src/vue/router/routes";
import * as Users from "@controleonline/ui-users/src/vue/router/routes";
import * as Orders from "@controleonline/ui-orders/src/vue/router/routes";
import * as Translate from "@controleonline/ui-translate/src/vue/router/routes";
import * as Shop from "@controleonline/ui-shop/src/vue/router/routes";

const routes = [
  ...Login.routes,
  ...Products.routes,
  ...Users.routes,
  ...Orders.routes,
  ...Translate.routes,
  ...Shop.routes,
  {
    path: "/",
    component: () =>
      import("@controleonline/ui-layout/src/vue/layouts/ShopLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "",
        meta: { isPublic: true },
        component: () => import("@controleonline/ui-shop/src/vue/pages/Categories.vue"),
      },
    ],
  },
];

export default routes;
