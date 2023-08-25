//import * as modules from "@controleonline/quasar-common-ui/src/store/modules";
import auth from "@controleonline/quasar-login-ui/src/store/modules/auth";
import shop from "@controleonline/quasar-shop-ui/src/store/modules/shop";
import categories from "@controleonline/quasar-common-ui/src/store/categories";
import menu from "@controleonline/quasar-common-ui/src/store/menu";
import users from "@controleonline/quasar-common-ui/src/store/users";
import gmaps from "@controleonline/quasar-common-ui/src/store/gmaps";
import people from "@controleonline/quasar-common-ui/src/store/people";
import config from "@controleonline/quasar-common-ui/src/store/config";
import profile from "@controleonline/quasar-common-ui/src/store/profile";
import user from "@controleonline/quasar-common-ui/src/store/user";

import { store } from "quasar/wrappers";
import { createStore } from "vuex";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      shop,
      categories,
      menu,
      users,
      gmaps,
      people,
      config,
      profile,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
