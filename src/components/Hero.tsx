import { Github, Linkedin, ArrowRight, ArrowDownToLine } from "lucide-react";

const terminalLines = [
  { indent: 0, content: <><span className="text-pink-400">const</span> <span className="text-blue-400">engineer</span> = {"{"}</> },
  { indent: 1, content: <><span className="text-slate-400">name:</span>       <span className="text-amber-300">"Vishwathma N"</span>,</> },
  { indent: 1, content: <><span className="text-slate-400">role:</span>       <span className="text-amber-300">"Software Engineer"</span>,</> },
  { indent: 1, content: <><span className="text-slate-400">stack:</span>      <span className="text-slate-500">{"["}</span><span className="text-emerald-400">"Angular"</span>, <span className="text-emerald-400">".NET"</span>, <span className="text-emerald-400">"React"</span><span className="text-slate-500">{"]"}</span>,</> },
  { indent: 1, content: <><span className="text-slate-400">domains:</span>    <span className="text-slate-500">{"["}</span><span className="text-indigo-400">"Full-Stack"</span>, <span className="text-indigo-400">"AI Apps"</span><span className="text-slate-500">{"]"}</span>,</> },
  { indent: 1, content: <><span className="text-slate-400">current:</span>    <span className="text-amber-300">"MRI Software"</span>,</> },
  { indent: 0, content: <><span className="text-slate-300">{"}"}</span>;</> },
  { indent: 0, content: <></>, spacer: true },
  { indent: 0, content: <><span className="text-slate-500">// CGPA: 9.35 / 10.0 — St. Joseph Engineering College</span></> },
  { indent: 0, content: <><span className="text-emerald-400">$</span> <span className="text-slate-300">git log --oneline -3</span></> },
  { indent: 0, content: <><span className="text-slate-500">e2b1f8d</span> <span className="text-slate-300">feat: Agora Voice Agent — MRI Software</span></> },
  { indent: 0, content: <><span className="text-slate-500">a4f2e01</span> <span className="text-slate-300">feat: AI-powered marine debris detection</span></> },
  { indent: 0, content: <><span className="text-slate-500">3e8a0f2</span> <span className="text-slate-300">feat: Application Studio — MRI Software</span></> },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] dark:bg-background pt-20 transition-colors duration-300"
      aria-label="Introduction"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 dot-grid opacity-60"
          style={{
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
        {/* Subtle blue glow — top left */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]" />
        {/* Subtle indigo glow — bottom right */}
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[80px]" />
      </div>

      <div className="section-container z-10 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Typography stack ── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">

            {/* Status label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 rounded-full animate-fade-up stagger-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-[0.1em]">
                Open to Opportunities
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3 animate-fade-up stagger-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-[1.08] tracking-[-0.03em]">
                Building software
                <br />
                <span className="text-blue-600 dark:text-blue-400">that ships.</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg animate-fade-up stagger-3">
              Software engineer with experience building enterprise web platforms
              at <strong className="text-slate-700 dark:text-slate-300 font-medium">MRI Software</strong> (C#/.NET, Angular)
              and AI-powered applications. Graduated with a B.E. in Computer Science from St. Joseph Engineering College with a 9.35 CGPA.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-up stagger-4">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/Vishwathma_N_Resume.pdf"
                download
                className="btn-outline"
              >
                Download Resume
                <ArrowDownToLine className="w-4 h-4" />
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2 animate-fade-up stagger-5">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Vishwathma2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub — Vishwathma2004"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-900 dark:hover:border-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/vishwathma-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn — Vishwathma N"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Terminal card ── */}
          <div className="lg:col-span-6 xl:col-span-5 hidden lg:block animate-fade-up stagger-3">
            <div className="relative group">
              {/* Glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Terminal window */}
              <div className="relative bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl shadow-slate-900/20">

                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8b949e] font-mono">
                    <span>engineer.ts</span>
                  </div>
                  <div className="w-14" />
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-[12.5px] leading-[1.85] text-[#c9d1d9] overflow-x-auto">
                  {terminalLines.map((line, i) => (
                    <div
                      key={i}
                      className={`flex ${line.spacer ? "h-3" : ""}`}
                    >
                      {/* Line number */}
                      <span className="select-none w-6 text-right mr-4 text-[#484f58] shrink-0 text-[11px]">
                        {!line.spacer ? i + 1 : ""}
                      </span>
                      {/* Indent */}
                      <span className="shrink-0" style={{ width: line.indent * 16 }} />
                      {/* Content */}
                      <span>{line.content}</span>
                    </div>
                  ))}
                  {/* Cursor */}
                  <div className="flex mt-1">
                    <span className="select-none w-6 text-right mr-4 text-[#484f58] text-[11px]">
                      {terminalLines.length + 1}
                    </span>
                    <span className="text-emerald-400">$</span>
                    {/* <span className="ml-2 text-slate-300">▋</span> */}
                    <span
                      className="cursor-blink w-[9px] h-[15px] bg-blue-400 ml-0.5 mt-0.5 inline-block"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-300 rounded-full" />
        <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-slate-400">
          scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;