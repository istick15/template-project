import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { BASE_PATH } from "../config";

function loadPath(lng, namespace) {
  let path = `/languages/common/${lng}.json`;

  switch (namespace[0]) {
    case "common":
      path = `${BASE_PATH}/languages/common/${lng}.json`;
      break;
    case "project":
      path = `${BASE_PATH}/languages/project/${lng}.json`;
      break;
    default:
      break;
  }

  return path;
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: ["en", "th"],
    // resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
      format: function (value: any, format: any, lng: any) {
        if (format === "uppercase") return value.toUpperCase();
        if (format === "lowercase") return value.toLowerCase();
        if (format === "capitalize")
          return `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`;
        return value;
      },
      react: {
        useSuspense: false,
      },
    },
    ns: ["common", "project"],
    defaultNS: "common",
    backend: {
      loadPath: loadPath,
    },
  } as any);

export default i18n;
