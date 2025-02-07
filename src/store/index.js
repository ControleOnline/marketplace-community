import auth from "@controleonline/ui-login/src/store/modules/auth";
import support from "@controleonline/ui-support/src/store/support";
import model from "@controleonline/ui-crm/src/store/model";
import contract from "@controleonline/ui-contracts/src/store/contract";
import contract_people from "@controleonline/ui-contracts/src/store/contract/contract_people";
import users from "@controleonline/ui-users/src/store/users";
import address from "@controleonline/ui-people/src/store/address";
import documents from "@controleonline/ui-people/src/store/documents";
import phones from "@controleonline/ui-people/src/store/phones";
import emails from "@controleonline/ui-people/src/store/emails";
import people from "@controleonline/ui-people/src/store/people";
import theme from "@controleonline/ui-layout/src/store/theme";
import orders from "@controleonline/ui-orders/src/store/orders";
import product_orders from "@controleonline/ui-orders/src/store/product_orders";
import expanded_product_orders from "@controleonline/ui-orders/src/store/expanded_product_orders";

import logistic from "@controleonline/ui-logistic/src/store/logistic";
import invoice from "@controleonline/ui-financial/src/store/invoice";
import wallet from "@controleonline/ui-financial/src/store/wallet";
import paymentType from "@controleonline/ui-financial/src/store/paymentType";
import categories from "@controleonline/ui-common/src/store/categories";
import status from "@controleonline/ui-common/src/store/status";
import products from "@controleonline/ui-products/src/store/products";
import product_unit from "@controleonline/ui-products/src/store/products/product_unit";
import product_category from "@controleonline/ui-products/src/store/products/product_category";
import product_group from "@controleonline/ui-products/src/store/products/product_group";
import product_group_product from "@controleonline/ui-products/src/store/products/product_group_product";
import product_group_feedstock from "@controleonline/ui-products/src/store/products/product_group_feedstock";
import displays from "@controleonline/ui-queues/src/store/modules/displays";
import queues from "@controleonline/ui-queues/src/store/modules/queues";
import city from "@controleonline/ui-common/src/store/address/city";
import tasks from "@controleonline/ui-tasks/src/store/tasks";
import task_interations from "@controleonline/ui-tasks/src/store/task_interations";

import crm from "@controleonline/ui-crm/src/store/crm";
import dashboard from "@controleonline/ui-dashboard/src/store/dashboard";
import extra_fields from "@controleonline/ui-common/src/store/extra/fields";
import extra_data from "@controleonline/ui-common/src/store/extra/data";
import imports from "@controleonline/ui-common/src/store/imports";
import language from "@controleonline/ui-translate/src/store/language";
import translate from "@controleonline/ui-translate/src/store/translate";
import tt from "@controleonline/ui-common/src/store/tt";

import menus from "@controleonline/ui-config/src/store/menus";
import routes from "@controleonline/ui-config/src/store/routes";
import modules from "@controleonline/ui-config/src/store/modules";
import configs from "@controleonline/ui-config/src/store/configs";
import file from "@controleonline/ui-common/src/store/file";

import contents from "@controleonline/ui-ead/src/store/contents";

import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      modules,
      routes,
      menus,
      status,
      auth,
      queues,
      contract_people,
      displays,
      contract,
      model,
      emails,
      address,
      phones,
      documents,
      product_orders,
      people,
      invoice,
      wallet,
      paymentType,
      support,
      categories,
      users,
      products,
      product_unit,
      product_group,
      product_group_product,
      product_group_feedstock,
      product_category,
      expanded_product_orders,
      logistic,
      city,
      orders,
      theme,
      tasks,
      task_interations,
      crm,
      extra_fields,
      extra_data,
      dashboard,
      imports,
      translate,
      language,
      configs,
      file,
      tt,
      contents,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
