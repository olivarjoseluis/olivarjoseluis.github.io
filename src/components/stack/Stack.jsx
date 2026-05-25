import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';

const cardBg   = ['bg-red', 'bg-paper', 'bg-yellow', 'bg-paper', 'bg-blue', 'bg-paper'];
const cardFg   = ['text-paper', 'text-ink', 'text-ink', 'text-ink', 'text-paper', 'text-ink'];
const divider  = ['border-paper', 'border-ink', 'border-ink', 'border-ink', 'border-paper', 'border-ink'];
const tagBorder = ['border-paper', 'border-ink', 'border-ink', 'border-ink', 'border-paper', 'border-ink'];

export function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="py-24">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-ink text-paper px-[10px] py-[6px]">[07] STACK</span>
          <h2 className="display text-[clamp(40px,7vw,110px)] mt-3 mb-12">
            {t.stack.title}
          </h2>
        </IV>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.stack.groups.map((g, i) => (
            <IV key={i} delay={i * 70}>
              <div
                className={`border-2 border-ink p-[22px] min-h-[240px] ${cardBg[i]} ${cardFg[i]}`}
                style={{ boxShadow: '5px 5px 0 0 var(--color-ink)' }}
              >
                <div className={`flex items-baseline gap-2 mb-4 border-b-2 pb-3 ${divider[i]}`}>
                  <span className="mono font-bold">0{i + 1}</span>
                  <span className="display text-[22px]">{g.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it, j) => (
                    <span
                      key={j}
                      className={`mono font-bold px-[10px] py-1 border-[1.5px] ${tagBorder[i]}`}
                    >{it}</span>
                  ))}
                </div>
              </div>
            </IV>
          ))}
        </div>
      </div>
    </section>
  );
}
