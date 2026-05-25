import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';
import { Sticker } from '../shared/Sticker';

/* Hero is intentionally full-width — no container */
export function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="top" className="pt-[80px] relative overflow-hidden">

      {/* Top ticker bar */}
      <div className="border-b-2 border-ink flex justify-between px-8 py-[10px] bg-ink text-paper">
        <span className="mono">●●● PORTFOLIO/2026/Q2</span>
        <span className="mono hidden sm:block">EST. 2019 // 5+ YRS REMOTE</span>
        <span className="mono">CALI, CO → WORLDWIDE</span>
      </div>

      {/* Main hero content */}
      <div className="px-8 pt-10">

        {/* Tag row */}
        <div className="flex justify-between items-start gap-8 mb-6 flex-wrap">
          <IV>
            <Sticker color="var(--red)" style={{ color: 'var(--paper)' }}>
              <span>●</span> {t.hero.tag}
            </Sticker>
          </IV>
          <IV delay={150}>
            <span className="mono font-bold bg-ink text-paper px-3 py-2">FILE_001.HERO</span>
          </IV>
        </div>

        {/* Big name */}
        <div className="relative">
          <IV>
            <h1 className="display text-[clamp(80px,22vw,360px)] leading-[0.82] mt-4 break-words">
              JOSE<br />LUIS<span className="text-red">.</span>
            </h1>
          </IV>
          <IV delay={250}>
            <div
              className="display text-[clamp(48px,12vw,200px)] leading-[0.85] -mt-2 tracking-[-0.05em]"
              style={{ color: 'transparent', WebkitTextStroke: '2px var(--ink)' }}
            >OLIVAR</div>
          </IV>
        </div>

        {/* Sub-grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 mt-8 items-end">
          <div>
            <IV delay={300}>
              <div className="border-y-2 border-ink py-4 flex justify-between items-center gap-4 flex-wrap">
                <span className="display text-[clamp(24px,3vw,36px)]">FULL-STACK DEV</span>
                <span className="mono font-bold bg-yellow px-[10px] py-[6px]">DRUPAL · NEXT.JS · TYPESCRIPT</span>
              </div>
            </IV>

            <IV delay={400}>
              <p className="mt-6 text-lg leading-relaxed font-medium max-w-[620px]">{t.hero.blurb}</p>
            </IV>

            <IV delay={500}>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Sticker as="a" href="#contact" color="var(--ink)" style={{ color: 'var(--paper)', fontSize: 13, padding: '18px 28px' }}>
                  ✦ {t.hero.cta_primary} →
                </Sticker>
                <Sticker
                  as="a"
                  href={`/uploads/Jose_Luis_Olivar_CV${lang === 'es' ? '_ES' : ''}.pdf`}
                  target="_blank"
                  style={{ fontSize: 13, padding: '18px 28px' }}
                >
                  ↓ {t.hero.cta_secondary}
                </Sticker>
              </div>
            </IV>
          </div>

          {/* Photo card */}
          <IV delay={350} className="hidden lg:block">
            <div
              className="border-2 border-ink bg-paper p-2 transition-transform duration-300 rotate-2 hover:rotate-0"
              style={{ boxShadow: '10px 10px 0 0 var(--red)' }}
            >
              <image-slot
                id="bru-portrait"
                shape="rect"
                src="/uploads/jose-luis-olivar.png"
                placeholder=""
                style={{ display: 'block', width: 320, height: 380, background: 'var(--gray)', border: '1px solid var(--ink)' }}
              />
              <div className="flex justify-between pt-[10px] pb-[2px] px-1 border-t border-ink mt-2">
                <span className="mono font-bold">EXHIBIT.A</span>
                <span className="mono">↑ DROP PHOTO</span>
              </div>
            </div>
          </IV>
        </div>
      </div>

      {/* ── Marquee — full-width, no container ── */}
      <div className="mt-15 border-y-2 border-ink bg-yellow overflow-hidden py-4">
        <div
          className="flex gap-10 whitespace-nowrap w-fit"
          style={{ animation: 'scroll 28s linear infinite' }}
        >
          {[...Array(3)].map((_, k) =>
            ['DRUPAL 8 → 11', 'NEXT.JS / REACT', 'TYPESCRIPT', 'DRUPAL COMMERCE', 'HEADLESS ARCHITECTURE', 'ATOMIC DESIGN', 'PIXEL-PERFECT', '5+ YEARS REMOTE', '27+ PROJECTS'].map((it, i) => (
              <span key={`${k}-${i}`} className="display text-[34px] inline-flex items-center gap-10">
                {it} <span className="text-red">★</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
