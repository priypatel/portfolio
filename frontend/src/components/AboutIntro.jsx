import { useScrollReveal } from '../hooks/useScrollReveal';

const FACTS = [
  { label: 'Based in', value: 'India' },
  { label: 'Experience', value: '2 Years' },
  { label: 'Focus', value: 'Full Stack' },
  { label: 'Status', value: 'Open to work' },
];

export default function AboutIntro() {
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about-intro" className="relative z-[1] max-w-[820px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        ref={headerRef}
        className="reveal flex items-baseline justify-between mb-10 sm:mb-14 pt-16 sm:pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px,5vw,48px)', color: 'var(--text)' }}
        >
          About
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>01</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left — bio */}
        <div ref={leftRef} className="reveal space-y-6">
          <p
            className="font-bold leading-[1.15] tracking-[-0.03em]"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(22px,3.5vw,32px)', color: 'var(--text)' }}
          >
            Building the web,<br />one commit at a time.
          </p>

          <div className="space-y-4 text-[14px] sm:text-[15px] font-light leading-[1.85]" style={{ color: 'var(--muted)' }}>
            <p>
              I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Priy Patel</strong>, a full stack developer
              with a passion for crafting web experiences that are fast, accessible, and thoughtfully designed.
            </p>
            <p>
              I work across the entire stack — from shaping APIs and data models to building the interfaces
              people actually use. I take pride in writing code that's clean, maintainable, and easy for
              others to build on.
            </p>
            <p>
              Right now I'm looking for my next challenge. If you're building something meaningful,{' '}
              <a href="#about" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
                let's talk
              </a>.
            </p>
          </div>
        </div>

        {/* Right — avatar + facts */}
        <div ref={rightRef} className="reveal flex flex-col gap-6">
          {/* Avatar placeholder */}
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shrink-0 text-[22px] sm:text-[26px] font-extrabold"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
            >
              P
            </div>
            <div>
              <div
                className="text-[17px] sm:text-[18px] font-bold tracking-[-0.02em]"
                style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
              >
                Priy
              </div>
              <div className="text-[13px] font-light" style={{ color: 'var(--muted)' }}>
                Full Stack Developer
              </div>
            </div>
          </div>

          {/* Fact grid */}
          <div className="grid grid-cols-2 gap-[8px]">
            {FACTS.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3"
                style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
              >
                <div className="text-[10px] uppercase tracking-[0.1em] mb-1" style={{ color: 'var(--muted2)' }}>
                  {label}
                </div>
                <div className="text-[13px] font-medium" style={{ color: 'var(--text)' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Current availability badge */}
          <div
            className="inline-flex items-center gap-2 self-start px-3 py-2 rounded-full text-[12px]"
            style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', color: '#4ade80' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
            Available for new projects
          </div>
        </div>
      </div>
    </section>
  );
}
