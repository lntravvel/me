import React from 'react';
import { LanguageProvider, useLanguage } from './i18n';
import profileImg from './assets/profile.png';
import heroTechBg from './assets/ai/hero-tech-bg.png';
import about1 from './assets/ai/about-1.png';
import about2 from './assets/ai/about-2.png';
import portfolioAiWidget from './assets/ai/portfolio-ai-widget.png';
import websiteXman from './assets/websites/xman.png';
import websitePyramid from './assets/websites/pyramid.png';
import websiteAlShams from './assets/websites/alshams.png';

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
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white">rocket_launch</span>
          </div>
          <span className="text-xl font-black tracking-tighter">{lang === 'ar' ? 'مصطفى ' : 'Mostafa '}<span className="text-primary">{lang === 'ar' ? 'الخولي' : 'Elkholy'}</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#about">{t.nav.about}</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">{t.nav.services}</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">{t.nav.portfolio}</a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#results">{t.nav.results}</a>
          <div className="flex items-center gap-4 mx-4 border-x border-primary/20 px-4">
            <button onClick={() => setLang('en')} className={`text-xs font-bold transition-colors ${lang === 'en' ? 'text-primary' : 'hover:text-primary'}`}>EN</button>
            <span className="text-primary text-xs">/</span>
            <button onClick={() => setLang('ar')} className={`text-xs font-bold transition-colors ${lang === 'ar' ? 'text-primary' : 'hover:text-primary'}`}>AR</button>
          </div>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105"
          >
            {t.nav.contact}
          </a>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useLanguage();
  const [spot, setSpot] = React.useState({ x: 50, y: 35 });
  return (
    <section
      className="relative overflow-hidden pt-20 pb-32"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpot({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage: `url(${heroTechBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-tech-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-scanlines" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[100px]"></div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 hero-spotlight"
        style={{
          background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, rgba(100, 103, 242, 0.22), rgba(100, 103, 242, 0) 55%)`,
        }}
      />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span> {t.hero.badge}
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(100,103,242,0.4)] transition-all btn-neon"
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
              className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all flex items-center gap-2 btn-neon"
              onMouseMove={(e) => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                (e.currentTarget as HTMLElement).style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
                (e.currentTarget as HTMLElement).style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
              }}
            >
              {t.hero.btnContact}
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 neon-border hover-lift">
            <div 
              className="w-full h-full rounded-2xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center"
              style={{
                backgroundImage: `url(${profileImg})`,
                backgroundPosition: '50% 18%',
              }}
              role="img"
              aria-label="Profile photo"
            ></div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div>
              <div className="text-2xl font-bold">145%</div>
              <div className="text-xs text-slate-500 uppercase font-bold">{t.hero.statsGrowth}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/30" id="about">
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
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.about.tag}</h2>
            <h3 className="text-4xl font-black mb-6 leading-tight">{t.about.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              {t.about.desc}
            </p>
            <div className="grid grid-cols-2 gap-y-6">
              {t.about.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">check_circle</span><span className="font-bold">{skill}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useLanguage();
  const icons = ["devices", "search_insights", "ads_click", "share_reviews", "smart_toy", "query_stats"];
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="services">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-scanlines" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-primary/20 rounded-full blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[110px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.services.tag}</h2>
          <h3 className="text-4xl font-black">{t.services.title}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {t.services.items.map((item, i) => (
            <div key={i} className="glass-card p-6 sm:p-8 md:p-10 rounded-3xl cursor-default neon-border hover-lift group flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary shadow-[0_0_0_1px_rgba(100,103,242,0.10)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition-shadow">
                  <span className="material-symbols-outlined text-[28px] sm:text-3xl">{icons[i]}</span>
                </div>
                <div className="text-primary/70 text-xs font-black tracking-widest uppercase pt-2">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              <h4 className="text-lg sm:text-xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                {item.desc}
              </p>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-primary/10 text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">bolt</span>
                نتائج قابلة للقياس + تنفيذ سريع
              </div>
            </div>
          ))}
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
    return portfolioAiWidget;
  };
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="websites">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-35" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[110px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.websites.tag}</h2>
          <h3 className="text-4xl font-black mb-6">{t.websites.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {t.websites.desc}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {t.websites.projects.map((site, index) => {
            const previewUrl = getWebsiteScreenshot(site.title);
            
            return (
            <a
              key={index}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl overflow-hidden group transition-all duration-500 cursor-pointer neon-border hover-lift flex flex-col"
            >
              <div className="p-3 sm:p-4 pb-0">
                <div className="rounded-2xl overflow-hidden border border-primary/15 bg-slate-950/30">
                  <div className="h-9 flex items-center justify-between px-3 border-b border-primary/10 bg-white/70 dark:bg-slate-950/40 backdrop-blur min-w-0 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate flex-1 min-w-0 text-left" dir="ltr">
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
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-950/70 backdrop-blur-sm text-primary font-black text-[11px] px-3 py-1.5 rounded-full border border-primary/15">
                      {site.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-black tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {site.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow line-clamp-3">
                  {site.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {site.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100/80 dark:bg-slate-900/40 border border-primary/10 text-slate-600 dark:text-slate-300 text-[11px] font-bold px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-primary/10 text-xs font-black text-primary flex items-center justify-between">
                  <span>افتح الموقع</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </div>
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.portfolio.tag}</h2>
            <h3 className="text-4xl font-black">{t.portfolio.title}</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {t.portfolio.filters.map((filter, i) => (
              <button key={i} className={`px-6 py-2 rounded-full border font-bold text-sm transition-all ${i === 0 ? 'border-primary bg-primary text-white' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          <div className="glass-card rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 border border-primary/40 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent overflow-hidden relative neon-border hover-lift">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${portfolioAiWidget})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white">
              <FacebookIcon className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center lg:text-right relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold tracking-widest text-primary mb-3">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>من أعمالي</span>
              </div>
              <h4 className="text-2xl font-black mb-2">معرض فيديوهات وريلز لعملائي بالذكاء الاصطناعي</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                شاهد أعمال حقيقية قمت بتنفيذها لعملائي على فيسبوك، تضم ريلز وفيديوهات دعائية تم إنتاجها وتطويرها بالذكاء الاصطناعي.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100071726420422"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1877F2] text-white font-bold hover:bg-[#1459b8] transition-colors"
              >
                من أعمالي على فيسبوك
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group border-0 shadow-2xl">
            <div className="lg:w-1/2 overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkZ1u2sSLJC88v352CESQt0cj5BDAV5mu54AUb-wZYaQUFhFN9NDj5xD2Sid61EgLBhX_wtsvch4HWjqRzeJ_UJ-1MOyDdOBX-sxs6A1A_9iwlvSvVvc80i5WRM5UA8RFOUqlIybyFNEKvKwI2P48uwOA-1N-o14EFwEaY4e63_-9blZq6A-vjnw2PA1ycdsSoJi7Yf4YA2XEprpB2PYIT9ehYtfCcC0N2gv-U9pGxjdgHzGsSU1qhyG71WJY3RCdwaUXfRysHK5g" alt="Modern e-commerce interface mockup on laptop" referrerPolicy="no-referrer" />
            </div>
            <div className="lg:w-1/2 p-12 flex flex-col justify-center">
              <div className="text-primary font-bold text-sm mb-4">{t.portfolio.case.tag}</div>
              <h4 className="text-3xl font-black mb-8 italic">{t.portfolio.case.title}</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">problem</span> {t.portfolio.case.problemTitle}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.portfolio.case.problemDesc}</p>
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">rocket</span> {t.portfolio.case.strategyTitle}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.portfolio.case.strategyDesc}</p>
                </div>
                <div className="col-span-2 border-t border-slate-200 dark:border-slate-800 pt-6">
                  <h5 className="font-bold text-primary mb-2 flex items-center gap-2"><span className="material-symbols-outlined text-sm">analytics</span> {t.portfolio.case.resultsTitle}</h5>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">{t.portfolio.case.resultsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.video.tag}</h2>
          <h3 className="text-4xl font-black">{t.video.title}</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a href="https://www.facebook.com/reel/1615266119891862" target="_blank" rel="noopener noreferrer" className="aspect-[9/16] bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden group cursor-pointer block">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" alt="Facebook Reel 1" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
            </div>
          </a>
          <a href="https://www.facebook.com/reel/1254706086846854/?s=single_unit" target="_blank" rel="noopener noreferrer" className="aspect-[9/16] bg-slate-200 dark:bg-slate-800 rounded-2xl relative overflow-hidden group cursor-pointer block">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" alt="Facebook Reel 2" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative" id="results">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {t.results.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-primary-100/70 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">{t.testimonials.tag}</h2>
          <h3 className="text-4xl font-black">{t.testimonials.title}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl relative">
              <span className="material-symbols-outlined text-primary text-6xl opacity-20 absolute top-4 right-8">format_quote</span>
              <p className="text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full object-cover" src={images[i]} alt={item.name} referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-xs text-slate-500 uppercase">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/30" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[2.25rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-20 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-6">{t.contact.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">{t.contact.desc}</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <span className="font-bold text-lg break-words">mostafa.elkholy.dp@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-lg" dir="ltr">01127718978</span>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a
                  className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                  href="https://www.facebook.com/mostafakholy007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Facebook page"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a
                  className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
                  href="https://wa.me/201127718978"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp chat"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold mx-1">{t.contact.nameLabel}</label>
                  <input className="w-full bg-white dark:bg-background-dark border-primary/20 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder={t.contact.namePlaceholder} type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold mx-1">{t.contact.emailLabel}</label>
                  <input className="w-full bg-white dark:bg-background-dark border-primary/20 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder={t.contact.emailPlaceholder} type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold mx-1">{t.contact.subjectLabel}</label>
                <select className="w-full bg-white dark:bg-background-dark border-primary/20 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                  {t.contact.subjects.map((sub, i) => <option key={i}>{sub}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold mx-1">{t.contact.messageLabel}</label>
                <textarea className="w-full bg-white dark:bg-background-dark border-primary/20 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder={t.contact.messagePlaceholder} rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all uppercase tracking-widest">{t.contact.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 sm:py-10 border-t border-primary/10 bg-white/40 dark:bg-slate-950/20 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 text-sm">
        <div className="text-slate-600 dark:text-slate-400 font-bold">
          © {new Date().getFullYear()} Mostafa Elkholy
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
        <Navbar />
        <Hero />
        <About />
        <Services />
        <WebsitesIBuilt />
        <Portfolio />
        <VideoShowcase />
        <Results />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
