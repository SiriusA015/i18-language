import React from "react";
import { useTranslation } from "react-i18next";
import { namespaces } from "./i18n/i18n.constants";
import useLocales from "./useLocale";

export const App = () => {

  const { i18n, t: translate } = useTranslation();
  const { t } = useTranslation(namespaces.common);

  const handleChangeLanguage = (newlang: string) => {
      i18n.changeLanguage(newlang);
  };
  const changeLang = () => {
    handleChangeLanguage('es');
  }

  return (
    <>
      <h1>{t("welcome")}</h1>
      <button onClick={changeLang}>{t("buttons.ok", { ns: namespaces.common })}</button>
    </>
  );
};
