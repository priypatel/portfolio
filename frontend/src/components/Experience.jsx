import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EXPERIENCE = [
  {
    year: '2023 — Now',
    role: 'Full Stack Developer',
    company: 'Company / Freelance',
    desc: 'Built and shipped end-to-end web applications — handling everything from database design to pixel-perfect frontend. Worked closely with clients to ship clean, maintainable products on time.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
  },
  {
    year: '2022 — 2023',
    role: 'Frontend Developer',
    company: 'Internship / Project',
    desc: 'Focused on building responsive UIs, integrating APIs, and improving frontend performance. Learned to ship quickly without sacrificing code quality.',
    tags: ['React', 'Tailwind CSS', 'REST APIs'],
  },
];

export default function Experience() {
  const headerRef = useScrollReveal();
  const listRef = useRef(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll('.exp-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative z-[1] max-w-[820px] mx-auto px-8 pb-24">
      <div
        ref={headerRef}
        className="reveal section-header flex items-baseline justify-between mb-14 pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px,5vw,48px)', color: 'var(--text)' }}
        >
          Experience
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>02</span>
      </div>

      <div ref={listRef} className="flex flex-col">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="exp-item grid gap-6 py-8"
            style={{
              gridTemplateColumns: '120px 1fr',
              borderBottom: '1px solid var(--border)',
              ...(i === 0 ? { borderTop: '1px solid var(--border)' } : {}),
            }}
          >
            <div className="text-[12px] pt-1 tracking-[0.04em]" style={{ color: 'var(--muted)' }}>
              {exp.year}
            </div>
            <div>
              <div
                className="text-[18px] font-semibold tracking-[-0.02em] mb-1"
                style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
              >
                {exp.role}
              </div>
              <div className="text-[13px] mb-[14px]" style={{ color: 'var(--muted)' }}>
                {exp.company}
              </div>
              <div className="text-[14px] font-light leading-[1.75]" style={{ color: 'var(--muted)' }}>
                {exp.desc}
              </div>
              <div className="flex flex-wrap gap-[6px] mt-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-[10px] py-[3px] rounded-full tracking-[0.04em]"
                    style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
