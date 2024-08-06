"use client";

import React, { useEffect, useState } from "react";
import useLangStore from "@/store/lang";

const dictionaries: any = {
  en: () =>
    import("@/i18n/locales/en/common.json").then((module) => module.default),
  ja: () =>
    import("@/i18n//locales/ja/common.json").then((module) => module.default),
};

const getDictionary = async (locale: string) => dictionaries[locale]();

const useTranslate = () => {
  const { lang } = useLangStore();
  const [t, setT] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function fetchDictionary() {
      console.log("🚀 ~ fetchDictionary ~ lang:", lang);
      const dictionary = await getDictionary(lang);
      setT(dictionary);
    }

    fetchDictionary();
  }, [lang]);

  return { t, setT };
};

export default useTranslate;
