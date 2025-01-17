import { useTranslation, UseTranslationOptions } from 'react-i18next';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    icon: '/icons/ic_flag_en.svg',
  },
  {
    label: 'Viet Nam',
    value: 'vi',
    icon: '/icons/ic_flag_vi.svg',
  },
];

export function useLocales(translateOptions?: UseTranslationOptions<string>) {
  const { i18n, t: translate } = useTranslation(undefined, translateOptions);
  const currentLang = LANGS.find((_lang) => _lang.value === i18n.language) || LANGS[1];

  const handleChangeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
