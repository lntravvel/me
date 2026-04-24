import React from 'react';
import { LanguageProvider, useLanguage } from './i18n';
import logoImg from './assets/logo.png';
import heroTechBg from './assets/ai/hero-tech-bg.png';
import about1 from './assets/ai/about-1.png';
import about2 from './assets/ai/about-2.png';
import portfolioAiWidget from './assets/ai/portfolio-ai-widget.png';
import websiteXman from './assets/websites/xman.png';
import websitePyramid from './assets/websites/pyramid.png';
import { TypeAnimation } from 'react-type-animation';
import websiteAlShams from './assets/websites/alshams.png';
import { motion } from 'motion/react';
import { TechParticles } from './TechParticles';
import Tilt from 'react-parallax-tilt';

// Scroll Reveal Wrapper
export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const getDirectionalAnimation = (index: number) => {
  const directions = [
    { opacity: 0, x: -60, y: 0 },   // Left
    { opacity: 0, x: 0, y: 60 },    // Bottom
    { opacity: 0, x: 60, y: 0 },    // Right
    { opacity: 0, x: 0, y: -60 }    // Top
  ];
  return directions[index % 4];
};

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      fill="currentColor"
      d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.1 5.66 21.25 10.44 22v-6.99H7.9v-2.94h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.94h-2.34V22C18.34 21.25 22 17.1 22 12.07Z"
    />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      fill="currentColor"
      d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 .1 5.27.1 11.88c0 2.09.55 4.13 1.6 5.94L0 24l6.35-1.66a11.94 11.94 0 0 0 5.65 1.44h.01c6.63 0 11.9-5.27 11.9-11.88 0-3.18-1.24-6.17-3.39-8.42Zm-8.52 18.3h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.77.99 1.01-3.68-.24-.38a9.76 9.76 0 0 1-1.51-5.2C2.07 6.35 6.49 1.96 12 1.96c2.57 0 4.98 1 6.79 2.8a9.79 9.79 0 0 1 2.83 6.9c0 5.51-4.43 9.92-9.92 9.92Zm5.47-7.44c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.18-.24-.57-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.16 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.2-.57-.34Z"
    />
  </svg>
);

function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group cursor-pointer z-50">
          <img src={logoImg} alt="Kholy Digital" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-cover" />
          <span className="text-base sm:text-lg font-black tracking-tight">Kholy<span className="text-primary"> Digital</span></span>
        </a>
        <div className={`fixed inset-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl z-[45] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:static md:bg-transparent md:dark:bg-transparent md:flex-row md:gap-8 md:p-0 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#video-ads">{t.nav.portfolio}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#about">{t.nav.about}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#services">{t.nav.services}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#pricing">{t.nav.pricing}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#results">{t.nav.results}</a>
          <div className="flex items-center justify-center gap-4 md:border-x border-primary/20 md:px-4 z-[50] w-full">
            <button type="button" onClick={() => { setLang('en'); setIsMenuOpen(false); }} className={`px-4 py-2 text-lg md:text-xs font-bold transition-colors cursor-pointer ${lang === 'en' ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}>EN</button>
            <span className="text-primary text-lg md:text-xs">/</span>
            <button type="button" onClick={() => { setLang('ar'); setIsMenuOpen(false); }} className={`px-4 py-2 text-lg md:text-xs font-bold transition-colors cursor-pointer ${lang === 'ar' ? 'text-primary' : 'text-slate-500 hover:text-primary'}`}>AR</button>
          </div>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 md:px-6 md:py-2.5 rounded-full text-lg md:text-sm font-bold transition-all transform hover:scale-105 cursor-pointer"
          >
            {t.nav.contact}
          </a>
        </div>
        <button className="md:hidden text-primary z-50 relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const { t, lang } = useLanguage();
  const [spot, setSpot] = React.useState({ x: 50, y: 35 });

  const typingWords = lang === 'ar' 
    ? ["نمو مبيعاتك 🚀", 2000, "انتشار علامتك التجارية 🌟", 2000, "نتائج حقيقية 📈", 2000] 
    : ["Sales Growth 🚀", 2000, "Brand Awareness 🌟", 2000, "Real Results 📈", 2000];

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 md:py-28"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpot({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: `url(${heroTechBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <TechParticles />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-scanlines" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[25%] h-[25%] bg-cyan-500/15 rounded-full blur-[100px]"></div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 hero-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(100, 103, 242, 0.22), rgba(100, 103, 242, 0) 55%)`,
        }}
      />
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span> {t.hero.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
            {t.hero.title} <br className="hidden sm:block" />
            <TypeAnimation
              sequence={typingWords}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary inline-block min-w-[200px]"
            />
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center pt-2">
            <a
              href="#video-ads"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(100,103,242,0.5)] transition-all btn-neon text-lg"
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
                (e.currentTarget as HTMLElement).style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
            >
              {t.hero.btnWork}
              <span className="material-symbols-outlined rtl:rotate-0 ltr:rotate-180">arrow_back</span>
            </a>
            <a
              href="https://wa.me/201127718978"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-2 btn-neon text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
                (e.currentTarget as HTMLElement).style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
            >
              {t.hero.btnContact}
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-6 border-t border-primary/10 mt-6">
            {[{ icon: 'play_circle', val: '50+', label: t.hero.statsGrowth }, { icon: 'devices', val: '10+', label: 'مواقع و متاجر' }, { icon: 'groups', val: '15M+', label: 'وصول اجتماعي' }].map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <div>
                  <div className="text-xl font-black">{s.val}</div>
                  <div className="text-[11px] text-slate-500 font-bold uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Tech Marquee */}
      <div className="mt-16 w-full overflow-hidden border-y border-primary/10 bg-primary/5 py-3 sm:py-4 relative z-10">
        <div className="marquee-track flex items-center gap-8 sm:gap-16 opacity-70">
          {[...Array(2)].map((_, j) => (
            <React.Fragment key={j}>
              {['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'FFmpeg', 'OpenAI', 'Gemini', 'ElevenLabs', 'Claude', 'TypeScript', 'SEO', 'Meta Ads'].map((tech, i) => (
                <div key={`${j}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="material-symbols-outlined text-primary text-sm sm:text-base">verified</span>
                  <span className="font-bold text-sm sm:text-base">{tech}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <FadeIn className="py-12 sm:py-16 bg-slate-100 dark:bg-slate-950/80" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="h-48 bg-cover bg-center ai-tile hover-lift"
                style={{ backgroundImage: `url(${about1})` }}
              ></div>
              <div
                className="h-64 bg-cover bg-center ai-tile hover-lift"
                style={{ backgroundImage: `url(${heroTechBg})` }}
              ></div>
            </div>
            <div className="space-y-4 pt-12">
              <div
                className="h-64 bg-cover bg-center ai-tile hover-lift"
                style={{ backgroundImage: `url(${portfolioAiWidget})` }}
              ></div>
              <div
                className="h-48 bg-cover bg-center ai-tile hover-lift"
                style={{ backgroundImage: `url(${about2})` }}
              ></div>
            </div>
          </div>
          <div className="rounded-3xl bg-white/70 dark:bg-slate-900/65 border border-primary/10 p-5 sm:p-7">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.about.tag}</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-100 font-black mb-6 leading-tight">{t.about.title}</h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              {t.about.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6">
              {t.about.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="font-bold text-slate-800 dark:text-slate-100">{skill}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function Services() {
  const { t, lang } = useLanguage();
  const icons = ["play_circle", "share", "devices", "ads_click", "search_insights", "trending_up"];
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" id="services">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-scanlines" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-primary/20 rounded-full blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[110px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-3">{t.services.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black">{t.services.title}</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
          {t.services.items.map((item, i) => (
            <motion.div
              key={i}
              initial={getDirectionalAnimation(i)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <div className="glass-card p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-[2rem] cursor-default neon-border hover-lift group flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-8">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary shadow-[0_0_0_1px_rgba(100,103,242,0.10)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-shadow">
                    <span className="material-symbols-outlined text-[22px] sm:text-3xl">{icons[i]}</span>
                  </div>
                  <div className="text-primary/70 text-[10px] sm:text-xs font-black tracking-widest uppercase self-end sm:self-auto pt-1 sm:pt-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <h4 className="text-sm sm:text-lg md:text-xl font-black mb-2 sm:mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-primary/10 text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 mt-auto">
                  <span className="material-symbols-outlined text-xs sm:text-sm text-primary">bolt</span>
                  {lang === 'ar' ? 'نتائج قابلة للقياس + تنفيذ سريع' : 'Measurable Results + Fast Delivery'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceAdsSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden bg-slate-100 dark:bg-slate-950/85" id="ad-management">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-35" />
      <div className="pointer-events-none absolute -top-24 -left-24 w-[26rem] h-[26rem] bg-primary/20 rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[24rem] h-[24rem] bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-3">{t.performanceAds.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">{t.performanceAds.title}</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-100 max-w-3xl mx-auto leading-relaxed">
            {t.performanceAds.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 glass-card rounded-3xl p-6 sm:p-8 neon-border">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-2xl">ads_click</span>
              <h4 className="text-xl text-slate-900 dark:text-slate-100 font-black">{lang === 'ar' ? 'ماذا يشمل التنفيذ؟' : 'What is included?'}</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {t.performanceAds.points.map((point, i) => (
                <div key={i} className="rounded-2xl border border-primary/15 bg-white/60 dark:bg-slate-950/30 p-4 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                  <p className="text-sm text-slate-800 dark:text-slate-100 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8 neon-border flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
              <h4 className="text-xl text-slate-900 dark:text-slate-100 font-black">{lang === 'ar' ? 'النتائج المتوقعة' : 'Expected outcomes'}</h4>
            </div>
            <div className="space-y-3 mb-8">
              {t.performanceAds.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-800 dark:text-slate-100">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/201127718978"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-center transition-all hover:shadow-[0_0_30px_rgba(100,103,242,0.35)]"
            >
              {t.performanceAds.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebsitesIBuilt() {
  const { t } = useLanguage();
  const getWebsiteScreenshot = (title: string) => {
    if (title === 'Pyramids') return websitePyramid;
    if (title === 'XMan') return websiteXman;
    if (title === 'Al-Shams Furniture') return websiteAlShams;
    if (title === 'AI Nexus Hub') return portfolioAiWidget;
    return portfolioAiWidget;
  };
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" id="websites">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-35" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[110px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.websites.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-6">{t.websites.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t.websites.desc}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {t.websites.projects.map((site, index) => {
            const previewUrl = getWebsiteScreenshot(site.title);

            return (
              <motion.div
                key={index}
                initial={getDirectionalAnimation(index)}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col"
              >
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 cursor-pointer neon-border hover-lift flex flex-col h-full"
                >
                <div className="p-2 sm:p-3 md:p-4 pb-0">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden border border-primary/15 bg-slate-950/30">
                    <div className="h-6 sm:h-8 md:h-9 flex items-center justify-between px-2 md:px-3 border-b border-primary/10 bg-white/70 dark:bg-slate-950/40 backdrop-blur min-w-0 gap-2 md:gap-3">
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400/80" />
                        <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <div className="text-[8px] sm:text-[10px] md:text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate flex-1 min-w-0 text-left" dir="ltr">
                        {site.link.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-900">
                      <img
                        src={previewUrl}
                        alt={site.title}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/90 dark:bg-slate-950/70 backdrop-blur-sm text-primary font-black text-[8px] sm:text-[10px] md:text-[11px] px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-primary/15">
                        {site.category}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                  <h4 className="text-xs sm:text-base md:text-lg font-black tracking-tight mb-1 md:mb-2 group-hover:text-primary transition-colors">
                    {site.title}
                  </h4>
                  <p className="text-[10px] sm:text-[13px] md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow line-clamp-2 md:line-clamp-3">
                    {site.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 md:mt-4">
                    {site.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-100/80 dark:bg-slate-900/40 border border-primary/10 text-slate-600 dark:text-slate-300 text-[8px] sm:text-[10px] md:text-[11px] font-bold px-1.5 py-0.5 sm:px-2 md:px-2.5 md:py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 sm:mt-4 md:mt-6 pt-2 sm:pt-3 md:pt-5 border-t border-primary/10 text-[9px] sm:text-[10px] md:text-xs font-black text-primary flex items-center justify-between">
                    <span>افتح الموقع</span>
                    <span className="material-symbols-outlined text-[10px] sm:text-[12px] md:text-sm mb-0.5">open_in_new</span>
                  </div>
                </div>
              </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AIVideoShowcase() {
  const { t, lang } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);
  const [showAllCreative, setShowAllCreative] = React.useState(false);
  const [showAllEnglish, setShowAllEnglish] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Agency commercial ads - Vertical
  const commercialVertical = [
    { type: 'yt', id: 'QI9ROeA6FEE' },
    { type: 'fb', id: '1472681251240450' },
    { type: 'yt', id: '_EB5fRzWhhY' },
  ];
  // Agency commercial ads - Landscape (horizontal)
  const commercialLandscape = [
    { type: 'fb', id: '2358849327945161' },
    { type: 'fb', id: '1196649792393051' },
  ];
  // Creative works - Mix of FB & YouTube
  const creativeVideos = [
    { type: 'fb', id: '1211916704062377' }, // FB Reel
    { type: 'fb', id: '25488178070861283' }, // FB Reel
    { type: 'fb', id: '3843357899129439' }, // FB Reel
    { type: 'fb', id: '2359776037837161' }, // FB Reel
    { type: 'yt', id: '9UrwxO4C8TE' },
    { type: 'yt', id: 'bTKv6BfYec0' },
    { type: 'yt', id: '5OjOQ6ykHAs' },
    { type: 'yt', id: 'KPTgQjd_crk' },
    { type: 'yt', id: '0Wie5OCS6iI' },
    { type: 'yt', id: 'blBTGPGpdHY' },
    { type: 'yt', id: 'TYRUjMeQ4vU' },
    { type: 'yt', id: 'PILbptQAFfQ' },
    { type: 'yt', id: 'khIN9O_Qtnc' },
    { type: 'yt', id: 'ILQpbKpRUyw' },
    { type: 'yt', id: 'b4WyWk1bpkM' },
    { type: 'yt', id: 'n5DzAx6guRc' },
    { type: 'yt', id: '5OuHwlRx5hw' },
    { type: 'yt', id: 'GWlLfYCROhA' },
    { type: 'yt', id: 'ipX_80ISY2Q' },
    { type: 'yt', id: '3GqULo2NXk4' },
    { type: 'yt', id: 'DQS6UZcfLXo' },
  ];
  // English content - YouTube
  const englishVideos = [
    { type: 'yt', id: 'Q6OgKInJ_iA' },
    { type: 'yt', id: 'eqPAE9miB9I' },
    { type: 'yt', id: 'PevzmmcuaJQ' },
    { type: 'yt', id: 'yLfHh83FXbY' },
    { type: 'yt', id: 'S6xk7pVQZTs' },
    { type: 'yt', id: 'qV-mjR78Fqc' },
  ];

  const visibleCreativeVideos = isMobile && !showAllCreative ? creativeVideos.slice(0, 8) : creativeVideos;
  const visibleEnglishVideos = isMobile && !showAllEnglish ? englishVideos.slice(0, 4) : englishVideos;

  const VideoEmbed = ({ video, landscape = false, index = 0 }: { video: { type: string; id: string }; landscape?: boolean; index?: number }) => {
    const aspectClass = landscape ? 'aspect-video' : 'aspect-[9/16]';
    const staggerDelay = (index % 5) * 0.15;

    if (video.type === 'yt') {
      return (
        <motion.div 
          initial={getDirectionalAnimation(index)}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: staggerDelay, ease: "easeOut" }}
          className={`${aspectClass} rounded-2xl overflow-hidden bg-slate-900 border border-primary/15 shadow-[0_10px_25px_rgba(2,6,23,0.35)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.45)] transition-shadow`}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>
      );
    }

    // Use exact Facebook embed format based on orientation
    const fbSrc = landscape
      ? `https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}%2F&show_text=false&width=560&t=0`
      : `https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}%2F&show_text=false&width=267&t=0`;

    return (
      <motion.div 
        initial={getDirectionalAnimation(index)}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: staggerDelay, ease: "easeOut" }}
        className={`${aspectClass} rounded-2xl overflow-hidden bg-slate-900 border border-primary/15 relative group shadow-[0_10px_25px_rgba(2,6,23,0.35)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.45)] transition-shadow`}
      >
        <iframe
          src={fbSrc}
          title="Facebook video"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden' }}
        />
        <a
          href={`https://www.facebook.com/reel/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 bg-[#1877F2] text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          title="Open on Facebook"
        >
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </motion.div>
    );
  };

  return (
    <FadeIn className="relative py-16 sm:py-24 overflow-hidden" id="video-ads">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-primary/20 rounded-full blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[110px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-3">{t.videoShowcase.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">{t.videoShowcase.title}</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.videoShowcase.desc}
          </p>
        </div>

        {/* Commercial Ads - Vertical Reels */}
        <div className="mb-10 glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.commercialTag}</h4>
          </div>
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {commercialVertical.map((video, i) => (
              <VideoEmbed key={`cv-${i}`} video={video} index={i} />
            ))}
          </div>
        </div>

        {/* Commercial Ads - Landscape */}
        <div className="mb-10 glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">desktop_windows</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.adVideosTag}</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {commercialLandscape.map((video, i) => (
              <VideoEmbed key={`cl-${i}`} video={video} landscape index={i} />
            ))}
          </div>
        </div>


        {/* Creative Works - Vertical */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.creativeTag}</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {visibleCreativeVideos.map((video, i) => (
              <VideoEmbed key={`cr-${i}`} video={video} index={i} />
            ))}
          </div>
          {isMobile && creativeVideos.length > 8 && (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllCreative((prev) => !prev)}
                className="px-5 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20"
              >
                {showAllCreative ? (lang === 'ar' ? 'عرض أقل' : 'Show less') : (lang === 'ar' ? 'عرض المزيد' : 'Show more')}
              </button>
            </div>
          )}
        </div>

        {/* English Content */}
        <div className="mt-10 glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">language</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.englishTag}</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {visibleEnglishVideos.map((video, i) => (
              <VideoEmbed key={`en-${i}`} video={video} index={i} />
            ))}
          </div>
          {isMobile && englishVideos.length > 4 && (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllEnglish((prev) => !prev)}
                className="px-5 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20"
              >
                {showAllEnglish ? (lang === 'ar' ? 'عرض أقل' : 'Show less') : (lang === 'ar' ? 'عرض المزيد' : 'Show more')}
              </button>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

function Results() {
  const { t } = useLanguage();
  return (
    <FadeIn className="py-14 sm:py-16 bg-primary text-white overflow-hidden relative" id="results">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {t.results.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-primary-100/70 font-bold uppercase tracking-widest text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Testimonials() {
  const { t } = useLanguage();
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCmGz5UxquHVnFVuaolpuoMlvk7vplmP7vOkh_-3FJWYZSaaQvmDn6kYm1bjoHELITB03PsabwUXSOLsLIlcop5n9iqStWNgNN_nq1-psI2j1DS6i4BrUypzaYDeSZdD7-GRJLUSoquTQWHxqBL2XYv6uv_Mf2WbTx-w56fOvF7zCp-PuXCmKwxbZKsdEF3iY4h2rVOD2uY2X3uUdoenWx5_wVgqoAVRHfDpa6-HEtKTiXlUq-wzgm-SxXZxbA_FgKsxS9_DiMjTc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzEOuTKADzgl-tzOVRdTsrgLRjuv3jq8w_MGgsXqfQW5S9Uo12dh-Pf3NXG_riMJpNubpq7Eb5ip05RF6poqIwBnpX0TnMx2wLJOYymFXkbWEyXv73u_aLHHA23BOtejLlHlDucqIXSuLCL6KNbRzYZeALDrdrdPEFDrYUyqXlwhp8pPA537yWagg2GkYT-H6rjkGg4z47OsFRCf57n7ZDy0d0gngJrS7vxn75bCCuUFeQp145YHtN27WWZ7dl4qGuWGpRsHTKWtE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxSRkbjEUDTPXhfntxC1MD146ViHtZl3Pi_wagWW8gavSRyZ3uwiFpHEyQylSOpGEr14E7IituVV5xfvLT4WqPn3oG8LGEgl3VZksWrKRKaX5G1GwhfpRB_zwCmLtu1L-25q6gzMme2hlIiEC28A0n8CL_okbQVIkJuxO8rEL6hUMuA5dG0ln2FhJjKbZUqUh3x2DtmH7W1zuPCdMh4gNkJDsP1Y1RCyvRwtRm-sULwhsHWDFc57diEjkRYYOZJKu54DgMTQF63ZM"
  ];
  return (
    <FadeIn className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.testimonials.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black">{t.testimonials.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={getDirectionalAnimation(i)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="glass-card p-5 sm:p-7 md:p-10 rounded-3xl relative"
            >
              <span className="material-symbols-outlined text-primary text-5xl md:text-6xl opacity-20 absolute top-4 right-5 sm:right-8">format_quote</span>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic mb-6 sm:mb-8 leading-relaxed mt-4 sm:mt-0 relative z-10 w-full whitespace-normal">"{item.quote}"</p>
              <div className="flex items-center gap-4 border-t border-primary/10 pt-5">
                <img className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" src={images[i]} alt={item.name} referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 uppercase font-medium">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Contact() {
  const { t, lang } = useLanguage();
  return (
    <FadeIn className="py-12 sm:py-16 bg-slate-100 dark:bg-slate-950/80" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-slate-100 font-black mb-3">{t.contact.title}</h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 max-w-xl mx-auto">{t.contact.desc}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-8">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/201127718978"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-4 sm:p-8 flex flex-col items-center text-center gap-3 sm:gap-4 group hover:shadow-[0_0_40px_rgba(34,197,94,0.2)] transition-all neon-border cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/15 border border-green-500/25 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black mb-1 group-hover:text-green-500 transition-colors">{lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300" dir="ltr">01127718978</p>
              <p className="text-xs text-green-500 font-bold mt-2">{lang === 'ar' ? 'رد فوري خلال دقائق ⚡' : 'Instant reply within minutes ⚡'}</p>
            </div>
          </a>

          {/* Email CTA */}
          <a
            href="mailto:info@kholy.co"
            className="glass-card rounded-2xl p-4 sm:p-8 flex flex-col items-center text-center gap-3 sm:gap-4 group hover:shadow-[0_0_40px_rgba(100,103,242,0.2)] transition-all neon-border cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px] sm:text-3xl">mail</span>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black mb-1 group-hover:text-primary transition-colors">{lang === 'ar' ? 'أرسل بريد إلكتروني' : 'Send an Email'}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 break-all">info@kholy.co</p>
              <p className="text-xs text-primary font-bold mt-2">{lang === 'ar' ? 'رد خلال 24 ساعة 📩' : 'Reply within 24 hours 📩'}</p>
            </div>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            className="w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"
            href="https://www.facebook.com/profile.php?id=61569741423866"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            className="w-11 h-11 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
            href="https://wa.me/201127718978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

function Pricing() {
  const { t } = useLanguage();
  return (
    <FadeIn className="relative py-12 sm:py-16 overflow-hidden bg-slate-50 dark:bg-slate-900/30" id="pricing">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-35" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-3">{t.pricing.tag}</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">{t.pricing.title}</h3>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t.pricing.desc}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {t.pricing.packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={getDirectionalAnimation(i)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="h-full"
            >
              <Tilt 
                tiltMaxAngleX={6} 
                tiltMaxAngleY={6} 
                scale={1.01} 
                transitionSpeed={2000}
                className={`glass-card rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col h-full relative overflow-hidden ${i === 1 ? 'pricing-popular transform md:-translate-y-4 shadow-[0_20px_40px_rgba(100,103,242,0.15)]' : ''}`}
              >
                {i === 1 && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                    {t.pricing.popular}
                  </div>
                )}
                <h4 className="text-lg sm:text-xl font-black mb-2">{pkg.name}</h4>
                <div className="flex items-baseline gap-1 mb-4 sm:mb-6 border-b border-primary/10 pb-4 sm:pb-6">
                  <span className="text-3xl sm:text-4xl font-black text-primary">{pkg.price}</span>
                  <span className="text-sm text-slate-500 font-bold">{t.pricing.currency}</span>
                </div>
                
                <ul className="space-y-3 mb-6 sm:mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] sm:text-sm">
                      <span className="material-symbols-outlined text-green-500 text-lg shrink-0">check_circle</span>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://wa.me/201127718978" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all mt-auto ${i === 1 ? 'bg-primary text-white hover:shadow-[0_0_20px_rgba(100,103,242,0.4)]' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
                >
                  {t.pricing.cta}
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 sm:py-10 border-t border-primary/10 bg-white/40 dark:bg-slate-950/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-sm">
        <div className="text-slate-600 dark:text-slate-400 font-bold">
          © {new Date().getFullYear()} Kholy Digital
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a className="hover:text-primary transition-colors font-bold" href="#">{t.footer.privacy}</a>
          <a className="hover:text-primary transition-colors font-bold" href="#">{t.footer.terms}</a>
          <a className="hover:text-primary transition-colors font-bold" href="#contact">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div id="top" className="min-h-screen overflow-x-hidden">
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            @media (max-width: 768px) {
              .hover-lift {
                transform: none !important;
              }
              .hover-lift:hover {
                transform: none !important;
                box-shadow: inherit !important;
              }
            }
          `}
        </style>
        <Navbar />
        <Hero />
        <PerformanceAdsSection />
        <AIVideoShowcase />
        <WebsitesIBuilt />
        <Pricing />
        <About />
        <Services />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/201127718978"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:shadow-[0_4px_30px_rgba(34,197,94,0.7)] transition-all hover:scale-110 animate-bounce-slow"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>
    </LanguageProvider>
  );
}
