import { useState, useEffect } from 'react';

const LINKS = [
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
      className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 px-3 py-2 rounded-full"
      style={{
        background: 'rgba(10,10,10,0.6)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--border)',
      }}
    >
      <a
        href="#hero"
        className="text-[14px] font-extrabold tracking-tight px-3 py-1 mr-1"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: 'var(--text)',
          borderRight: '1px solid var(--border)',
          textDecoration: 'none',
        }}
      >
        P.
      </a>
      <div className="flex gap-0.5">
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={`nav-link${active === href ? ' active' : ''}`}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
