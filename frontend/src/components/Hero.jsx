export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex flex-col justify-center pt-[120px] pb-20 max-w-[820px] mx-auto px-8"
    >
      <div
        className="anim-1 flex items-center gap-2 text-xs font-medium uppercase mb-10"
        style={{ letterSpacing: '0.12em', color: 'var(--muted)' }}
      >
        <span className="w-6 h-px block" style={{ background: 'var(--muted2)' }} />
        Full Stack Developer · 2 Years
      </div>

      <h1
        className="anim-2 font-extrabold leading-[0.92] tracking-[-0.04em] mb-8"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(56px, 10vw, 96px)',
          color: 'var(--text)',
        }}
      >
        Priy<br />
        <span style={{ color: 'var(--muted2)' }}>Builds</span><br />
        <span style={{ color: 'var(--muted2)' }}>for</span> Web.
      </h1>

      <p
        className="anim-3 text-[17px] font-light max-w-[480px] leading-[1.75] mb-[52px]"
        style={{ color: 'var(--muted)' }}
      >
        I build{' '}
        <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
          fast, clean, and purposeful
        </strong>{' '}
        web applications — from pixel-perfect UIs to resilient backend systems.
        Currently open to new opportunities.
      </p>

      <div className="anim-4 flex gap-3 flex-wrap">
        <a
          href="#projects"
          className="btn-primary inline-flex items-center gap-2 text-[13px] font-medium px-6 py-[11px] rounded-full"
        >
          View Work ↓
        </a>
        <a
          href="#about"
          className="btn-ghost inline-flex items-center gap-2 text-[13px] font-medium px-6 py-[11px] rounded-full"
        >
          Get in Touch
        </a>
      </div>

      <div
        className="anim-5 absolute bottom-10 left-8 flex items-center gap-[10px] text-[11px] uppercase"
        style={{ letterSpacing: '0.1em', color: 'var(--muted2)' }}
      >
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
