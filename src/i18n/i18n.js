import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { default as resourcesToBackend } from "i18next-resources-to-backend";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`@/i18n/locales/${language}/${namespace}.json`)
        .then((resources) => callback(null, resources))
        .catch((error) => callback(error, null));
    })
  )
  .init({
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    debug: false,
    react: {
      useSuspense: false,
    },
  });

export default i18next;
