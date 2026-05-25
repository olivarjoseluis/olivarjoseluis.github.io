import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="bg-ink text-paper py-24 border-y-2 border-ink">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-red text-paper px-[10px] py-[6px]">[03] ABOUT</span>
        </IV>
        <IV delay={100}>
          <h2 className="display text-[clamp(40px,7vw,110px)] mt-6 max-w-[18ch]">
            {t.about.title}
          </h2>
        </IV>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <IV delay={200}>
            <p className="text-lg leading-[1.55] font-medium">{t.about.body}</p>
          </IV>
          <IV delay={300}>
            <p className="text-lg leading-[1.55] font-medium text-gray">{t.about.body2}</p>
          </IV>
        </div>
      </div>
    </section>
  );
}
