import { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EXPERIENCE = [
  {
    year: 'June 2025 — Feb 2026',
    role: 'Junior Software Engineer',
    company: 'Ninand Techserve LLP · Ahmedabad, India',
    desc: 'Built role-based modules, OTP verification flows, and middleware-protected routes to automate internal processes, enhance access control, and improve platform-wide security. Integrated REST APIs with streamlined database interactions, reducing redundant calls and improving application responsiveness across high-usage modules. Enhanced system performance through React.js optimization, improved state management, and responsive design across devices.',
    tags: ['React.js', 'Node.js', 'REST API', 'Role-Based Auth', 'OTP Flows', 'State Management'],
  },
  {
    year: 'Jul 2024 — May 2025',
    role: 'Junior Software Engineer',
    company: 'Zimbs Technology LLP · Ahmedabad, India',
    desc: 'Contributed to full-stack development using React, Node.js, Express, MongoDB, and Mongoose — supporting feature expansion and strengthening the overall application foundation. Built structured CRUD operations and REST API flows that improved data reliability and ensured smoother interactions across modules. Applied Express middleware for validation, routing control, and request handling, resulting in more predictable backend behavior and secure service communication.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API'],
  },
  {
    year: 'Jan 2024 — Apr 2024',
    role: 'Web Developer Intern',
    company: 'Verifast Technologies India Pvt. Ltd. · Ahmedabad, India',
    desc: 'Designed and developed the company\'s official website using WordPress, contributing to increased online traffic and improved user engagement. Applied responsive design principles to deliver a seamless experience across desktop and mobile. Worked closely with the design and marketing teams to translate business goals into clean, functional web solutions.',
    tags: ['WordPress', 'Responsive Design', 'HTML/CSS', 'Team Collaboration'],
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
    <section id="experience" className="relative z-[1] max-w-[820px] mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        ref={headerRef}
        className="reveal flex items-baseline justify-between mb-10 sm:mb-14 pt-16 sm:pt-24"
      >
        <h2
          className="font-bold tracking-[-0.03em]"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px,5vw,48px)', color: 'var(--text)' }}
        >
          Experience
        </h2>
        <span className="text-[11px] tracking-[0.1em]" style={{ color: 'var(--muted2)' }}>03</span>
      </div>

      <div ref={listRef} className="flex flex-col">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={i}
            className="exp-item exp-item-grid py-6 sm:py-8"
            style={{
              borderBottom: '1px solid var(--border)',
              ...(i === 0 ? { borderTop: '1px solid var(--border)' } : {}),
            }}
          >
            {/* Year — hidden on mobile, shown above role instead */}
            <div className="text-[12px] pt-1 tracking-[0.04em]" style={{ color: 'var(--muted)' }}>
              {exp.year}
            </div>

            <div>
              {/* Show year inline on mobile */}
              <div
                className="text-[11px] tracking-[0.04em] mb-2 sm:hidden"
                style={{ color: 'var(--muted)' }}
              >
                {exp.year}
              </div>
              <div
                className="text-[16px] sm:text-[18px] font-semibold tracking-[-0.02em] mb-1"
                style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text)' }}
              >
                {exp.role}
              </div>
              <div className="text-[13px] mb-3 sm:mb-[14px]" style={{ color: 'var(--muted)' }}>
                {exp.company}
              </div>
              <div className="text-[13px] sm:text-[14px] font-light leading-[1.75]" style={{ color: 'var(--muted)' }}>
                {exp.desc}
              </div>
              <div className="flex flex-wrap gap-[6px] mt-3 sm:mt-4">
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
