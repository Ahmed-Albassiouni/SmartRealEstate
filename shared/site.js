
(function () {
  "use strict";

  var ROUTES = {
    home: "company_profile_cover_page/index.html",
    about: "about_us_mission_and_vision/index.html",
    maintenance: "services_maintenance_works/index.html",
    construction: "services_light_construction/index.html",
    finishing: "services_finishing_works/index.html",
    projects: "project_portfolio_showcase/index.html",
    team: "our_professional_team_page/index.html",
    testimonials: "testimonials_and_quality_standards/index.html",
    contact: "contact_us_and_social_media/index.html"
  };

  var NAV_ITEMS = [
    { id: "home", en: "Home", ar: "الرئيسية", route: ROUTES.home },
    { id: "services", en: "Services", ar: "الخدمات", route: ROUTES.maintenance },
    { id: "projects", en: "Projects", ar: "المشاريع", route: ROUTES.projects },
    { id: "about", en: "About", ar: "من نحن", route: ROUTES.about },
    { id: "team", en: "Team", ar: "فريقنا", route: ROUTES.team },
    { id: "reviews", en: "Reviews", ar: "آراء العملاء", route: ROUTES.testimonials },
    { id: "contact", en: "Contact", ar: "تواصل", route: ROUTES.contact }
  ];

  function normalizeSpace(value) {
    return (value || "").replace(/\s+/g, " ").trim();
  }

  function phraseKey(value) {
    return normalizeSpace(value).toLowerCase();
  }

  var EN_REWRITE_RAW = {
    "Excellence in Construction, Finishing, and Maintenance. We build modern structures with precision and a commitment to quality that stands the test of time.": "We deliver light construction, premium finishing, and proactive maintenance programs that protect your investment and increase long-term property value.",
    "Your trusted partner for high-quality construction, interior finishing, and maintenance solutions tailored to your vision.": "Your growth partner for light construction, finishing excellence, and maintenance solutions tailored to your business goals.",
    "Fast, professional repairs and upkeep for your commercial and residential properties. We ensure your systems run smoothly 24/7 with our dedicated expert team.": "Fast and reliable maintenance for residential and commercial assets with 24/7 response, preventive plans, and measurable service quality.",
    "Showcasing excellence in construction, modern finishing, and architectural innovation across the region.": "A portfolio of high-impact projects delivered with budget control, speed, and premium finishing quality.",
    "The dedicated professionals driving excellence in every project. We combine technical expertise with a passion for quality finishing and maintenance.": "A specialized team that combines engineering precision and execution speed to deliver quality results on every project.",
    "We take pride in delivering top-tier maintenance and finishing services. See what our partners and homeowners say about our quality and dedication.": "Real client feedback that reflects our quality commitment, delivery speed, and long-term service reliability.",
    "Ready to start your next project? Our team fits your needs, from light construction to premium finishing.": "Ready to launch your next project? Our team aligns scope, budget, and timeline from light construction to premium finishing."
  };

  var AR_PHRASE_RAW = {
    "Home": "الرئيسية",
    "Services": "الخدمات",
    "Projects": "المشاريع",
    "Portfolio": "الأعمال",
    "About": "من نحن",
    "About Us": "من نحن",
    "Team": "الفريق",
    "Our Team": "فريقنا",
    "Reviews": "آراء العملاء",
    "Testimonials": "التقييمات",
    "Contact": "تواصل",
    "Contact Us": "تواصل معنا",
    "Get Quote": "اطلب عرض سعر",
    "Get a Quote": "اطلب عرض سعر",
    "Get a Free Quote": "احصل على عرض سعر مجاني",
    "Request Quote": "اطلب عرض سعر",
    "Request Service": "اطلب خدمة",
    "Book Service Visit": "احجز زيارة صيانة",
    "Service Packages": "باقات الخدمة",
    "View Plans": "عرض الباقات",
    "View Portfolio": "استعرض المشاريع",
    "View All Projects": "عرض كل المشاريع",
    "View Case Study": "عرض دراسة الحالة",
    "Download PDF": "تحميل الملف",
    "Download Brochure": "تحميل البروشور",
    "Download Company Profile": "تحميل بروفايل الشركة",
    "Download Project Brochure": "تحميل كتيب المشاريع",
    "Our Process": "آلية العمل",
    "Contact Sales": "تواصل مع المبيعات",
    "See All Services": "عرض كل الخدمات",
    "Learn more": "اعرف المزيد",
    "All": "الكل",
    "All Projects": "كل المشاريع",
    "Residential": "سكني",
    "Commercial": "تجاري",
    "Maintenance": "صيانة",
    "Finishing": "تشطيبات",
    "Flooring": "الأرضيات",
    "Painting": "الدهانات",
    "Gypsum": "الجبس",
    "Search projects...": "ابحث في المشاريع...",
    "Search maintenance service...": "ابحث عن خدمة صيانة...",
    "Company Profile": "بروفايل الشركة",
    "Corporate": "الملف",
    "Profile": "التعريفي",
    "Established 2010": "تأسست عام 2010",
    "Latest Achievement": "أحدث إنجاز",
    "Projects Completed": "مشاريع مكتملة",
    "Years Experience": "سنوات خبرة",
    "Years of Experience": "سنوات خبرة",
    "Client Satisfaction": "رضا العملاء",
    "Client Satisfaction Rate": "معدل رضا العملاء",
    "Build Confidence": "ابنِ بثقة",
    "From Foundation to Finish": "من الأساس حتى التسليم",
    "Integrated Contracting Solutions That Raise Project Value": "حلول مقاولات متكاملة ترفع قيمة مشروعك",
    "Faster delivery, stronger finishing quality, and maintenance plans that reduce operating costs.": "تنفيذ أسرع وجودة تشطيب أعلى وخطط صيانة تقلل التكاليف التشغيلية.",
    "98% Client Satisfaction": "رضا عملاء بنسبة 98%",
    "Building Dreams,": "نبني الثقة،",
    "Finishing Reality.": "ونسلم نتائج ملموسة.",
    "Who We Are": "من نحن",
    "We are a premier light construction and finishing company dedicated to delivering top-tier maintenance and renovation solutions. Our expertise spans residential and commercial projects, ensuring quality and durability in every corner. With a team of skilled engineers and craftsmen, we turn abstract concepts into tangible, high-quality structures.": "نحن شركة رائدة في المقاولات الخفيفة والتشطيبات، نقدم حلول صيانة وتجديد عالية المستوى للمشاريع السكنية والتجارية مع ضمان الجودة والمتانة في كل تفصيلة.",
    "We are a leading team in light construction, finishing, and maintenance services, delivering reliable quality in every project.": "نحن فريق متخصص في المقاولات الخفيفة والتشطيبات والصيانة، ونقدم جودة موثوقة في كل مشروع.",
    "| Vision": "| الرؤية",
    "| Mission": "| الرسالة",
    "Our Vision": "رؤيتنا",
    "Our Mission": "رسالتنا",
    "To be the most trusted partner in construction finishing, recognized for innovation and quality.": "أن نكون الشريك الأكثر ثقة في التشطيبات والمقاولات الخفيفة، بروح ابتكارية ومعايير جودة ثابتة.",
    "Delivering superior craftsmanship and sustainable maintenance solutions that exceed client expectations.": "تقديم تنفيذ احترافي وحلول صيانة مستدامة تتجاوز توقعات العملاء.",
    "Our Core Values": "قيمنا الأساسية",
    "Our Business Values": "قيمنا في العمل",
    "The principles that guide every project we undertake": "المبادئ التي توجه كل مشروع ننفذه",
    "Quality": "الجودة",
    "Safety": "السلامة",
    "Integrity": "النزاهة",
    "Innovation": "الابتكار",
    "Reliable Maintenance Solutions": "حلول صيانة موثوقة",
    "Comprehensive Maintenance": "صيانة شاملة",
    "Our Expertise": "خبراتنا",
    "Need Immediate Assistance?": "تحتاج مساعدة فورية؟",
    "Contact Support": "اتصل بالدعم",
    "Emergency Support": "دعم طارئ",
    "Industry Experience": "خبرة في المجال",
    "Expert Staff": "فريق الخبراء",
    "Satisfaction Guarantee": "ضمان الرضا",
    "Recent Projects": "أحدث المشاريع",
    "Commercial Plumbing": "سباكة تجارية",
    "System Upgrade": "تحديث الأنظمة",
    "HVAC Overhaul": "تطوير أنظمة التكييف",
    "Our Projects": "مشاريعنا",
    "(Project Portfolio)": "(معرض المشاريع)",
    "Have a project in mind?": "عندك مشروع جديد؟",
    "Let's build something extraordinary together.": "دعنا نبني مشروعًا استثنائيًا معًا.",
    "Flagship": "مشروع مميز",
    "Luxury Private Residence": "سكن خاص فاخر",
    "Complete Interior Fit-out": "تجهيز داخلي متكامل",
    "Landscape & Finishing": "تنسيق وتشطيبات",
    "Premium Flooring Solutions": "حلول أرضيات مميزة",
    "Road Maintenance": "صيانة الطرق",
    "Design & Build": "تصميم وتنفيذ",
    "Villa Al-Khobar": "فيلا الخبر",
    "Meet Our Leadership Team": "تعرف على فريق القيادة",
    "Why Our Team Stands Out": "لماذا فريقنا متميز",
    "Certified Experts": "خبراء معتمدون",
    "Safety First": "السلامة أولًا",
    "Client Focused": "العميل أولًا",
    "Industry Awards": "جوائز مهنية",
    "Trusted by Our Clients": "موثوق من عملائنا",
    "(Based on 120+ reviews)": "(بناءً على أكثر من 120 تقييم)",
    "Load More Reviews": "عرض المزيد من التقييمات",
    "Our Partners & Certifications": "شركاؤنا واعتماداتنا",
    "View all partners": "عرض كل الشركاء",
    "ISO 9001 Certified": "معتمد ISO 9001",
    "Safety First Award 2023": "جائزة السلامة أولًا 2023",
    "Green Building Partner": "شريك البناء الأخضر",
    "Ready to start your project?": "جاهز لبدء مشروعك؟",
    "Join hundreds of satisfied clients who trust El-Benaa for their construction and maintenance needs.": "انضم لمئات العملاء الراضين الذين يثقون بنا في المقاولات والتشطيبات والصيانة.",
    "Let's Build Together": "لنبنِ معًا",
    "Get in Touch": "تواصل معنا",
    "Follow Us": "تابعنا",
    "Quick Links": "روابط سريعة",
    "Legal": "قانوني",
    "Subscribe": "اشترك",
    "Go": "اشترك",
    "Get Directions": "الحصول على الاتجاهات",
    "Main Office": "المكتب الرئيسي",
    "Office": "المكتب",
    "Open": "مفتوح",
    "Mon-Fri from 8am to 6pm": "من الإثنين للجمعة من 8 صباحًا إلى 6 مساءً",
    "Construction Corp HQ": "المقر الرئيسي لشركة المقاولات",
    "Main Office, Riyadh, Saudi Arabia": "المكتب الرئيسي، الرياض، المملكة العربية السعودية",
    "Ready to launch your next project? Our team aligns scope, budget, and timeline from light construction to premium finishing.": "جاهز لإطلاق مشروعك القادم؟ فريقنا يوازن بين نطاق العمل والميزانية والجدول الزمني من المقاولات الخفيفة حتى التشطيبات الفاخرة.",
    "Privacy Policy": "سياسة الخصوصية",
    "Terms of Service": "شروط الاستخدام",
    "Terms": "الشروط",
    "Cookie Policy": "سياسة ملفات الارتباط",
    "Careers": "الوظائف",
    "Company": "الشركة",
    "Support": "الدعم",
    "Plumbing": "السباكة",
    "Electrical": "الكهرباء",
    "HVAC": "التكييف",
    "Facebook": "فيسبوك",
    "Instagram": "إنستجرام",
    "LinkedIn": "لينكدإن",
    "Twitter": "تويتر",
    "Mail": "البريد",
    "Email": "البريد الإلكتروني",
    "Phone": "الهاتف",
    "Address": "العنوان",
    "Open Location": "فتح الموقع",
    "Join": "اشترك",
    "More Client Reviews": "المزيد من تقييمات العملاء",
    "Company Profile Summary": "ملخص بروفايل الشركة",
    "Services: Light Construction, Finishing, Maintenance.": "الخدمات: المقاولات الخفيفة، التشطيبات، الصيانة.",
    "Project Brochure Summary": "ملخص كتيب المشاريع",
    "Commercial, residential and maintenance projects.": "مشاريع تجارية وسكنية وأعمال صيانة.",
    "© 2024 Construction Co. All rights reserved.": "© 2024 شركة المقاولات. جميع الحقوق محفوظة.",
    "© 2023 Construction & Finishing Co. All rights reserved.": "© 2023 شركة المقاولات والتشطيبات. جميع الحقوق محفوظة.",
    "Construction & Finishing Co. - About Us": "شركة المقاولات والتشطيبات - من نحن",
    "Since 2023": "منذ 2023",
    "© 2023 ConstructPro Inc. All rights reserved.": "© 2023 شركة كونستراكت برو. جميع الحقوق محفوظة.",
    "© 2023 Al-Binaa Co. All rights reserved.": "© 2023 شركة البناء. جميع الحقوق محفوظة.",
    "© 2024 ConstructCo. All rights reserved.": "© 2024 شركة كونستركت كو. جميع الحقوق محفوظة.",
    "© 2024 El-Benaa Maintenance. All rights reserved.": "© 2024 البِناء للصيانة. جميع الحقوق محفوظة.",
    "© 2024 Construction Corp. All rights reserved.": "© 2024 شركة المقاولات. جميع الحقوق محفوظة.",
    "© 2023 Finishing Pros. All rights reserved.": "© 2023 فينيشينج برو. جميع الحقوق محفوظة.",
    "Excellence in Construction, Finishing, and Maintenance. We build modern structures with precision and a commitment to quality that stands the test of time.": "نقدم المقاولات الخفيفة والتشطيبات الراقية وبرامج الصيانة الاستباقية لحماية استثمارك ورفع قيمة العقار على المدى الطويل.",
    "Your trusted partner for high-quality construction, interior finishing, and maintenance solutions tailored to your vision.": "شريكك للنمو في المقاولات الخفيفة والتشطيبات عالية الجودة وحلول الصيانة المصممة لأهدافك.",
    "Fast, professional repairs and upkeep for your commercial and residential properties. We ensure your systems run smoothly 24/7 with our dedicated expert team.": "صيانة سريعة وموثوقة للأصول السكنية والتجارية مع استجابة 24/7 وخطط وقائية وجودة خدمة قابلة للقياس.",
    "Showcasing excellence in construction, modern finishing, and architectural innovation across the region.": "معرض مشاريع عالية الأثر تم تسليمها بسرعة وانضباط مالي وجودة تشطيب مميزة.",
    "The dedicated professionals driving excellence in every project. We combine technical expertise with a passion for quality finishing and maintenance.": "فريق متخصص يجمع بين الدقة الهندسية وسرعة التنفيذ لتقديم نتائج ثابتة في كل مشروع.",
    "We take pride in delivering top-tier maintenance and finishing services. See what our partners and homeowners say about our quality and dedication.": "تقييمات حقيقية تعكس التزامنا بالجودة وسرعة التسليم واستدامة الخدمة.",
    "Ready to start your next project? Our team fits your needs, from light construction to premium finishing.": "جاهز لبدء مشروعك القادم؟ فريقنا يوازن بين الاحتياج والميزانية والجدول من المقاولات الخفيفة حتى التشطيبات الفاخرة.",
    "We deliver light construction, premium finishing, and proactive maintenance programs that protect your investment and increase long-term property value.": "نقدم المقاولات الخفيفة والتشطيبات الراقية وبرامج الصيانة الاستباقية لحماية استثمارك ورفع قيمة العقار على المدى الطويل.",
    "Your growth partner for light construction, finishing excellence, and maintenance solutions tailored to your business goals.": "شريك نموك في المقاولات الخفيفة والتشطيبات الاحترافية وحلول الصيانة المصممة لأهداف نشاطك.",
    "Fast and reliable maintenance for residential and commercial assets with 24/7 response, preventive plans, and measurable service quality.": "صيانة سريعة وموثوقة للأصول السكنية والتجارية مع استجابة 24/7 وخطط وقائية وجودة خدمة قابلة للقياس.",
    "A portfolio of high-impact projects delivered with budget control, speed, and premium finishing quality.": "محفظة مشاريع عالية الأثر تم تسليمها بانضباط مالي وسرعة وجودة تشطيب متميزة.",
    "A specialized team that combines engineering precision and execution speed to deliver quality results on every project.": "فريق متخصص يجمع بين الدقة الهندسية وسرعة التنفيذ لتقديم نتائج عالية الجودة في كل مشروع.",
    "Real client feedback that reflects our quality commitment, delivery speed, and long-term service reliability.": "آراء عملاء حقيقية تعكس التزامنا بالجودة وسرعة التسليم وموثوقية الخدمة طويلة المدى.",
    "Built on Trust, Engineered for Results": "نبني بالثقة وننفذ بنتائج ملموسة",
    "Nexa Build delivers light construction, finishing, and maintenance solutions that improve asset quality and shorten delivery time.": "تقدم نيكسا بيلد حلول المقاولات الخفيفة والتشطيبات والصيانة بما يرفع جودة الأصول ويقلل زمن التنفيذ.",
    "Al-Binaa Co.": "شركة البناء",
    "Al-Binaa Co. - Our Projects": "شركة البناء - مشاريعنا",
    "Al-Reem Financial Tower": "برج الريم المالي",
    "Tech Hub Office": "مكتب تيك هب",
    "Red Sea Resort": "منتجع البحر الأحمر",
    "Oasis Mall": "مول الواحة",
    "City Center Access": "ممرات وسط المدينة",
    "Amwaj Chalet": "شاليه أمواج",
    "Business Bay, Dubai": "بيزنس باي، دبي",
    "Khobar, KSA": "الخبر، السعودية",
    "Khobar, Saudi Arabia": "الخبر، المملكة العربية السعودية",
    "Riyadh, KSA": "الرياض، السعودية",
    "Riyadh, Saudi Arabia": "الرياض، المملكة العربية السعودية",
    "Jeddah, KSA": "جدة، السعودية",
    "Jeddah, Saudi Arabia": "جدة، المملكة العربية السعودية",
    "Doha, Qatar": "الدوحة، قطر",
    "Dubai, UAE": "دبي، الإمارات",
    "Manama, Bahrain": "المنامة، البحرين",
    "Renovation": "تجديد",
    "Hospitality": "ضيافة",
    "Infrastructure": "بنية تحتية",
    "ConstructCo": "كونستركت كو",
    "Meet Our Team - ConstructCo": "تعرف على فريقنا - كونستركت كو",
    "Ahmed Al-Mansoor": "أحمد المنصور",
    "Sarah Johnson": "سارة جونسون",
    "Khalid Hassan": "خالد حسن",
    "Michael Chen": "مايكل تشين",
    "CEO & Founder": "المدير التنفيذي والمؤسس",
    "Operations Director": "مدير العمليات",
    "Senior Civil Engineer": "مهندس مدني أول",
    "Project Manager": "مدير مشروع",
    "Leadership with strategic vision for over 20 years, ensuring every plan becomes measurable business value.": "قيادة برؤية استراتيجية لأكثر من 20 عامًا، لتحويل كل خطة إلى قيمة أعمال ملموسة.",
    "Leading with vision for 20 years. Ahmed ensures every blueprint turns into a masterpiece.": "يقود برؤية واضحة منذ 20 عامًا، ويضمن أن كل مخطط يتحول إلى إنجاز متقن.",
    "Optimizing workflows and efficiency. Sarah is the backbone of our daily operations.": "تحسّن سير العمل وكفاءة التنفيذ، وتشكل سارة العمود الفقري لعملياتنا اليومية.",
    "Optimizing workflows and efficiency, Sarah is the operations backbone of our daily delivery.": "ترفع كفاءة التشغيل وتدعم تسليم الأعمال يوميًا بأعلى انضباط.",
    "Expert in structural integrity. Khalid brings precision to every beam and pillar.": "خبير في السلامة الإنشائية، ويضيف خالد دقة عالية في كل عنصر إنشائي.",
    "Structural integrity specialist, Khalid adds precision and safety to every core element.": "متخصص في متانة الهيكل الإنشائي، ويضيف خالد الدقة والأمان لكل عنصر أساسي.",
    "Ensuring timely project delivery. Michael bridges the gap between client dreams and reality.": "يضمن تسليم المشاريع في الوقت المحدد، ويربط مايكل بين رؤية العميل والتنفيذ الواقعي.",
    "Ensuring on-time delivery, Michael bridges client vision with practical execution.": "يضمن الالتزام بالجدول الزمني ويربط رؤية العميل بالتنفيذ العملي.",
    "Our engineers and technicians hold top industry certifications and undergo regular training.": "يحمل مهندسونا وفنيونا اعتمادات مهنية رفيعة ويتلقون تدريبًا مستمرًا.",
    "We prioritize rigorous safety protocols in every construction site to protect our team and yours.": "نطبق أعلى معايير السلامة في كل موقع لحماية فريقنا وفريقكم.",
    "We don't just build structures; we build relationships founded on trust, safety, and expertise.": "نحن لا نبني منشآت فقط، بل نبني علاقات قائمة على الثقة والسلامة والخبرة.",
    "Dedicated to transparent communication and exceeding expectations from start to finish.": "ملتزمون بتواصل واضح وتجاوز توقعات العميل من البداية حتى التسليم.",
    "Testimonials and Quality Standards - El-Benaa Maintenance": "آراء العملاء ومعايير الجودة - البِناء للصيانة",
    "El-Benaa Maintenance": "البِناء للصيانة",
    "Providing top-quality maintenance, finishing, and construction services since 2010.": "نقدم خدمات صيانة وتشطيبات ومقاولات عالية الجودة منذ 2010.",
    "Our quality management systems meet international standards, ensuring consistent service delivery for every project.": "أنظمة إدارة الجودة لدينا مطابقة للمعايير الدولية لضمان تقديم خدمة ثابتة في كل مشروع.",
    "Recognized for maintaining zero-accident worksites through rigorous safety protocols and staff training.": "حاصلون على تقدير للحفاظ على مواقع عمل خالية من الحوادث عبر بروتوكولات سلامة صارمة وتدريب مستمر.",
    "Committed to sustainable practices and using eco-friendly materials in our finishing and maintenance work.": "ملتزمون بالممارسات المستدامة واستخدام مواد صديقة للبيئة في التشطيبات والصيانة.",
    "We collaborate with industry leaders and maintain high safety standards. Our certifications are a testament to our commitment to quality.": "نتعاون مع رواد القطاع ونحافظ على أعلى معايير السلامة، واعتماداتنا دليل على التزامنا بالجودة.",
    "\"Excellent finishing work on our new office. The team was professional, clean, and finished everything right on time. Highly recommended for anyone needing quality maintenance.\"": "\"تشطيبات ممتازة لمكتبنا الجديد. الفريق كان محترفًا ومنظمًا وأنهى كل الأعمال في الوقت المحدد. أنصح بهم بشدة لأي شخص يبحث عن صيانة عالية الجودة.\"",
    "\"Great maintenance service for our HVAC systems. They identified the issue quickly that other companies missed. Very transparent pricing as well.\"": "\"خدمة صيانة رائعة لأنظمة التكييف. اكتشفوا المشكلة بسرعة رغم أن شركات أخرى لم تنتبه لها، والأسعار واضحة جدًا.\"",
    "\"Good construction quality on the annex building. There was a slight delay due to materials, but the communication was excellent and the result was worth it.\"": "\"جودة تنفيذ جيدة جدًا في مبنى الملحق. حدث تأخير بسيط بسبب المواد، لكن التواصل كان ممتازًا والنتيجة كانت تستحق.\"",
    "\"I've worked with El-Benaa on multiple projects. Their attention to detail in finishing works (gypsum, painting) makes my job as a designer much easier.\"": "\"عملت مع البِناء في عدة مشاريع، واهتمامهم بالتفاصيل في التشطيبات (الجبس والدهانات) يجعل عملي كمصممة أسهل بكثير.\"",
    "\"Reliable and cost-effective. We use them for annual maintenance contracts for our residential compounds. Never disappointed.\"": "\"شركة موثوقة وبتكلفة مناسبة. نتعامل معهم في عقود الصيانة السنوية لمجمعاتنا السكنية ولم يخيبوا توقعاتنا.\"",
    "Excellent finishing work on our new office. The team was professional, clean, and finished everything right on time. Highly recommended for anyone needing quality maintenance.": "تشطيبات ممتازة لمكتبنا الجديد. الفريق كان محترفًا ومنظمًا وأنهى كل الأعمال في الوقت المحدد. أنصح بهم بشدة لأي شخص يبحث عن صيانة عالية الجودة.",
    "Great maintenance service for our HVAC systems. They identified the issue quickly that other companies missed. Very transparent pricing as well.": "خدمة صيانة رائعة لأنظمة التكييف. اكتشفوا المشكلة بسرعة رغم أن شركات أخرى لم تنتبه لها، والأسعار واضحة جدًا.",
    "Good construction quality on the annex building. There was a slight delay due to materials, but the communication was excellent and the result was worth it.": "جودة تنفيذ جيدة جدًا في مبنى الملحق. حدث تأخير بسيط بسبب المواد، لكن التواصل كان ممتازًا والنتيجة كانت تستحق.",
    "I've worked with El-Benaa on multiple projects. Their attention to detail in finishing works (gypsum, painting) makes my job as a designer much easier.": "عملت مع البِناء في عدة مشاريع، واهتمامهم بالتفاصيل في التشطيبات (الجبس والدهانات) يجعل عملي كمصممة أسهل بكثير.",
    "Reliable and cost-effective. We use them for annual maintenance contracts for our residential compounds. Never disappointed.": "شركة موثوقة وبتكلفة مناسبة. نتعامل معهم في عقود الصيانة السنوية لمجمعاتنا السكنية ولم يخيبوا توقعاتنا.",
    "Homeowner": "مالك منزل",
    "Villa Owner": "مالك فيلا",
    "Commercial Partner": "شريك تجاري",
    "Interior Designer": "مصمم داخلي",
    "Property Manager": "مدير عقار",
    "Help Center": "مركز المساعدة",
    "Partners": "الشركاء",
    "HVAC Systems": "أنظمة التكييف",
    "Engineering Corp": "شركة الهندسة",
    "Ahmed Hassan": "أحمد حسن",
    "Sarah El-Masry": "سارة المصري",
    "Mariam Youssef": "مريم يوسف",
    "Khaled Mostafa": "خالد مصطفى",
    "Services: Maintenance Works": "الخدمات: أعمال الصيانة",
    "ConstructPro": "كونستراكت برو",
    "Building a better future with reliable maintenance and construction services.": "نبني مستقبلًا أفضل عبر خدمات صيانة ومقاولات موثوقة.",
    "Covering all critical building systems to keep your operations running without interruption.": "نغطي جميع أنظمة المبنى الحيوية لضمان استمرارية التشغيل دون انقطاع.",
    "Leak detection, pipe repairs, fixture installation, and comprehensive drainage solutions for facilities of all sizes.": "كشف التسربات وإصلاح الأنابيب وتركيب التجهيزات وحلول صرف شاملة للمنشآت بمختلف أحجامها.",
    "Preventative maintenance, seasonal tune-ups, and repair for heating, ventilation, and air conditioning units.": "صيانة وقائية وفحوصات دورية وإصلاحات لأنظمة التدفئة والتهوية والتكييف.",
    "Wiring upgrades, panel maintenance, lighting systems, and emergency electrical troubleshooting to ensure safety.": "تحديث التمديدات وصيانة اللوحات وأنظمة الإضاءة ومعالجة الأعطال الكهربائية الطارئة لضمان السلامة.",
    "Our team is on standby for emergency repairs. Experience reliability and speed when you need it most.": "فريقنا جاهز دائمًا للإصلاحات الطارئة، لتجربة موثوقية وسرعة في الوقت الذي تحتاجه فعلاً.",
    "Downtown Office Complex": "مجمع مكاتب وسط المدينة",
    "Tech Park Server Room": "غرفة خوادم مجمع التقنية",
    "Residential High-rise": "برج سكني مرتفع",
    "Privacy": "الخصوصية",
    "Services: Finishing Works": "الخدمات: أعمال التشطيبات",
    "Finishing Pros": "فينيشينج برو",
    "Your trusted partner for high-end interior finishing and maintenance. We build trust through quality.": "شريكك الموثوق للتشطيبات الداخلية الراقية والصيانة، ونبني الثقة عبر الجودة.",
    "Uncompromising Quality in Every Detail": "جودة لا تقبل التنازل في كل تفصيلة",
    "We specialize in delivering flawless finishes that define luxury living. Our attention to detail ensures that every corner of your space is perfect, from the smoothest wall textures to the most intricate floor patterns.": "نحن متخصصون في تقديم تشطيبات متقنة تعكس الفخامة، ونهتم بالتفاصيل لضمان كمال كل زاوية في مساحتك.",
    "We source only the finest paints, tiles, and fixtures ensuring durability.": "نختار أفضل أنواع الدهانات والبلاط والتجهيزات لضمان المتانة.",
    "Our team of skilled artisans brings years of experience to every detail.": "فريقنا من الحرفيين المهرة يضيف سنوات من الخبرة لكل تفصيلة.",
    "We respect your time and ensure projects are completed on schedule.": "نحترم وقتك ونضمن إنجاز المشاريع وفق الجدول الزمني.",
    "All our work comes with a satisfaction guarantee and warranty.": "كل أعمالنا تشمل ضمان رضا وضمان تنفيذ.",
    "Explore our latest residential and commercial finishing projects.": "استكشف أحدث مشاريعنا السكنية والتجارية في التشطيبات.",
    "Gallery of Works": "معرض الأعمال",
    "Premium Craftsmanship": "حرفية متميزة",
    "Premium Materials": "مواد متميزة",
    "Expert Craftsmanship": "تنفيذ احترافي",
    "Timely Delivery": "تسليم في الموعد",
    "Guaranteed Quality": "جودة مضمونة",
    "Exquisite Interior Finishing": "تشطيبات داخلية فاخرة",
    "Elevate your space with our premium craftsmanship in painting, flooring, and gypsum works. Where detail meets luxury.": "ارفع قيمة مساحتك بحرفية متميزة في الدهانات والأرضيات وأعمال الجبس، حيث تلتقي التفاصيل بالفخامة.",
    "Contact us today for a consultation and let our experts bring your vision to life with precision and elegance.": "تواصل معنا اليوم للاستشارة، ودع خبراءنا يحولون رؤيتك إلى واقع بدقة وأناقة.",
    "Custom Wall Molding": "تشكيلات جدران مخصصة",
    "Flooring Solutions": "حلول الأرضيات",
    "Gypsum Works": "أعمال الجبس",
    "Why Choose Us": "لماذا تختارنا",
    "Ready to Transform Your Space?": "جاهز لتحويل مساحتك؟",
    "Gypsum Ceiling & Lighting": "أسقف جبس وإضاءة",
    "Industrial Finishing": "تشطيبات صناعية",
    "Interior Painting": "دهانات داخلية",
    "Oak Herringbone Flooring": "أرضيات خشب أوك بنمط هيرنج بون",
    "Polished Concrete & Matte Paint": "خرسانة مصقولة ودهان مطفي",
    "Marble & High-Gloss Cabinets": "رخام وخزائن لامعة",
    "Modern Minimalist Hallway": "ممر حديث بطابع بسيط",
    "Gourmet Kitchen": "مطبخ فاخر",
    "Master Bedroom": "غرفة نوم رئيسية",
    "Penthouse Suite": "جناح بنتهاوس",
    "Villa Extension": "توسعة فيلا",
    "- Sarah Jenkins, Corporate Client": "- سارة جينكنز، عميل مؤسسي",
    "\"The attention to detail in the gypsum work transformed our ceiling into a piece of art. Highly recommended!\"": "\"الاهتمام بالتفاصيل في أعمال الجبس حوّل السقف إلى قطعة فنية. أوصي بهم جدًا!\"",
    "The attention to detail in the gypsum work transformed our ceiling into a piece of art. Highly recommended!": "الاهتمام بالتفاصيل في أعمال الجبس حوّل السقف إلى قطعة فنية. أوصي بهم جدًا!",
    "Design District, NY 10012": "حي التصميم، نيويورك 10012",
    "123 Business Avenue, Suite 100": "123 شارع الأعمال، جناح 100"
  };

  var WORD_AR = {
    home: "الرئيسية",
    services: "الخدمات",
    service: "خدمة",
    projects: "المشاريع",
    project: "مشروع",
    portfolio: "الأعمال",
    about: "عن",
    team: "فريق",
    reviews: "تقييمات",
    testimonials: "آراء",
    contact: "تواصل",
    quote: "عرض",
    request: "اطلب",
    free: "مجاني",
    download: "تحميل",
    view: "عرض",
    all: "كل",
    residential: "سكني",
    commercial: "تجاري",
    maintenance: "صيانة",
    finishing: "تشطيبات",
    construction: "مقاولات",
    light: "خفيفة",
    interior: "داخلي",
    premium: "متميز",
    quality: "جودة",
    support: "دعم",
    emergency: "طارئ",
    company: "شركة",
    profile: "بروفايل",
    certified: "معتمد",
    partner: "شريك",
    partners: "شركاء",
    certifications: "اعتمادات",
    ready: "جاهز",
    start: "ابدأ",
    together: "معًا",
    office: "مكتب",
    open: "مفتوح",
    phone: "هاتف",
    email: "بريد",
    legal: "قانوني",
    privacy: "خصوصية",
    terms: "شروط",
    careers: "وظائف",
    plumbing: "سباكة",
    electrical: "كهرباء",
    hvac: "تكييف",
    flooring: "أرضيات",
    painting: "دهانات",
    gypsum: "جبس",
    gallery: "معرض",
    works: "أعمال",
    more: "المزيد",
    clients: "العملاء",
    helpful: "مفيد",
    days: "أيام",
    day: "يوم",
    week: "أسبوع",
    weeks: "أسابيع",
    month: "شهر",
    months: "شهور",
    ago: "منذ",
    completed: "مكتمل",
    experience: "خبرة",
    satisfaction: "رضا",
    policy: "سياسة",
    rights: "حقوق",
    reserved: "محفوظة"
  };

  var EN_REWRITE_MAP = {};
  Object.keys(EN_REWRITE_RAW).forEach(function (key) {
    EN_REWRITE_MAP[phraseKey(key)] = EN_REWRITE_RAW[key];
  });

  var AR_PHRASE_MAP = {};
  Object.keys(AR_PHRASE_RAW).forEach(function (key) {
    AR_PHRASE_MAP[phraseKey(key)] = AR_PHRASE_RAW[key];
  });

  var STATE = {
    lang: "en",
    theme: "light",
    page: "",
    pageKey: "home",
    i18nNodes: [],
    placeholderNodes: [],
    staticTextNodes: [],
    staticPlaceholderNodes: [],
    titleEn: "",
    heroIndex: 0
  };

  function q(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qa(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function normalize(value) {
    return (value || "")
      .toLowerCase()
      .replace(/[^a-z0-9\u0600-\u06ff]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function pathNow() {
    return decodeURIComponent(window.location.pathname || "").replace(/\\/g, "/").toLowerCase();
  }

  function detectPage() {
    var current = pathNow();
    var keys = Object.keys(ROUTES);
    for (var i = 0; i < keys.length; i += 1) {
      var route = ROUTES[keys[i]].toLowerCase();
      if (current.endsWith("/" + route)) return ROUTES[keys[i]];
    }
    return "";
  }

  function detectPageKey() {
    var keys = Object.keys(ROUTES);
    for (var i = 0; i < keys.length; i += 1) {
      if (ROUTES[keys[i]] === STATE.page) return keys[i];
    }
    return "home";
  }

  function toPath(route) {
    var current = pathNow();
    if (current.endsWith("/" + (route || "").toLowerCase())) return "index.html";
    return "../" + route;
  }

  function storageGet(key, fallback) {
    try {
      return window.localStorage.getItem(key) || fallback;
    } catch (error) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return;
    }
  }

  function ensureBrandingCss() {
    if (q("#codex-branding-css")) return;
    var link = document.createElement("link");
    link.id = "codex-branding-css";
    link.rel = "stylesheet";
    link.href = toPath("shared/branding.css");
    document.head.appendChild(link);
  }

  function activeNavId() {
    if (STATE.page === ROUTES.about) return "about";
    if (STATE.page === ROUTES.projects) return "projects";
    if (STATE.page === ROUTES.team) return "team";
    if (STATE.page === ROUTES.testimonials) return "reviews";
    if (STATE.page === ROUTES.contact) return "contact";
    if (STATE.page === ROUTES.maintenance || STATE.page === ROUTES.construction || STATE.page === ROUTES.finishing) return "services";
    return "home";
  }

  function setupShell() {
    var wrapper = q("body > div");
    if (wrapper) wrapper.classList.add("site-shell");
  }

  function hoistHeaderToShell(header) {
    var shell = q(".site-shell") || q("body > div");
    if (!shell || !header || header.parentNode === shell) return;

    var node = header.parentElement;
    var parents = [];
    while (node && node !== shell) {
      parents.push(node);
      node = node.parentElement;
    }

    shell.insertBefore(header, shell.firstChild);

    parents.forEach(function (parent) {
      if (!parent || parent === shell) return;
      if (parent.children.length === 0 && normalizeSpace(parent.textContent) === "") {
        parent.remove();
      }
    });
  }

  function closeMobile() {
    var overlay = q("#site-mobile-overlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function buildHeader() {
    var header = q("header");
    if (!header) return;
    hoistHeaderToShell(header);

    var active = activeNavId();
    var navHtml = NAV_ITEMS.map(function (item) {
      var text = STATE.lang === "ar" ? item.ar : item.en;
      var cls = item.id === active ? "site-link is-active" : "site-link";
      return '<a class="' + cls + '" data-nav="' + item.id + '" href="' + toPath(item.route) + '">' + text + "</a>";
    }).join("");

    header.className = "site-header";
    header.innerHTML = ''
      + '<a class="site-brand" href="' + toPath(ROUTES.home) + '">' 
      + '<span class="site-brand-mark">NB</span>'
      + '<span class="site-brand-text">'
      + '<span class="site-brand-title" id="site-brand-title"></span>'
      + '<span class="site-brand-subtitle" id="site-brand-subtitle"></span>'
      + "</span>"
      + "</a>"
      + '<nav class="site-nav">' + navHtml + "</nav>"
      + '<div class="site-actions">'
      + '<button class="site-icon-btn" id="site-theme-toggle" type="button"><span class="material-symbols-outlined">dark_mode</span></button>'
      + '<button class="site-lang-btn" id="site-lang-toggle" type="button">AR</button>'
      + '<a class="site-cta" id="site-header-cta" href="' + toPath(ROUTES.contact) + '"></a>'
      + '<button class="site-icon-btn site-menu-btn" id="site-menu-toggle" type="button"><span class="material-symbols-outlined">menu</span></button>'
      + "</div>";

    var overlay = q("#site-mobile-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "site-mobile-overlay";
      overlay.className = "site-mobile-overlay";
      overlay.innerHTML = '<aside class="site-mobile-menu"><button class="site-mobile-close" id="site-mobile-close" type="button"></button><nav class="site-mobile-links" id="site-mobile-links"></nav></aside>';
      document.body.appendChild(overlay);
    }

    var closeLabel = STATE.lang === "ar" ? "إغلاق" : "Close";
    var closeBtn = q("#site-mobile-close");
    if (closeBtn) {
      closeBtn.textContent = closeLabel;
      closeBtn.onclick = closeMobile;
    }
    var mobileLinks = q("#site-mobile-links");
    if (mobileLinks) {
      mobileLinks.innerHTML = NAV_ITEMS.map(function (item) {
        var text = STATE.lang === "ar" ? item.ar : item.en;
        var cls = item.id === active ? "site-mobile-link is-active" : "site-mobile-link";
        return '<a class="' + cls + '" href="' + toPath(item.route) + '">' + text + "</a>";
      }).join("");
      qa("a", mobileLinks).forEach(function (link) {
        link.onclick = closeMobile;
      });
    }

    var menuBtn = q("#site-menu-toggle");
    if (menuBtn) {
      menuBtn.onclick = function () {
        overlay.classList.add("is-open");
        document.body.style.overflow = "hidden";
      };
    }

    overlay.onclick = function (event) {
      if (event.target === overlay) closeMobile();
    };

    var themeToggle = q("#site-theme-toggle");
    var langToggle = q("#site-lang-toggle");
    if (themeToggle) {
      themeToggle.onclick = function () {
        setTheme(STATE.theme === "dark" ? "light" : "dark");
      };
    }
    if (langToggle) {
      langToggle.onclick = function () {
        setLanguage(STATE.lang === "ar" ? "en" : "ar");
      };
    }
  }

  function ensureMarketingStrip() {
    if (q("#site-marketing-strip")) return;
    var header = q("header.site-header");
    if (!header || !header.parentNode) return;

    var strip = document.createElement("section");
    strip.id = "site-marketing-strip";
    strip.className = "site-marketing-strip";
    strip.innerHTML = '<div><div class="site-strip-title" id="site-strip-title"></div><div class="site-strip-subtitle" id="site-strip-subtitle"></div></div><div class="site-strip-badge" id="site-strip-badge"></div>';
    header.parentNode.insertBefore(strip, header.nextSibling);
  }

  function updateHeaderLabels() {
    var title = q("#site-brand-title");
    var subtitle = q("#site-brand-subtitle");
    var cta = q("#site-header-cta");
    var langBtn = q("#site-lang-toggle");
    var icon = q("#site-theme-toggle .material-symbols-outlined");

    if (title) title.textContent = STATE.lang === "ar" ? "نيكسا بيلد" : "Nexa Build";
    if (subtitle) subtitle.textContent = STATE.lang === "ar" ? "مقاولات خفيفة | تشطيبات | صيانة" : "Light Construction | Finishing | Maintenance";
    if (cta) cta.textContent = STATE.lang === "ar" ? "اطلب عرض سعر" : "Request Quote";
    if (langBtn) langBtn.textContent = STATE.lang === "ar" ? "EN" : "AR";
    if (icon) icon.textContent = STATE.theme === "dark" ? "light_mode" : "dark_mode";

    var stripTitle = q("#site-strip-title");
    var stripSub = q("#site-strip-subtitle");
    var stripBadge = q("#site-strip-badge");
    if (stripTitle) stripTitle.textContent = STATE.lang === "ar" ? "حلول مقاولات متكاملة ترفع قيمة مشروعك" : "Integrated Contracting Solutions That Raise Project Value";
    if (stripSub) stripSub.textContent = STATE.lang === "ar" ? "تنفيذ أسرع، تشطيب أعلى جودة، وصيانة تقلل تكلفة التشغيل." : "Faster delivery, stronger finishing quality, and maintenance plans that reduce operating costs.";
    if (stripBadge) stripBadge.textContent = STATE.lang === "ar" ? "رضا عملاء 98%" : "98% Client Satisfaction";
  }

  function setTheme(theme) {
    STATE.theme = theme === "dark" ? "dark" : "light";
    storageSet("site-theme", STATE.theme);
    document.documentElement.classList.toggle("dark", STATE.theme === "dark");
    updateHeaderLabels();
  }

  function registerI18n(node, en, ar, mode) {
    if (!node) return;
    node.dataset.i18nEn = en;
    node.dataset.i18nAr = ar;
    node.dataset.i18nMode = mode || "text";
    if (STATE.i18nNodes.indexOf(node) === -1) STATE.i18nNodes.push(node);
  }

  function registerPlaceholder(node, en, ar) {
    if (!node) return;
    node.dataset.phEn = en;
    node.dataset.phAr = ar;
    if (STATE.placeholderNodes.indexOf(node) === -1) STATE.placeholderNodes.push(node);
  }

  function labelTarget(button) {
    if (!button) return null;
    var truncate = q(".truncate", button);
    if (truncate) return truncate;

    var spans = qa("span", button).filter(function (span) {
      return !(span.classList.contains("material-symbols-outlined") || span.classList.contains("material-icons"));
    });
    if (spans.length) return spans[spans.length - 1];

    var textNodes = Array.prototype.slice.call(button.childNodes).filter(function (node) {
      return node.nodeType === 3 && normalizeSpace(node.nodeValue);
    });
    if (textNodes.length) {
      var label = q(".site-btn-label", button);
      if (!label) {
        label = document.createElement("span");
        label.className = "site-btn-label";
        button.appendChild(label);
      }
      label.textContent = normalizeSpace(textNodes.map(function (node) { return node.nodeValue; }).join(" "));
      textNodes.forEach(function (node) { node.nodeValue = ""; });
      return label;
    }

    return button;
  }

  function applyRegisteredLanguage() {
    STATE.i18nNodes.forEach(function (node) {
      if (!node || !node.isConnected) return;
      var value = STATE.lang === "ar" ? node.dataset.i18nAr : node.dataset.i18nEn;
      if (node.dataset.i18nMode === "html") node.innerHTML = value;
      else node.textContent = value;
    });

    STATE.placeholderNodes.forEach(function (node) {
      if (!node || !node.isConnected) return;
      node.placeholder = STATE.lang === "ar" ? node.dataset.phAr : node.dataset.phEn;
    });
  }

  function rewriteEnglishText(text) {
    var normalized = phraseKey(text);
    return EN_REWRITE_MAP[normalized] || text;
  }

  function translateDynamic(value) {
    var text = normalizeSpace(value);
    if (!text) return "";

    var helpful = text.match(/^(\d+)\s+Helpful$/i);
    if (helpful) return helpful[1] + " مفيد";

    var day = text.match(/^(\d+)\s+days?\s+ago$/i);
    if (day) return "منذ " + day[1] + " يوم";

    var week = text.match(/^(\d+)\s+weeks?\s+ago$/i);
    if (week) return "منذ " + week[1] + " أسبوع";

    var month = text.match(/^(\d+)\s+months?\s+ago$/i);
    if (month) return "منذ " + month[1] + " شهر";

    var yearsShort = text.match(/^(\d+)y$/i);
    if (yearsShort) return yearsShort[1] + " سنة";

    return "";
  }

  function translateWordByWord(text) {
    return text.replace(/[A-Za-z][A-Za-z'-.]*/g, function (token) {
      var translated = WORD_AR[token.toLowerCase()];
      return translated || token;
    });
  }

  function toArabic(value) {
    var text = normalizeSpace(value);
    if (!text) return value;

    var exact = AR_PHRASE_MAP[phraseKey(text)];
    if (exact) return exact;

    var unquoted = text.replace(/^["'“”]+|["'“”]+$/g, "");
    if (unquoted !== text) {
      var exactUnquoted = AR_PHRASE_MAP[phraseKey(unquoted)];
      if (exactUnquoted) return '"' + exactUnquoted + '"';
    }

    var dynamic = translateDynamic(text);
    if (dynamic) return dynamic;

    var fallback = translateWordByWord(text);
    return fallback || text;
  }

  function isTranslatableNode(node) {
    if (!node || !node.parentElement) return false;
    var parent = node.parentElement;
    var text = normalizeSpace(node.nodeValue);
    if (!text) return false;
    if (text.length === 1 && !/[a-z0-9\u0600-\u06ff]/i.test(text)) return false;
    if (parent.closest(".material-symbols-outlined")) return false;
    if (parent.closest("svg")) return false;
    if (parent.closest("header.site-header")) return false;
    if (parent.closest("#site-mobile-overlay")) return false;
    if (parent.closest("#site-marketing-strip")) return false;
    if (parent.closest("[data-i18n-en]")) return false;
    var tag = parent.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return false;
    return true;
  }

  function collectStaticContent() {
    STATE.staticTextNodes = [];
    STATE.staticPlaceholderNodes = [];

    var roots = qa("main, footer");
    if (!roots.length) roots = [document.body];

    roots.forEach(function (root) {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      var node;
      while ((node = walker.nextNode())) {
        if (!isTranslatableNode(node)) continue;

        var raw = node.nodeValue;
        var trimmed = normalizeSpace(raw);
        if (!trimmed) continue;

        var start = raw.indexOf(trimmed);
        var prefix = start > -1 ? raw.slice(0, start) : "";
        var suffix = start > -1 ? raw.slice(start + trimmed.length) : "";
        var rewritten = rewriteEnglishText(trimmed);
        if (rewritten !== trimmed) node.nodeValue = prefix + rewritten + suffix;

        STATE.staticTextNodes.push({
          node: node,
          prefix: prefix,
          suffix: suffix,
          en: rewritten
        });
      }
    });

    qa("main input[placeholder], main textarea[placeholder], footer input[placeholder], footer textarea[placeholder]").forEach(function (node) {
      if (node.closest("header.site-header")) return;
      var en = rewriteEnglishText(normalizeSpace(node.placeholder || ""));
      if (!en) return;
      node.placeholder = en;
      STATE.staticPlaceholderNodes.push({ node: node, en: en });
    });

    STATE.titleEn = rewriteEnglishText(normalizeSpace(document.title || ""));
    if (STATE.titleEn) document.title = STATE.titleEn;
  }

  function applyStaticLanguage() {
    var isArabic = STATE.lang === "ar";

    STATE.staticTextNodes.forEach(function (entry) {
      if (!entry.node || !entry.node.isConnected) return;
      var text = isArabic ? toArabic(entry.en) : entry.en;
      entry.node.nodeValue = entry.prefix + text + entry.suffix;
    });

    STATE.staticPlaceholderNodes.forEach(function (entry) {
      if (!entry.node || !entry.node.isConnected) return;
      entry.node.placeholder = isArabic ? toArabic(entry.en) : entry.en;
    });

    if (STATE.titleEn) {
      document.title = isArabic ? toArabic(STATE.titleEn) : STATE.titleEn;
    }
  }

  function setLanguage(lang) {
    STATE.lang = lang === "ar" ? "ar" : "en";
    storageSet("site-lang", STATE.lang);
    document.documentElement.lang = STATE.lang;
    document.documentElement.dir = STATE.lang === "ar" ? "rtl" : "ltr";

    buildHeader();
    ensureMarketingStrip();
    updateHeaderLabels();
    applyRegisteredLanguage();
    applyStaticLanguage();
  }

  function findByText(selector, text) {
    var key = normalize(text);
    return qa(selector).find(function (node) {
      return normalize(node.textContent).indexOf(key) !== -1;
    });
  }

  function applyMarketingCopy() {
    if (STATE.page === ROUTES.home) {
      registerI18n(findByText("h1", "Corporate"), "Build Confidence<br><span class='text-primary'>From Foundation to Finish</span>", "نبني الثقة<br><span class='text-primary'>من الأساس حتى التسليم</span>", "html");
      registerI18n(findByText("p", "Excellence in Construction"), "We deliver light construction, premium finishing, and proactive maintenance programs that protect your investment and increase long-term property value.", "نقدم المقاولات الخفيفة والتشطيبات الراقية وبرامج الصيانة الاستباقية لحماية استثمارك ورفع قيمة العقار.");
    }

    if (STATE.page === ROUTES.about) {
      registerI18n(findByText("h1", "Building Dreams"), "Built on Trust, Engineered for Results", "نبني بالثقة وننفذ بنتائج ملموسة");
      registerI18n(findByText("p", "Your trusted partner"), "Nexa Build delivers light construction, finishing, and maintenance solutions that improve asset quality and shorten delivery time.", "تقدم نيكسا بيلد حلول المقاولات الخفيفة والتشطيبات والصيانة بما يرفع جودة الأصول ويقلل زمن التنفيذ.");
      registerI18n(findByText("h2", "Our Core Values"), "Our Business Values", "قيمنا في العمل");
    }

    if (STATE.page === ROUTES.maintenance) {
      registerI18n(findByText("h1", "Reliable Maintenance Solutions"), "Maintenance That Protects Your Investment", "صيانة تحمي استثمارك");
      registerI18n(findByText("h2", "Comprehensive Maintenance"), "Comprehensive Maintenance Services", "خدمات صيانة شاملة");
      registerPlaceholder(findByText("input", "Search"), "Search maintenance service...", "ابحث عن خدمة صيانة...");
    }

    if (STATE.page === ROUTES.construction) {
      registerI18n(findByText("h1", "Exquisite Interior Finishing"), "Agile Light Construction for Commercial Growth", "مقاولات خفيفة مرنة تدعم النمو التجاري");
      registerI18n(findByText("h2", "Ready to Transform Your Space"), "Need Light Construction Support?", "تحتاج دعمًا في المقاولات الخفيفة؟");
    }

    if (STATE.page === ROUTES.finishing) {
      registerI18n(findByText("h1", "Exquisite Interior Finishing"), "Premium Finishing That Sells Spaces", "تشطيبات فاخرة ترفع قيمة المساحات");
      registerI18n(findByText("h2", "Ready to Transform Your Space"), "Ready to Upgrade Your Property Value?", "جاهز لرفع قيمة عقارك؟");
    }

    if (STATE.page === ROUTES.projects) {
      registerI18n(findByText("h1", "Our Projects"), "Projects That Drive Business Growth", "مشاريع تدعم نمو الأعمال");
      registerI18n(findByText("p", "Showcasing"), "A portfolio of high-impact projects delivered with budget control, speed, and premium finishing quality.", "محفظة مشاريع عالية الأثر تم تسليمها بانضباط مالي وسرعة وجودة تشطيب مميزة.");
    }

    if (STATE.page === ROUTES.team) {
      registerI18n(findByText("h1", "Meet Our Leadership Team"), "The Experts Behind Every Successful Delivery", "الخبراء خلف كل تسليم ناجح");
      registerI18n(findByText("p", "The dedicated professionals"), "A specialized team that combines engineering precision and execution speed to deliver quality results on every project.", "فريق متخصص يجمع بين الدقة الهندسية وسرعة التنفيذ لتقديم نتائج عالية الجودة في كل مشروع.");
    }

    if (STATE.page === ROUTES.testimonials) {
      registerI18n(findByText("h1", "Trusted by Our Clients"), "Client Results Speak for Us", "نتائج العملاء تتحدث عنا");
      registerI18n(findByText("p", "We take pride"), "Real client feedback that reflects our quality commitment, delivery speed, and long-term service reliability.", "آراء عملاء حقيقية تعكس التزامنا بالجودة وسرعة التسليم وموثوقية الخدمة.");
    }

    if (STATE.page === ROUTES.contact) {
      registerI18n(findByText("h1", "Let's Build Together"), "Start Your Project With Confidence", "ابدأ مشروعك بثقة");
      registerI18n(findByText("p", "Ready to start your next project"), "Ready to launch your next project? Our team aligns scope, budget, and timeline from light construction to premium finishing.", "جاهز لإطلاق مشروعك القادم؟ فريقنا يوازن بين نطاق العمل والميزانية والجدول الزمني من المقاولات الخفيفة حتى التشطيبات الفاخرة.");
      registerPlaceholder(findByText("input", "Email"), "Business email", "البريد الإلكتروني");
    }
  }

  function setAction(button, action, en, ar) {
    if (!button) return;
    button.dataset.action = action;
    registerI18n(labelTarget(button), en, ar);
    if (button.dataset.boundAction === "1") return;
    button.dataset.boundAction = "1";
    button.style.cursor = "pointer";
    button.onclick = function (event) {
      event.preventDefault();
      handleAction(action, button);
    };
  }

  function goto(route, source) {
    var target = toPath(route);
    if (source) target += "?source=" + encodeURIComponent(source);
    window.location.href = target;
  }

  function downloadFile(name, text) {
    var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function handleAction(action, button) {
    if (action === "go-contact") return goto(ROUTES.contact, "cta");
    if (action === "go-projects") return goto(ROUTES.projects, "portfolio");
    if (action === "go-about") return goto(ROUTES.about, "process");
    if (action === "request-service") return goto(ROUTES.contact, "service-request");
    if (action === "view-plans") {
      var target = findByText("h2", "Comprehensive Maintenance");
      if (target && STATE.page === ROUTES.maintenance) target.scrollIntoView({ behavior: "smooth" });
      else goto(ROUTES.maintenance, "plans");
      return;
    }
    if (action === "call-support") {
      window.location.href = "tel:+966501234567";
      return;
    }
    if (action === "open-directions") {
      var loc = q("[data-location]");
      var place = loc ? loc.getAttribute("data-location") : "Riyadh Saudi Arabia";
      window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place), "_blank", "noopener,noreferrer");
      return;
    }
    if (action === "download-profile") {
      downloadFile(
        "company-profile-summary.txt",
        STATE.lang === "ar"
          ? "ملخص بروفايل الشركة\nالخدمات: المقاولات الخفيفة، التشطيبات، الصيانة."
          : "Company Profile Summary\nServices: Light Construction, Finishing, Maintenance."
      );
      return;
    }
    if (action === "download-brochure") {
      downloadFile(
        "project-brochure-summary.txt",
        STATE.lang === "ar"
          ? "ملخص كتيب المشاريع\nمشاريع تجارية وسكنية وأعمال صيانة."
          : "Project Brochure Summary\nCommercial, residential and maintenance projects."
      );
      return;
    }
    if (action === "subscribe") {
      var input = button.parentElement ? q('input[type="email"]', button.parentElement) : null;
      if (!input) return;
      var email = normalizeSpace(input.value);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        input.focus();
        return;
      }
      input.value = "";
    }
  }

  function wireButtons() {
    qa("button").forEach(function (button) {
      if (!button || button.closest("header.site-header")) return;
      if ((button.id || "").indexOf("site-") === 0) return;

      var text = normalize(button.textContent);
      if (!text || text === "menu") return;
      if (/get a quote|get quote|get a free quote|request quote/.test(text)) return setAction(button, "go-contact", "Request Quote", "اطلب عرض سعر");
      if (/request service/.test(text)) return setAction(button, "request-service", "Book Service Visit", "احجز زيارة صيانة");
      if (/view plans/.test(text)) return setAction(button, "view-plans", "Service Packages", "باقات الخدمة");
      if (/contact support/.test(text)) return setAction(button, "call-support", "Call Support", "اتصل بالدعم");
      if (/view portfolio|view all projects|view case study/.test(text)) return setAction(button, "go-projects", "Explore Projects", "استعرض المشاريع");
      if (/our process/.test(text)) return setAction(button, "go-about", "How We Work", "آلية العمل");
      if (/contact sales|contact us/.test(text)) return setAction(button, "go-contact", "Talk to Sales", "تواصل مع المبيعات");
      if (/download.*pdf/.test(text)) return setAction(button, "download-profile", "Download Company Profile", "تحميل بروفايل الشركة");
      if (/download.*brochure/.test(text)) return setAction(button, "download-brochure", "Download Project Brochure", "تحميل كتيب المشاريع");
      if (/directions|get directions/.test(text)) return setAction(button, "open-directions", "Open Location", "افتح الموقع");
      if (/^go$/.test(text)) return setAction(button, "subscribe", "Join", "اشترك");
      if (/load more reviews/.test(text)) registerI18n(labelTarget(button), "More Client Reviews", "المزيد من تقييمات العملاء");
    });
  }

  function wireLegacyLinks() {
    var map = [
      { re: /home|الرئيسية/i, route: ROUTES.home },
      { re: /services|الخدمات/i, route: ROUTES.maintenance },
      { re: /projects|portfolio|المشاريع/i, route: ROUTES.projects },
      { re: /about|من نحن/i, route: ROUTES.about },
      { re: /team|فريق/i, route: ROUTES.team },
      { re: /reviews|testimonials|آراء/i, route: ROUTES.testimonials },
      { re: /contact|تواصل/i, route: ROUTES.contact }
    ];

    qa("a").forEach(function (a) {
      var href = normalizeSpace(a.getAttribute("href") || "");
      if (href && href !== "#") return;
      var text = normalize(a.textContent || a.getAttribute("aria-label") || "");
      for (var i = 0; i < map.length; i += 1) {
        if (map[i].re.test(text)) {
          a.href = toPath(map[i].route);
          break;
        }
      }
    });
  }

  function setChipActive(group, current) {
    group.forEach(function (btn) {
      btn.classList.remove("codex-chip-active");
    });
    if (current) current.classList.add("codex-chip-active");
  }

  function cardCategories(card) {
    var txt = normalize(card.textContent || "");
    var tags = ["all"];
    if (/residential|villa|chalet|سكن/.test(txt)) tags.push("residential");
    if (/commercial|office|mall|resort|infrastructure|business|تجار/.test(txt)) tags.push("commercial");
    if (/maintenance|road|access|صيان/.test(txt)) tags.push("maintenance");
    if (/finishing|floor|fit out|landscape|تشطيب/.test(txt)) tags.push("finishing");
    if (/flooring|herringbone|tile|oak|ارض/.test(txt)) tags.push("flooring");
    if (/painting|paint|wall|دهان/.test(txt)) tags.push("painting");
    if (/gypsum|ceiling|molding|جبس/.test(txt)) tags.push("gypsum");
    return tags;
  }

  function wireFilterGroup(required, cardsSelector) {
    var buttons = qa("button").filter(function (btn) {
      var t = normalize(btn.textContent);
      return required.some(function (x) {
        return t === x;
      });
    });
    if (buttons.length < required.length) return;

    var parent = buttons[0].parentElement;
    if (!parent) return;
    var group = Array.prototype.slice.call(parent.children).filter(function (n) {
      return n.tagName === "BUTTON";
    });

    var cards = qa(cardsSelector);
    if (!cards.length) return;

    group.forEach(function (btn) {
      var filter = normalize(btn.textContent);
      btn.dataset.filter = filter;
      if (btn.dataset.filterBound === "1") return;
      btn.dataset.filterBound = "1";
      btn.addEventListener("click", function () {
        cards.forEach(function (card) {
          var tags = cardCategories(card);
          card.style.display = filter === "all" || filter === "all projects" || tags.indexOf(filter.replace(" projects", "")) !== -1 ? "" : "none";
        });
        setChipActive(group, btn);
      });
    });

    setChipActive(group, group[0]);
  }

  function wireProjectArrows() {
    var prev = qa("button").find(function (b) {
      return normalize(b.textContent) === "arrow back";
    });
    var next = qa("button").find(function (b) {
      return normalize(b.textContent) === "arrow forward";
    });
    if (!prev || !next) return;

    var hero = qa("div.group.relative.rounded-2xl.overflow-hidden.shadow-xl").find(function (el) {
      return (el.className || "").indexOf("h-[500px]") !== -1;
    });
    if (!hero) return;

    var image = q("[style*='background-image']", hero);
    var title = q("h3", hero);
    var location = q(".flex.items-center.text-slate-300", hero);
    var badges = qa(".flex.items-center.gap-2.mb-3 span", hero);
    if (!image || !title || !location || badges.length < 2) return;

    var slides = qa("div.group.flex.flex-col.gap-4.cursor-pointer")
      .map(function (card) {
        var img = q("[style*='background-image']", card);
        var ttl = q("h3", card);
        var loc = q(".text-right p", card);
        var badge = q(".absolute.top-3.right-3", card);
        return {
          image: img ? img.style.backgroundImage : "",
          title: ttl ? ttl.textContent.trim() : "Project",
          location: loc ? loc.textContent.trim() : "Saudi Arabia",
          badge: badge ? badge.textContent.trim() : "Project"
        };
      })
      .filter(function (slide) {
        return !!slide.image;
      });
    if (!slides.length) return;

    function render() {
      var slide = slides[STATE.heroIndex % slides.length];
      image.style.backgroundImage = slide.image;
      title.textContent = slide.title;
      location.innerHTML = '<span class="material-symbols-outlined mr-1 text-primary text-lg">location_on</span> ' + slide.location;
      badges[0].textContent = STATE.lang === "ar" ? "مميز" : "Featured";
      badges[1].textContent = slide.badge;
    }

    prev.onclick = function (e) {
      e.preventDefault();
      STATE.heroIndex = (STATE.heroIndex - 1 + slides.length) % slides.length;
      render();
    };
    next.onclick = function (e) {
      e.preventDefault();
      STATE.heroIndex = (STATE.heroIndex + 1) % slides.length;
      render();
    };
  }

  function wireHelpfulAndReviews() {
    qa("button").forEach(function (btn) {
      if (normalize(btn.textContent).indexOf("helpful") === -1) return;
      btn.style.cursor = "pointer";
      btn.onclick = function (e) {
        e.preventDefault();
        var label = q("span:last-child", btn) || btn;
        var m = (label.textContent || "").match(/(\d+)/);
        if (!m) return;
        var count = parseInt(m[1], 10);
        var liked = btn.dataset.liked === "1";
        btn.dataset.liked = liked ? "0" : "1";
        label.textContent = label.textContent.replace(/\d+/, String(liked ? Math.max(0, count - 1) : count + 1));
      };
    });

    var more = qa("button").find(function (btn) {
      return normalize(btn.textContent).indexOf("load more reviews") !== -1;
    });
    if (!more) return;

    var section = more.closest("section");
    var grid = section ? q(".grid", section) : null;
    if (!grid) return;

    more.onclick = function (e) {
      e.preventDefault();
      var clones = Array.prototype.slice.call(grid.children).slice(0, 2).map(function (n) {
        return n.cloneNode(true);
      });
      clones.forEach(function (clone) {
        grid.appendChild(clone);
      });
      wireHelpfulAndReviews();
    };
  }

  function wireMapZoom() {
    var plus = qa("button").find(function (b) {
      return normalize(b.textContent) === "add";
    });
    var minus = qa("button").find(function (b) {
      return normalize(b.textContent) === "remove";
    });
    var map = q("[data-location]");
    if (!plus || !minus || !map) return;

    var scale = 1;
    function apply() {
      map.style.transformOrigin = "center center";
      map.style.transform = "scale(" + scale + ")";
    }

    plus.onclick = function (e) {
      e.preventDefault();
      scale = Math.min(1.8, scale + 0.1);
      apply();
    };
    minus.onclick = function (e) {
      e.preventDefault();
      scale = Math.max(1, scale - 0.1);
      apply();
    };
  }

  function upgradeHeroImages() {
    var map = {};
    map[ROUTES.home] = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.about] = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.maintenance] = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.construction] = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.finishing] = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.projects] = "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.testimonials] = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=68";
    map[ROUTES.contact] = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=68";

    var selected = map[STATE.page];
    if (!selected) return;

    var hero = q("main [style*='background-image']");
    if (!hero) hero = q("[style*='background-image']");
    if (!hero) return;

    var current = hero.style.backgroundImage || "";
    if (current.indexOf("linear-gradient") !== -1) {
      var gradient = current.split("url(")[0];
      hero.style.backgroundImage = gradient + "url('" + selected + "')";
    } else {
      hero.style.backgroundImage = "url('" + selected + "')";
    }
    hero.style.backgroundPosition = "center";
    hero.style.backgroundSize = "cover";
  }

  function optimizePerformance() {
    qa("img").forEach(function (img) {
      if (!img.getAttribute("loading")) img.loading = "lazy";
      if (!img.getAttribute("decoding")) img.decoding = "async";
    });
  }

  // 🎨 ============ PROFESSIONAL ANIMATIONS ============ 🎨

  // Counter Animation - animate numbers on scroll
  function initCounterAnimation() {
    var counters = qa("[data-counter]");
    if (!counters.length) return;

    var hasAnimated = {};
    
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting || hasAnimated[entry.target]) return;
        hasAnimated[entry.target] = true;

        var target = parseFloat(entry.target.getAttribute("data-counter")) || 0;
        var duration = 2000;
        var startTime = Date.now();

        function animate() {
          var elapsed = Date.now() - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var easeOutQuad = 1 - Math.pow(1 - progress, 2);
          var current = Math.floor(target * easeOutQuad);
          
          entry.target.textContent = current + (entry.target.getAttribute("data-suffix") || "");
          
          if (progress < 1) requestAnimationFrame(animate);
        }
        animate();
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  // Scroll Progress Bar
  function initScrollProgressBar() {
    var progressBar = document.createElement("div");
    progressBar.className = "fixed top-0 left-0 h-1 bg-gradient-to-r from-[#137fec] to-[#f97316] z-50 transition-all duration-300 ease-out";
    progressBar.style.width = "0%";
    document.body.insertBefore(progressBar, document.body.firstChild);

    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    });
  }

  // Smooth Fade-in on Scroll Animation
  function initScrollRevealAnimation() {
    var elements = qa("[data-animation='fade-up'], [data-animation='fade-in'], h1, h2, h3, .group.flex");
    if (!elements.length) return;

    elements.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = el.getAttribute("data-animation") === "fade-up" 
        ? "translateY(30px)" 
        : "translateX(-20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) translateX(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Interactive Hover Effects for Cards
  function initCardHoverEffects() {
    var cards = qa(".group.relative, [role='button'].group, .rounded-xl");
    
    cards.forEach(function (card) {
      card.style.transition = "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)";
      
      card.addEventListener("mouseenter", function () {
        if (!this.style.backgroundColor && !this.classList.contains("rounded-full")) {
          this.style.transform = "translateY(-8px)";
          this.style.boxShadow = "0 20px 40px rgba(19, 127, 236, 0.2)";
        }
      });
      
      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
        this.style.boxShadow = "none";
      });
    });
  }

  // CTA Button Pulse Animation
  function initCTAButtonAnimation() {
    var buttons = qa("button, [role='button']");
    
    buttons.forEach(function (btn) {
      var text = btn.textContent.toLowerCase();
      if (text.indexOf("quote") !== -1 || text.indexOf("contact") !== -1 || 
          text.indexOf("book") !== -1 || text.indexOf("اطلب") !== -1 ||
          text.indexOf("تواصل") !== -1 || text.indexOf("احجز") !== -1) {
        
        btn.style.position = "relative";
        btn.style.overflow = "hidden";
        
        btn.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.05)";
          this.style.boxShadow = "0 10px 30px rgba(19, 127, 236, 0.4)";
        });
        
        btn.addEventListener("mouseleave", function () {
          this.style.transform = "scale(1)";
        });
      }
    });
  }

  // Image Reveal Animation on Load
  function initImageRevealAnimation() {
    var images = qa("img");
    
    images.forEach(function (img) {
      var wrapper = img.parentElement;
      
      img.style.opacity = "0";
      img.style.transition = "opacity 0.8s ease-out";
      
      if (img.complete) {
        img.style.opacity = "1";
      } else {
        img.addEventListener("load", function () {
          this.style.opacity = "1";
        });
      }
    });
  }

  // Floating Accent Elements
  function initFloatingElements() {
    var style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(19, 127, 236, 0.7); }
        50% { box-shadow: 0 0 0 10px rgba(19, 127, 236, 0); }
      }
      @keyframes slide-in-right {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-left {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes bounce-in {
        0% { transform: scale(0.3); opacity: 0; }
        50% { opacity: 1; }
        70% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      .float-animation {
        animation: float 6s ease-in-out infinite;
      }
      .pulse-glow {
        animation: pulse-glow 2s infinite;
      }
      .accent-highlight {
        color: #f97316;
      }
    `;
    document.head.appendChild(style);

    // Apply animations to special elements
    var highlights = qa(".text-accent, [style*='f97316']");
    highlights.forEach(function (el) {
      el.classList.add("float-animation");
    });
  }

  // Form Input Focus Animation
  function initFormInputAnimation() {
    var inputs = qa("input, textarea, select");
    
    inputs.forEach(function (input) {
      input.style.transition = "all 0.3s ease";
      
      input.addEventListener("focus", function () {
        this.style.transform = "scale(1.02)";
        this.style.boxShadow = "0 0 0 3px rgba(19, 127, 236, 0.1)";
        if (this.parentElement) {
          this.parentElement.style.zIndex = "10";
        }
      });
      
      input.addEventListener("blur", function () {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
      });
    });
  }

  // Header Scroll Effect
  function initHeaderScrollEffect() {
    var header = q("header");
    if (!header) return;

    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY;
      
      if (scrollTop > 100) {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
      } else {
        header.style.boxShadow = "none";
      }
      
      lastScrollTop = scrollTop;
    });
  }

  // Text Animation on Load
  function initTextAnimations() {
    var headings = qa("h1, h2, h3");
    headings.forEach(function (heading, index) {
      heading.style.opacity = "0";
      heading.style.animation = "slide-in-left 0.6s ease-out forwards";
      heading.style.animationDelay = (index * 0.1) + "s";
      heading.style.animationFillMode = "both";
    });
  }

  // Call to Action Appearance Animation
  function initCTAAppearance() {
    var ctaElements = qa("[data-cta], button:contains('Quote'), a:contains('Contact')");
    if (!ctaElements.length) {
      // Fallback: find CTA buttons by text content
      var allButtons = qa("button, a[role='button']");
      ctaElements = [];
      allButtons.forEach(function (btn) {
        if (btn.textContent.toLowerCase().indexOf("quote") !== -1 ||
            btn.textContent.toLowerCase().indexOf("contact") !== -1 ||
            btn.textContent.toLowerCase().indexOf("book") !== -1) {
          ctaElements.push(btn);
        }
      });
    }

    var style = document.createElement("style");
    style.textContent = `
      @keyframes cta-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      .cta-pulse::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,255,255,0.1);
        border-radius: inherit;
        animation: cta-pulse 2s infinite;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  // Smooth Link Navigation with Transition
  function initSmoothLinkTransition() {
    var links = qa("a[href]");
    
    links.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("http")) {
        link.addEventListener("click", function (e) {
          var isHash = href.startsWith("#");
          if (!isHash) {
            e.preventDefault();
            // Navigate immediately to avoid visible flash and speed up response
            window.location.href = href;
          }
        });
      }
    });
  }

  function safeRun(name, fn) {
    try {
      fn();
    } catch (error) {
      if (window && window.console && window.console.warn) {
        window.console.warn("site.js task failed:", name, error);
      }
    }
  }

  function init() {
    STATE.page = detectPage();
    STATE.pageKey = detectPageKey();
    STATE.lang = storageGet("site-lang", "en") === "ar" ? "ar" : "en";
    // Ensure a default theme value exists (explicitly default to light)
    if (storageGet("site-theme", null) === null) storageSet("site-theme", "light");
    STATE.theme = storageGet("site-theme", "light") === "dark" ? "dark" : "light";
    if (document.body) document.body.setAttribute("data-page", STATE.pageKey);

    // Core setup (run synchronously)
    ensureBrandingCss();
    setupShell();
    buildHeader();
    ensureMarketingStrip();
    safeRun("wireLegacyLinks", wireLegacyLinks);
    safeRun("applyMarketingCopy", applyMarketingCopy);
    safeRun("wireButtons", wireButtons);
    safeRun("wireFilterGroup-projects", function () {
      wireFilterGroup(["all projects", "residential", "commercial", "maintenance", "finishing"], "div.group.flex.flex-col.gap-4.cursor-pointer");
    });
    safeRun("wireFilterGroup-finishing", function () {
      wireFilterGroup(["all", "flooring", "painting", "gypsum"], "div.break-inside-avoid.group.relative.rounded-xl.overflow-hidden.cursor-pointer");
    });
    safeRun("wireProjectArrows", wireProjectArrows);
    safeRun("wireHelpfulAndReviews", wireHelpfulAndReviews);
    safeRun("wireMapZoom", wireMapZoom);
    safeRun("upgradeHeroImages", upgradeHeroImages);

    // Performance optimizations first
    safeRun("optimizePerformance", optimizePerformance);
    safeRun("collectStaticContent", collectStaticContent);

    // Non-critical visual enhancements deferred to idle time to improve responsiveness
    function deferredVisualInit() {
      safeRun("initScrollProgressBar", initScrollProgressBar);
      safeRun("initHeaderScrollEffect", initHeaderScrollEffect);
      safeRun("initCounterAnimation", initCounterAnimation);
      safeRun("initScrollRevealAnimation", initScrollRevealAnimation);
      safeRun("initImageRevealAnimation", initImageRevealAnimation);
      safeRun("initFormInputAnimation", initFormInputAnimation);
      safeRun("initSmoothLinkTransition", initSmoothLinkTransition);

      // Heavier/optional animations scheduled slightly later
      setTimeout(function () {
        safeRun("initFloatingElements", initFloatingElements);
        safeRun("initCardHoverEffects", initCardHoverEffects);
        safeRun("initCTAButtonAnimation", initCTAButtonAnimation);
        safeRun("initTextAnimations", initTextAnimations);
        safeRun("initCTAAppearance", initCTAAppearance);
      }, 300);
    }

    if ('requestIdleCallback' in window) requestIdleCallback(deferredVisualInit, { timeout: 1000 });
    else setTimeout(deferredVisualInit, 300);

    // Apply saved user preferences
    setTheme(STATE.theme);
    setLanguage(STATE.lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
