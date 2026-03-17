import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SKILLS = [
  {
    name: 'React / Next.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Node.js / Express',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#68A063" strokeWidth="1.3" />
        <path d="M12 2v20M3 7l9 5M21 7l-9 5" stroke="#68A063" strokeWidth="1.3" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15C19.67 12 21.33 10.67 22 8c-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <path d="M12 2C9.5 6 7 8.5 7 13a5 5 0 0010 0c0-4.5-2.5-7-5-11z" stroke="#4DB33D" strokeWidth="1.3" />
        <line x1="12" y1="13" x2="12" y2="22" stroke="#4DB33D" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#336791" strokeWidth="1.3" />
        <path d="M5 7v10c0 1.66 3.13 3 7 3s7-1.34 7-3V7" stroke="#336791" strokeWidth="1.3" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="#336791" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <rect x="3" y="6" width="6" height="4" rx="1" stroke="#a78bfa" strokeWidth="1.2" />
        <rect x="15" y="14" width="6" height="4" rx="1" stroke="#a78bfa" strokeWidth="1.2" />
        <path d="M9 8h3c1.5 0 2 1 2 2v2c0 1 .5 2 2 2h1" stroke="#a78bfa" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Git / GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <circle cx="5" cy="5" r="2" stroke="#F05033" strokeWidth="1.2" />
        <circle cx="19" cy="5" r="2" stroke="#F05033" strokeWidth="1.2" />
        <circle cx="12" cy="19" r="2" stroke="#F05033" strokeWidth="1.2" />
        <path d="M7 5h10M19 7v8a2 2 0 01-2 2h-3M5 7v3.5A2.5 2.5 0 007.5 13H10" stroke="#F05033" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#F7DF1E" strokeWidth="1.3" />
        <path d="M8 16.5c0 1.5 2.5 2.5 2.5 0V11" stroke="#F7DF1E" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M14 16c.5.8 1.5 1 2.5.5" stroke="#F7DF1E" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M14 11v5" stroke="#F7DF1E" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  const headerRef = useScrollReveal();
  const introRef = useScrollReveal();
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const pills = grid.querySelectorAll('.skill-pill');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pills.forEach((pill, i) => setTimeout(() => pill.classList.add('visible'), i * 60));
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative z-[1] max-w-[820px] mx-auto px-8 pb-24">
      <div
        ref={headerRef}
        className="reveal section-header flex items-baseline justify-between mb-14 pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px,5vw,48px)', color: 'var(--text)' }}
        >
          Skills
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>01</span>
      </div>

      <p
        ref={introRef}
        className="reveal text-[15px] font-light max-w-[480px] mb-12 leading-[1.8]"
        style={{ color: 'var(--muted)' }}
      >
        Two years in — focused on the full stack. These are the tools I reach for every day.
      </p>

      <div ref={gridRef} className="flex flex-wrap gap-[10px]">
        {SKILLS.map(({ name, icon }) => (
          <div
            key={name}
            className="skill-pill inline-flex items-center gap-[10px] px-[18px] py-[10px] rounded-full text-[13px]"
            style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            <span className="flex items-center justify-center w-5 h-5 shrink-0">{icon}</span>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
