"use client";

import React, { useEffect, useState } from "react";
import useLangStore from "@/store/lang";

const dictionaries: any = {
  eng: () =>
    import("@/i18n/locales/eng/common.json").then((module) => module.default),
  jp: () =>
    import("@/i18n//locales/jp/common.json").then((module) => module.default),
};

const getDictionary = async (locale: string) => dictionaries[locale]();

const useTranslate = () => {
  const { lang } = useLangStore();
  const [t, setT] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function fetchDictionary() {
      const dictionary = await getDictionary(lang);
      setT(dictionary);
    }

    fetchDictionary();
  }, [lang]);

  return { t, setT };
};

export default useTranslate;
