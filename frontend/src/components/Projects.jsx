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
  },
  {
    featured: true,
    num: 'Featured · 02',
    title: 'RentEase',
    subtitle: 'Property Management & Rental Platform',
    desc: 'Full-stack MERN rental platform for tenants and landlords. Features role-based dashboards, property listings with Cloudinary image uploads, rent payment tracking, maintenance request management, and a rating/review system.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux Toolkit', 'Cloudinary', 'JWT', 'Tailwind'],
    href: 'https://rent-ease-631omnsgl-priys-projects-dd54a42a.vercel.app/',
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

function TravelAIMockup() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(135deg,#0d1117 0%,#1a1f2e 100%)', padding: '14px', gap: '10px' }}>
      {/* Nav bar */}
      <div className="flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg,#63b3ed,#a78bfa)' }} />
          <span className="text-[11px] font-bold" style={{ color: '#e2e8f0', fontFamily: "'Syne',sans-serif" }}>TravelAI</span>
        </div>
        <div className="flex gap-2">
          {['Explore','AI Plan','Wishlist'].map(n => (
            <span key={n} className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{n}</span>
          ))}
        </div>
      </div>
      {/* Hero strip */}
      <div className="rounded-lg flex items-center justify-between px-3" style={{ background: 'rgba(99,179,237,0.07)', border: '1px solid rgba(99,179,237,0.15)', height: '36px' }}>
        <span className="text-[10px] font-medium" style={{ color: '#63b3ed' }}>✦ AI-Powered Itinerary Generator</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>Gemini AI</span>
      </div>
      {/* Destination cards row */}
      <div className="flex gap-2" style={{ flex: 1 }}>
        {[
          { name: 'Bali', color: '#f6ad55' },
          { name: 'Paris', color: '#63b3ed' },
          { name: 'Tokyo', color: '#fc8181' },
        ].map(d => (
          <div key={d.name} className="flex-1 rounded-lg flex flex-col justify-end p-2 relative overflow-hidden" style={{ background: `linear-gradient(160deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.06) 100%)`, border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-full h-[52px] rounded-md mb-2 opacity-80" style={{ background: `linear-gradient(135deg,${d.color}22,${d.color}55)`, border: `1px solid ${d.color}33` }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-4 h-4 rounded-full" style={{ background: `${d.color}66` }} />
              </div>
            </div>
            <div className="text-[9px] font-semibold" style={{ color: '#e2e8f0' }}>{d.name}</div>
            <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Explore →</div>
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="flex items-center gap-2 pt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex-1 rounded-full flex items-center px-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', height: '22px' }}>
          <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.25)' }}>Search destinations…</span>
        </div>
        <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#63b3ed,#a78bfa)' }}>
          <span style={{ fontSize: '9px', color: '#fff' }}>↗</span>
        </div>
      </div>
    </div>
  );
}

function RentEaseMockup() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#0f1117', padding: '14px', gap: '10px' }}>
      {/* Top bar */}
      <div className="flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded" style={{ background: 'linear-gradient(135deg,#4ade80,#22d3ee)' }} />
          <span className="text-[11px] font-bold" style={{ color: '#e2e8f0', fontFamily: "'Syne',sans-serif" }}>RentEase</span>
        </div>
        <div className="flex gap-2">
          {['Dashboard','Properties','Payments'].map(n => (
            <span key={n} className="text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{n}</span>
          ))}
        </div>
      </div>
      {/* Stats row */}
      <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        {[
          { label: 'Properties', val: '12', color: '#4ade80' },
          { label: 'Tenants', val: '28', color: '#22d3ee' },
          { label: 'Rent Due', val: '₹3.2L', color: '#f6ad55' },
        ].map(s => (
          <div key={s.label} className="rounded-lg px-2 py-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-[12px] font-bold" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Property cards */}
      <div className="flex flex-col gap-2" style={{ flex: 1 }}>
        {[
          { name: '2BHK — Satellite, Ahmedabad', rent: '₹18,000/mo', status: 'Rented', sc: '#4ade80', sb: 'rgba(74,222,128,0.12)' },
          { name: '3BHK — Bopal, Ahmedabad', rent: '₹24,000/mo', status: 'Available', sc: '#22d3ee', sb: 'rgba(34,211,238,0.12)' },
          { name: '1RK — Navrangpura', rent: '₹9,500/mo', status: 'Pending', sc: '#f6ad55', sb: 'rgba(246,173,85,0.12)' },
        ].map(p => (
          <div key={p.name} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div>
              <div className="text-[9px] font-medium" style={{ color: '#e2e8f0' }}>{p.name}</div>
              <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{p.rent}</div>
            </div>
            <span className="text-[8px] px-2 py-0.5 rounded-full" style={{ color: p.sc, background: p.sb }}>{p.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectMockup({ title }) {
  if (title === 'TravelAI') return <TravelAIMockup />;
  if (title === 'RentEase') return <RentEaseMockup />;
  return null;
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
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
          className="w-full rounded-xl overflow-hidden"
          style={{ height: '260px', border: '1px solid var(--border)' }}
        >
          <ProjectMockup title={project.title} />
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
    <section id="projects" className="relative z-[1] max-w-[820px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
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
