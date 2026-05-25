import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

export function AnimatedNum({ value, prefix = '', suffix = '', duration = 1500 }) {
  const [ref, inView] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView]);

  return <span ref={ref}>{prefix}{n}{suffix}</span>;
}
