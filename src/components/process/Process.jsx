import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';

export function Process() {
  const { t } = useLang();
  return (
    <section id="process" className="py-24">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-ink text-paper px-[10px] py-[6px]">[04] PROCESS</span>
          <h2 className="display text-[clamp(40px,7vw,110px)] mt-3 mb-12 max-w-[16ch]">
            {t.process.title}
          </h2>
        </IV>

        <div className="border-t-2 border-ink">
          {t.process.steps.map((s, i) => (
            <IV key={i} delay={i * 80}>
              <div className="process-row border-b-2 border-ink py-7 grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-8 items-start">
                <span className="display text-[48px] text-red">{s.num}</span>
                <h3 className="display text-[clamp(24px,3vw,40px)]">{s.title}</h3>
                <p className="text-base leading-relaxed font-medium">{s.body}</p>
              </div>
            </IV>
          ))}
        </div>
      </div>
    </section>
  );
}
