import auth from "@controleonline/ui-login/src/store/modules/auth";
import users from "@controleonline/ui-users/src/store/users";
import address from "@controleonline/ui-people/src/store/address";
import documents from "@controleonline/ui-people/src/store/documents";
import phones from "@controleonline/ui-people/src/store/phones";
import emails from "@controleonline/ui-people/src/store/emails";
import people from "@controleonline/ui-people/src/store/people";
import theme from "@controleonline/ui-layout/src/store/theme";
import orders from "@controleonline/ui-orders/src/store/orders";
import order_products from "@controleonline/ui-orders/src/store/order_products";
import expanded_order_products from "@controleonline/ui-orders/src/store/expanded_order_products";
import categories from "@controleonline/ui-common/src/store/categories";
import status from "@controleonline/ui-common/src/store/status";
import products from "@controleonline/ui-products/src/store/products";
import product_unit from "@controleonline/ui-products/src/store/products/product_unit";
import product_category from "@controleonline/ui-products/src/store/products/product_category";
import product_group from "@controleonline/ui-products/src/store/products/product_group";
import product_group_product from "@controleonline/ui-products/src/store/products/product_group_product";
import product_group_feedstock from "@controleonline/ui-products/src/store/products/product_group_feedstock";
import city from "@controleonline/ui-common/src/store/address/city";
import language from "@controleonline/ui-translate/src/store/language";
import translate from "@controleonline/ui-translate/src/store/translate";
import menus from "@controleonline/ui-config/src/store/menus";
import routes from "@controleonline/ui-config/src/store/routes";
import modules from "@controleonline/ui-config/src/store/modules";
import configs from "@controleonline/ui-config/src/store/configs";
import file from "@controleonline/ui-common/src/store/file";
import acl from "@controleonline/ui-common/src/store/acl";
import cart from "@controleonline/ui-orders/src/store/cart";

import { store } from "quasar/wrappers";
import { createStore } from "vuex";
export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      modules,
      acl,
      cart,
      routes,
      menus,
      status,
      auth,
      categories,
      users,
      products,
      product_unit,
      product_group,
      product_group_product,
      product_group_feedstock,
      product_category,
      expanded_order_products,
      city,
      order_products,
      orders,
      theme,
      translate,
      language,
      configs,
      file,
      address,
      documents,
      phones,
      emails,
      people,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
