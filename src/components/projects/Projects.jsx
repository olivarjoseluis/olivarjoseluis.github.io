import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';

const tapeColors = ['var(--color-red)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-red)', 'var(--color-yellow)', 'var(--color-blue)'];
const tapeBg = ['bg-red', 'bg-yellow', 'bg-blue', 'bg-red', 'bg-yellow', 'bg-blue'];
const tapeText = ['text-red', 'text-yellow', 'text-blue', 'text-red', 'text-yellow', 'text-blue'];
const rotations = [-1.5, 1.2, -0.8, 1.6, -1.1, 0.9];
const images = [
  '/uploads/udla.png',
  '/uploads/agora.png',
  '/uploads/sherwin-williams.png',
  '/uploads/nabiax.png',
  '/uploads/kataplum.png',
  '/uploads/campus-iker-casillas.png',
];

export function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-24 bg-ink text-paper border-t-2 border-ink">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-red text-paper px-[10px] py-[6px]">[06] WORK</span>
          <h2 className="display text-[clamp(32px,5vw,108px)] sm:text-[clamp(40px,7vw,110px)] mt-3 mb-12">
            {t.projects.title}
          </h2>
        </IV>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pt-5">
          {t.projects.items.map((p, i) => (
            <IV key={i} delay={i * 60}>
              <article
                className="proj-card relative bg-paper text-ink border-2 border-paper"
                style={{
                  '--card-rotation': `${rotations[i]}deg`,
                  '--tape-color': tapeColors[i],
                }}
              >
                {/* Tape */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 -rotate-3 w-[90px] h-[22px] opacity-95 z-[2] ${tapeBg[i]}`}
                  style={{ borderLeft: '1px solid var(--ink-soft-2)', borderRight: '1px solid var(--ink-soft-2)' }}
                />

                {/* Screenshot */}
                <div className="relative overflow-hidden border-b-2 border-ink" style={{ aspectRatio: '4 / 3' }}>
                  {/* Real image underneath */}
                  <image-slot
                    id={`bru-proj-${i}`}
                    shape="rect"
                    src={images[i]}
                    placeholder=""
                    fit="cover"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', background: 'var(--gray)', border: 'none' }}
                  />

                  {/* Brutalist overlay — fades on hover to reveal screenshot */}
                  <div className="proj-overlay absolute inset-0 z-[5] flex flex-col justify-between p-4 bg-ink text-paper">
                    <div />
                    <div>
                      <p className={`mono font-bold mb-1.5 ${tapeText[i]}`}>{p.category}</p>
                      <span className="display text-[clamp(20px,3vw,30px)] leading-tight">{p.client}</span>
                    </div>
                    <div className={`h-[3px] w-full ${tapeBg[i]}`} />
                  </div>

                  {/* Badge always on top */}
                  <span className="mono absolute top-2.5 left-2.5 bg-paper text-ink px-2 py-1 font-bold z-10">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Info */}
                <div className="p-[18px] border-t border-dashed border-[var(--ink-soft)]">
                  <h3 className="display text-[24px] mb-1.5">{p.client}</h3>
                  <p className={`mono font-bold mb-2.5 ${tapeText[i]}`}>{p.category}</p>
                  <p className="text-sm leading-relaxed font-medium mb-3">{p.description}</p>
                  <p className="mono font-bold pt-2.5 border-t border-ink">{p.tech}</p>
                </div>
              </article>
            </IV>
          ))}
        </div>
      </div>
    </section>
  );
}
