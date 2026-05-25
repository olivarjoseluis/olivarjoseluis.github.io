import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';
import { AnimatedNum } from '../shared/AnimatedNum';

const cardBg = ['bg-red', 'bg-paper', 'bg-yellow', 'bg-ink', 'bg-paper', 'bg-blue'];
const cardFg = ['text-paper', 'text-ink', 'text-ink', 'text-paper', 'text-ink', 'text-paper'];

export function Metrics() {
  const { t } = useLang();
  return (
    <section id="metrics" className="py-20">
      <div className="section-container">
        <IV>
          <div className="flex items-baseline gap-4 mb-3 flex-wrap">
            <span className="mono font-bold bg-ink text-paper px-[10px] py-[6px]">[02] METRICS</span>
            <span className="mono text-ink">// WHY TEAMS PICK ME</span>
          </div>
          <h2 className="display text-[clamp(48px,9vw,140px)] mb-12">
            {t.metrics.title}<span className="text-red">.</span>
          </h2>
        </IV>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.metrics.items.map((m, i) => (
            <IV key={i} delay={i * 60}>
              <div className={`metric-card border-2 border-ink p-5 min-h-[240px] flex flex-col justify-between ${cardBg[i]} ${cardFg[i]}`}>
                <span className="mono font-bold opacity-70">#{String(i + 1).padStart(2, '0')}</span>
                <div className="display text-[clamp(36px,4vw,62px)] leading-[0.9]">
                  <AnimatedNum value={m.value} prefix={m.prefix || ''} suffix={m.suffix || ''} />
                </div>
                <p className="text-xs leading-snug font-medium">{m.label}</p>
              </div>
            </IV>
          ))}
        </div>
      </div>
    </section>
  );
}
