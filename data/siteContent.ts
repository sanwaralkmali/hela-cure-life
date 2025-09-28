export interface SiteContent {
  nav: {
    home: string;
    about: string;
    values: string;
    services: string;
    clients: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
    location: string;
    message: {
      title: string;
      content: string;
    };
    ourServices: {
      title: string;
      items: string[];
    };
  };
  values: {
    title: string;
    description: string;
    principles: {
      quality: {
        title: string;
        description: string;
      };
      integrity: {
        title: string;
        description: string;
      };
      adaptation: {
        title: string;
        description: string;
      };
      ownership: {
        title: string;
        description: string;
      };
    };
    valuesTitle: string;
    valuesList: string[];
  };
  stats: {
    suppliers: string;
    products: string;
    clients: string;
    experience: string;
  };
  services: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  clients: {
    title: string;
    subtitle: string;
    government: string;
    private: string;
  };
  footer: {
    contact: {
      phone: string;
      email: string;
      address: string;
    };
    copyright: string;
    developedBy: string;
    followUs: string;
    backToTop: string;
    contactInfo: string;
    quickLinks: string;
    trustedBy: string;
  };
  products: {
    title: string;
    description: string;
    navigation: string;
    close: string;
    of: string;
  };
}

export const siteContent = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      values: "Values",
      services: "Services",
      clients: "Clients"
    },
    hero: {
      title: "Importing, marketing, selling pharmaceuticals",
      subtitle: "Is a company specialized in importing, marketing, selling pharmaceuticals, medical equipment, food and cosmetics",
      ctaPrimary: "Our Services",
      ctaSecondary: "See"
    },
    about: {
      title: "Hela Cure Life",
      description: "We are a leading company in the healthcare industry, dedicated to providing high-quality pharmaceutical products and medical solutions. Our commitment to excellence drives us to deliver the best healthcare products to our partners and clients.",
      location: "Headquartered in the Republic of Yemen, Hadramout Governorate, Seoyun City",
      message: {
        title: "Our Message",
        content: "To provide exceptional healthcare solutions that improve lives and build lasting partnerships with our clients worldwide."
      },
      ourServices: {
        title: "Our Services",
        items: [
          "Pharmaceutical imports and distribution",
          "Medical equipment supply",
          "Healthcare consulting services",
          "Quality assurance and compliance"
        ]
      }
    },
    values: {
      title: "VALUES AND PRINCIPLES",
      description: "Nothing means more to us than the interests of our clients and partners taking into account the interest of the Yemeni citizen and the best quality that we only accept; these values are shared by our employees and partners.",
      principles: {
        quality: {
          title: "Quality",
          description: "Provide the best products and services of the highest standards of professionalism and quality"
        },
        integrity: {
          title: "Integrity",
          description: "We seek to be a reliable partner, and we work with honesty, complete integrity and full transparency"
        },
        adaptation: {
          title: "Adaptation",
          description: "We adapt to our partners' business and Key Performance Indicators (KPIs), and we constantly innovate new ways to serve them"
        },
        ownership: {
          title: "Ownership",
          description: "Evaluate our performance and manage our partner's business as our own to ensuring long-term success"
        }
      },
      valuesTitle: "OUR VALUES",
      valuesList: [
        "QUALITY",
        "DEVELOPMENT",
        "ACCOUNTABILITY",
        "HONESTY",
        "CLIENT CARE",
        "TEAM SPIRIT"
      ]
    },
    stats: {
      suppliers: "30+ Suppliers",
      products: "500+ Products",
      clients: "100+ Clients",
      experience: "10+ Years Experience"
    },
    services: {
      title: "WHAT SERVICES WE PROVIDE TO OUR PARTNERS AND CLIENTS",
      items: [
        {
          title: "LOGISTIC SUPPORT",
          description: "Comprehensive logistics solutions for healthcare products distribution"
        },
        {
          title: "STUDIES AND REPORTS",
          description: "Market analysis and detailed reports for informed decision making"
        },
        {
          title: "STORAGE",
          description: "Secure and temperature-controlled storage facilities"
        },
        {
          title: "MARKETING AND SALES",
          description: "Strategic marketing and sales support for healthcare products"
        },
        {
          title: "POWER OF ATTORNEY AND REPRESENTATION",
          description: "Legal representation and agency services for international partners"
        },
        {
          title: "EQUIPPING AND FURNISHING",
          description: "Complete setup solutions for healthcare facilities"
        },
        {
          title: "MAINTENANCE AND TRAINING",
          description: "Equipment maintenance and staff training services"
        },
        {
          title: "TENDERS",
          description: "Tender management and procurement assistance"
        },
        {
          title: "PHARMACOVIGILANCE",
          description: "Drug safety monitoring and adverse event reporting"
        },
        {
          title: "ACTIVITIES AND EVENTS",
          description: "Healthcare conferences, seminars, and educational events"
        }
      ]
    },
    clients: {
      title: "OUR CLIENTS",
      subtitle: "They are our partners in success and real capital",
      government: "Government Sector",
      private: "Private Sector"
    },
    footer: {
      contact: {
        phone: "+967 775 232 328",
        email: "info@helacure.com",
        address: "Head office: Aden City, 90th Street, Alqahera market road, block 12, In front of Al-Hijra Mosque. Taiz office: Taiz City, Western Ring Road, opposite Al Aqeeq Wedding Hall, Entrance in front of Jalb Company"
      },
      copyright: "© 2025 Hela Cure Life. All rights reserved.",
      developedBy: "Developed by Salah Alkmali",
      followUs: "Follow Us",
      backToTop: "Back to Top",
      contactInfo: "Contact Information",
      quickLinks: "Quick Links",
      trustedBy: "Trusted by Leading Organizations"
    },
    products: {
      title: "Our Products",
      description: "High-quality pharmaceutical product designed to meet the highest standards of healthcare excellence.",
      navigation: "Use arrow keys or click buttons to navigate",
      close: "Close",
      of: "of"
    }
  } as SiteContent,

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      values: "القيم",
      services: "الخدمات",
      clients: "العملاء"
    },
    hero: {
      title: "استيراد وتسويق وبيع المستحضرات الصيدلانية",
      subtitle: "شركة متخصصة في استيراد وتسويق وبيع المستحضرات الصيدلانية والمعدات الطبية والأغذية ومستحضرات التجميل",
      ctaPrimary: "خدماتنا",
      ctaSecondary: "اطلع"
    },
    about: {
      title: "هيلا كيور لايف",
      description: "نحن شركة رائدة في صناعة الرعاية الصحية، ملتزمون بتقديم منتجات صيدلانية عالية الجودة وحلول طبية متميزة. التزامنا بالتميز يدفعنا لتقديم أفضل المنتجات الصحية لشركائنا وعملائنا.",
      location: "المقر الرئيسي في الجمهورية اليمنية، محافظة حضرموت، مدينة سيئون",
      message: {
        title: "رسالتنا",
        content: "تقديم حلول صحية استثنائية تحسن الحياة وتبني شراكات دائمة مع عملائنا في جميع أنحاء العالم."
      },
      ourServices: {
        title: "خدماتنا",
        items: [
          "استيراد وتوزيع المستحضرات الصيدلانية",
          "توريد المعدات الطبية",
          "خدمات الاستشارات الصحية",
          "ضمان الجودة والامتثال"
        ]
      }
    },
    values: {
      title: "القيم والمبادئ",
      description: "لا شيء يعني لنا أكثر من مصالح عملائنا وشركائنا مع مراعاة مصلحة المواطن اليمني والجودة الأفضل التي لا نقبل سواها؛ هذه القيم يتشاركها موظفونا وشركاؤنا.",
      principles: {
        quality: {
          title: "الجودة",
          description: "تقديم أفضل المنتجات والخدمات بأعلى معايير المهنية والجودة"
        },
        integrity: {
          title: "النزاهة",
          description: "نسعى لأن نكون شريكاً موثوقاً، ونعمل بصدق ونزاهة كاملة وشفافية تامة"
        },
        adaptation: {
          title: "التكيف",
          description: "نتكيف مع أعمال شركائنا ومؤشرات الأداء الرئيسية، ونبتكر باستمرار طرقاً جديدة لخدمتهم"
        },
        ownership: {
          title: "الملكية",
          description: "نقيم أداءنا وندير أعمال شركائنا كما لو كانت ملكنا لضمان النجاح طويل المدى"
        }
      },
      valuesTitle: "قيمنا",
      valuesList: [
        "الجودة",
        "التطوير",
        "المساءلة",
        "الصدق",
        "رعاية العميل",
        "روح الفريق"
      ]
    },
    stats: {
      suppliers: "+30 مورد",
      products: "+500 منتج",
      clients: "+100 عميل",
      experience: "+10 سنوات خبرة"
    },
    services: {
      title: "الخدمات التي نقدمها لشركائنا وعملائنا",
      items: [
        {
          title: "الدعم اللوجستي",
          description: "حلول لوجستية شاملة لتوزيع المنتجات الصحية"
        },
        {
          title: "الدراسات والتقارير",
          description: "تحليل السوق والتقارير المفصلة لاتخاذ قرارات مدروسة"
        },
        {
          title: "التخزين",
          description: "مرافق تخزين آمنة ومتحكم بدرجة الحرارة"
        },
        {
          title: "التسويق والمبيعات",
          description: "دعم تسويقي ومبيعات استراتيجي للمنتجات الصحية"
        },
        {
          title: "التوكيل والتمثيل",
          description: "خدمات التمثيل القانوني والوكالة للشركاء الدوليين"
        },
        {
          title: "التجهيز والتأثيث",
          description: "حلول إعداد كاملة للمرافق الصحية"
        },
        {
          title: "الصيانة والتدريب",
          description: "خدمات صيانة المعدات وتدريب الموظفين"
        },
        {
          title: "المناقصات",
          description: "إدارة المناقصات ومساعدة في المشتريات"
        },
        {
          title: "مراقبة الأدوية",
          description: "مراقبة سلامة الأدوية والإبلاغ عن الأحداث الضائرة"
        },
        {
          title: "الأنشطة والفعاليات",
          description: "المؤتمرات الصحية والندوات والفعاليات التعليمية"
        }
      ]
    },
    clients: {
      title: "عملاؤنا",
      subtitle: "هم شركاؤنا في النجاح ورأس مالنا الحقيقي",
      government: "القطاع الحكومي",
      private: "القطاع الخاص"
    },
    footer: {
      contact: {
        phone: "+967 775 232 328",
        email: "info@helacure.com",
        address: "المكتب الرئيسي: مدينة عدن، شارع 90، طريق سوق القاهرة، بلوك 12، أمام مسجد الهجرة. مكتب تعز: مدينة تعز، الطريق الدائري الغربي، مقابل قاعة العقيق للأفراح، المدخل أمام شركة جلب"
      },
      copyright: "© 2025 هيلا كيور لايف. جميع الحقوق محفوظة.",
      developedBy: "تم التطوير بواسطة صلاح الكمالي",
      followUs: "تابعنا",
      backToTop: "العودة للأعلى",
      contactInfo: "معلومات الاتصال",
      quickLinks: "روابط سريعة",
      trustedBy: "موثوق من قبل المنظمات الرائدة"
    },
    products: {
      title: "منتجاتنا",
      description: "منتج صيدلاني عالي الجودة مصمم لتلبية أعلى معايير التميز في الرعاية الصحية.",
      navigation: "استخدم مفاتيح الأسهم أو انقر على الأزرار للتنقل",
      close: "إغلاق",
      of: "من"
    }
  } as SiteContent
};