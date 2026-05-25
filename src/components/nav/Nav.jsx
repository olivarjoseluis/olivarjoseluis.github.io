import { useState, useEffect } from 'react';
import { useLang } from '../../contexts/LangContext';

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-[background,border-color] duration-200 ${scrolled ? 'border-ink bg-paper' : 'border-transparent bg-transparent'}`}>
      <div className="flex items-stretch justify-between min-h-[60px]">

        {/* Logo + badge */}
        <div className="flex">
          <a
            href="#top"
            className="inline-flex items-center justify-center px-5 bg-ink text-paper display text-[22px]"
          >JL/</a>
          <div className="hidden sm:inline-flex items-center px-4 border-x-2 border-ink bg-paper gap-2">
            <span className="w-2 h-2 rounded-full bg-green-600 inline-block" />
            <span className="mono font-bold">{t.nav.availability}</span>
          </div>
        </div>

        {/* Links + lang toggle */}
        <nav className="flex items-center">
          {[
            { href: '#metrics',    label: t.nav.work },
            { href: '#experience', label: t.nav.experience },
            { href: '#stack',      label: t.nav.stack },
            { href: '#contact',    label: t.nav.contact },
          ].map((it, i) => (
            <a
              key={i}
              href={it.href}
              className="mono hidden md:inline-flex items-center px-[18px] h-[60px] font-bold hover:bg-ink hover:text-paper transition-colors duration-150"
            >{it.label}</a>
          ))}

          <div className="flex border-l-2 border-ink h-[60px]">
            {['es', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`mono px-[14px] font-bold transition-colors duration-150 ${lang === l ? 'bg-red text-paper' : 'text-ink hover:bg-ink hover:text-paper'}`}
              >{l.toUpperCase()}</button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
