import React, { useState } from "react";
import { Eye, GitBranch, Star, AlertCircle, Package, Zap, Shield, Code, Terminal, ChevronRight, ExternalLink, Download, Chrome, Github } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-400/25 via-teal-400/15 to-teal-400/10 blur-[80px] pointer-events-none opacity-70" />
    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-sky-400/20 via-sky-400/10 to-teal-400/5 blur-[100px] pointer-events-none opacity-50" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div className="animate-fade-up delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/45 bg-gradient-to-r from-teal-400/15 to-teal-400/10 backdrop-blur-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <span className="text-xs font-mono text-teal-400 tracking-wider uppercase">Chrome Extension</span>
      </div>

      <h1 className="animate-fade-up delay-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[0.95] tracking-tight mb-6">
        <span className="text-white">Repo</span>
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Visualizer</span>
      </h1>

      <p className="animate-fade-up delay-3 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Instantly surface <span className="text-sky-300 font-semibold">project health</span>, tech stack & insights directly on GitHub repos — <span className="text-sky-400 font-semibold">no friction</span>.
      </p>

      <div className="animate-fade-up delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#installation" className="group flex items-center gap-2 px-8 py-4 bg-sky-400 text-slate-950 font-display font-bold rounded-lg hover:shadow-lg hover:shadow-sky-400/40 transition-all duration-300">
          <Download className="w-5 h-5" />
          Get Started
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="#features" className="flex items-center gap-2 px-8 py-4 border border-sky-400/45 text-sky-400 font-display font-semibold rounded-lg hover:bg-sky-400/10 hover:border-sky-400/70 transition-all duration-300">
          <Eye className="w-5 h-5" />
          Explore Features
        </a>
      </div>

      <div className="animate-fade-up delay-6 mt-20 max-w-lg mx-auto">
        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">Repository Health</span>
            <span className="text-[10px] font-mono text-slate-400">Dec 22, 2025</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="p-3 bg-gradient-to-br from-sky-400/15 to-teal-400/8 rounded-lg border border-sky-400/25">
              <div className="flex items-center gap-1.5 mb-1">
                <Star className="w-4 h-4 text-sky-400" />
                <span className="font-mono text-xs text-slate-400">Stars</span>
              </div>
              <span className="font-bold text-lg text-sky-400">2.4k</span>
            </div>
            <div className="p-3 bg-gradient-to-br from-teal-400/15 to-teal-400/8 rounded-lg border border-teal-400/25">
              <div className="flex items-center gap-1.5 mb-1">
                <AlertCircle className="w-4 h-4 text-teal-400" />
                <span className="font-mono text-xs text-slate-400">Issues</span>
              </div>
              <span className="font-bold text-lg text-teal-400">18</span>
            </div>
          </div>
          <div className="pt-4 border-t border-sky-400/10">
            <span className="text-xs text-slate-400 block mb-2 font-mono">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "Vite"].map(t => (
                <span key={t} className="px-2.5 py-1 bg-gradient-to-r from-sky-400/20 to-teal-400/15 border border-sky-400/25 rounded text-xs font-mono text-sky-400">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  { icon: Star, title: "Live Stats", desc: "Stars, forks, open issues — all at a glance without navigating away." },
  { icon: Package, title: "Tech Detection", desc: "Reads package.json to auto-detect React, Tailwind, Next.js, Vite, and more." },
  { icon: Zap, title: "Zero-Click UX", desc: "Card injects itself into the repo page. No popups, no buttons, no friction." },
  { icon: Shield, title: "Privacy First", desc: "No tracking. No data collection. Runs entirely in your browser." },
  { icon: GitBranch, title: "SPA Aware", desc: "Handles GitHub's internal navigation with MutationObserver." },
  { icon: Code, title: "Open Source", desc: "Fully transparent codebase. Fork it, customize it, make it yours." },
];

const Features = () => (
  <section id="features" className="py-24 sm:py-32 px-6 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="animate-fade-in inline-block font-mono text-xs text-sky-400 tracking-widest uppercase mb-4">✨ Features</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
          Powerful insights,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">zero complexity.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={f.title} className={`group p-6 bg-slate-900/40 border border-sky-400/25 rounded-xl hover:border-sky-400/50 hover:bg-slate-800/50 transition-all duration-300 animate-fade-up delay-${i + 1} backdrop-blur-sm`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/25 to-teal-400/15 text-sky-400 mb-4 group-hover:from-sky-400/35 group-hover:to-teal-400/25 transition-all">
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const steps = [
  { num: "01", title: "Install Extension", desc: "Add Repo Visualizer to Chrome or any Chromium browser." },
  { num: "02", title: "Visit Any Repo", desc: "Navigate to any GitHub repository page as you normally would." },
  { num: "03", title: "Instant Insights", desc: "The health card appears automatically above the file list." },
];

const HowItWorks = () => (
  <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-slate-900/30 to-slate-950">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-4 block">⚡ How it works</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
          Simple. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Effortless.</span>
        </h2>
      </div>

      <div className="space-y-4">
        {steps.map((s, i) => (
          <div key={s.num} className={`group flex gap-6 p-6 rounded-xl border border-sky-400/25 bg-slate-900/40 hover:bg-slate-800/60 hover:border-sky-400/45 transition-all duration-300 animate-fade-up delay-${i + 2} backdrop-blur-sm`}>
            <div className="flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/30 to-teal-400/20 text-sky-400 font-display font-bold text-xl">{s.num}</div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-display font-bold text-white mb-1">{s.title}</h3>
              <p className="text-sm text-slate-300">{s.desc}</p>
            </div>
            <ChevronRight className="flex-shrink-0 w-5 h-5 text-sky-400/30 group-hover:text-sky-400/60 transition-colors self-center" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Installation = () => (
  <section id="installation" className="py-24 sm:py-32 px-6 bg-slate-950">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-4 block">🚀 Installation</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
          Get up <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">and running</span><br />in seconds.
        </h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/45 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-sky-400/35 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-sky-400" />
            </div>
            <span className="font-mono text-sm font-bold text-sky-400">terminal</span>
          </div>
          <pre className="font-mono text-sm text-white overflow-x-auto bg-slate-950/50 p-4 rounded-lg border border-sky-400/15">
            <code>
{`# Clone the repo
git clone https://github.com/user/repo-visualizer.git
cd repo-visualizer

# Install deps
npm install

# Build extension
npm run build`}
            </code>
          </pre>
        </div>

        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/45 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-teal-400/35 flex items-center justify-center">
              <Chrome className="w-5 h-5 text-teal-400" />
            </div>
            <span className="font-mono text-sm font-bold text-teal-400">chrome setup</span>
          </div>
          <ol className="space-y-3 text-sm text-slate-300 font-mono">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold shrink-0 w-6">1.</span>
              <span>Open <code className="text-sky-400 bg-sky-400/10 px-2 py-1 rounded border border-sky-400/25">chrome://extensions</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold shrink-0 w-6">2.</span>
              <span>Enable <strong className="text-teal-400">Developer mode</strong> (top-right toggle)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold shrink-0 w-6">3.</span>
              <span>Click <strong className="text-teal-400">Load unpacked</strong> → select <code className="text-sky-400 bg-sky-400/10 px-2 py-1 rounded border border-sky-400/25">dist/</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 font-bold shrink-0 w-6">4.</span>
              <span>Visit any GitHub repo — instant insights!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
);

const techStack = [
  { name: "React", desc: "Component UI" },
  { name: "TypeScript", desc: "Type safety" },
  { name: "WXT", desc: "Extension framework" },
  { name: "Tailwind CSS", desc: "Styling" },
  { name: "GitHub API", desc: "Data source" },
  { name: "Shadow DOM", desc: "CSS isolation" },
];

const TechStack = () => (
  <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900/30">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-4 block">🛠 Built with</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
          Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">tech stack.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {techStack.map((t, i) => (
          <div key={t.name} className={`group p-4 bg-slate-900/50 border border-sky-400/25 rounded-xl text-center hover:border-sky-400/50 hover:bg-slate-800/80 transition-all duration-300 animate-fade-up delay-${i + 1} backdrop-blur-sm cursor-default`}>
            <span className="block font-mono text-sm font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-1 group-hover:from-teal-400 group-hover:to-sky-400 transition-all">{t.name}</span>
            <span className="text-xs text-slate-300">{t.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ApiReference = () => (
  <section id="api" className="py-24 sm:py-32 px-6 bg-slate-950">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs text-sky-400 tracking-widest uppercase mb-4 block">📚 API Reference</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white">
          Under the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">hood.</span>
        </h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/45 transition-all">
          <h3 className="font-mono text-sm font-bold text-sky-400 mb-3">useGitHubData(owner, repo)</h3>
          <p className="text-sm text-slate-300 mb-4">Custom hook that fetches repository stats and detects tech stack from package.json.</p>
          <div className="font-mono text-xs text-slate-400 space-y-2 bg-slate-950/50 p-4 rounded-lg border border-sky-400/15">
            <div><span className="text-teal-400">Returns:</span> <span className="text-sky-400">{"{ data, loading }"}</span></div>
            <div><span className="text-teal-400">data.stars</span> — stargazers count</div>
            <div><span className="text-teal-400">data.issues</span> — open issues count</div>
            <div><span className="text-teal-400">data.tech</span> — detected frameworks array</div>
            <div><span className="text-teal-400">data.lastUpdate</span> — last push date</div>
          </div>
        </div>

        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/45 transition-all">
          <h3 className="font-mono text-sm font-bold text-teal-400 mb-3">detectTechStack(dependencies)</h3>
          <p className="text-sm text-slate-300 mb-4">Maps package.json dependencies to human-readable tech names.</p>
          <div className="font-mono text-xs text-slate-400 bg-slate-950/50 p-4 rounded-lg border border-sky-400/15">
            <span className="text-cyan-400">Detects:</span> <span className="text-sky-400">React, Tailwind, TypeScript, Next.js, Vite, MongoDB, Firebase, Framer Motion, Prisma, Lucide</span>
          </div>
        </div>

        <div className="p-6 bg-slate-900/60 border border-sky-400/25 rounded-xl backdrop-blur-sm hover:border-sky-400/45 transition-all">
          <h3 className="font-mono text-sm font-bold text-cyan-400 mb-3">SummaryCard</h3>
          <p className="text-sm text-slate-300">Main component injected into GitHub pages via Shadow DOM. Listens for SPA navigation using MutationObserver.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-sky-400/15 bg-gradient-to-r from-sky-400/10 to-teal-400/5 bg-slate-950">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-teal-400 flex items-center justify-center">
          <Eye className="w-5 h-5 text-slate-950" />
        </div>
        <span className="font-display font-bold text-white">Repo Visualizer</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/calvintakasi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
          <Github className="w-5 h-5" />
        </a>
        <span className="text-xs text-slate-400 font-mono">Developed By <span><a href="https://www.github.com/calvintakasi" target="_blank" rel="noopener noreferrer">calvintakasi</a></span></span>
      </div>
    </div>
  </footer>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-sky-400/15">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-teal-400 flex items-center justify-center">
            <Eye className="w-4.5 h-4.5 text-slate-950" />
          </div>
          <span className="font-display font-bold text-white text-sm">Repo Visualizer</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "Installation", "API"].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-mono text-xs text-slate-300 hover:text-sky-400 transition-colors tracking-wider uppercase">{link}</a>
          ))}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-400/20 to-teal-400/15 border border-sky-400/45 rounded-lg font-mono text-xs text-sky-400 hover:from-sky-400/30 hover:to-teal-400/25 hover:border-sky-400/60 transition-all">
            <Github className="w-3.5 h-3.5" />
            GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-300 hover:text-sky-400 transition-colors" aria-label="Toggle menu">
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-sky-400/10 bg-slate-950/95 backdrop-blur-md animate-fade-in">
          <div className="px-6 py-6 space-y-4">
            {["Features", "Installation", "API"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block font-mono text-sm text-slate-300 hover:text-sky-400 transition-colors tracking-wider uppercase">{link}</a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Index = () => (
  <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-sky-400/30">
    <Navbar />
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Installation />
      <TechStack />
      <ApiReference />
    </main>
    <Footer />
  </div>
);

export default Index;