const translations = {
  en: {
    nav: {
      projects: 'Projects',
      competencies: 'Competencies',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      cv: 'Download CV'
    },
    hero: {
      status: 'AVAILABLE FOR CLIENT & INFRA ROLES',
      greeting: "Hi, I'm",
      title: 'IrrationaL',
      subtitle: 'Vu Dinh Nghia Hung',
      role: 'GAME CLIENT & INFRA ENGINEER',
      bio: 'Architecting deterministic multiplayer combat, responsive gameplay systems, and production engine infrastructure. 4+ years of hands-on production experience at Gear Games.',
      viewWork: 'View Projects',
      hireMe: "Let's Connect",
      downloadCv: 'Download CV',
      location: 'Da Nang, Vietnam',
      experiencePill: '4+ Years at Gear Games',
      shippedPill: 'Client & Infra Engineering'
    },
    about: {
      tag: 'ENGINEERING PROFILE',
      title: 'About Me',
      lead: 'Game Client & Infra Engineer with 4+ years of production experience bridging core gameplay mechanics, deterministic multiplayer logic, and production SDK stability.',
      p1: 'Over 4+ years at Gear Games, I served as both a Client Engineer and an Infra Engineer. My work spanned the full spectrum of game production: from architecting core combat algorithms, vehicle customization timelines, and obstacle hazard courses, to diagnosing deep native iOS/Android SDK defects (IAP, Firebase, Facebook SDK) and production telemetry in Splunk.',
      p2: 'Earlier in my career, I was handpicked as one of the first 9 inaugural Google Developer Student Club (DSC) Leads in Vietnam, attending the 2019 Malaysia Summit. I hold a B.S. in Computing from the University of Greenwich Vietnam and graduated from the Informatics specialized class at Le Quy Don High School for the Gifted.',
      profileCardTitle: 'Technical Profile',
      specRoleLabel: 'Role',
      specRoleVal: 'Game Client & Infra Engineer',
      specExpLabel: 'Experience',
      specExpVal: '4+ Years (Gear Games)',
      specFocusLabel: 'Core Focus',
      specFocusVal: 'Gameplay Systems, Deterministic Netcode, Native SDKs',
      specStatusLabel: 'Current Status',
      specStatusVal: 'Open to New Opportunities',
      specEduLabel: 'Education',
      specEduVal: 'B.S. Computing · Greenwich Vietnam'
    },
    projects: {
      tag: 'PORTFOLIO',
      title: 'Featured Projects',
      desc: 'Commercial titles, gameplay prototypes, and studio engineering platforms.',
      shippedTitle: 'Commercial & Live Titles',
      shippedDesc: 'Production releases, core gameplay systems, and live outsource engine support.',
      capstoneTitle: 'Prototypes & Gameplay Labs',
      capstoneDesc: 'Architectural prototypes, physics interactions, and solo capstone systems.',
      sideTitle: 'Studio Platforms & Web Tools',
      sideDesc: 'Interactive tournament portals and real-time platforms built for Gear Games.',
      viewSource: 'Live App',
      viewRepo: 'Source Code',
      articleReview: 'News & Coverage',
      officialSite: 'Official Site',

      gameP1Title: 'Puzzle Strike: Combat RPG',
      gameP1Role: 'Client Engineer (Gameplay & Combat Systems)',
      gameP1Desc: '<strong>Phase 1 (Multiplayer Prototype):</strong> Engineered weapon mechanics, hero skills, and combat simulation interacting with Photon Quantum.<br/><strong>Phase 2 (Production Release):</strong> Pivoted to a turn-based Combat RPG. Owned core match-3 grid algorithms, turn-based combat math, 3D character animation timeline integration, and responsive mobile HUD.',

      gameP2Title: 'POP! Slots (playSTUDIOS)',
      gameP2Role: 'Outsource Client & SDK Infrastructure Support',
      gameP2Desc: 'Assisted outsource client engineering for playSTUDIOS\' global hit. Maintained core client subsystems, patched native bridge plugins, triaged native iOS/Android crashes across IAP, Firebase, and Facebook SDKs, and performed memory/draw call profiling.',

      gameP3Title: 'Custom Car Racing 3D',
      gameP3Role: 'Client Engineer (Timeline & Customization Prototype)',
      gameP3Desc: 'Unreleased mobile 3D racing prototype. Architected modular vehicle customization timeline framework, parts swapping logic, visual feedback loops, and optimized mobile draw call budgets.',

      gameP4Title: 'Idle Combat & Obstacle Battleground',
      gameP4Role: 'Client Engineer (End-to-End Prototype)',
      gameP4Desc: 'Internal prototype fusing automated idle battle mechanics with dynamic obstacle traversal and battleground arenas. Built obstacle hazard logic, character combat AI state machines, modular gear progression, hit-stop VFX, and mobile HUD.',

      gameP5Title: 'Final Fantasy-Inspired 2D RPG',
      gameP5Role: 'Solo Architect & Developer (Graduation Capstone)',
      gameP5Desc: 'Engineered 100% solo as both University Graduation Thesis and 6-month Internship Capstone at Gear Inc. Sourced sprite/audio assets, designed tilemaps, coded 4 playable heroes, turn-based battle math, and player account save/load data serialization.',

      webP1Title: 'Gear Games LoL Tournament',
      webP1Role: 'Full-stack Tournament Hub',
      webP1Desc: 'Interactive company League of Legends championship portal with live brackets, automated group standings, match scheduling, and custom ARAM Poro Easter eggs. Built with Next.js.',

      webP2Title: 'Gear Games Badminton 2026',
      webP2Role: 'Real-time Arena Portal',
      webP2Desc: 'Official tournament portal for internal badminton championship with real-time scoring, bracket propagation, BWF rules integration, and doubles service rotation assistant.',

      webP3Title: 'Velvet Vines',
      webP3Role: 'Interactive Web Experience',
      webP3Desc: 'Sleek, responsive party game and card-drinking web application designed for social gatherings with fluid micro-animations.'
    },
    skills: {
      tag: 'CORE COMPETENCIES',
      title: 'Engineering Focus',
      desc: 'Specialized disciplines across gameplay mechanics, deterministic networking, engine profiling, and native infrastructure.',
      comp1Title: 'Gameplay Systems & Math',
      comp1Desc: 'Turn-based combat formulas, finite state machines, algorithmic match-3 solvers, animation timeline choreographies, input buffering, and modular gear architectures.',
      comp2Title: 'Deterministic Multiplayer & Engines',
      comp2Desc: 'Tick-based lockstep simulation, deterministic physics concepts, Photon Quantum prototype integration, and memory-conscious component lifecycles in Unity 2D/3D.',
      comp3Title: 'Engine Profiling & Optimization',
      comp3Desc: 'Diagnosing CPU/GPU bottlenecks using Unity Memory Profiler and Frame Debugger, draw call reduction via GPU batching, dynamic UGUI canvas isolation, and Addressables.',
      comp4Title: 'Infra, Tooling & Native Debugging',
      comp4Desc: 'Native iOS/Android SDK triage (IAP, Firebase, Facebook), Splunk telemetry query filtering, macOS LiveOps desktop tools (Swift, Python), and fullstack web platforms (Next.js).'
    },
    timeline: {
      tag: 'CAREER PATH',
      title: 'Experience & Milestones',
      job1Date: 'Nov 2024 — 2026',
      job1Role: 'Infra Engineer',
      job1Company: 'Gear Games',
      job1Bullets: [
        'Diagnosed and resolved critical third-party SDK defects across In-App Purchases (IAP), Firebase, and Facebook SDK.',
        'Filtered production crash signatures, telemetry, and distributed logs using Splunk queries to isolate root causes.',
        'Maintained and developed macOS internal tools for Live Ops using Xcode, Swift, and Python; accelerated velocity with AI-augmented workflows.'
      ],
      job2Date: 'Mar 2024 — Nov 2024',
      job2Role: 'Client Engineer — Custom Car Racing',
      job2Company: 'Gear Games',
      job2Bullets: [
        'Architected an extensible animation timeline framework for dynamic 3D vehicle customization and parts swapping.',
        'Refactored UI views and shaders to minimize draw calls and optimize GPU batching across mobile hardware.',
        'Translated complex GDD mechanics into decoupled, testable gameplay modules.'
      ],
      job3Date: 'Aug 2023 — Mar 2024',
      job3Role: 'Client Engineer — Idle Combat & Obstacles',
      job3Company: 'Gear Games',
      job3Bullets: [
        'Engineered physics interactions, trigger logic, and spatial hazards for moving obstacle courses.',
        'Implemented autonomous character combat state machines, auto-attack sequencing, and modular gear stat progression.',
        'Integrated combat feedback VFX (hit impacts, camera shakes) and responsive mobile HUD interfaces.'
      ],
      job4Date: 'Nov 2021 — Aug 2023',
      job4Role: 'Client Engineer — Survival Prototype & Puzzle Strike',
      job4Company: 'Gear Games',
      job4Bullets: [
        'Phase 1 (Prototype): Implemented weapon ballistic mechanics, character skills, and combat hooks interacting with Photon Quantum.',
        'Phase 2 (Released Title): Engineered core match-3 grid solver algorithms, cascading logic, and full turn-based combat damage/mana progression.',
        'Integrated artist 3D character models into Unity, authored timeline choreography for skills and movements, and built responsive in-game UI/UX.'
      ],
      job5Date: 'Apr 2021 — Nov 2021',
      job5Role: 'Client Engineer Intern',
      job5Company: 'Gear Inc',
      job5Bullets: [
        'Engineered a Final Fantasy-inspired 2D RPG 100% solo as both University Graduation Thesis and 6-month Internship Capstone (art/audio, tilemaps, 4 heroes, combat, save/load).',
        'Rebuilt classic titles (Flappy Bird, Gold Miner) to master Unity component lifecycles, design patterns, and team Git workflows.'
      ],
      job6Date: '2020',
      job6Role: 'Backend Developer Intern (OJT)',
      job6Company: 'Enouvo IT Solutions',
      job6Bullets: [
        'Collaborated under senior guidance to run API test suites using Postman and troubleshoot Node.js backend services.',
        'Gained foundational server-side insights before strategically pivoting into interactive game client engineering.'
      ],
      edu1Date: '2018 — 2022',
      edu1Role: 'Bachelor of Information Technology',
      edu1Company: 'University of Greenwich Vietnam',
      edu1Bullets: [
        'Selected by Google Developers as one of the first 9 Google Developer Student Club (DSC) Leads across Vietnam.',
        'Represented Vietnam at Google DSC SEA Summit 2019 in Malaysia; spearheaded university tech bootcamps in Flutter, Firebase, and GCP.'
      ],
      edu2Date: '2015 — 2018',
      edu2Role: 'Specialized in Informatics (Chuyên Tin)',
      edu2Company: 'Le Quy Don High School for the Gifted',
      edu2Bullets: [
        'National Science & Technology Contest (KHKT Cấp Quốc Gia) Award for IoT Smart Fire & Air Early Warning System (Arduino, MQ-135, SIM900A).',
        'Co-developed Smart Assistive Glasses for motor-impaired users (head accelerometer mouse & voice STT); researched traffic density via OpenCV.'
      ]
    },
    contact: {
      tag: 'CONTACT',
      title: "Let's Connect",
      desc: 'Looking for a seasoned Unity engineer to build gameplay systems, optimize core performance, or engineer client infrastructure? Reach out directly.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      discordLabel: 'Discord',
      copied: 'Copied!',
      formName: 'Your Name',
      formEmail: 'Your Email',
      formMessage: 'Message / Project Brief',
      sendBtn: 'Send Message'
    },
    footer: {
      rights: 'All rights reserved.',
      designedBy: 'Designed & Engineered by IrrationaL (Vu Dinh Nghia Hung)'
    }
  },
  vi: {
    nav: {
      projects: 'Dự Án',
      competencies: 'Năng Lực',
      experience: 'Kinh Nghiệm',
      about: 'Về Tôi',
      contact: 'Liên Hệ',
      cv: 'Tải CV'
    },
    hero: {
      status: 'SẴN SÀNG CHO VỊ TRÍ CLIENT & INFRA',
      greeting: 'Xin chào, tôi là',
      title: 'IrrationaL',
      subtitle: 'Vũ Đình Nghĩa Hưng',
      role: 'KỸ SƯ GAME CLIENT & INFRA',
      bio: 'Chuyên sâu xây dựng combat multiplayer deterministic, hệ thống gameplay mượt mà và tối ưu hóa hạ tầng client. 4+ năm kinh nghiệm sản xuất thực chiến tại Gear Games.',
      viewWork: 'Xem Dự Án',
      hireMe: 'Liên Hệ Ngay',
      downloadCv: 'Tải CV (PDF)',
      location: 'Đà Nẵng, Việt Nam',
      experiencePill: '4+ Năm Tại Gear Games',
      shippedPill: 'Kỹ Thuật Client & Infra'
    },
    about: {
      tag: 'HỒ SƠ NĂNG LỰC',
      title: 'Về Bản Thân',
      lead: 'Kỹ sư Game Client & Infra với 4+ năm kinh nghiệm thực chiến, chuyên sâu về logic gameplay, đồng bộ multiplayer deterministic và hạ tầng native SDK.',
      p1: 'Trong suốt hơn 4 năm tại Gear Games, tôi đảm nhiệm vai trò Kỹ Sư Client và Kỹ Sư Infra. Phạm vi công việc bao quát trọn vẹn quy trình làm game: từ lập trình thuật toán combat, timeline độ xe 3D và bẫy vượt chướng ngại vật, cho đến phân tích sâu các sự cố crash SDK native (IAP, Firebase, Facebook) và truy vấn telemetry trên Splunk.',
      p2: 'Khởi đầu từ chuyên Tin THPT Chuyên Lê Quý Đôn Đà Nẵng với các giải thưởng KHKT & Tin học, tôi được Google lựa chọn là 1 trong 9 Google Developer Student Club (DSC) Lead đầu tiên tại Việt Nam và tham dự Hội nghị Thượng đỉnh Malaysia 2019. Tôi tốt nghiệp Cử nhân Công nghệ Thông tin tại Đại học Greenwich Việt Nam.',
      profileCardTitle: 'Thông Số Kỹ Thuật',
      specRoleLabel: 'Vị Trí',
      specRoleVal: 'Kỹ Sư Game Client & Infra',
      specExpLabel: 'Kinh Nghiệm',
      specExpVal: '4+ Năm (Gear Games)',
      specFocusLabel: 'Trọng Tâm Lõi',
      specFocusVal: 'Hệ thống Gameplay, Deterministic Netcode, Native SDK',
      specStatusLabel: 'Trạng Thái',
      specStatusVal: 'Sẵn sàng đón nhận cơ hội mới',
      specEduLabel: 'Học Vấn',
      specEduVal: 'Cử nhân CNTT · ĐH Greenwich Việt Nam'
    },
    projects: {
      tag: 'DỰ ÁN TIÊU BIỂU',
      title: 'Dự Án Nổi Bật',
      desc: 'Các tựa game thương mại, nguyên mẫu sáng tạo và nền tảng hỗ trợ studio.',
      shippedTitle: 'Game Thương Mại & Live Production',
      shippedDesc: 'Các dự án phát hành chính thức, kiến trúc gameplay lõi và hỗ trợ hạ tầng outsource.',
      capstoneTitle: 'Nguyên Mẫu & Đồ Án Nghiên Cứu',
      capstoneDesc: 'Các hệ thống game tự xây dựng độc lập từ gốc và thử nghiệm cơ chế gameplay sâu.',
      sideTitle: 'Hệ Thống Web & Nền Tảng Studio',
      sideDesc: 'Các cổng thông tin giải đấu và ứng dụng tương tác thời gian thực xây dựng cho Gear Games.',
      viewSource: 'Trực Tiếp',
      viewRepo: 'Mã Nguồn GitHub',
      articleReview: 'Báo Chí & Đánh Giá',
      officialSite: 'Trang Chủ',

      gameP1Title: 'Puzzle Strike: Combat RPG',
      gameP1Role: 'Kỹ Sư Client (Gameplay & Hệ Thống Chiến Đấu)',
      gameP1Desc: '<strong>Giai đoạn 1 (Multiplayer Prototype):</strong> Phát triển cơ chế vũ khí, kỹ năng nhân vật và logic combat tương tác với Photon Quantum cho nguyên mẫu battleground.<br/><strong>Giai đoạn 2 (Bản phát hành chính thức):</strong> Chuyển hướng sang Turn-based Combat RPG kết hợp Match-3. Đảm nhiệm thuật toán match-3 lõi, logic chiến đấu theo lượt, tích hợp mô hình 3D từ họa sĩ, timeline hoạt cảnh chiêu thức và toàn bộ UI/UX.',

      gameP2Title: 'POP! Slots (PlaySTUDIOS)',
      gameP2Role: 'Hỗ Trợ Hạ Tầng & Engine Outsource',
      gameP2Desc: 'Hỗ trợ kỹ thuật client outsource cho tựa game đối tác playSTUDIOS. Bảo trì hệ thống client, sửa lỗi bridge plugin, điều tra các sự cố crash SDK native (IAP, Firebase, Facebook) trên iOS/Android và phân tích profiler bộ nhớ / draw call.',

      gameP3Title: 'Custom Car Racing 3D',
      gameP3Role: 'Kỹ Sư Client (Nguyên Mẫu 3D & Độ Xe)',
      gameP3Desc: 'Nguyên mẫu game đua xe 3D di động (chưa phát hành). Thiết kế kiến trúc timeline hiệu ứng tùy biến xe đua dạng module, phản hồi đồ họa tương tác và tối ưu ngân sách draw call UI/UX.',

      gameP4Title: 'Idle Combat & Vượt Chướng Ngại Vật',
      gameP4Role: 'Kỹ Sư Client (Prototype Toàn Diện)',
      gameP4Desc: 'Nguyên mẫu nội bộ kết hợp cơ chế idle combat tự động với vượt chướng ngại vật và đấu trường sinh tồn. Tự tay thiết kế logic bẫy chướng ngại vật, AI state machine tự đánh cho nhân vật, hệ thống trang bị, VFX và toàn bộ HUD di động.',

      gameP5Title: 'Game 2D RPG Phong Cách Final Fantasy',
      gameP5Role: 'Kỹ Sư & Kiến Trúc Sư Độc Lập (Đồ Án Tốt Nghiệp)',
      gameP5Desc: 'Tự tay phát triển 100% làm Đồ án tốt nghiệp Đại học kiêm Đồ án kết thúc 6 tháng thực tập tại Gear Inc. Tự tìm kiếm tài nguyên art/sound, vẽ tilemap bản đồ, lập trình 4 nhân vật, combat theo lượt, và hệ thống lưu/tải dữ liệu người chơi.',

      webP1Title: 'Gear Games LoL Tournament',
      webP1Role: 'Full-stack Tournament Hub',
      webP1Desc: 'Cổng thông tin giải đấu LMHT nội bộ với bảng đấu trực tiếp, cập nhật kết quả tự động, lịch thi đấu và Easter egg ARAM Poro. Xây dựng bằng Next.js.',

      webP2Title: 'Gear Games Badminton 2026',
      webP2Role: 'Cổng Thông Tin Đấu Trường Thời Gian Thực',
      webP2Desc: 'Cổng giải đấu cầu lông nội bộ với tính điểm trực tiếp theo thời gian thực, cập nhật nhánh đấu tự động, tích hợp bộ luật BWF chuẩn và trợ lý xoay tua giao cầu đánh đôi.',

      webP3Title: 'Velvet Vines',
      webP3Role: 'Trải Nghiệm Web Tương Tác',
      webP3Desc: 'Ứng dụng web board game và bài tương tác tiệc tùng trên di động, thiết kế cho các buổi tụ họp với chuyển động micro-animation mượt mà.'
    },
    skills: {
      tag: 'NĂNG LỰC CỐT LÕI',
      title: 'Trọng Tâm Kỹ Thuật',
      desc: 'Chuyên môn sâu về hệ thống gameplay, mạng deterministic, tối ưu hiệu năng engine và công cụ hỗ trợ vận hành studio.',
      comp1Title: 'Hệ Thống Gameplay & Toán Học',
      comp1Desc: 'Xây dựng cơ chế tương tác, finite state machine, công thức tính toán combat theo lượt, thuật toán solver match-3, timeline hoạt cảnh và hệ thống trang bị modular.',
      comp2Title: 'Multiplayer Deterministic & Engine',
      comp2Desc: 'Mô phỏng lockstep theo nhịp tick, vật lý deterministic, tích hợp prototype Photon Quantum và quản lý vòng đời bộ nhớ trong Unity 2D/3D.',
      comp3Title: 'Profiling & Tối Ưu Hiệu Năng',
      comp3Desc: 'Chẩn đoán nghẽn CPU/GPU qua Unity Memory Profiler và Frame Debugger, tối ưu số lượng draw call qua GPU batching, phân cấp UGUI và Addressables.',
      comp4Title: 'Hạ Tầng, Tooling & Gỡ Lỗi Native',
      comp4Desc: 'Điều tra chuyên sâu lỗi crash SDK native trên iOS/Android (IAP, Firebase, Facebook), phân tích log telemetry qua Splunk, phát triển tool macOS (Swift, Python) và nền tảng web (Next.js).'
    },
    timeline: {
      tag: 'LỘ TRÌNH',
      title: 'Kinh Nghiệm & Cột Mốc',
      job1Date: '11/2024 — 2026',
      job1Role: 'Kỹ Sư Infra',
      job1Company: 'Gear Games',
      job1Bullets: [
        'Điều tra và giải quyết triệt để lỗi crash third-party SDK native trên IAP, Firebase và Facebook SDK.',
        'Lọc và phân tích crash signature, telemetry từ log phân tán qua các truy vấn Splunk để cô lập nguyên nhân gốc rễ.',
        'Bảo trì và phát triển các công cụ nội bộ trên macOS bằng Xcode, Swift và Python phục vụ đội ngũ Live Ops; tích hợp quy trình AI nâng cao hiệu suất.'
      ],
      job2Date: '03/2024 — 11/2024',
      job2Role: 'Kỹ Sư Client — Game Đua Xe 3D Custom',
      job2Company: 'Gear Games',
      job2Bullets: [
        'Thiết kế kiến trúc animation timeline dạng module phục vụ tùy biến các bộ phận xe 3D trong game đua xe di động.',
        'Tái cấu trúc UI views và shader nhằm giảm thiểu draw call, tối ưu GPU batching trên nhiều thiết bị di động.',
        'Chuyển giao các cơ chế phức tạp từ Game Design Document (GDD) thành các module gameplay độc lập và dễ kiểm thử.'
      ],
      job3Date: '08/2023 — 03/2024',
      job3Role: 'Kỹ Sư Client — Idle Combat & Obstacles',
      job3Company: 'Gear Games',
      job3Bullets: [
        'Lập trình tương tác vật lý, logic trigger và hệ thống cạm bẫy không gian cho các màn vượt chướng ngại vật di động.',
        'Xây dựng finite state machine tự động chiến đấu, chuỗi auto-attack và hệ thống thăng tiến chỉ số trang bị modular.',
        'Tích hợp hiệu ứng phản hồi chiến đấu (hit impacts, rung camera) và giao diện HUD di động mượt mà.'
      ],
      job4Date: '11/2021 — 08/2023',
      job4Role: 'Kỹ Sư Client — Survival Prototype & Puzzle Strike',
      job4Company: 'Gear Games',
      job4Bullets: [
        'Giai đoạn 1 (Prototype): Lập trình cơ chế đường đạn vũ khí, kỹ năng nhân vật và combat tương tác với Photon Quantum.',
        'Giai đoạn 2 (Bản phát hành): Thiết kế thuật toán match-3 lõi, logic combo rơi khối và toàn bộ công thức sát thương/mana theo lượt.',
        'Tích hợp mô hình nhân vật 3D từ artist vào Unity, biên đạo timeline hoạt cảnh di chuyển/chiêu thức và dựng UI/UX hoàn chỉnh.'
      ],
      job5Date: '04/2021 — 11/2021',
      job5Role: 'Thực Tập Sinh Kỹ Sư Client',
      job5Company: 'Gear Inc',
      job5Bullets: [
        'Tự tay phát triển 100% tựa game 2D RPG theo phong cách Final Fantasy làm Đồ án Tốt nghiệp và Đồ án hoàn thành kỳ thực tập 6 tháng.',
        'Tái lập trình hoàn chỉnh các tựa game kinh điển (Flappy Bird, Đào Vàng) để làm chủ lifecycle Unity, design pattern và quy trình Git đội ngũ.'
      ],
      job6Date: '2020',
      job6Role: 'Thực Tập Sinh Lập Trình Backend (OJT)',
      job6Company: 'Enouvo IT Solutions',
      job6Bullets: [
        'Thực tập theo chương trình nhà trường, kiểm thử API bằng Postman và xử lý các lỗi nhỏ trong hệ thống backend Node.js.',
        'Có được góc nhìn nền tảng về hệ thống server trước khi định hướng chuyển hẳn sang đam mê kỹ thuật game client tương tác.'
      ],
      edu1Date: '2018 — 2022',
      edu1Role: 'Cử Nhân Công Nghệ Thông Tin',
      edu1Company: 'Đại Học Greenwich Việt Nam',
      edu1Bullets: [
        'Được Google Developers lựa chọn là 1 trong 9 Google Developer Student Club (DSC) Lead đầu tiên tại Việt Nam.',
        'Đại diện Việt Nam tham dự Google DSC SEA Summit 2019 tại Malaysia; tổ chức các workshop công nghệ về Flutter, Firebase và GCP.'
      ],
      edu2Date: '2015 — 2018',
      edu2Role: 'Chuyên Tin Học',
      edu2Company: 'THPT Chuyên Lê Quý Đôn Đà Nẵng',
      edu2Bullets: [
        'Giải thưởng Cuộc thi Khoa học Kỹ thuật (KHKT) Cấp Quốc Gia với Hệ thống cảnh báo sớm cháy nổ và ô nhiễm không khí thông minh (Arduino, MQ-135, SIM900A).',
        'Đồng phát triển Kính thông minh hỗ trợ người khuyết tật (chuột điều khiển theo cử động đầu và nhận diện giọng nói); nghiên cứu đo mật độ xe bằng OpenCV.'
      ]
    },
    contact: {
      tag: 'LIÊN HỆ',
      title: 'Kết Nối',
      desc: 'Bạn đang tìm kiếm kỹ sư game client giàu kinh nghiệm hoặc muốn thảo luận về kiến trúc hệ thống game, tối ưu hóa và hạ tầng client? Hãy liên hệ ngay.',
      emailLabel: 'Email',
      phoneLabel: 'Điện Thoại',
      locationLabel: 'Địa Điểm',
      discordLabel: 'Discord',
      copied: 'Đã sao chép!',
      formName: 'Họ và Tên',
      formEmail: 'Địa Chỉ Email',
      formMessage: 'Nội Dung Tin Nhắn',
      sendBtn: 'Gửi Tin Nhắn'
    },
    footer: {
      rights: 'Đã đăng ký bản quyền.',
      designedBy: 'Thiết kế & Lập trình bởi IrrationaL (Vũ Đình Nghĩa Hưng)'
    }
  }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('site_lang', lang);

  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedTranslation(t, key);
    if (value !== undefined) {
      const innerSpan = el.querySelector(':scope > span');
      if (innerSpan && el.querySelector(':scope > svg')) {
        innerSpan.innerHTML = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    const langText = langToggleBtn.querySelector('.lang-text');
    if (langText) {
      langText.textContent = lang === 'en' ? 'VI' : 'EN';
    }
  }

  document.documentElement.lang = lang;
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'vi' : 'en';
  setLanguage(nextLang);
}