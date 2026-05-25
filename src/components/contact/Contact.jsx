import { useState, useEffect } from 'react';
import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';
import { Sticker } from '../shared/Sticker';
import DATA from '../../data';

export function Contact() {
  const { t } = useLang();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', { hour12: false, timeZone: 'America/Bogota' });

  const links = [
    { label: 'EMAIL', value: t.contact.email, href: `mailto:${t.contact.email}` },
    { label: 'WHATSAPP', value: t.contact.whatsapp, href: DATA.links.whatsapp },
    { label: 'LINKEDIN', value: '/in/joseluisolivar', href: DATA.links.linkedin },
    { label: 'GITHUB', value: '@olivarjoseluis', href: DATA.links.github },
  ];

  return (
    <section id="contact" className="pt-24 pb-10 bg-red text-paper border-t-2 border-ink">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-ink text-paper px-[10px] py-[6px]">[08] CONTACT</span>
        </IV>
        <IV delay={100}>
          <h2 className="display text-[clamp(64px,14vw,240px)] leading-[0.8] mt-4 mb-8">
            LET'S<br />BUILD.
          </h2>
        </IV>
        <IV delay={200}>
          <p className="text-xl leading-relaxed font-medium max-w-[640px] mb-10">
            {t.contact.title} {t.contact.body}
          </p>
        </IV>

        <IV delay={300}>
          <div className="flex gap-4 flex-wrap mb-16">
            <Sticker
              as="a"
              href={`mailto:${t.contact.email}`}
              color="var(--ink)"
              shadow="var(--paper)"
              style={{ color: 'var(--paper)', fontSize: 14, padding: '20px 32px' }}
            >
              ✦ {t.contact.cta} →
            </Sticker>
            <Sticker
              as="a"
              href={DATA.links.whatsapp}
              target="_blank"
              color="var(--yellow)"
              shadow="var(--ink)"
              style={{ fontSize: 14, padding: '20px 32px' }}
            >
              {t.contact.whatsappCta} →
            </Sticker>
          </div>
        </IV>

        <IV delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-ink">
            {links.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link flex flex-col gap-1.5 p-5"
              >
                <span className="mono font-bold opacity-65">{c.label} ↗</span>
                <span className="display text-[16px] sm:text-[18px]">{c.value}</span>
              </a>
            ))}
          </div>
        </IV>

        {/* Footer bar */}
        <div className="flex justify-between flex-wrap gap-4 mt-16 pt-5 border-t-2 border-ink">
          <span className="mono font-bold">© {new Date().getFullYear()} · JOSE LUIS OLIVAR · DESIGNED & BUILT BY ME</span>
          <span className="mono font-bold">CALI · {timeStr} GMT-5 ●</span>
        </div>

        {/* Big watermark */}
        <IV delay={500}>
          <div
            className="display mt-10 text-[clamp(50px,12vw,180px)] sm:text-[clamp(100px,24vw,360px)] leading-[0.78]"
            style={{ color: 'transparent', WebkitTextStroke: '2px var(--paper)' }}
          >OLIVAR.</div>
        </IV>
      </div>
    </section>
  );
}
