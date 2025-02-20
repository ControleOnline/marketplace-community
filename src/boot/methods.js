import { createApp } from "vue";
import Formatter from "@controleonline/ui-common/src/utils/formatter.js";
import * as methods from "@controleonline/ui-common/src/utils/methods.js";
import Auth from "@controleonline/ui-common/src/utils/auth.js";
import Translate from "@controleonline/ui-common/src/utils/translate.js";
import { APP_ENV } from "../../config/env.js";
import { useRouter } from "vue-router";

const app = createApp({});
const t = new Translate();

export default ({ app, store }) => {
  const router = useRouter();

  app.config.globalProperties.$auth = new Auth(store, router);
  app.config.globalProperties.$copyObject = (obj) => methods.copyObject(obj);
  app.config.globalProperties.$formatter = Formatter;
  app.config.globalProperties.$domain = APP_ENV.DOMAIN || location.host;
  app.config.globalProperties.$env = APP_ENV
  app.config.globalProperties.$entrypoint = APP_ENV.API_ENTRYPOINT;
  app.config.globalProperties.$image = function (file) {
    if (!file) return "https://cdn.quasar.dev/img/avatar4.jpg";

    return (
      APP_ENV.API_ENTRYPOINT +
      "/files/" +
      (typeof file == "object" ? file["@id"] : file)
        .toString()
        .replace(/\D/g, "") +
      "/download" +
      "?_=" +
      btoa(file.fileName)
    );
  };
  app.config.globalProperties.$pdf = function (file) {
    return (
      APP_ENV.API_ENTRYPOINT +
      "/vendor/pdf.js/web/viewer.html?file=" +
      "/files/" +
      file["@id"].replace(/\D/g, "") +
      "/download" +
      encodeURIComponent("?app-domain=" + (APP_ENV.DOMAIN || location.host))
    );
  };

  app.config.globalProperties.$translate = t;
  app.config.globalProperties.$tt = (store, value, type) =>
    t.translate(store, value, type);
};
