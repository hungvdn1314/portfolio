
const translations = {
  en: {
    nav: { projects: 'Projects', about: 'About', skills: 'Skills', experience: 'Timeline', contact: 'Contact', cv: 'Download CV' },
    hero: {
      status: 'CLIENT ENGINEER & UNITY ARCHITECT',
      greeting: 'Hello, world. I am',
      title: 'IrrationaL',
      subtitle: 'Vu Dinh Nghia Hung',
      role: 'Unity Developer | Core Engine & Gameplay Engineer',
      bio: 'Crafting deterministic multiplayer combat, high-octane gameplay loops, and rock-solid engine tooling with 4+ years of mobile & client engineering experience.',
      viewWork: 'Explore Work',
      hireMe: 'Let's Connect',
      location: 'Da Nang, Vietnam',
      experiencePill: '4+ Years Experience',
      shippedPill: 'Live Shipped Titles'
    },
    about: {
      tag: 'SYSTEM SPEC',
      title: 'About Me',
      lead: 'Dynamic Unity Developer with 4 years of hands-on experience engineering core gameplay systems, real-time deterministic multiplayer logic, and scalable game client architecture.',
      p1: 'Currently serving as an <strong>Infra & Core Engine Engineer</strong> at Gear Games, diving deep into C++ engine optimization, third-party native SDK stability, and automated CI pipelines across Python, Swift, and Java.',
      p2: 'Former <strong>Google Developer Student Club (DSC) Lead</strong> at Greenwich Vietnam and award-winning competitive programmer from Le Quy Don Gifted High School.',
      statYears: 'Years Experience',
      statGames: 'Major Projects',
      statDsc: 'Ex-Google DSC Lead',
      statHonors: 'Informatics Awards'
    },
    projects: {
      tag: 'DEPLOYED OPERATIONS',
      title: 'Featured Works',
      shippedTitle: 'Shipped & Client Games',
      shippedDesc: 'Commercial titles and enterprise outsource games delivered for mobile platforms.',
      sideTitle: 'Internal & Web Platforms',
      sideDesc: 'High-performance tournament hubs and interactive experiences built for Gear Games.',
      viewSource: 'Live Demo',
      articleReview: 'News & Coverage',
      gameP1Title: 'Puzzle Strike: Combat RPG',
      gameP1Role: 'Lead Client Engineer (Puzzle & Combat)',
      gameP1Desc: 'A hybrid-casual combat RPG combining match-3 grid puzzle mechanics with intense shooter battles. Engineered deterministic real-time multiplayer synchronization via Photon Quantum.',
      gameP2Title: 'POP! Slots (PlaySTUDIOS)',
      gameP2Role: 'Infra & Engine Outsource Support',
      gameP2Desc: 'Global social casino hit by playSTUDIOS with tens of millions of downloads. Maintained core client subsystems and resolved native SDK crashes.',
      gameP3Title: 'Custom Car Racing 3D',
      gameP3Role: 'Client Engineer (Timeline & Customization)',
      gameP3Desc: 'High-fidelity mobile 3D racing title. Architected modular vehicle customization timeline systems and optimized UI/UX draw calls.',
      webP1Title: 'Gear Games LoL Tournament',
      webP1Role: 'Full-stack Tournament Hub',
      webP1Desc: 'Interactive company League of Legends championship portal with live brackets, standings, and match scheduling.',
      webP2Title: 'Gear Games Badminton 2026',
      webP2Role: 'Real-time Arena Portal',
      webP2Desc: 'Official tournament portal for internal badminton championship with real-time scoring and BWF rules.',
      webP3Title: 'Velvet Vines',
      webP3Role: 'Interactive Web Experience',
      webP3Desc: 'Sleek, responsive party game designed for social gatherings with fluid micro-animations.'
    },
    skills: {
      tag: 'HARDWARE & ABILITIES',
      title: 'Technical Stack',
      desc: 'Architected around deterministic simulation, C# / C++ performance, and mobile tooling.',
      engineTitle: 'Engines & Multiplayer',
      langTitle: 'Languages',
      gameplayTitle: 'Gameplay Engineering',
      toolingTitle: 'Architecture & Tooling',
      webTitle: 'Modern Web & Tools'
    },
    timeline: {
      tag: 'MISSION LOG',
      title: 'Career & Experience',
      job1Date: 'Nov 2024 - Present',
      job1Role: 'Infra & Core Engine Engineer (Outsource)',
      job1Company: 'Gear Games',
      job1Bullets: ['Optimized core game engine modules in C++ slashing memory bottlenecks.', 'Debugged and resolved multi-platform SDK issues (iOS/Android).', 'Built automated internal pipelines in Python, Swift, and Java.'],
      job2Date: 'Mar 2024 - Nov 2024',
      job2Role: 'Client Engineer - Custom Car Racing',
      job2Company: 'Gear Games',
      job2Bullets: ['Architected extensible animation timelines for 3D vehicle customization.', 'Refactored UI views to minimize draw calls across mobile devices.', 'Translated complex GDD specifications into robust gameplay modules.'],
      job3Date: 'Nov 2021 - Aug 2023',
      job3Role: 'Client Engineer - Puzzle Strike & Multiplayer',
      job3Company: 'Gear Games',
      job3Bullets: ['Developed core match-3 grid algorithms and turn-based combat logic in C#.', 'Engineered deterministic multiplayer logic with Photon Quantum.', 'Integrated complex animation state machines with artists and animators.'],
      job4Date: 'Apr 2021 - Nov 2021',
      job4Role: 'Client Engineer Intern',
      job4Company: 'Gear Games',
      job4Bullets: ['Shipped 3 game prototypes: Pixel Art RPG, Gold Miner, and Flappy Bird.', 'Mastered C#, Unity architecture, and team Git workflows.'],
      edu1Date: '2018 - 2022',
      edu1Role: 'Bachelor of Information Technology',
      edu1Company: 'University of Greenwich Vietnam',
      edu1Bullets: ['Selected by Google Developers team as Google Developer Student Club (DSC) Lead.', 'Spearheaded tech workshops, game jams, and hackathons.'],
      edu2Date: '2015 - 2018',
      edu2Role: 'Specialized in Informatics',
      edu2Company: 'Le Quy Don High School for the Gifted',
      edu2Bullets: ['City and national awards in Competitive Programming and Science & Technology contests.']
    },
    contact: {
      tag: 'ESTABLISH COMM LINK',
      title: 'Get In Touch',
      desc: 'Looking for a seasoned Unity engineer to build immersive gameplay systems, optimize core performance, or engineer high-stakes titles? Reach out.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      discordLabel: 'Discord',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Message / Project Brief',
      sendBtn: 'Transmit Message',
      copied: 'Copied to clipboard!'
    },
    footer: {
      rights: 'All rights reserved.',
      designedBy: 'Designed & Engineered by IrrationaL (Vu Dinh Nghia Hung)'
    }
  },
  vi: {
    nav: { projects: 'Dự Án', about: 'Giới Thiệu', skills: 'Kỹ Năng', experience: 'Lộ Trình', contact: 'Liên Hệ', cv: 'Tải CV' },
    hero: {
      status: 'KỸ SƯ CLIENT & LẬP TRÌNH UNITY',
      greeting: 'Xin chào, tôi là',
      title: 'IrrationaL',
      subtitle: 'Vũ Đình Nghĩa Hưng',
      role: 'Unity Developer | Core Engine & Gameplay Engineer',
      bio: 'Chuyên xây dựng hệ thống gameplay chiến đấu nhiều người chơi thời gian thực (deterministic multiplayer), tối ưu hóa engine và phát triển công cụ game theo quy trình hiện đại.',
      viewWork: 'Xem Dự Án',
      hireMe: 'Kết Nối Ngay',
      location: 'Đà Nẵng, Việt Nam',
      experiencePill: '4+ Năm Kinh Nghiệm',
      shippedPill: 'Dự Án Đã Phát Hành'
    },
    about: {
      tag: 'THÔNG SỐ HỆ THỐNG',
      title: 'Về Bản Thân',
      lead: 'Kỹ sư Unity năng động với 4 năm kinh nghiệm thực chiến chuyên sâu về hệ thống gameplay lõi, multiplayer đồng bộ chính xác và kiến trúc client mở rộng.',
      p1: 'Hiện đang đảm nhiệm vị trí <strong>Infra & Core Engine Engineer</strong> tại Gear Games, tập trung tối ưu hóa engine bằng C++, xử lý lỗi SDK native và xây dựng hệ thống CI/CD tự động bằng Python, Swift và Java.',
      p2: 'Cựu <strong>Google Developer Student Club (DSC) Lead</strong> tại Greenwich Việt Nam và từng đạt nhiều giải thưởng học sinh giỏi môn Tin học cấp thành phố/quốc gia từ trường THPT Chuyên Lê Quý Đôn.',
      statYears: 'Năm Kinh Nghiệm',
      statGames: 'Dự Án Nổi Bật',
      statDsc: 'Cựu Google DSC Lead',
      statHonors: 'Giải Thưởng Tin Học'
    },
    projects: {
      tag: 'CHIẾN DỊCH TRIỂN KHAI',
      title: 'Dự Án Nổi Bật',
      shippedTitle: 'Game Đã Phát Hành & Outsource',
      shippedDesc: 'Các tựa game thương mại và dự án đối tác quốc tế phục vụ hàng triệu người chơi.',
      sideTitle: 'Hệ Thống Web & Dự Án Phụ',
      sideDesc: 'Các cổng thông tin giải đấu và ứng dụng web thời gian thực cho Gear Games.',
      viewSource: 'Xem Trực Tiếp',
      articleReview: 'Bài Viết & Đánh Giá',
      gameP1Title: 'Puzzle Strike: Combat RPG',
      gameP1Role: 'Kỹ Sư Client Chính (Puzzle & Combat)',
      gameP1Desc: 'Game mobile kết hợp giữa xếp hình match-3 và bắn súng chiến thuật RPG. Phát triển hệ thống đồng bộ multiplayer Photon Quantum, animation state machine và thuật toán giải đố linh hoạt.',
      gameP2Title: 'POP! Slots (PlaySTUDIOS)',
      gameP2Role: 'Hỗ Trợ Hạ Tầng & Engine Outsource',
      gameP2Desc: 'Tựa game social casino toàn cầu của playSTUDIOS với hàng chục triệu lượt tải. Bảo trì hệ thống client, khắc phục lỗi crash SDK native và tối ưu hóa bộ nhớ trên nhiều dòng thiết bị di động.',
      gameP3Title: 'Custom Car Racing 3D',
      gameP3Role: 'Kỹ sư Client (Timeline & Độ Xe)',
      gameP3Desc: 'Game đua xe 3D di động. Thiết kế kiến trúc timeline hiệu thức tùy biến xe đua, phản hồi đồ họa tương tác và tối ưu ngân sách draw call UI/UX.',
      webP1Title: 'Gear Games LoL Tournament',
      webP1Role: 'Cổng Thông Tin Esport Toàn Diện',
      webP1Desc: 'Cổng thông tin giải đấu Liên Minh Huyền Thoại nội bộ Gear Games với nhánh đấu trực tiếp, bảng xếp hạng tự động, match schedule và Poro ARAM. Xây dựng bằng Next.js.',
      webP2Title: 'Gear Games Badminton 2026',
      webP2Role: 'Cổng Thi Đấu Cầu Lông Thời Gian Thực',
      webP2Desc: 'Cổng thông tin giải đấu cầu lông nội bộ 2026: điểm số trực tiếp, chia nhánh tự động, luật thi đấu BWF và mô phỏng lượt giao cầu đôi.',
      webP3Title: 'Velvet Vines',
      webP3Role: 'Ứng Dụng Web Tương Tác',
      webP3Desc: 'Trò chơi thẻ bài tiệc tùng mượt mà, giao diện tối ưu cho thiết bị di động với hiệu thức chuyển động bắt mắt.'
    },
    skills: {
      tag: 'PHẦN CỨNG & KỸ NĂNG',
      title: 'Nền Tảng Công Nghệ',
      desc: 'Tập trung vào mô phỏng deterministic, C# / C++ tối ưu hiệu năng và công cụ tự động hóa.',
      engineTitle: 'Game Engine & Multiplayer',
      langTitle: 'Ngôn Ngữ Lập Trình',
      gameplayTitle: 'Kỹ Thuật Gameplay',
      toolingTitle: 'Kiến Trúc & Tối Ưu',
      webTitle: 'Web Hiện Đại'
    },
    timeline: {
      tag: 'NHẬT KÝ SỰ NGHIỆP',
      title: 'Kinh Nghiệm Làm Việc',
      job1Date: '11/2024 - Hiện tại',
      job1Role: 'Kỹ Sư Hạ Tầng & Core Engine (Dự Án Outsource)',
      job1Company: 'Gear Games',
      job1Bullets: ['Tối ưu các thành phần core engine bằng C++, giải quyết triệt để nút thắt cổ chai về bộ nhớ và độ ổn định.', 'Điều tra và sửa lỗi nghiêm trọng trong các SDK bên thứ ba trên iOS & Android.', 'Xây dựng pipeline tự động và công cụ hỗ trợ lập trình viên bằng Python, Swift và Java.'],
      job2Date: '03/2024 - 11/2024',
      job2Role: 'Kỹ Sư Client - Custom Car Racing',
      job2Company: 'Gear Games',
      job2Bullets: ['Xây dựng hệ thống animation timeline tùy biến xe hơi linh hoạt, mượt mà.', 'Tối ưu hóa draw call và độ phản hồi UI/UX trên nhiều tỷ lệ màn hình điện thoại.', 'Chuyển đổi tài liệu thiết kế phức tạp thành các module gameplay bền vững, dễ kiểm thử.'],
      job3Date: '11/2021 - 08/2023',
      job3Role: 'Kỹ Sư Client - Puzzle Strike & Multiplayer',
      job3Company: 'Gear Games',
      job3Bullets: ['Xây dựng logic ghép ngọc match-3 và cơ chế chiến đấu theo lượt bằng C#.', 'Triển khai logic multiplayer deterministic bằng Photon Quantum cho trải nghiệm thi đấu không độ trễ.', 'Tích hợp tài nguyên 2D/3D, state machine animation nhân vật với đội ngũ họa sĩ & animator.'],
      job4Date: '04/2021 - 11/2021',
      job4Role: 'Thực Tập Sinh Kỹ Sư Client',
      job4Company: 'Gear Games',
      job4Bullets: ['Xây dựng và hoàn thành 3 prototype game: Game nhập vai Pixel Art, Đào Vàng, và Flappy Bird.', 'Nắm vững nền tảng kiến trúc C#, Unity, quy trình Git và tiêu chuẩn phát triển nhóm.'],
      edu1Date: '2018 - 2022',
      edu1Role: 'Cử Nhân Công Nghệ Thông Tin',
      edu1Company: 'Đại học Greenwich Việt Nam',
      edu1Bullets: ['Được đội ngũ Google Developers chọn làm Google Developer Student Club (DSC) Lead.', 'Chủ trì tổ chức các hội thảo công nghệ, game jam và cuộc thi lập trình.'],
      edu2Date: '2015 - 2018',
      edu2Role: 'Chuyên Tin Học',
      edu2Company: 'THPT Chuyên Lê Quý Đôn Đà Nẵng',
      edu2Bullets: ['Đạt nhiều giải thưởng danh giá cấp Thành phố và Quốc gia trong các kỳ thi Học sinh giỏi Tin học và KHKT.']
    },
    contact: {
      tag: 'KẾT NỐI TÍN HIỆU',
      title: 'Liên Hệ Với Tôi',
      desc: 'Bạn đang tìm kiếm kỹ sư Unity giàu kinh nghiệm để phát triển hệ thống gameplay hấp dẫn, tối ưu hóa engine hoặc tạo đột phá cho dự án game? Hãy gửi tin nhắn ngay.',
      emailLabel: 'Hộp Thư',
      phoneLabel: 'Điện Thoại',
      locationLabel: 'Địa Điểm',
      discordLabel: 'Discord',
      formName: 'Họ và Tên',
      formEmail: 'Email',
      formMessage: 'Nội dung trao đổi / Thông tin dự án',
      sendBtn: 'Gửi Tin Nhắn',
      copied: 'Đã sao chép vào bộ nhớ tạm!'
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
      designedBy: 'Thiết kế & Lập trình bởi IrrationaL (Vũ Đình Nghĩa Hưng)'
    }
  }
};

const detectLang = () => localStorage.getItem('portfolio_lang') || 'en';
let currentLang = detectLang();

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const keyPath = el.getAttribute('data-i18n').split('.');
    let val = translations[lang];
    for (const k of keyPath) {
      if (val && val[k] !== undefined) val = val[k];
      else { val = null; break; }
    }
    if (val !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    }
  });

  const langText = document.querySelector('#lang-toggle .lang-text');
  if (langText) langText.textContent = (lang === 'en' ? 'VI' : 'EN');
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'vi' : 'en');
}
