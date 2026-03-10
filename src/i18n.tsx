import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    nav: { about: "عن الخبير", services: "الخدمات", portfolio: "الأعمال", results: "النتائج", contact: "تواصل معي" },
    hero: {
      badge: "متاح لمشاريع جديدة",
      title: "خبير نمو رقمي ومطور مواقع يساعد العلامات التجارية على",
      titleHighlight: "التوسع عبر الإنترنت",
      desc: "أساعد الشركات على النمو من خلال تصميم وتطوير مواقع ويب احترافية، تحسين محركات البحث، واستراتيجيات التسويق الرقمي القوية.",
      btnWork: "شاهد أعمالي",
      btnContact: "تواصل معي",
      statsGrowth: "متوسط النمو"
    },
    about: {
      tag: "الخبير",
      title: "بناء مواقع احترافية ودمج التسويق والذكاء الاصطناعي",
      desc: "أنا متخصص في بناء وتطوير مواقع ويب سريعة وعصرية لا تكتفي بالمظهر الجذاب فحسب، بل تحقق التحويلات والنتائج. من خلال الجمع بين تطوير الواجهات الأمامية وتحسين محركات البحث، أساعد العلامات التجارية على السيطرة في مجالها.",
      skills: ["تطوير المواقع", "تصميم الواجهات", "تحسين SEO", "الإعلانات الرقمية", "استراتيجية المحتوى", "تحسين معدل التحويل"]
    },
    services: {
      tag: "الخدمات",
      title: "حلول رقمية متكاملة لنمو عملك",
      items: [
        { title: "تطوير المواقع", desc: "بناء مواقع سريعة، متجاوبة، ومحسنة لمحركات البحث باستخدام أحدث التقنيات." },
        { title: "تصميم UI/UX", desc: "تصميم واجهات مستخدم جذابة توفر تجربة سلسة وترفع معدلات التحويل." },
        { title: "تحسين محركات البحث", desc: "تصدر نتائج البحث العضوية وزيادة الزيارات المستهدفة لموقعك." },
        { title: "إدارة منصات التواصل", desc: "بناء مجتمع مخلص من خلال محتوى استراتيجي وتفاعل فعال." },
        { title: "حلول الذكاء الاصطناعي", desc: "أتمتة سير العمل التسويقي وصناعة المحتوى باستخدام أحدث تقنيات الذكاء الاصطناعي." },
        { title: "تحسين معدل التحويل", desc: "تحويل الزيارات الحالية إلى إيرادات من خلال المحفزات النفسية واختبارات A/B." }
      ]
    },
    websites: {
      tag: "مواقع قمت ببنائها",
      title: "مشاريع تصميم وتطوير المواقع",
      desc: "مجموعة من المواقع الحقيقية التي قمت بتصميمها وتطويرها لعملائي، مع التركيز على تجربة المستخدم، الأداء السريع، وتحسين محركات البحث.",
      visit: "زيارة الموقع",
      projects: [
        {
          title: "Pyramids",
          desc: "موقع حديث يعرض خدمات ومنتجات بشكل احترافي مع تصميم متجاوب وأداء عالي.",
          category: "مدونة سياحية",
          technologies: ["React", "Tailwind CSS", "Frontend Development"],
          link: "https://pyramids-eight.vercel.app/"
        },
        {
          title: "XMan",
          desc: "متجر إلكتروني حديث للملابس مع تجربة تسوق سلسة وتصميم جذاب.",
          category: "متجر ملابس",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://xman-nine.vercel.app/"
        },
        {
          title: "Al-Shams Furniture",
          desc: "متجر إلكتروني متخصص في بيع الأثاث المنزلي الراقي بتصميم عصري وجذاب.",
          category: "متجر أثاث",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://al-shams-furniture.vercel.app/"
        }
      ]
    },
    portfolio: {
      tag: "دراسات حالة",
      title: "قصص نمو مثبتة",
      filters: ["الكل", "المواقع", "التسويق", "فيديوهات الذكاء الاصطناعي"],
      case: {
        tag: "نمو التجارة الإلكترونية",
        title: "توسيع FashionFlow لتصل لمليون دولار سنوياً",
        problemTitle: "المشكلة",
        problemDesc: "ركود حركة المرور العضوية وانخفاض معدلات التحويل الإعلاني (1.2%).",
        strategyTitle: "الاستراتيجية",
        strategyDesc: "إعادة تصميم كاملة للواجهة + إعادة استهداف بالذكاء الاصطناعي + تدقيق SEO تقني.",
        resultsTitle: "النتائج",
        resultsDesc: "+340% نمو في الإيرادات خلال 6 أشهر"
      }
    },
    video: {
      tag: "إنتاج المحتوى",
      title: "معرض الفيديوهات والريلز بالذكاء الاصطناعي"
    },
    results: {
      stats: [
        { value: "500k+", label: "عملاء محتملون" },
        { value: "$12M", label: "إدارة ميزانية إعلانية" },
        { value: "200+", label: "مشاريع منجزة" },
        { value: "15M", label: "وصول اجتماعي" }
      ]
    },
    testimonials: {
      tag: "آراء العملاء",
      title: "موثوق به من قبل العلامات التجارية العالمية",
      items: [
        { quote: "استراتيجية النمو التي تم تنفيذها لمنتجنا SaaS تجاوزت كل التوقعات. تضاعفت حركة المرور العضوية لدينا في 3 أشهر فقط.", name: "ديفيد تشن", role: "المدير التنفيذي، تيك نوفا" },
        { quote: "خبرة لا تضاهى في تسويق الذكاء الاصطناعي. ساعدونا في أتمتة 70% من إنتاج المحتوى لدينا دون فقدان الجودة.", name: "سارة جينكينز", role: "مديرة التسويق، جلوب براند" },
        { quote: "احترافي، سريع، ومهتم بالنتائج. تصميم الموقع الجديد حقق معدل تحويل أفضل بنسبة 45% من موقعنا السابق.", name: "ماركوس ويبر", role: "مؤسس، أربان إيتس" }
      ]
    },
    contact: {
      title: "لنبنِ شيئاً رائعاً معاً",
      desc: "هل أنت مستعد لنقل علامتك التجارية إلى المستوى التالي؟ أنا متاح حالياً لاستلام مشاريع جديدة.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك هنا",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
      subjectLabel: "الموضوع",
      subjects: ["تطوير وتصميم المواقع", "استشارات استراتيجية النمو", "التسويق وSEO", "تنفيذ الذكاء الاصطناعي"],
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرني المزيد عن مشروعك...",
      submit: "إرسال الرسالة"
    },
    footer: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  },
  en: {
    nav: { about: "About", services: "Services", portfolio: "Portfolio", results: "Results", contact: "Contact Me" },
    hero: {
      badge: "Available for new projects",
      title: "Web Developer & Digital Growth Expert Helping Brands",
      titleHighlight: "Scale Online",
      desc: "I help businesses grow by building fast, modern websites, implementing SEO, and executing powerful digital marketing strategies.",
      btnWork: "View My Work",
      btnContact: "Contact Me",
      statsGrowth: "Avg Growth"
    },
    about: {
      tag: "The Expert",
      title: "Building High-Performance Websites & Scaling Brands",
      desc: "I specialize in building digital systems that don't just look good, but convert. By combining high-end frontend development with data-driven SEO and marketing, I help brands dominate their niche.",
      skills: ["Web Development", "UI/UX Design", "SEO Optimization", "Digital Ads", "Content Strategy", "CRO"]
    },
    services: {
      tag: "Services",
      title: "Complete Digital Solutions for Your Growth",
      items: [
        { title: "Web Development", desc: "Building fast, responsive, and SEO-optimized websites using modern technologies." },
        { title: "UI/UX Design", desc: "Designing engaging user interfaces that provide a seamless experience and boost conversions." },
        { title: "SEO Optimization", desc: "Dominating organic search results and driving targeted traffic to your website." },
        { title: "Social Media Management", desc: "Building a loyal community through strategic content and active engagement." },
        { title: "AI Solutions", desc: "Automating marketing workflows and content creation using the latest AI technologies." },
        { title: "Conversion Rate Optimization", desc: "Turning existing traffic into revenue through psychological triggers and A/B testing." }
      ]
    },
    websites: {
      tag: "Websites I Built",
      title: "Web Design & Development Projects",
      desc: "A collection of real websites I designed and developed for my clients, focusing on user experience, fast performance, and SEO.",
      visit: "Visit Website",
      projects: [
        {
          title: "Pyramids",
          desc: "A modern website showcasing services and products professionally with responsive design and high performance.",
          category: "Travel Blog",
          technologies: ["React", "Tailwind CSS", "Frontend Development"],
          link: "https://pyramids-eight.vercel.app/"
        },
        {
          title: "XMan",
          desc: "A modern clothing e-commerce store with a seamless shopping experience and attractive design.",
          category: "Clothing Store",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://xman-nine.vercel.app/"
        },
        {
          title: "Al-Shams Furniture",
          desc: "An e-commerce store specializing in high-end home furniture with a modern and attractive design.",
          category: "Furniture Store",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://al-shams-furniture.vercel.app/"
        }
      ]
    },
    portfolio: {
      tag: "Case Studies",
      title: "Proven Growth Stories",
      filters: ["All", "Websites", "Marketing", "AI Videos"],
      case: {
        tag: "E-commerce Growth",
        title: "Scaling FashionFlow to $1M ARR",
        problemTitle: "The Problem",
        problemDesc: "Stagnant organic traffic and low ad conversion rates (1.2%).",
        strategyTitle: "The Strategy",
        strategyDesc: "Complete UI redesign + AI retargeting + Technical SEO audit.",
        resultsTitle: "The Results",
        resultsDesc: "+340% Revenue Growth in 6 Months"
      }
    },
    video: {
      tag: "Content Production",
      title: "AI Video & Reels Showcase"
    },
    results: {
      stats: [
        { value: "500k+", label: "Leads Generated" },
        { value: "$12M", label: "Ad Spend Managed" },
        { value: "200+", label: "Projects Completed" },
        { value: "15M", label: "Social Reach" }
      ]
    },
    testimonials: {
      tag: "Testimonials",
      title: "Trusted by Global Brands",
      items: [
        { quote: "The growth strategy implemented for our SaaS product exceeded all expectations. Our organic traffic doubled in just 3 months.", name: "David Chen", role: "CEO, TechNova" },
        { quote: "Unmatched expertise in AI marketing. They helped us automate 70% of our content production without losing quality.", name: "Sarah Jenkins", role: "Marketing Director, GlobeBrand" },
        { quote: "Professional, fast, and results-driven. The new website design achieved a 45% better conversion rate than our previous site.", name: "Marcus Weber", role: "Founder, Urban Eats" }
      ]
    },
    contact: {
      title: "Let's Build Something Great",
      desc: "Ready to take your brand to the next level? I'm currently available for new projects.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "name@company.com",
      subjectLabel: "Subject",
      subjects: ["Web Design & Development", "Growth Strategy Consulting", "Marketing & SEO", "AI Implementation"],
      messageLabel: "Message",
      messagePlaceholder: "Tell me more about your project...",
      submit: "Send Message"
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  }
};

type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.ar;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
