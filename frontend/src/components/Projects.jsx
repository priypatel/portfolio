import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  {
    featured: true,
    num: 'Featured · 01',
    title: 'Full-Stack App',
    desc: 'A complete web application with authentication, real-time data, and a clean dashboard interface. Built with a focus on performance and developer experience.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'REST API'],
    href: '#',
  },
  {
    num: '02',
    title: 'REST API Service',
    desc: 'Designed and built a RESTful backend with clean architecture, auth middleware, and PostgreSQL.',
    stack: ['Express', 'PostgreSQL', 'JWT'],
    href: '#',
  },
  {
    num: '03',
    title: 'UI Component Library',
    desc: 'Reusable, accessible component library built with React and Tailwind. Dark-mode ready out of the box.',
    stack: ['React', 'Tailwind', 'Storybook'],
    href: '#',
  },
];

function StackTags({ tags }) {
  return (
    <div className="flex flex-wrap gap-[6px]">
      {tags.map((t) => (
        <span
          key={t}
          className="text-[11px] px-[10px] py-[3px] rounded-full"
          style={{ color: 'var(--muted)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)' }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <a
      href={project.href}
      className="project-card featured-grid rounded-2xl p-7 relative overflow-hidden col-span-full grid gap-8"
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'start',
        textDecoration: 'none',
      }}
    >
      <div>
        <div className="text-[11px] tracking-[0.1em] mb-5" style={{ color: 'var(--muted2)' }}>
          {project.num}
        </div>
        <div
          className="text-[20px] font-bold tracking-[-0.02em] mb-[10px]"
          style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
        >
          {project.title}
        </div>
        <div className="text-[13px] font-light leading-[1.7] mb-6" style={{ color: 'var(--muted)' }}>
          {project.desc}
        </div>
        <StackTags tags={project.stack} />
      </div>
      <div>
        <div
          className="w-full h-40 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#1a1a1a 0%,#222 100%)', border: '1px solid var(--border)' }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect x="4" y="4" width="40" height="40" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
            <rect x="10" y="14" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
            <rect x="10" y="21" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
            <rect x="10" y="28" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
          </svg>
        </div>
      </div>
      <span className="project-arrow absolute top-6 right-6 text-base" style={{ color: 'var(--muted2)' }}>↗</span>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      className="project-card rounded-2xl p-7 relative overflow-hidden block"
      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', textDecoration: 'none' }}
    >
      <span className="project-arrow absolute top-6 right-6 text-base" style={{ color: 'var(--muted2)' }}>↗</span>
      <div className="text-[11px] tracking-[0.1em] mb-5" style={{ color: 'var(--muted2)' }}>
        {project.num}
      </div>
      <div
        className="text-[20px] font-bold tracking-[-0.02em] mb-[10px]"
        style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
      >
        {project.title}
      </div>
      <div className="text-[13px] font-light leading-[1.7] mb-6" style={{ color: 'var(--muted)' }}>
        {project.desc}
      </div>
      <StackTags tags={project.stack} />
    </a>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) => setTimeout(() => card.classList.add('visible'), i * 80));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="relative z-[1] max-w-[820px] mx-auto px-8 pb-24">
      <div
        ref={headerRef}
        className="reveal section-header flex items-baseline justify-between mb-14 pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px,5vw,48px)', color: 'var(--text)' }}
        >
          Projects
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>03</span>
      </div>

      <div ref={gridRef} className="projects-grid grid gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {PROJECTS.map((p, i) =>
          p.featured ? <FeaturedCard key={i} project={p} /> : <ProjectCard key={i} project={p} />
        )}
      </div>
    </section>
  );
}
