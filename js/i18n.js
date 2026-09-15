/**
 * IrrationaL Portfolio - Comprehensive English / Vietnamese i18n Engine
 */

(function () {
  'use strict';

  const translations = {
    en: {
      nav: {
        projects: "Projects",
        competencies: "Competencies",
        experience: "Experience",
        about: "About",
        contact: "Contact",
        cv: "Download CV"
      },
      hero: {
        status: "AVAILABLE FOR PRODUCTION CLIENT & INFRA ROLES",
        intro: "Hi, I'm",
        title: "IrrationaL",
        realname: "Vu Dinh Nghia Hung",
        role: "GAME CLIENT & INFRA ENGINEER",
        summary: "Architecting deterministic multiplayer combat, responsive gameplay mechanics, and production-grade client infrastructure. 4+ years of hands-on game engineering at Gear Games.",
        exploreWork: "Explore Featured Work",
        downloadCv: "Download CV",
        getInTouch: "Get in Touch",
        location: "Da Nang, Vietnam",
        experiencePill: "4+ Years at Gear Games",
        focusPill: "Unity & Deterministic Netcode"
      },
      projects: {
        tag: "PORTFOLIO",
        title: "Featured Projects",
        desc: "Commercial releases, deterministic multiplayer prototypes, and studio engineering platforms.",
        shippedLabel: "COMMERCIAL & LIVE TITLES",
        prototypesLabel: "GAMEPLAY LABS & CAPSTONE SYSTEMS",
        platformsLabel: "STUDIO PLATFORMS & TOOLS",
        
        // Puzzle Strike
        p1Role: "Client Engineer (Gameplay & Combat Systems)",
        p1Title: "Puzzle Strike: Combat RPG",
        p1Desc: "<strong>Phase 1 (Multiplayer Prototype):</strong> Engineered weapon ballistics, hero skills, and combat simulation on top of Photon Quantum deterministic netcode.<br/><strong>Phase 2 (Commercial Release):</strong> Pivoted into a turn-based Combat RPG. Owned core match-3 grid algorithms, cascading solvers, turn damage math, 3D character animation timelines, and mobile UGUI.",
        watchTrailer: "Watch Gameplay Trailer",
        newsCoverage: "Press Review (AFKmobi)",

        // POP! Slots
        p2Role: "Outsource Client & SDK Infrastructure Support",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Supported client engineering for playSTUDIOS' global top-grossing casino title. Maintained core client subsystems, resolved native bridge crashes (IAP, Firebase, Facebook SDKs), and profiled memory allocations and GPU draw call budgets using Splunk and Unity Profiler.",
        officialSite: "Official Title Site",

        // Secondary Cards
        p3Role: "Prototype",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "Unreleased mobile 3D racing prototype. Architected an extensible animation timeline framework for modular vehicle customization, dynamic parts swapping, and mobile shader draw call optimization.",

        p4Role: "Prototype",
        p4Title: "Idle Combat & Obstacle Arena",
        p4Desc: "Internal gameplay prototype fusing automated idle battle mechanics with moving obstacle hazards. Built obstacle spatial triggers, character FSM AI, modular gear stats, and hit-stop camera VFX.",

        p5Role: "Capstone Thesis",
        p5Title: "Final Fantasy-Style 2D RPG",
        p5Desc: "Engineered 100% solo as both University Graduation Thesis and 6-month Internship Capstone at Gear Inc. Implemented tilemaps, 4 playable heroes, turn-based battle math, and full save/load data serialization.",

        p6Role: "Web Platform",
        p6Title: "Gear Games LoL Championship",
        p6Desc: "Interactive company tournament portal featuring real-time bracket propagation, automated group standings, match scheduling, and interactive Poro Easter eggs.",
        liveDemo: "Live App",
        sourceCode: "Source",

        p7Role: "Web Platform",
        p7Title: "Badminton Tournament 2026",
        p7Desc: "Official tournament portal for studio championship with live court scoring, BWF rules integration, and doubles service rotation tracking.",

        p8Role: "Interactive Web",
        p8Title: "Velvet Vines",
        p8Desc: "Sleek, responsive party game and card-drinking web application designed for social gatherings with fluid micro-animations."
      },
      skills: {
        tag: "ENGINEERING FOCUS",
        title: "Core Competencies",
        desc: "Specialized disciplines spanning deterministic networking, core gameplay mechanics, memory profiling, and native platform integration.",
        comp1Title: "Gameplay Architecture & Combat Systems",
        comp1Desc: "Turn-based damage formulas, finite state machines, algorithmic match-3 solvers, animation timeline choreographies, input buffering, and modular gear stat progression.",
        comp2Title: "Deterministic Multiplayer & Engine Tech",
        comp2Desc: "Tick-based lockstep simulation, deterministic physics concepts, Photon Quantum rollback prototype integration, and memory-conscious component lifecycles in Unity 2D/3D.",
        comp3Title: "Engine Profiling & Performance",
        comp3Desc: "Diagnosing CPU/GPU bottlenecks with Unity Memory Profiler and Frame Debugger, GPU draw call batching, dynamic UGUI canvas isolation, and Addressables memory management.",
        comp4Title: "Platform Infrastructure & Native SDKs",
        comp4Desc: "Native iOS/Android SDK triage (IAP, Firebase, Facebook), Splunk telemetry query filtering, macOS LiveOps desktop tools (Swift, Python), and fullstack web tools (Next.js)."
      },
      experience: {
        tag: "CAREER PATH",
        title: "Experience & Milestones",
        desc: "4+ years of studio production, native infrastructure triage, and engineering leadership.",
        toggleEarly: "View Academic & Early Milestones (2015 — 2021)",
        hideEarly: "Hide Academic & Early Milestones",

        job1Date: "Nov 2024 — Present",
        job1Role: "Infra Engineer",
        job1Company: "Gear Games · Da Nang, Vietnam",
        job1Bullets: [
          "Diagnosed and resolved critical third-party SDK defects across In-App Purchases (IAP), Firebase, and Facebook SDK.",
          "Filtered production crash signatures, telemetry, and distributed logs using Splunk queries to isolate root causes.",
          "Maintained and developed macOS internal tools for Live Ops using Xcode, Swift, and Python; accelerated velocity with AI-augmented workflows."
        ],

        job2Date: "Mar 2024 — Nov 2024",
        job2Role: "Client Engineer — Custom Car Racing",
        job2Company: "Gear Games · Da Nang, Vietnam",
        job2Bullets: [
          "Architected an extensible animation timeline framework for dynamic 3D vehicle customization and parts swapping.",
          "Refactored UI views and shaders to minimize draw calls and optimize GPU batching across mobile hardware.",
          "Translated complex GDD mechanics into decoupled, testable gameplay modules."
        ],

        job3Date: "Aug 2023 — Mar 2024",
        job3Role: "Client Engineer — Idle Combat & Obstacles",
        job3Company: "Gear Games · Da Nang, Vietnam",
        job3Bullets: [
          "Engineered physics interactions, trigger logic, and spatial hazards for moving obstacle courses.",
          "Implemented autonomous character combat state machines, auto-attack sequencing, and modular gear stat progression.",
          "Integrated combat feedback VFX (hit impacts, camera shakes) and responsive mobile HUD interfaces."
        ],

        job4Date: "Nov 2021 — Aug 2023",
        job4Role: "Client Engineer — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Da Nang, Vietnam",
        job4Bullets: [
          "Phase 1 (Prototype): Implemented weapon ballistic mechanics, character skills, and combat hooks interacting with Photon Quantum.",
          "Phase 2 (Released Title): Engineered core match-3 grid solver algorithms, cascading logic, and full turn-based combat damage/mana progression.",
          "Integrated artist 3D character models into Unity, authored timeline choreography for skills and movements, and built responsive in-game UI/UX."
        ],

        // Compact Milestones
        m1Date: "Apr 2021 — Nov 2021",
        m1Title: "Client Engineer Intern @ Gear Inc",
        m1Desc: "Built a Final Fantasy-style 2D RPG 100% solo as both Graduation Thesis and Internship Capstone (combat, tilemaps, save/load data serialization).",

        m2Date: "2020",
        m2Title: "Backend Developer Intern @ Enouvo IT Solutions",
        m2Desc: "Collaborated under senior guidance to run API test suites using Postman and troubleshoot Node.js backend services.",

        m3Date: "2018 — 2022",
        m3Title: "B.S. in Computing @ University of Greenwich Vietnam",
        m3Desc: "Selected as one of the first 9 Google Developer Student Club (DSC) Leads across Vietnam. Represented Vietnam at Google DSC SEA Summit 2019 in Malaysia.",

        m4Date: "2015 — 2018",
        m4Title: "Specialized in Informatics @ Le Quy Don High School for the Gifted",
        m4Desc: "National Science & Tech Award for IoT Early Warning System. Researched traffic density computer vision with OpenCV."
      },
      about: {
        tag: "PROFILE",
        title: "About Me",
        photoTag: "Vu Dinh Nghia Hung // IrrationaL",
        photoRole: "Game Client & Infra Engineer",
        lead: "Game Client & Infra Engineer with 4+ years of production experience bridging core gameplay mechanics, deterministic multiplayer logic, and production SDK stability.",
        p1: "Over 4+ years at Gear Games, I served as both a Client Engineer and an Infra Engineer. My work spanned the full spectrum of game production: from architecting core combat algorithms, vehicle customization timelines, and obstacle hazard courses, to diagnosing deep native iOS/Android SDK defects (IAP, Firebase, Facebook SDK) and production telemetry in Splunk.",
        p2: "Earlier in my career, I was handpicked as one of the first 9 inaugural Google Developer Student Club (DSC) Leads in Vietnam, attending the 2019 Malaysia Summit. I hold a B.S. in Computing from the University of Greenwich Vietnam and graduated from the Informatics specialized class at Le Quy Don High School for the Gifted."
      },
      contact: {
        tag: "GET IN TOUCH",
        title: "Let's Build Something Exceptional",
        desc: "Looking for an experienced Unity engineer to architect gameplay systems, solve deterministic multiplayer netcode, or optimize production client infrastructure? Let's talk.",
        composeEmail: "Transmit Direct Email",
        discordCopy: "Discord: _irrational_",
        copiedToast: "Copied Discord ID to clipboard!"
      },
      footer: {
        rights: "All rights reserved.",
        designedBy: "Engineered by IrrationaL (Vu Dinh Nghia Hung)",
        sourceCode: "View Source on GitHub"
      }
    },
    vi: {
      nav: {
        projects: "Dự Án",
        competencies: "Năng Lực",
        experience: "Kinh Nghiệm",
        about: "Giới Thiệu",
        contact: "Liên Hệ",
        cv: "Tải CV"
      },
      hero: {
        status: "SẴN SÀNG CHO CÁC VỊ TRÍ GAME CLIENT & INFRA",
        intro: "Xin chào, tôi là",
        title: "IrrationaL",
        realname: "Vũ Đình Nghĩa Hưng",
        role: "KỸ SƯ GAME CLIENT & HẠ TẦNG KỸ THUẬT",
        summary: "Thiết kế kiến trúc hệ thống chiến đấu multiplayer đồng bộ (deterministic), cơ chế gameplay mượt mà và hạ tầng engine ổn định. Hơn 4 năm kinh nghiệm phát triển game thực chiến tại Gear Games.",
        exploreWork: "Khám Phá Dự Án",
        downloadCv: "Tải CV PDF",
        getInTouch: "Kết Nối Ngay",
        location: "Đà Nẵng, Việt Nam",
        experiencePill: "4+ Năm tại Gear Games",
        focusPill: "Chuyên sâu Unity & Deterministic Netcode"
      },
      projects: {
        tag: "DANH MỤC DỰ ÁN",
        title: "Dự Án Tiêu Biểu",
        desc: "Các tựa game thương mại đã phát hành, nguyên mẫu multiplayer đồng bộ và nền tảng hỗ trợ studio.",
        shippedLabel: "GAME THƯƠNG MẠI & LIVE-OPS",
        prototypesLabel: "NGUYÊN MẪU GAMEPLAY & ĐỒ ÁN TỐT NGHIỆP",
        platformsLabel: "NỀN TẢNG WEB & CÔNG CỤ NỘI BỘ",

        p1Role: "Kỹ Sư Client (Gameplay & Hệ Thống Chiến Đấu)",
        p1Title: "Puzzle Strike: Combat RPG",
        p1Desc: "<strong>Giai đoạn 1 (Nguyên mẫu Multiplayer):</strong> Lập trình đường đạn vũ khí, kỹ năng tướng và mô phỏng chiến đấu tương tác với netcode đồng bộ Photon Quantum.<br/><strong>Giai đoạn 2 (Phát hành Thương mại):</strong> Chuyển hướng sang Combat RPG theo lượt. Chịu trách nhiệm thuật toán bàn cờ match-3, giải thuật dây chuyền (cascading), tính toán sát thương, timeline diễn hoạt nhân vật 3D và giao diện mobile UGUI.",
        watchTrailer: "Xem Trailer Gameplay",
        newsCoverage: "Báo chí đưa tin (AFKmobi)",

        p2Role: "Hỗ Trợ Kỹ Thuật Outsource Client & Native SDKs",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Hỗ trợ kỹ thuật client cho tựa game casino hàng đầu thế giới của playSTUDIOS. Bảo trì hệ thống con client, khắc phục lỗi crash cầu nối native (IAP, Firebase, Facebook SDKs), phân tích cấp phát bộ nhớ và tối ưu ngân sách draw calls bằng Splunk và Unity Profiler.",
        officialSite: "Trang Web Chính Thức",

        p3Role: "Nguyên mẫu",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "Nguyên mẫu game đua xe 3D di động. Xây dựng khung timeline diễn hoạt cho hệ thống tùy biến xe cộ, thay thế phụ tùng linh hoạt và tối ưu hóa shader draw calls trên phần cứng di động.",

        p4Role: "Nguyên mẫu",
        p4Title: "Idle Combat & Obstacle Arena",
        p4Desc: "Nguyên mẫu gameplay nội bộ kết hợp cơ chế chiến đấu tự động với vượt chướng ngại vật di động. Xây dựng bộ kích hoạt không gian, AI máy trạng thái (FSM) nhân vật, trang bị module và hiệu ứng rung camera hit-stop.",

        p5Role: "Đồ án Tốt nghiệp",
        p5Title: "Final Fantasy-Style 2D RPG",
        p5Desc: "Lập trình 100% độc lập cho Đồ án Tốt nghiệp Đại học và Đồ án Thực tập 6 tháng tại Gear Inc. Thiết kế tilemap, 4 lớp nhân vật điều khiển được, toán chiến đấu theo lượt và tuần tự hóa lưu trữ dữ liệu người chơi.",

        p6Role: "Nền tảng Web",
        p6Title: "Giải Đấu LMHT Gear Games",
        p6Desc: "Cổng thông tin giải đấu nội bộ công ty với tính năng cập nhật nhánh đấu thời gian thực, tự động xếp hạng bảng đấu, lịch thi đấu và hiệu ứng Poro thú vị.",
        liveDemo: "Ứng Dụng Trực Tiếp",
        sourceCode: "Mã Nguồn",

        p7Role: "Nền tảng Web",
        p7Title: "Giải Cầu Lông Gear Games 2026",
        p7Desc: "Cổng thông tin chính thức cho giải vô địch cầu lông nội bộ với chấm điểm sân đấu trực tiếp, tích hợp luật BWF và hỗ trợ xoay vòng giao cầu đôi.",

        p8Role: "Trải nghiệm Web",
        p8Title: "Velvet Vines",
        p8Desc: "Ứng dụng web trò chơi tiệc tùng và thẻ bài được thiết kế cho các buổi tụ họp bạn bè với chuyển động mượt mà."
      },
      skills: {
        tag: "NĂNG LỰC KỸ THUẬT",
        title: "Lĩnh Vực Chuyên Môn",
        desc: "Các chuyên môn kỹ thuật chuyên sâu về netcode đồng bộ, cơ chế gameplay, tối ưu bộ nhớ và tích hợp nền tảng native.",
        comp1Title: "Kiến Trúc Gameplay & Hệ Thống Chiến Đấu",
        comp1Desc: "Công thức sát thương theo lượt, máy trạng thái hữu hạn (FSM), giải thuật bàn cờ match-3, biên đạo timeline diễn hoạt, đệm dữ liệu phím bấm và hệ thống chỉ số trang bị module.",
        comp2Title: "Multiplayer Đồng Bộ (Deterministic) & Engine",
        comp2Desc: "Mô phỏng lockstep theo nhịp tick, nguyên lý vật lý đồng bộ, tích hợp nguyên mẫu rollback Photon Quantum và quản lý vòng đời component tối ưu bộ nhớ trong Unity 2D/3D.",
        comp3Title: "Phân Tích Hiệu Năng & Tối Ưu Engine",
        comp3Desc: "Chẩn đoán điểm nghẽn CPU/GPU với Unity Memory Profiler và Frame Debugger, gom nhóm GPU batching, cô lập Canvas UGUI và quản lý tài nguyên Addressables.",
        comp4Title: "Hạ Tầng Nền Tảng & Native SDKs",
        comp4Desc: "Khắc phục sự cố Native iOS/Android SDK (IAP, Firebase, Facebook), lọc dữ liệu viễn thám Splunk, công cụ LiveOps macOS (Swift, Python) và nền tảng web fullstack (Next.js)."
      },
      experience: {
        tag: "LỘ TRÌNH SỰ NGHIỆP",
        title: "Kinh Nghiệm & Cột Mốc",
        desc: "Hơn 4 năm sản xuất game tại studio, xử lý hạ tầng native và vai trò dẫn dắt kỹ thuật.",
        toggleEarly: "Xem các mốc học vấn & khởi đầu (2015 — 2021)",
        hideEarly: "Ẩn các mốc khởi đầu & học vấn",

        job1Date: "11/2024 — Hiện tại",
        job1Role: "Kỹ Sư Hạ Tầng (Infra Engineer)",
        job1Company: "Gear Games · Đà Nẵng, Việt Nam",
        job1Bullets: [
          "Chẩn đoán và khắc phục lỗi nghiêm trọng của SDK bên thứ ba trên In-App Purchases (IAP), Firebase và Facebook SDK.",
          "Phân tích chữ ký crash sản xuất, dữ liệu viễn thám và nhật ký phân tán bằng truy vấn Splunk để xác định nguyên nhân gốc rễ.",
          "Bảo trì và phát triển công cụ nội bộ macOS cho Live Ops bằng Xcode, Swift và Python; tăng tốc quy trình làm việc với sự hỗ trợ của AI."
        ],

        job2Date: "03/2024 — 11/2024",
        job2Role: "Kỹ Sư Client — Custom Car Racing",
        job2Company: "Gear Games · Đà Nẵng, Việt Nam",
        job2Bullets: [
          "Xây dựng khung timeline diễn hoạt mở rộng cho hệ thống tùy biến xe 3D và thay thế linh kiện linh hoạt.",
          "Tái cấu trúc giao diện và shader để giảm thiểu draw calls và tối ưu gom nhóm GPU trên phần cứng di động.",
          "Chuyển hóa các cơ chế tài liệu GDD phức tạp thành các module gameplay độc lập, dễ dàng kiểm thử."
        ],

        job3Date: "08/2023 — 03/2024",
        job3Role: "Kỹ Sư Client — Idle Combat & Obstacles",
        job3Company: "Gear Games · Đà Nẵng, Việt Nam",
        job3Bullets: [
          "Lập trình tương tác vật lý, logic kích hoạt và hiểm họa không gian cho đường đua chướng ngại vật di động.",
          "Xây dựng máy trạng thái chiến đấu tự động cho nhân vật, chuỗi đòn đánh tự động và tiến trình chỉ số trang bị.",
          "Tích hợp hiệu ứng phản hồi chiến đấu (va chạm, rung camera) và giao diện HUD mobile phản hồi nhanh."
        ],

        job4Date: "11/2021 — 08/2023",
        job4Role: "Kỹ Sư Client — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Đà Nẵng, Việt Nam",
        job4Bullets: [
          "Giai đoạn 1 (Nguyên mẫu): Lập trình cơ chế đường đạn, kỹ năng tướng và điểm nối chiến đấu tương tác với Photon Quantum.",
          "Giai đoạn 2 (Sản phẩm phát hành): Xây dựng thuật toán bàn cờ match-3 cốt lõi, cơ chế rơi combo và tính toán sát thương/mana theo lượt.",
          "Tích hợp mô hình 3D từ nghệ sĩ vào Unity, biên đạo timeline cho chiêu thức và xây dựng giao diện in-game."
        ],

        m1Date: "04/2021 — 11/2021",
        m1Title: "Thực tập sinh Kỹ sư Client @ Gear Inc",
        m1Desc: "Xây dựng game 2D RPG phong cách Final Fantasy độc lập 100% cho cả Đồ án tốt nghiệp và Báo cáo thực tập (chiến đấu, tilemap, lưu/tải dữ liệu).",

        m2Date: "2020",
        m2Title: "Thực tập sinh Backend @ Enouvo IT Solutions",
        m2Desc: "Phối hợp chạy bộ kiểm thử API bằng Postman và gỡ lỗi dịch vụ backend Node.js dưới sự hướng dẫn của đàn anh đi trước.",

        m3Date: "2018 — 2022",
        m3Title: "Cử nhân Công nghệ Thông tin @ Đại học Greenwich Việt Nam",
        m3Desc: "Được Google Developers chọn là 1 trong 9 Chủ nhiệm CLB Sinh viên Nhà phát triển Google (DSC Lead) đầu tiên tại Việt Nam. Đại diện Việt Nam dự Hội nghị Google DSC SEA 2019 tại Malaysia.",

        m4Date: "2015 — 2018",
        m4Title: "Chuyên Tin học @ THPT Chuyên Lê Quý Đôn Đà Nẵng",
        m4Desc: "Giải Cuộc thi KHKT Cấp Quốc gia cho Hệ thống cảnh báo cháy & không khí sớm IoT. Nghiên cứu thị giác máy tính mật độ giao thông bằng OpenCV."
      },
      about: {
        tag: "HỒ SƠ CÁ NHÂN",
        title: "Về Bản Thân",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Kỹ Sư Game Client & Hạ Tầng",
        lead: "Kỹ Sư Game Client & Hạ Tầng Kỹ Thuật với hơn 4 năm kinh nghiệm thực chiến, kết nối giữa cơ chế gameplay cốt lõi, netcode đồng bộ và độ ổn định SDK trên thiết bị người dùng.",
        p1: "Trong hơn 4 năm tại Gear Games, tôi đảm nhiệm cả vai trò Kỹ sư Client và Kỹ sư Hạ tầng. Công việc trải dài toàn bộ quy trình sản xuất game: từ thuật toán chiến đấu, timeline tùy biến phương tiện, đến phân tích sâu các sự cố crash SDK native (IAP, Firebase, Facebook SDK) và dữ liệu viễn thám Splunk.",
        p2: "Trước đó, tôi vinh dự là 1 trong 9 đại diện đầu tiên tại Việt Nam được Google Developers lựa chọn làm Google DSC Lead, tham dự hội nghị tại Malaysia năm 2019. Tôi tốt nghiệp Cử nhân CNTT tại Đại học Greenwich và lớp Chuyên Tin trường THPT Chuyên Lê Quý Đôn Đà Nẵng."
      },
      contact: {
        tag: "LIÊN HỆ",
        title: "Cùng Nhau Tạo Nên Trải Nghiệm Đột Phá",
        desc: "Bạn đang tìm kiếm một kỹ sư Unity giàu kinh nghiệm để thiết kế kiến trúc gameplay, giải quyết netcode multiplayer đồng bộ, hoặc tối ưu hóa hạ tầng client? Hãy trò chuyện ngay.",
        composeEmail: "Gửi Email Trực Tiếp",
        discordCopy: "Discord: _irrational_",
        copiedToast: "Đã sao chép Discord ID vào bộ nhớ tạm!"
      },
      footer: {
        rights: "Bảo lưu mọi quyền.",
        designedBy: "Phát triển bởi IrrationaL (Vũ Đình Nghĩa Hưng)",
        sourceCode: "Xem mã nguồn trên GitHub"
      }
    }
  };

  const STORAGE_KEY = 'irrational-portfolio-lang';
  let currentLang = 'en';

  function getNestedValue(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev && prev[curr] !== undefined ? prev[curr] : null), obj);
  }

  function updateDOM(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(dict, key);
      if (val !== null) {
        if (typeof val === 'string' && val.includes('<')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Update lang toggle button text
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      const textSpan = langBtn.querySelector('.lang-text');
      if (textSpan) {
        textSpan.textContent = lang === 'en' ? 'VI' : 'EN';
      }
      langBtn.setAttribute('title', lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English');
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateDOM(lang);
  }

  function toggleLanguage() {
    const target = currentLang === 'en' ? 'vi' : 'en';
    setLanguage(target);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const browserLang = navigator.language && navigator.language.startsWith('vi') ? 'vi' : 'en';
    setLanguage(saved || browserLang);

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLanguage);
    }
  });

  window.portfolioI18n = {
    setLanguage,
    toggleLanguage,
    getCurrentLanguage: () => currentLang,
    getDictionary: (lang) => translations[lang || currentLang]
  };
})();
