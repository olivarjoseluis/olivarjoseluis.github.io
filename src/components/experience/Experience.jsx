import { useLang } from '../../contexts/LangContext';
import { IV } from '../shared/IV';

export function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-24 border-t-2 border-ink">
      <div className="section-container">
        <IV>
          <span className="mono font-bold bg-ink text-paper px-[10px] py-[6px]">[05] EXPERIENCE</span>
          <h2 className="display text-[clamp(40px,7vw,110px)] mt-3 mb-12">
            {t.experience.title}
          </h2>
        </IV>

        <div className="flex flex-col gap-6">
          {t.experience.jobs.map((job, i) => {
            const isEven = i % 2 === 0;
            return (
              <IV key={i} delay={i * 80}>
                <article
                  className={`exp-card border-2 border-ink ${isEven ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}
                  style={{ '--card-shadow': isEven ? 'var(--color-red)' : 'var(--color-yellow)' }}
                >
                  <header className={`flex justify-between items-center flex-wrap gap-3 px-6 py-4 border-b-2 ${isEven ? 'border-ink' : 'border-paper'}`}>
                    <span className="mono font-bold">{job.range}</span>
                    <span className="mono font-bold">{job.location}</span>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-8">
                    <div>
                      <h3 className="display text-[clamp(28px,4vw,56px)] mb-2">{job.role}</h3>
                      <p className={`mono font-bold mb-4 ${isEven ? 'text-red' : 'text-yellow'}`}>@ {job.company}</p>
                      <p className="text-base leading-[1.55] font-medium">{job.summary}</p>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {job.bullets.map((b, j) => (
                        <li
                          key={j}
                          className={`flex gap-3 text-sm leading-relaxed font-medium pb-2.5 border-b border-dashed ${isEven ? 'border-[var(--ink-soft)]' : 'border-white/20'}`}
                        >
                          <span className={`font-bold ${isEven ? 'text-red' : 'text-yellow'}`}>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </IV>
            );
          })}
        </div>
      </div>
    </section>
  );
}
