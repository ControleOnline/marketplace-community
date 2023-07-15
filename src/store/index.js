import Vue from "vue";
import Vuex from "vuex";

//import * as modules from "@controleonline/quasar-common-ui/src/store/modules";
import auth from "@controleonline/quasar-login-ui/src/store/modules/auth";
import shop from '@controleonline/quasar-shop-ui/src/store/modules/shop';
import categories from "@controleonline/quasar-common-ui/src/store/categories";
import menu from "@controleonline/quasar-common-ui/src/store/menu";
import users from "@controleonline/quasar-common-ui/src/store/users";
import gmaps from "@controleonline/quasar-common-ui/src/store/gmaps";
import people from "@controleonline/quasar-common-ui/src/store/people";
import config from "@controleonline/quasar-common-ui/src/store/config";
import profile from "@controleonline/quasar-common-ui/src/store/profile";
import user from "@controleonline/quasar-common-ui/src/store/user";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
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
      user
    //  modules 
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
