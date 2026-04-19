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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group cursor-pointer z-50">
          <div className="bg-primary p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-white">rocket_launch</span>
          </div>
          <span className="text-xl font-black tracking-tighter">{lang === 'ar' ? 'مصطفى ' : 'Mostafa '}<span className="text-primary">{lang === 'ar' ? 'الخولي' : 'Elkholy'}</span></span>
        </a>
        <div className={`fixed inset-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl z-[45] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:static md:bg-transparent md:dark:bg-transparent md:flex-row md:gap-8 md:p-0 ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto'}`}>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#video-ads">{t.nav.portfolio}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#about">{t.nav.about}</a>
          <a onClick={() => setIsMenuOpen(false)} className="text-2xl md:text-sm font-medium hover:text-primary transition-colors cursor-pointer" href="#services">{t.nav.services}</a>
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
  const { t } = useLanguage();
  const [spot, setSpot] = React.useState({ x: 50, y: 35 });
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28 md:py-36"
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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-tech-grid opacity-70" />
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">{t.hero.titleHighlight}</span>
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
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-8 border-t border-primary/10 mt-8">
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
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{t.about.title}</h3>
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
  const icons = ["play_circle", "share", "devices", "search_insights", "palette", "trending_up"];
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="services">
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
            <div key={i} className="glass-card p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-[2rem] cursor-default neon-border hover-lift group flex flex-col">
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

              <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-primary/10 text-[9px] sm:text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                <span className="material-symbols-outlined text-xs sm:text-sm text-primary">bolt</span>
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
    if (title === 'AI Nexus Hub') return portfolioAiWidget;
    return portfolioAiWidget;
  };
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="websites">
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
              <a
                key={index}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl md:rounded-[2rem] overflow-hidden group transition-all duration-500 cursor-pointer neon-border hover-lift flex flex-col"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AIVideoShowcase() {
  const { t, lang } = useLanguage();

  // Agency commercial ads - Vertical
  const commercialVertical = [
    { type: 'fb', id: '1472681251240450' },
  ];
  // Agency commercial ads - Landscape (horizontal)
  const commercialLandscape = [
    { type: 'fb', id: '2358849327945161' },
    { type: 'fb', id: '1196649792393051' },
  ];
  // Creative works - Vertical (all YouTube + FB)
  const creativeVideos = [
    { type: 'yt', id: '9UrwxO4C8TE' },
    { type: 'yt', id: 'bTKv6BfYec0' },
    { type: 'yt', id: '5OjOQ6ykHAs' },
    { type: 'yt', id: 'KPTgQjd_crk' },
    { type: 'fb', id: '1254706086846854' },
    { type: 'fb', id: '1615266119891862' },
    { type: 'fb', id: '1424679619137107' },
    { type: 'fb', id: '944444398380081' },
    { type: 'fb', id: '1463842972197747' },
    { type: 'fb', id: '918730174316668' },
    { type: 'fb', id: '1500853358092952' },
    { type: 'fb', id: '1509421381193474' },
    { type: 'fb', id: '1601747434391611' },
    { type: 'fb', id: '4357041854578147' },
    { type: 'fb', id: '2413641192433777' },
    { type: 'fb', id: '1656151849167213' },
    { type: 'fb', id: '2790411684641633' },
  ];
  // English content
  const englishVideos = [
    { type: 'fb', id: '1731469424498210' },
    { type: 'fb', id: '919910437344952' },
    { type: 'fb', id: '2502420673511127' },
  ];

  const VideoEmbed = ({ video, landscape = false }: { video: { type: string; id: string }; landscape?: boolean }) => {
    const aspectClass = landscape ? 'aspect-video' : 'aspect-[9/16]';

    if (video.type === 'yt') {
      return (
        <div className={`${aspectClass} rounded-2xl overflow-hidden bg-slate-900 border border-primary/15`}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      );
    }

    // Use exact Facebook embed format based on orientation
    const fbSrc = landscape
      ? `https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}%2F&show_text=false&width=560&t=0`
      : `https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${video.id}%2F&show_text=false&width=267&t=0`;

    return (
      <div className={`${aspectClass} rounded-2xl overflow-hidden bg-slate-900 border border-primary/15 relative group`}>
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
      </div>
    );
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" id="video-ads">
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
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">campaign</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.commercialTag}</h4>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:gap-4 max-w-xs">
            {commercialVertical.map((video, i) => (
              <VideoEmbed key={`cv-${i}`} video={video} />
            ))}
          </div>
        </div>

        {/* Commercial Ads - Landscape */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">desktop_windows</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{lang === 'ar' ? 'فيديوهات إعلانية' : 'Ad Videos'}</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {commercialLandscape.map((video, i) => (
              <VideoEmbed key={`cl-${i}`} video={video} landscape />
            ))}
          </div>
        </div>

        {/* Creative Works - Vertical */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{t.videoShowcase.creativeTag}</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {creativeVideos.map((video, i) => (
              <VideoEmbed key={`cr-${i}`} video={video} />
            ))}
          </div>
        </div>

        {/* English Content */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">language</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black">{lang === 'ar' ? 'محتوى إبداعي باللغة الإنجليزية' : 'English Creative Content'}</h4>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            {englishVideos.map((video, i) => (
              <VideoEmbed key={`en-${i}`} video={video} />
            ))}
          </div>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {t.results.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-primary-100/70 font-bold uppercase tracking-widest text-xs sm:text-sm">{stat.label}</div>
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
          <h3 className="text-3xl md:text-4xl font-black">{t.testimonials.title}</h3>
        </div>
        <div className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 pb-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center glass-card p-6 sm:p-8 md:p-10 rounded-3xl relative flex-shrink-0">
              <span className="material-symbols-outlined text-primary text-5xl md:text-6xl opacity-20 absolute top-4 right-5 sm:right-8">format_quote</span>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 italic mb-6 sm:mb-8 leading-relaxed mt-4 sm:mt-0 relative z-10 w-full whitespace-normal">"{item.quote}"</p>
              <div className="flex items-center gap-4 border-t border-primary/10 pt-5">
                <img className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" src={images[i]} alt={item.name} referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">{item.name}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 uppercase font-medium">{item.role}</div>
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
        <div className="glass-card rounded-[2.25rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-14 lg:p-20 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h3 className="text-3xl lg:text-5xl font-black mb-4 sm:mb-6">{t.contact.title}</h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-8 lg:mb-10 leading-relaxed">{t.contact.desc}</p>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span>
                  </div>
                  <span className="font-bold text-sm sm:text-base lg:text-lg break-all">mostafa.elkholy.dp@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 shrink-0">
                    <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-base sm:text-lg" dir="ltr">01127718978</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8 sm:mt-12">
                <a
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                  href="https://www.facebook.com/mostafakholy007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Personal Facebook page"
                >
                  <FacebookIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-sm"
                  href="https://wa.me/201127718978"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp chat"
                >
                  <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
            <form className="space-y-5 sm:space-y-6">
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
        <AIVideoShowcase />
        <WebsitesIBuilt />
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
