import { useTranslation } from "react-i18next";
import { namespaces } from "./i18n/i18n.constants";


export default function useLocales() {
  
    const { i18n, t: translate } = useTranslation();
  
    const handleChangeLanguage = (newlang: string) => {
      i18n.changeLanguage(newlang);
    };
  
    return {
      onChangeLang: handleChangeLanguage,
      translate: (text: any, options?: any) => translate(text, options),
      t: (text: any, options?: any) => translate(text, options),
    };
  }