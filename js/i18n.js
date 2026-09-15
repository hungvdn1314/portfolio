/**
 * IrrationaL Portfolio - Comprehensive English & Vietnamese Translation Engine
 * Directly synchronized with the Obsidian Knowledge Base
 */

(function () {
  'use strict';

  const translations = {
    en: {
      nav: {
        projects: "Projects",
        competencies: "Competencies",
        experience: "Experience",
        innovations: "Hardware & R&D",
        about: "About",
        contact: "Contact",
        cv: "Download CV"
      },
      hero: {
        status: "EX-INFRA & GAME CLIENT ENGINEER · GEAR GAMES",
        intro: "Hi, I'm",
        title: "IrrationaL",
        realname: "Vu Dinh Nghia Hung",
        role: "GAME CLIENT & INFRA ENGINEER",
        summary: "Crafting deterministic multiplayer combat, high-octane gameplay loops, and rock-solid engine tooling. 4+ years of hands-on game client architecture, mobile optimization, and native SDK infrastructure at Gear Games.",
        exploreWork: "Explore Featured Work",
        downloadCv: "Download CV",
        getInTouch: "Get in Touch",
        location: "Da Nang, Vietnam",
        experiencePill: "4+ Years at Gear Games",
        focusPill: "Photon Quantum & Engine Infra"
      },
      projects: {
        tag: "PORTFOLIO & CASE STUDIES",
        title: "Featured Projects",
        desc: "Commercial mobile releases, deterministic multiplayer prototypes, and studio engineering platforms directly from production.",
        shippedLabel: "COMMERCIAL & LIVE PRODUCTION",
        prototypesLabel: "GAMEPLAY LABS & CAPSTONE SYSTEMS",
        platformsLabel: "STUDIO PLATFORMS & TOOLS",
        innovationsLabel: "EARLY INNOVATIONS & HARDWARE R&D",
        
        // Puzzle Strike
        p1Role: "Client Engineer (Gameplay & Combat Systems) — First Full-time Role",
        p1Title: "Puzzle Strike: Combat RPG & Realtime Survival",
        p1Desc: "<strong>Stage 1 (Realtime Survival Prototype):</strong> High-octane battleground concept (PUBG concept + match-3 combat) built on Photon Quantum deterministic simulation in Unity. Programmed weapon ballistics, character active/passive skill triggers, real-time calculation hooks, and fixed logic desyncs.<br/><strong>Stage 2 (Turn-Based Combat RPG Release):</strong> Primary client owner for the commercially released title. Developed custom match-3 grid algorithms, cascade gravity, tile swapping, combo multipliers, turn-based battle formulas (elemental affinities, mana accumulation, shield/buff states), 3D character animation timelines, and mobile UGUI.",
        watchTrailer: "Watch Gameplay Trailer",
        newsCoverage: "Press Review (AFKmobi)",

        // POP! Slots
        p2Role: "Infra & Engine Outsource Support",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Supported core client engineering for playSTUDIOS' global social casino hit with tens of millions of downloads worldwide. Investigated and mitigated native crashes in third-party ad networks, telemetry SDKs, and payment gateways. Addressed memory pressure on legacy/budget Android devices, patched native bridge plugins (C++/Java/Obj-C), and conducted draw call and memory profiling passes.",
        officialSite: "playSTUDIOS Official Site",

        // Secondary Cards
        p3Role: "Mobile 3D Racing Prototype",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "High-fidelity mobile 3D racing prototype at Gear Games. Architected a modular attachment and color grading system allowing seamless part swapping (rims, spoilers, body kits, vinyls). Implemented extensible animation timeline sequences for garage camera choreography, zoom inspections, and showcase reveals with draw call batching optimization.",

        p4Role: "Internal Innovation Lab",
        p4Title: "Idle Combat & Obstacle Battleground",
        p4Desc: "Hybrid mobile prototype at Gear Games fusing automated idle battle mechanics with dynamic obstacle traversal. Built physics interactions and trigger logic for moving obstacles, autonomous AI state machines driving auto-attack loops, and an extensible modular gear engine with dynamic stat calculations and hit-stop VFX.",

        p5Role: "University Thesis & Internship Capstone",
        p5Title: "Final Fantasy-Inspired 2D RPG",
        p5Desc: "100% solo engineering as both University of Greenwich Graduation Thesis and Gear Inc 6-month Internship Capstone. Sourced and configured all sprites, audio, and tilemaps. Architected turn-based combat math, 4 distinct playable characters, quest state progression, and robust local/remote player save/load data serialization.",

        p6Role: "Full-Stack Esports Portal",
        p6Title: "Gear Games LoL Championship",
        p6Desc: "Interactive company championship portal featuring real-time bracket propagation, automated group standings, match scheduling, and custom ARAM Poro Easter eggs.",
        liveDemo: "Live Portal",
        sourceCode: "Source Code",

        p7Role: "Real-Time Arena Platform",
        p7Title: "Gear Games Badminton 2026",
        p7Desc: "Official tournament portal for internal badminton championship with real-time court scoring, bracket propagation, BWF rules engine integration, and doubles service rotation tracking.",

        p8Role: "Interactive Web Game",
        p8Title: "Velvet Vines",
        p8Desc: "Sleek, responsive mobile party game and card-drinking web application designed for social gatherings with fluid micro-animations."
      },
      innovations: {
        tag: "ENGINEERING ROOTS",
        title: "Early Innovations & Hardware R&D",
        desc: "Foundational hardware and software achievements from Le Quy Don Gifted High School competitions and early webcrafting.",
        inno1Role: "National Science & Tech Contest (KHKT) Award",
        inno1Title: "Smart Fire & Air Pollution Early Warning System",
        inno1Desc: "An IoT embedded safety solution detecting hazardous environmental gas concentrations. Calibrated analog thresholds on an MQ-135 sensor with moving-average filtering on Arduino Uno, displaying status on a local 16x2 LCD buzzer and broadcasting emergency SMS via SIM900A GSM/GPRS module. Won National Award at KHKT Cấp Quốc Gia and multiple City 1st/2nd awards.",

        inno2Role: "Wearable HCI Accessibility Prototype",
        inno2Title: "Smart Assistive Glasses for Motor Impairment",
        inno2Desc: "Co-developed wearable assistive smart glasses empowering motor-impaired users with head-movement accelerometer cursor tracking and voice-driven Speech-to-Text (STT) commands for hands-free computer control.",

        inno3Role: "Computer Vision Research",
        inno3Title: "Smart Traffic Light Optimization (OpenCV)",
        inno3Desc: "Researched automated real-time vehicle density estimation at intersections using OpenCV image processing and edge detection to dynamically adjust traffic light signal cycles.",

        inno4Role: "Self-Taught Webmaster",
        inno4Title: "Self-Hosted Web & Online Communities (Grades 8–9)",
        inno4Desc: "Self-taught domain DNS routing, Linux hosting, database administration, and forum engine deployment (phpBB, vBulletin, WordPress, PHP/MySQL) during middle school, igniting a lifelong passion for software craft."
      },
      skills: {
        tag: "TECHNICAL STACK",
        title: "Skills & Architecture",
        desc: "Directly mapped from production experience across game engines, deterministic netcode, native SDKs, and profiling tooling.",
        comp1Title: "Gameplay Architecture & Combat Systems",
        comp1Desc: "Turn-based damage mitigation formulas, Hierarchical & Finite State Machines (FSM), 2D grid spatial indexing, algorithmic match-3 cascading solvers, animation timelines, input buffering, and coyote time.",
        comp2Title: "Game Engines & Deterministic Multiplayer",
        comp2Desc: "Unity 2D/3D component lifecycles, Photon Quantum deterministic ECS simulation in C# (zero-garbage allocation in game loop, decoupled view presentation), lockstep synchronization, fixed-tick physics, and desync detection.",
        comp3Title: "Engine Profiling & Optimization",
        comp3Desc: "Diagnosing CPU/GPU bottlenecks using Unity Memory Profiler, Frame Debugger, Xcode Instruments (Time Profiler, Leaks, Allocations), Android GPU Inspector, GPU draw call batching, dynamic UGUI canvas isolation, and Addressables.",
        comp4Title: "Languages, Native SDKs & Tooling",
        comp4Desc: "Deep C# (.NET Linq-free hot loops, struct vs class allocation) and C++ (native plugins, memory pooling). Native iOS/Android SDK triage (IAP, Firebase, Facebook), Splunk distributed telemetry queries, macOS desktop tools in Swift/Xcode/Python, and CI/CD pipelines."
      },
      experience: {
        tag: "CAREER TIMELINE",
        title: "Experience & Production Roles",
        desc: "4+ years of hands-on game engineering, native SDK stabilization, and developer tooling at Gear Games.",
        toggleEarly: "View Academic & Early Milestones (2015 — 2021)",
        hideEarly: "Hide Academic & Early Milestones",

        job1Date: "Nov 2024 — 2026",
        job1Role: "Infra Engineer",
        job1Company: "Gear Games · Da Nang, Vietnam",
        job1Bullets: [
          "Diagnosed and patched critical third-party SDK defects across In-App Purchases (IAP purchase validation desyncs), Firebase (remote config, crash reporting), and Facebook SDK (auth tokens, event tracking).",
          "Authored complex Splunk search queries to filter crash signatures, stack traces, and anomaly patterns across production cohorts; traced client execution paths to pinpoint root causes of native memory faults.",
          "Maintained and expanded dedicated macOS internal desktop tools for the Live Operations (Live Ops) team using Xcode, Swift, and Python; implemented automated asset compilation and build configuration validators.",
          "Integrated AI-augmented coding workflows into daily developer practice for technical research, architectural planning, code refactoring, and automated unit test generation."
        ],

        job2Date: "Mar 2024 — Nov 2024",
        job2Role: "Client Engineer — Custom Car Racing 3D",
        job2Company: "Gear Games · Da Nang, Vietnam",
        job2Bullets: [
          "Architected a modular vehicle customization framework for dynamic part swapping (rims, spoilers, body kits, vinyls) and color grading in 3D.",
          "Implemented extensible animation timeline sequences for garage camera choreography, part inspection zooms, and showcase reveals.",
          "Refactored UI views and shaders to minimize draw calls and optimize GPU batching across mobile hardware."
        ],

        job3Date: "Aug 2023 — Mar 2024",
        job3Role: "Client Engineer — Idle Combat & Obstacle Prototype",
        job3Company: "Gear Games · Da Nang, Vietnam",
        job3Bullets: [
          "Engineered end-to-end client systems: physics interactions, trigger logic, and spatial hazards for moving obstacle courses and timing-based platforms.",
          "Built autonomous character behavior AI state machines driving auto-attack loops, ability priorities, and obstacle navigation.",
          "Designed an extensible modular gear/equipment system with dynamic stat calculations, hit-stop camera VFX, and responsive mobile HUDs."
        ],

        job4Date: "Nov 2021 — Aug 2023",
        job4Role: "Client Engineer — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Da Nang, Vietnam",
        job4Bullets: [
          "Stage 1 (Prototype): Implemented weapon ballistics, character skills, and combat hooks interacting with Photon Quantum deterministic netcode; resolved logic desyncs on Unity.",
          "Stage 2 (Released Title): Primary client owner for commercially released Puzzle Strike: Combat RPG. Developed custom match-3 grid algorithms, cascade gravity, tile swapping, combo multipliers, and turn-based combat formulas.",
          "Integrated 3D character models into Unity, authored timeline choreography for skill execution and camera framing, and designed mobile UGUI screens with optimized draw calls."
        ],

        // Compact Milestones
        m1Date: "Apr 2021 — Nov 2021",
        m1Title: "Client Engineer Intern @ Gear Inc (6 Months)",
        m1Desc: "Built a solo Final Fantasy-inspired 2D RPG serving as both University Graduation Thesis and 6-month Internship Capstone (combat, tilemaps, 4 characters, save/load data serialization). Re-created Flappy Bird and Gold Miner from scratch.",

        m2Date: "2020",
        m2Title: "Backend Developer Intern @ Enouvo IT Solutions",
        m2Desc: "University OJT internship. Collaborated under senior guidance to run API test suites using Postman and troubleshoot Node.js backend services, discovering a passion for interactive graphics.",

        m3Date: "2018 — 2022",
        m3Title: "B.S. in Computing @ University of Greenwich Vietnam",
        m3Desc: "Selected as 1 of the first 9 pioneering Google Developer Student Club (DSC) Leads across Vietnam. Represented Vietnam at Google DSC SEA Summit 2019 in Kuala Lumpur, Malaysia. Led bootcamps in Flutter, Firebase, TensorFlow, and GCP.",

        m4Date: "2015 — 2018",
        m4Title: "Specialized in Informatics (Chuyên Tin) @ Le Quy Don Gifted High School",
        m4Desc: "National Science & Tech Contest (KHKT Cấp Quốc Gia) Official Award winner for IoT Early Warning System. Multiple City Awards (Giải Nhất & Giải Nhì HSG Tin Học Đà Nẵng). Rigorous foundations in algorithms, data structures, and mathematical modeling."
      },
      about: {
        tag: "ABOUT ME // PROFILE",
        title: "Engineering Genesis & Craft",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Game Client & Infra Engineer",
        specsHeader: "Quick Specifications",
        specExp: "4+ Years in Production Game Engineering",
        specStudio: "Ex-Gear Games (Client & Infra)",
        specFocus: "Deterministic Netcode, Unity, Profiling, SDKs",
        specDegree: "B.S. Computing · Greenwich Vietnam",
        specHonors: "Ex-Google DSC Lead · National KHKT Award",
        lead: "Versatile Game Client & Infra Engineer with 4+ years of hands-on experience bridging core gameplay mechanics, deterministic multiplayer logic, and native SDK/pipeline infrastructure.",
        p1: "Over 4+ years at Gear Games, I served as both a Client Engineer and an Infra Engineer. My work spanned the full spectrum of game production: from architecting core combat algorithms, vehicle customization timelines, and obstacle hazard courses, to diagnosing deep native iOS/Android SDK defects (IAP, Firebase, Facebook SDK), analyzing distributed telemetry in Splunk, and building native macOS tools in Swift.",
        p2: "My engineering roots trace back to competitive informatics at Le Quy Don High School for the Gifted, winning a National Award at the Science & Technology Contest (KHKT) for an embedded IoT alert device, and being handpicked as one of the first 9 inaugural Google Developer Student Club (DSC) Leads in Vietnam, attending the 2019 Malaysia Summit.",
        p3: "I am driven by clean code craftsmanship, deterministic synchronization in multiplayer, and uncompromising framerate optimization on mobile devices."
      },
      contact: {
        tag: "COMMUNICATION CHANNELS",
        title: "Let's Build Something Exceptional",
        desc: "Looking for a seasoned Unity engineer to architect gameplay systems, solve deterministic multiplayer netcode, or engineer production client infrastructure? Reach out directly.",
        composeEmail: "Transmit Direct Email",
        discordCopy: "Discord: irrational_",
        phoneCall: "Phone: 0915 684 515",
        copiedToast: "Copied Discord ID (irrational_) to clipboard!"
      },
      footer: {
        rights: "All rights reserved.",
        designedBy: "Engineered by IrrationaL (Vũ Đình Nghĩa Hưng)",
        sourceCode: "View Source on GitHub"
      }
    },
    vi: {
      nav: {
        projects: "Dự Án",
        competencies: "Năng Lực",
        experience: "Kinh Nghiệm",
        innovations: "Nghiên Cứu & R&D",
        about: "Giới Thiệu",
        contact: "Liên Hệ",
        cv: "Tải CV"
      },
      hero: {
        status: "KỸ SƯ INFRA & GAME CLIENT · GEAR GAMES (4+ NĂM)",
        intro: "Xin chào, tôi là",
        title: "IrrationaL",
        realname: "Vũ Đình Nghĩa Hưng",
        role: "KỸ SƯ GAME CLIENT & HẠ TẦNG KỸ THUẬT",
        summary: "Thiết kế kiến trúc hệ thống chiến đấu multiplayer đồng bộ (deterministic), cơ chế gameplay mượt mà và công cụ engine ổn định. Hơn 4 năm kinh nghiệm thực chiến về kiến trúc game client, tối ưu hóa mobile và hạ tầng native SDK tại Gear Games.",
        exploreWork: "Khám Phá Dự Án",
        downloadCv: "Tải CV PDF",
        getInTouch: "Kết Nối Ngay",
        location: "Đà Nẵng, Việt Nam",
        experiencePill: "4+ Năm tại Gear Games",
        focusPill: "Chuyên sâu Photon Quantum & Engine Infra"
      },
      projects: {
        tag: "HỒ SƠ NĂNG LỰC DỰ ÁN",
        title: "Dự Án Tiêu Biểu",
        desc: "Các tựa game mobile thương mại đã phát hành, nguyên mẫu multiplayer đồng bộ và nền tảng hỗ trợ studio thực chiến.",
        shippedLabel: "GAME THƯƠNG MẠI & SẢN XUẤT LIVE-OPS",
        prototypesLabel: "NGUYÊN MẪU GAMEPLAY & ĐỒ ÁN TỐT NGHIỆP",
        platformsLabel: "NỀN TẢNG WEB & CÔNG CỤ NỘI BỘ",
        innovationsLabel: "DỰ ÁN SÁNG TẠO SỚM & PHẦN CỨNG R&D",

        p1Role: "Kỹ Sư Client (Gameplay & Hệ Thống Chiến Đấu) — Vai trò Full-time Đầu Tiên",
        p1Title: "Puzzle Strike: Combat RPG & Nguyên Mẫu Sinh Tồn",
        p1Desc: "<strong>Giai đoạn 1 (Nguyên mẫu Sinh tồn PUBG + Puzzle):</strong> Ý tưởng chiến trường sinh tồn kết hợp ghép ngọc dùng netcode đồng bộ Photon Quantum trên Unity. Lập trình đường đạn vũ khí, kích hoạt kỹ năng chủ động/bị động của tướng, điểm nối tính toán thời gian thực và sửa lỗi đồng bộ mạng.<br/><strong>Giai đoạn 2 (Bản phát hành Puzzle Strike: Combat RPG):</strong> Đảm nhiệm chính toàn bộ client khi dự án phát hành thương mại: thuật toán ghép ngọc match-3, giải thuật cascade rơi combo, tính toán combat turn-based (nguyên tố, mana, khiên/buff), dàn dựng timeline diễn hoạt nhân vật 3D và giao diện mobile UGUI tối ưu draw call.",
        watchTrailer: "Xem Trailer Gameplay",
        newsCoverage: "Báo chí đưa tin (AFKmobi)",

        p2Role: "Hỗ Trợ Kỹ Thuật Outsource Client & Native SDKs",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Hỗ trợ kỹ thuật client cho tựa game casino hàng đầu thế giới của playSTUDIOS với hàng chục triệu lượt tải toàn cầu. Điều tra và khắc phục lỗi crash native trên mạng quảng cáo, SDK đo lường và cổng thanh toán. Xử lý áp lực bộ nhớ trên thiết bị Android đời cũ, vá plugin cầu nối native (C++/Java/Obj-C), đo đạc draw call và tối ưu profiler.",
        officialSite: "Trang Web Chính Thức",

        p3Role: "Nguyên mẫu Đua Xe 3D Di Động",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "Nguyên mẫu game đua xe 3D di động chất lượng cao tại Gear Games. Xây dựng framework timeline tùy biến xe 3D dạng module (thay phụ tùng, mâm xe, cánh gió, body kits, màu sơn) và tối ưu hóa shader draw calls trên phần cứng di động.",

        p4Role: "Phòng Nghiên Cứu Đổi Mới Nội Bộ",
        p4Title: "Idle Combat & Obstacle Battleground",
        p4Desc: "Nguyên mẫu gameplay kết hợp cơ chế chiến đấu tự động với vượt chướng ngại vật di động tại Gear Games. Thiết kế logic chướng ngại vật/cạm bẫy trên map, lập trình behavior state machine (FSM) cho nhân vật tự đánh, hệ thống trang bị module và hiệu ứng rung camera hit-stop.",

        p5Role: "Đồ Án Tốt Nghiệp & Thực Tập 6 Tháng",
        p5Title: "Final Fantasy-Style 2D RPG",
        p5Desc: "Tự tay phát triển độc lập 100% cho cả Đồ án tốt nghiệp Đại học Greenwich và Đồ án kết thúc thực tập 6 tháng tại Gear Inc. Tự tìm kiếm sprite/sound, vẽ tilemap, hệ thống 4 nhân vật, combat turn-based, tài khoản và lưu/tải dữ liệu người chơi; hoàn thiện bản demo chơi được 15-30 phút.",

        p6Role: "Cổng Thông Tin Esports Full-Stack",
        p6Title: "Giải Đấu LMHT Gear Games",
        p6Desc: "Cổng thông tin giải đấu nội bộ công ty với tính năng cập nhật nhánh đấu thời gian thực, tự động xếp hạng bảng đấu, lịch thi đấu và hiệu ứng Poro thú vị.",
        liveDemo: "Ứng Dụng Trực Tiếp",
        sourceCode: "Mã Nguồn",

        p7Role: "Cổng Thông Tin Sân Đấu Thời Gian Thực",
        p7Title: "Giải Cầu Lông Gear Games 2026",
        p7Desc: "Cổng thông tin chính thức cho giải vô địch cầu lông nội bộ với chấm điểm sân đấu trực tiếp, tích hợp luật BWF và hỗ trợ xoay vòng giao cầu đôi.",

        p8Role: "Ứng Dụng Web Tương Tác",
        p8Title: "Velvet Vines",
        p8Desc: "Ứng dụng web trò chơi tiệc tùng và thẻ bài được thiết kế cho các buổi tụ họp bạn bè với chuyển động mượt mà."
      },
      innovations: {
        tag: "NỀN TẢNG KỸ THUẬT",
        title: "Dự Án Sáng Tạo Sớm & Phần Cứng R&D",
        desc: "Các thành tích phần cứng và phần mềm nền tảng từ thời học sinh Chuyên Lê Quý Đôn và giai đoạn tự học lập trình web.",
        inno1Role: "Giải Cuộc thi KHKT Cấp Quốc Gia",
        inno1Title: "Thiết Bị Cảnh Báo Cháy & Ô Nhiễm Không Khí",
        inno1Desc: "Hệ thống IoT phát hiện nồng độ khí nguy hiểm trong môi trường (khói, CO, benzen, cồn) bằng cảm biến MQ-135 và giải thuật lọc trung bình động trên Arduino Uno. Cảnh báo tại chỗ qua màn hình LCD 16x2 + còi báo động và gửi tin nhắn SMS khẩn cấp qua module SIM900A GSM/GPRS. Đoạt Giải Cấp Quốc Gia KHKT và nhiều Giải Nhất/Nhì cấp Thành phố.",

        inno2Role: "Nguyên Mẫu Công Nghệ Hỗ Trợ Giao Tiếp Người - Máy",
        inno2Title: "Kính Thông Minh Hỗ Trợ Người Khuyết Tật",
        inno2Desc: "Đồng phát triển dự án kính thông minh hỗ trợ người khuyết tật vận động điều khiển con trỏ chuột máy tính bằng cảm biến gia tốc chuyển động đầu và thực hiện lệnh bằng giọng nói (Speech-to-Text).",

        inno3Role: "Nghiên Cứu Thị Giác Máy Tính",
        inno3Title: "Tối Ưu Hóa Đèn Giao Thông Thông Minh (OpenCV)",
        inno3Desc: "Nghiên cứu ước tính mật độ phương tiện giao thông thời gian thực tại các nút giao thông bằng xử lý ảnh và phát hiện cạnh OpenCV để điều chỉnh chu kỳ đèn tín hiệu linh hoạt.",

        inno4Role: "Tự Học Quản Trị Mạng & Web",
        inno4Title: "Tự Mua Domain, Hosting & Quản Trị Diễn Đàn (Lớp 8–9)",
        inno4Desc: "Tự học cấu hình DNS, quản trị server hosting Linux, modding và triển khai các bộ mã nguồn diễn đàn CMS (phpBB, vBulletin, WordPress, PHP/MySQL) từ thời cấp 2, khơi nguồn niềm đam mê công nghệ phần mềm."
      },
      skills: {
        tag: "CHUYÊN MÔN KỸ THUẬT",
        title: "Năng Lực Kỹ Thuật & Kiến Trúc",
        desc: "Đúc kết trực tiếp từ kinh nghiệm sản xuất qua các game engine, netcode đồng bộ, native SDK và công cụ phân tích profiler.",
        comp1Title: "Kiến Trúc Gameplay & Hệ Thống Chiến Đấu",
        comp1Desc: "Công thức giảm trừ sát thương turn-based, máy trạng thái hữu hạn & phân cấp (FSM/HSM), đánh chỉ mục không gian lưới 2D, giải thuật bàn cờ match-3 rơi combo, timeline diễn hoạt, đệm dữ liệu phím bấm (input buffering) và coyote time.",
        comp2Title: "Game Engine & Multiplayer Đồng Bộ (Deterministic)",
        comp2Desc: "Vòng đời component Unity 2D/3D, mô phỏng ECS đồng bộ với Photon Quantum bằng C# (zero-garbage allocation trong vòng lặp game loop, tách biệt hoàn toàn simulation và visual view), mô phỏng lockstep, vật lý fixed-tick và phát hiện lệch đồng bộ (desync).",
        comp3Title: "Phân Tích Hiệu Năng & Tối Ưu Engine",
        comp3Desc: "Chẩn đoán điểm nghẽn CPU/GPU với Unity Memory Profiler, Frame Debugger, Xcode Instruments (Time Profiler, Leaks, Allocations), Android GPU Inspector, gom nhóm GPU batching, cô lập Canvas UGUI và quản lý tài nguyên Addressables.",
        comp4Title: "Ngôn Ngữ Lập Trình, Native SDKs & Công Cụ",
        comp4Desc: "Thành thạo C# (.NET vòng lặp hot loop không Linq, tối ưu struct/class) và C++ (native plugin, memory pooling). Khắc phục sự cố Native iOS/Android SDK (IAP, Firebase, Facebook), truy vấn dữ liệu viễn thám Splunk, công cụ macOS (Swift/Xcode/Python) và quy trình CI/CD."
      },
      experience: {
        tag: "LỘ TRÌNH SỰ NGHIỆP",
        title: "Kinh Nghiệm & Vị Trí Sản Xuất",
        desc: "Hơn 4 năm thực chiến về kỹ thuật game, ổn định SDK native và phát triển công cụ hỗ trợ tại Gear Games.",
        toggleEarly: "Xem các mốc học vấn & khởi đầu (2015 — 2021)",
        hideEarly: "Ẩn các mốc khởi đầu & học vấn",

        job1Date: "11/2024 — 2026",
        job1Role: "Kỹ Sư Hạ Tầng (Infra Engineer)",
        job1Company: "Gear Games · Đà Nẵng, Việt Nam",
        job1Bullets: [
          "Chẩn đoán và khắc phục các lỗi SDK bên thứ ba phức tạp liên quan đến In-App Purchases (IAP - lệch trạng thái xác thực giao dịch), Firebase (cấu hình từ xa, báo cáo crash) và Facebook SDK (vòng đời token đăng nhập, thất thoát sự kiện theo dõi).",
          "Viết các truy vấn Splunk phức tạp để lọc chữ ký crash, stack trace và chỉ số bất thường trên môi trường production; truy vết luồng code để định vị nguyên nhân gốc rễ gây lỗi bộ nhớ native.",
          "Bảo trì và phát triển công cụ nội bộ chuyên dụng trên macOS cho team Live Ops bằng Xcode, Swift và Python; tự động hóa biên dịch tài nguyên và kiểm tra cấu hình build.",
          "Ứng dụng sâu các quy trình làm việc hỗ trợ bởi AI vào công việc hàng ngày từ tìm kiếm tài liệu kỹ thuật, lên kế hoạch kiến trúc cho tới sinh unit test tự động."
        ],

        job2Date: "03/2024 — 11/2024",
        job2Role: "Kỹ Sư Client — Custom Car Racing 3D",
        job2Company: "Gear Games · Đà Nẵng, Việt Nam",
        job2Bullets: [
          "Xây dựng framework timeline tùy biến xe 3D dạng module (thay phụ tùng, mâm xe, cánh gió, body kits, màu sơn).",
          "Dàn dựng chuỗi timeline diễn hoạt cho góc quay camera gara, phóng to kiểm tra chi tiết và hiển thị giới thiệu xe.",
          "Tái cấu trúc giao diện UI/UX và shader để giảm thiểu draw call và tối ưu gom nhóm GPU trên các thiết bị di động tầm trung và yếu."
        ],

        job3Date: "08/2023 — 03/2024",
        job3Role: "Kỹ Sư Client — Idle Combat & Obstacle Prototype",
        job3Company: "Gear Games · Đà Nẵng, Việt Nam",
        job3Bullets: [
          "Đảm nhiệm toàn diện hệ thống client: lập trình tương tác vật lý, logic kích hoạt và hiểm họa không gian cho đường đua chướng ngại vật di động và bệ đỡ theo nhịp thời gian.",
          "Xây dựng AI máy trạng thái (FSM) cho nhân vật tự đánh, chuỗi ưu tiên chiêu thức và di chuyển vượt chướng ngại vật.",
          "Thiết kế hệ thống trang bị (gear) mở rộng với tính toán chỉ số động, hiệu ứng phản hồi chiến đấu (hit stop, rung camera) và giao diện HUD mobile phản hồi nhanh."
        ],

        job4Date: "11/2021 — 08/2023",
        job4Role: "Kỹ Sư Client — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Đà Nẵng, Việt Nam",
        job4Bullets: [
          "Giai đoạn 1 (Nguyên mẫu): Lập trình cơ chế đường đạn vũ khí, kỹ năng tướng và điểm nối tính toán tương tác với netcode đồng bộ Photon Quantum; khắc phục lỗi lệch mạng trên Unity.",
          "Giai đoạn 2 (Sản phẩm phát hành): Đảm nhiệm chính toàn bộ client khi phát hành thương mại Puzzle Strike: Combat RPG. Xây dựng thuật toán bàn cờ match-3, cơ chế rơi combo, tính toán sát thương turn-based và logic tích lũy mana.",
          "Tích hợp mô hình 3D từ nghệ sĩ vào Unity, biên đạo timeline cho chiêu thức và góc máy, xây dựng giao diện mobile UGUI tối ưu draw call."
        ],

        m1Date: "04/2021 — 11/2021",
        m1Title: "Thực Tập Sinh Kỹ Sư Client @ Gear Inc (6 Tháng)",
        m1Desc: "Tự tay phát triển tựa game 2D RPG phong cách Final Fantasy độc lập 100% cho cả Đồ án tốt nghiệp Đại học Greenwich và Đồ án kết thúc thực tập 6 tháng tại Gear Inc (chiến đấu, tilemap, 4 nhân vật, lưu/tải dữ liệu). Tái lập trình 2 game kinh điển: Flappy Bird và Gold Miner.",

        m2Date: "2020",
        m2Title: "Thực Tập Sinh Backend @ Enouvo IT Solutions",
        m2Desc: "Thực tập OJT Đại học. Phối hợp chạy bộ kiểm thử API bằng Postman và gỡ lỗi dịch vụ backend Node.js dưới sự hướng dẫn của mentor, định hình niềm đam mê với đồ họa tương tác.",

        m3Date: "2018 — 2022",
        m3Title: "Cử Nhân CNTT @ Đại Học Greenwich Việt Nam",
        m3Desc: "Được Google Developers chọn là 1 trong 9 Chủ nhiệm CLB Sinh viên Nhà phát triển Google (DSC Lead) đầu tiên tại Việt Nam. Đại diện tham dự Google DSC SEA Summit 2019 tại Kuala Lumpur, Malaysia. Dẫn dắt các bootcamp kỹ thuật về Flutter, Firebase, TensorFlow và GCP.",

        m4Date: "2015 — 2018",
        m4Title: "Chuyên Tin Học @ THPT Chuyên Lê Quý Đôn Đà Nẵng",
        m4Desc: "Đoạt Giải Cấp Quốc Gia Cuộc thi Khoa học Kỹ thuật (KHKT) với Thiết bị cảnh báo cháy & ô nhiễm không khí. Nhiều Giải Nhất & Nhì Học sinh Giỏi Tin Học Đà Nẵng. Nền tảng thuật toán, cấu trúc dữ liệu và mô hình hóa toán học vững chắc."
      },
      about: {
        tag: "VỀ BẢN THÂN // HỒ SƠ",
        title: "Hành Trình & Nền Tảng Kỹ Thuật",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Kỹ Sư Game Client & Hạ Tầng",
        specsHeader: "Thông Số Tổng Quan",
        specExp: "4+ Năm Kỹ Thuật Game Thực Chiến",
        specStudio: "Ex-Gear Games (Client & Infra)",
        specFocus: "Multiplayer Đồng Bộ, Unity, Profiling, SDKs",
        specDegree: "Cử Nhân CNTT · Greenwich Việt Nam",
        specHonors: "Ex-Google DSC Lead · Giải KHKT Quốc Gia",
        lead: "Kỹ Sư Game Client & Hạ Tầng Kỹ Thuật với hơn 4 năm kinh nghiệm thực chiến, kết nối liền mạch giữa cơ chế gameplay cốt lõi, netcode đồng bộ multiplayer và hạ tầng pipeline/native SDK ổn định.",
        p1: "Trong hơn 4 năm tại Gear Games, tôi đảm nhiệm cả vai trò Kỹ sư Client và Kỹ sư Hạ tầng. Công việc trải dài toàn bộ quy trình sản xuất game: từ thuật toán chiến đấu, timeline tùy biến phương tiện, đến phân tích sâu các sự cố crash SDK native (IAP, Firebase, Facebook SDK), dữ liệu viễn thám Splunk và xây dựng công cụ macOS bằng Swift.",
        p2: "Nền tảng kỹ thuật của tôi bắt nguồn từ lớp Chuyên Tin trường THPT Chuyên Lê Quý Đôn Đà Nẵng, đoạt Giải Cấp Quốc Gia Cuộc thi Khoa học Kỹ thuật (KHKT) với thiết bị IoT nhúng cảnh báo cháy, và vinh dự là 1 trong 9 đại diện đầu tiên tại Việt Nam được Google Developers lựa chọn làm Google DSC Lead, tham dự hội nghị tại Malaysia năm 2019.",
        p3: "Tôn chỉ kỹ thuật của tôi là đề cao tính thủ công của mã nguồn, sự đồng bộ chính xác tuyệt đối trong multiplayer và cam kết tối ưu hóa framerate không thỏa hiệp trên thiết bị di động."
      },
      contact: {
        tag: "KÊNH KẾT NỐI",
        title: "Cùng Nhau Tạo Nên Trải Nghiệm Đột Phá",
        desc: "Bạn đang tìm kiếm một kỹ sư Unity giàu kinh nghiệm để thiết kế kiến trúc gameplay, giải quyết netcode multiplayer đồng bộ, hoặc tối ưu hóa hạ tầng client? Hãy kết nối trực tiếp ngay.",
        composeEmail: "Gửi Email Trực Tiếp",
        discordCopy: "Discord: irrational_",
        phoneCall: "Điện thoại: 0915 684 515",
        copiedToast: "Đã sao chép Discord ID (irrational_) vào bộ nhớ tạm!"
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
