import { useScrollReveal } from '../hooks/useScrollReveal';

const CONTACTS = [
  { label: 'Email', value: 'patelpriy29@gmail.com', href: 'mailto:patelpriy29@gmail.com' },
  { label: 'GitHub', value: 'github.com/priypatel', href: 'https://github.com/priypatel' },
  { label: 'LinkedIn', value: 'linkedin.com/in/priy-patel', href: 'https://linkedin.com/in/priy-patel-251688201' },
];

export default function About() {
  const headerRef = useScrollReveal();
  const textRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="about" className="relative z-[1] max-w-[1140px] mx-auto px-5 sm:px-8 pb-20 sm:pb-[120px]">
      <div
        ref={headerRef}
        className="reveal flex items-baseline justify-between mb-10 sm:mb-14 pt-16 sm:pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px,5vw,48px)', color: 'var(--text)' }}
        >
          Contact
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>05</span>
      </div>

      {/* Stack on mobile, side-by-side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
        <div
          ref={textRef}
          className="reveal text-[14px] sm:text-[15px] font-light leading-[1.85] space-y-4 sm:space-y-5"
          style={{ color: 'var(--muted)' }}
        >
          <p>
            I'm{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Priy Patel</strong> — a full stack
            developer with 2 years of hands-on experience building web products that work well and
            look even better.
          </p>
          <p>
            I care about{' '}
            <strong style={{ color: 'var(--text)', fontWeight: 500 }}>clean code</strong>, smart
            architecture, and shipping things that are actually useful. Currently looking for my
            next opportunity.
          </p>
          <p>
            When I'm not building, I'm learning — DSA, system design, new frameworks. Always
            improving.
          </p>
        </div>

        <div
          ref={cardRef}
          className="reveal rounded-[16px] sm:rounded-[20px] p-6 sm:p-8"
          style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
        >
          <div className="text-[11px] tracking-[0.1em] uppercase mb-4 sm:mb-5" style={{ color: 'var(--muted2)' }}>
            Get in touch
          </div>
          <div
            className="text-[20px] sm:text-[22px] font-bold tracking-[-0.02em] mb-5 sm:mb-6"
            style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
          >
            Let's work together
          </div>
          <div className="flex flex-col gap-[8px] sm:gap-[10px]">
            {CONTACTS.map(({ label, value, href }) => (
              <a key={label} href={href} className="contact-link">
                <div>
                  <div className="text-[11px]" style={{ color: 'var(--muted)' }}>{label}</div>
                  <div className="text-[13px]">{value}</div>
                </div>
                <span style={{ color: 'var(--muted2)' }}>↗</span>
              </a>
            ))}
            <a
              href="/Priy_Patel_Resume.pdf"
              download
              className="btn-primary inline-flex items-center justify-center text-[13px] font-medium px-6 py-3 rounded-xl mt-1"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
