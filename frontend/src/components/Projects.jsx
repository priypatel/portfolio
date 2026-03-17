import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROJECTS = [
  {
    featured: true,
    num: 'Featured · 01',
    title: 'TravelAI',
    subtitle: 'AI-Powered Travel Discovery Platform',
    desc: 'Full-stack MERN travel platform with Google Gemini AI for personalized itinerary generation. Features destination explorer with 20+ curated destinations, interactive maps, JWT auth with refresh token rotation, Redis caching for AI results, wishlist, user profiles, and a full admin panel.',
    stack: ['React 19', 'Node.js', 'MongoDB', 'Express', 'Redux Toolkit', 'Gemini AI', 'Redis', 'JWT', 'Leaflet'],
    href: 'https://travel-hazel-phi.vercel.app/',
    preview: '/preview-travelai.png',
  },
  {
    featured: true,
    num: 'Featured · 02',
    title: 'RentEase',
    subtitle: 'Property Management & Rental Platform',
    desc: 'Full-stack MERN rental platform for tenants and landlords. Features role-based dashboards, property listings with Cloudinary image uploads, rent payment tracking, maintenance request management, and a rating/review system.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux Toolkit', 'Cloudinary', 'JWT', 'Tailwind'],
    href: 'https://rent-ease-631omnsgl-priys-projects-dd54a42a.vercel.app/',
    preview: '/preview-rentease.png',
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
      target="_blank"
      rel="noopener noreferrer"
      className="project-card col-span-full rounded-2xl p-5 sm:p-7 relative overflow-hidden grid gap-6 sm:gap-8"
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        textDecoration: 'none',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        alignItems: 'start',
      }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>{project.num}</span>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded-full"
            style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80' }}
          >
            <span className="w-1 h-1 rounded-full bg-[#4ade80]" />
            Live
          </span>
        </div>
        <div
          className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] mb-1"
          style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
        >
          {project.title}
        </div>
        {project.subtitle && (
          <div className="text-[12px] mb-3 sm:mb-4" style={{ color: 'var(--muted)' }}>
            {project.subtitle}
          </div>
        )}
        <div className="text-[13px] font-light leading-[1.7] mb-5 sm:mb-6" style={{ color: 'var(--muted)' }}>
          {project.desc}
        </div>
        <StackTags tags={project.stack} />
      </div>

      <div className="hidden sm:block">
        <div
          className="w-full rounded-xl overflow-hidden relative"
          style={{ height: '280px', border: '1px solid var(--border)', background: '#0d1117' }}
        >
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>
      </div>

      <span className="project-arrow absolute top-5 sm:top-6 right-5 sm:right-6 text-base" style={{ color: 'var(--muted2)' }}>↗</span>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      className="project-card rounded-2xl p-5 sm:p-7 relative overflow-hidden block"
      style={{ background: 'var(--bg3)', border: '1px solid var(--border)', textDecoration: 'none' }}
    >
      <span className="project-arrow absolute top-5 sm:top-6 right-5 sm:right-6 text-base" style={{ color: 'var(--muted2)' }}>↗</span>
      <div className="text-[11px] tracking-[0.1em] mb-4 sm:mb-5" style={{ color: 'var(--muted2)' }}>
        {project.num}
      </div>
      <div
        className="text-[18px] sm:text-[20px] font-bold tracking-[-0.02em] mb-2 sm:mb-[10px]"
        style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
      >
        {project.title}
      </div>
      <div className="text-[13px] font-light leading-[1.7] mb-5 sm:mb-6" style={{ color: 'var(--muted)' }}>
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
    <section id="projects" className="relative z-[1] max-w-[1140px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        ref={headerRef}
        className="reveal flex items-baseline justify-between mb-10 sm:mb-14 pt-16 sm:pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px,5vw,48px)', color: 'var(--text)' }}
        >
          Projects
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>04</span>
      </div>

      {/* grid-cols-1 on mobile, grid-cols-2 on sm+ */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECTS.map((p, i) =>
          p.featured ? <FeaturedCard key={i} project={p} /> : <ProjectCard key={i} project={p} />
        )}
      </div>
    </section>
  );
}
