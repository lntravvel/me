import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  ar: {
    nav: { about: "من أنا", services: "الخدمات", portfolio: "أعمالي", results: "النتائج", contact: "تواصل معي" },
    hero: {
      badge: "متاح لمشاريع جديدة",
      title: "إعلانات فيديو بالذكاء الاصطناعي وتصميم مواقع احترافية تضمن لك",
      titleHighlight: "مضاعفة مبيعاتك",
      desc: "أقدم لك حلولاً تسويقية ورقمية متكاملة: من إنتاج إعلانات فيديو مبهرة بأحدث تقنيات الـ AI، إلى تصميم وبناء مواقع ومتاجر إلكترونية عصرية، مع إنشاء وإدارة صفحات السوشيال ميديا والحملات الإعلانية لتحقيق أهداف بيزنسك.",
      btnWork: "شاهد أعمالي",
      btnContact: "اطلب خدمتك الآن",
      statsGrowth: "إعلان فيديو منتج"
    },
    about: {
      tag: "من أنا",
      title: "خبير إنتاج إعلانات فيديو بالذكاء الاصطناعي ومطور مواقع",
      desc: "أجمع بين قوة الذكاء الاصطناعي في إنتاج محتوى بصري مبهر وخبرة تقنية عميقة في بناء المواقع والمتاجر الإلكترونية. لا حدود للخيال: أي فكرة لمنتجك أو شركتك أو حتى لك شخصياً، يمكنني تحويلها إلى فيديو إعلاني احترافي يخطف الأنظار ويحقق نتائج ملموسة.",
      skills: ["إعلانات فيديو بالـ AI", "تطوير المواقع والمتاجر", "تحسين SEO", "الحملات الإعلانية", "محتوى بصري إبداعي", "استراتيجيات النمو الرقمي"]
    },
    videoShowcase: {
      tag: "معرض الأعمال الإعلانية",
      title: "إعلانات فيديو احترافية بالذكاء الاصطناعي",
      desc: "شاهد أمثلة حقيقية من أعمالي: إعلانات تجارية لمنتجات وشركات، ومحتوى إبداعي تم إنتاجه بالكامل باستخدام أحدث تقنيات الذكاء الاصطناعي. كل الفيديوهات تعمل مباشرة هنا بدون الخروج من الموقع.",
      commercialTag: "إعلانات تجارية لوكالة",
      creativeTag: "أعمال إبداعية متنوعة",
      englishTag: "محتوى إبداعي باللغة الإنجليزية"
    },
    services: {
      tag: "الخدمات",
      title: "حلول رقمية متكاملة لنمو عملك",
      items: [
        { title: "إعلانات فيديو بالـ AI", desc: "تحويل أي فكرة إلى فيديو إعلاني احترافي يخطف الأنظار ويحقق أعلى نسب تفاعل ومبيعات." },
        { title: "إنشاء وإدارة صفحات السوشيال ميديا", desc: "إنشاء وإدارة صفحاتك على فيسبوك وانستغرام وتيك توك بشكل كامل، مع تصميم المحتوى وجدولة النشر وإدارة الحملات الإعلانية لضمان وصول أكبر عدد من العملاء والجمهور." },
        { title: "تطوير المواقع والمتاجر", desc: "بناء مواقع ومتاجر إلكترونية سريعة، متجاوبة، ومحسنة لتحقيق أعلى تحويلات." },
        { title: "تحسين محركات البحث", desc: "تصدر نتائج البحث العضوية وزيادة الزيارات المستهدفة لموقعك." },
        { title: "محتوى بصري إبداعي", desc: "إنتاج محتوى مرئي مبتكر يعزز هوية علامتك التجارية ويجذب جمهورك المستهدف." },
        { title: "استراتيجيات النمو الرقمي", desc: "بناء خطط تسويقية شاملة تدمج الإعلانات والمحتوى والتقنية لتحقيق نمو مستدام." }
      ]
    },
    websites: {
      tag: "مواقع قمت ببنائها",
      title: "مشاريع تصميم وتطوير المواقع",
      desc: "مجموعة من المواقع الحقيقية التي قمت بتصميمها وتطويرها، مع التركيز على تجربة المستخدم والأداء السريع.",
      visit: "زيارة الموقع",
      projects: [
        {
          title: "AI Nexus Hub",
          description: "منصة ذكاء اصطناعي متكاملة تجمع أدوات وخدمات الـ AI في مكان احترافي واحد.",
          category: "منصة AI",
          technologies: ["React", "Tailwind CSS", "AI Integration"],
          link: "https://ai-nexus-huub.vercel.app/"
        },
        {
          title: "Pyramids",
          description: "موقع حديث يعرض خدمات ومنتجات بشكل احترافي مع تصميم متجاوب وأداء عالي.",
          category: "مدونة سياحية",
          technologies: ["React", "Tailwind CSS", "Frontend Development"],
          link: "https://pyramids-eight.vercel.app/"
        },
        {
          title: "XMan",
          description: "متجر إلكتروني حديث للملابس مع تجربة تسوق سلسة وتصميم جذاب.",
          category: "متجر ملابس",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://xman-nine.vercel.app/"
        },
        {
          title: "Al-Shams Furniture",
          description: "متجر إلكتروني متخصص في بيع الأثاث المنزلي الراقي بتصميم عصري وجذاب.",
          category: "متجر أثاث",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://al-shams-furniture.vercel.app/"
        }
      ]
    },
    portfolio: {
      tag: "دراسات حالة",
      title: "قصص نجاح حقيقية",
      filters: ["الكل", "إعلانات فيديو", "المواقع", "التسويق"],
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
        { value: "50+", label: "إعلان فيديو منتج" },
        { value: "10+", label: "مواقع ومتاجر" },
        { value: "200+", label: "مشاريع منجزة" },
        { value: "15M", label: "وصول اجتماعي" }
      ]
    },
    testimonials: {
      tag: "آراء العملاء",
      title: "موثوق به من قبل رواد الأعمال في الشرق الأوسط",
      items: [
        { quote: "الشغل مميز جداً والنتائج كانت أسرع من المتوقع. تصميم المتجر الجديد ساعدنا نضاعف مبيعاتنا في الإمارات خلال شهور بسيطة.", name: "عبدالله العتيبي", role: "مؤسس متجر إلفيت, السعودية" },
        { quote: "تحديث الموقع أحدث فرقاً شاسعاً في تفاعل العملاء معنا. سرعة الإنجاز والاحترافية في التعامل خلتنا نعتمد عليهم في كل مشاريعنا القادمة.", name: "أحمد النجار", role: "المدير التنفيذي لـ بروبرتي فايندرز, مصر" },
        { quote: "فهم عميق لاحتياجات السوق واستخدام ممتاز لأدوات الذكاء الاصطناعي. وفروا علينا وقت طويل جداً في إدارة المحتوى وكسبنا ثقة عملاء جدد.", name: "مريم الشامسي", role: "مديرة التسويق, الإمارات" }
      ]
    },
    contact: {
      title: "جاهز تبدأ مشروعك الإعلاني؟",
      desc: "سواء كنت تحتاج إعلان فيديو احترافي لمنتجك، أو موقع إلكتروني يحقق مبيعات، أنا متاح حالياً لاستلام مشاريع جديدة.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك هنا",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "name@company.com",
      subjectLabel: "الموضوع",
      subjects: ["إنتاج إعلان فيديو بالـ AI", "إنشاء وإدارة صفحات السوشيال ميديا", "تطوير وتصميم المواقع", "حملة إعلانية متكاملة", "استشارات استراتيجية النمو"],
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
      title: "AI Video Ads & Professional Website Design That Guarantee",
      titleHighlight: "Doubling Your Sales",
      desc: "I provide complete digital & marketing solutions: from producing stunning AI-powered video ads, to designing and building modern websites and e-commerce stores, plus full social media page management and ad campaigns to achieve your business goals.",
      btnWork: "View My Work",
      btnContact: "Order Your Service Now",
      statsGrowth: "Video Ads Produced"
    },
    about: {
      tag: "About Me",
      title: "AI Video Ads Expert & Full-Stack Web Developer",
      desc: "I combine the power of AI in producing stunning visual content with deep technical expertise in building websites and e-commerce stores. No limits to imagination: any idea for your product, company, or even for you personally, I can turn it into a professional video ad that captures attention and delivers real results.",
      skills: ["AI Video Ads", "Web & E-commerce Dev", "SEO Optimization", "Ad Campaigns", "Creative Visual Content", "Digital Growth Strategies"]
    },
    videoShowcase: {
      tag: "Ad Portfolio",
      title: "Professional AI-Powered Video Ads",
      desc: "Watch real examples of my work: commercial ads for products and companies, and creative content produced entirely using the latest AI technologies. All videos play right here without leaving the site.",
      commercialTag: "Commercial Ads for Agency",
      creativeTag: "Various Creative Works",
      englishTag: "English Creative Content"
    },
    services: {
      tag: "Services",
      title: "Complete Digital Solutions for Your Growth",
      items: [
        { title: "AI Video Ads", desc: "Turning any idea into a professional video ad that captures attention and achieves the highest engagement and sales rates." },
        { title: "Social Media Page Management", desc: "Full creation and management of your Facebook, Instagram, and TikTok pages including content design, scheduling, and running ad campaigns to reach the maximum number of clients and audience." },
        { title: "Web & E-commerce Dev", desc: "Building fast, responsive websites and online stores optimized for maximum conversions." },
        { title: "SEO Optimization", desc: "Dominating organic search results and driving targeted traffic to your website." },
        { title: "Creative Visual Content", desc: "Producing innovative visual content that strengthens your brand identity and attracts your target audience." },
        { title: "Digital Growth Strategies", desc: "Building comprehensive marketing plans that integrate ads, content, and technology for sustainable growth." }
      ]
    },
    websites: {
      tag: "Websites I Built",
      title: "Web Design & Development Projects",
      desc: "A collection of real websites I designed and developed, focusing on user experience and fast performance.",
      visit: "Visit Website",
      projects: [
        {
          title: "AI Nexus Hub",
          description: "An integrated AI platform bringing AI tools and services into one professional place.",
          category: "AI Platform",
          technologies: ["React", "Tailwind CSS", "AI Integration"],
          link: "https://ai-nexus-huub.vercel.app/"
        },
        {
          title: "Pyramids",
          description: "A modern website showcasing services and products professionally with responsive design and high performance.",
          category: "Travel Blog",
          technologies: ["React", "Tailwind CSS", "Frontend Development"],
          link: "https://pyramids-eight.vercel.app/"
        },
        {
          title: "XMan",
          description: "A modern clothing e-commerce store with a seamless shopping experience and attractive design.",
          category: "Clothing Store",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://xman-nine.vercel.app/"
        },
        {
          title: "Al-Shams Furniture",
          description: "An e-commerce store specializing in high-end home furniture with a modern and attractive design.",
          category: "Furniture Store",
          technologies: ["React", "Tailwind CSS", "E-commerce"],
          link: "https://al-shams-furniture.vercel.app/"
        }
      ]
    },
    portfolio: {
      tag: "Case Studies",
      title: "Real Success Stories",
      filters: ["All", "Video Ads", "Websites", "Marketing"],
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
        { value: "50+", label: "Video Ads Produced" },
        { value: "10+", label: "Websites & Stores" },
        { value: "200+", label: "Projects Completed" },
        { value: "15M", label: "Social Reach" }
      ]
    },
    testimonials: {
      tag: "Testimonials",
      title: "Trusted by Entrepreneurs Across the Middle East",
      items: [
        { quote: "Outstanding work and results came faster than expected. The new store design helped us double our sales in the UAE within a few months.", name: "Abdullah Al-Otaibi", role: "Founder of Elfeet Store, Saudi Arabia" },
        { quote: "The website update made a huge difference in customer engagement. The speed and professionalism made us rely on them for all our future projects.", name: "Ahmed El-Naggar", role: "CEO, Property Finders, Egypt" },
        { quote: "Deep understanding of market needs and excellent use of AI tools. They saved us a lot of time in content management and helped us gain new clients.", name: "Mariam Al-Shamsi", role: "Marketing Director, UAE" }
      ]
    },
    contact: {
      title: "Ready to Start Your Ad Project?",
      desc: "Whether you need a professional AI video ad for your product or a website that drives sales, I'm currently available for new projects.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email Address",
      emailPlaceholder: "name@company.com",
      subjectLabel: "Subject",
      subjects: ["AI Video Ad Production", "Social Media Page Management", "Web Design & Development", "Full Ad Campaign", "Growth Strategy Consulting"],
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
    // Keep the portfolio in dark mode across devices.
    document.documentElement.classList.add('dark');
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
