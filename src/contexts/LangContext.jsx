import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import I18N from '../i18n';

const LangCtx = createContext({ lang: 'es', setLang: () => {}, t: I18N.es });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const s = localStorage.getItem('jl-lang');
    if (s === 'es' || s === 'en') return s;
    return navigator.language?.startsWith('en') ? 'en' : 'es';
  });

  useEffect(() => {
    localStorage.setItem('jl-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: I18N[lang] }), [lang]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);
