import { useState, useEffect } from 'react';

const LINKS = [
  { href: '#about-intro', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full"
      style={{
        background: 'rgba(10,10,10,0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--border)',
        maxWidth: 'calc(100vw - 24px)',
      }}
    >
      <a
        href="#hero"
        className="text-[13px] sm:text-[14px] font-extrabold tracking-tight px-2 sm:px-3 py-1 mr-0.5 sm:mr-1 shrink-0"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: 'var(--text)',
          borderRight: '1px solid var(--border)',
          textDecoration: 'none',
        }}
      >
        P.
      </a>
      <div className="flex gap-0 sm:gap-0.5 overflow-x-auto">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={`nav-link${active === href ? ' active' : ''}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
