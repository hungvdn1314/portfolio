/**
 * IrrationaL Portfolio - Humanized Translation Engine (English & Vietnamese)
 * Rewritten using humanizer methodology: zero AI buzzwords, natural rhythm, direct engineering facts.
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
        summary: "Game client and engine infrastructure engineer with 4+ years at Gear Games. I build deterministic multiplayer gameplay in Photon Quantum, write client subsystems in C# and C++, and fix native platform crashes across iOS and Android.",
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
        desc: "Commercial mobile games, multiplayer prototypes, and internal studio tools I've built or supported.",
        shippedLabel: "COMMERCIAL & LIVE PRODUCTION",
        prototypesLabel: "GAMEPLAY LABS & CAPSTONE SYSTEMS",
        platformsLabel: "STUDIO PLATFORMS & TOOLS",
        innovationsLabel: "EARLY INNOVATIONS & HARDWARE R&D",
        
        // Puzzle Strike
        p1Role: "Client Engineer (Gameplay & Combat Systems) — First Full-time Role",
        p1Title: "Puzzle Strike: Combat RPG & Realtime Survival",
        p1Desc: "<strong>Stage 1 (Multiplayer Survival Prototype):</strong> We prototyped a real-time multiplayer battleground mixing PUBG-style rules with match-3 mechanics using Photon Quantum on Unity. I handled weapon ballistics, hero skill hooks, and tracked down deterministic desync bugs.<br/><strong>Stage 2 (Turn-Based Combat RPG Release):</strong> Primary client engineer for the commercial release. Wrote the match-3 grid logic from scratch (tile swapping, gravity cascades, combo multipliers), programmed the turn combat formulas (elements, mana curves, buffs), choreographed 3D character animation timelines, and built mobile UI with low draw calls.",
        watchTrailer: "Watch Gameplay Trailer",
        newsCoverage: "Press Review (AFKmobi)",

        // POP! Slots
        p2Role: "Infra & Engine Outsource Support",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Supported client engineering for playSTUDIOS' POP! Slots. Tracked down and patched native crashes in third-party ad networks, telemetry SDKs, and payment gateways. Profiled draw calls and memory leaks on lower-end Android devices using Unity Profiler, Xcode Instruments, and Android GPU Inspector.",
        officialSite: "playSTUDIOS Official Site",

        // Secondary Cards
        p3Role: "Mobile 3D Racing Prototype",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "Mobile 3D racing prototype at Gear Games. Built an attachment and color grading system for swapping car parts cleanly (rims, spoilers, body kits, vinyls) and created garage camera timelines, tuning shaders to keep draw calls low on budget phones.",

        p4Role: "Internal Innovation Lab",
        p4Title: "Idle Combat & Obstacle Battleground",
        p4Desc: "Hybrid mobile prototype combining automated battle loops with physics obstacle traversal. Wrote trigger volumes for moving obstacles, built character state machines (FSM) for auto-attacks, and created an extensible gear system with hit-stop VFX.",

        p5Role: "University Thesis & Internship Capstone",
        p5Title: "Final Fantasy-Inspired 2D RPG",
        p5Desc: "Solo project serving as both my University of Greenwich Graduation Thesis and Gear Inc 6-month internship capstone. Sourced all sprites and audio, drew tilemaps, and coded 4 playable heroes, turn combat math, and player save/load data serialization.",

        p6Role: "Full-Stack Esports Portal",
        p6Title: "Gear Games LoL Championship",
        p6Desc: "Company tournament portal featuring live bracket updates, automated group standings, match schedules, and custom ARAM Poro Easter eggs.",
        liveDemo: "Live Portal",
        sourceCode: "Source Code",

        p7Role: "Real-Time Arena Platform",
        p7Title: "Gear Games Badminton 2026",
        p7Desc: "Tournament portal for our internal badminton championship with real-time court scoring, bracket updates, BWF rules integration, and doubles service rotation tracking.",

        p8Role: "Interactive Web Game",
        p8Title: "Velvet Vines",
        p8Desc: "Responsive card-drinking and party game web app designed for mobile browsers with clean micro-animations."
      },
      innovations: {
        tag: "ENGINEERING ROOTS",
        title: "Early Innovations & Hardware R&D",
        desc: "Hardware and software projects from high school competitions and self-taught web development.",
        inno1Role: "National Science & Tech Contest (KHKT) Award",
        inno1Title: "Smart Fire & Air Pollution Early Warning System",
        inno1Desc: "An IoT safety system detecting smoke, CO, and air pollutants using an MQ-135 sensor with moving-average filtering on an Arduino Uno. Displays air quality on a local 16x2 LCD with buzzer alarms and broadcasts emergency SMS through a SIM900A GSM module. Won a National Award at KHKT Cấp Quốc Gia and multiple City awards.",

        inno2Role: "Wearable HCI Accessibility Prototype",
        inno2Title: "Smart Assistive Glasses for Motor Impairment",
        inno2Desc: "Co-built wearable assistive glasses enabling motor-impaired users to control computer cursors using head-movement accelerometer tracking and voice Speech-to-Text (STT) commands.",

        inno3Role: "Computer Vision Research",
        inno3Title: "Smart Traffic Light Optimization (OpenCV)",
        inno3Desc: "Researched intersection traffic flow using OpenCV image processing and edge detection to estimate vehicle density and adjust traffic light signal cycles dynamically.",

        inno4Role: "Self-Taught Webmaster",
        inno4Title: "Self-Hosted Web & Online Communities (Grades 8–9)",
        inno4Desc: "Taught myself domain DNS routing, Linux server administration, and forum setups (phpBB, vBulletin, WordPress, PHP/MySQL) in middle school, which got me into programming."
      },
      skills: {
        tag: "TECHNICAL STACK",
        title: "Skills & Architecture",
        desc: "My daily technical toolkit across game engines, networking, native platforms, and profiling.",
        comp1Title: "Gameplay Architecture & Combat Systems",
        comp1Desc: "Turn-based damage formulas, Hierarchical & Finite State Machines (FSM), 2D grid spatial indexes, match-3 cascading solvers, animation timelines, and input buffering.",
        comp2Title: "Game Engines & Deterministic Multiplayer",
        comp2Desc: "Unity 2D/3D component lifecycles, Photon Quantum deterministic ECS in C# (zero allocations in the game loop, decoupled visual views), lockstep synchronization, fixed-tick physics, and desync fixes.",
        comp3Title: "Engine Profiling & Optimization",
        comp3Desc: "Tracking down bottlenecks using Unity Memory Profiler, Frame Debugger, Xcode Instruments (Time Profiler, Leaks, Allocations), Android GPU Inspector, GPU draw call batching, dynamic UGUI canvas isolation, and Addressables.",
        comp4Title: "Languages, Native SDKs & Tooling",
        comp4Desc: "Production C# (Linq-free hot loops, allocation tuning) and C++ (native plugins, memory pooling). Native iOS/Android SDK triage (IAP, Firebase, Facebook), Splunk telemetry queries, macOS desktop tools in Swift/Xcode/Python, and CI/CD pipelines."
      },
      experience: {
        tag: "CAREER TIMELINE",
        title: "Experience & Production Roles",
        desc: "4+ years of game engineering, native SDK stability, and developer tools at Gear Games.",
        toggleEarly: "View Academic & Early Milestones (2015 — 2021)",
        hideEarly: "Hide Academic & Early Milestones",

        job1Date: "Nov 2024 — 2026",
        job1Role: "Infra Engineer",
        job1Company: "Gear Games · Da Nang, Vietnam",
        job1Bullets: [
          "Fixed tricky multi-platform SDK bugs across In-App Purchases (receipt validation timeouts), Firebase (remote config latency), and Facebook SDK (token lifecycles, event tracking drops).",
          "Wrote Splunk search queries to filter crash signatures and memory anomalies on live builds; traced execution paths to isolate native memory faults and deadlocks.",
          "Maintained and built internal desktop utilities for the Live Ops team using Xcode, Swift, and Python, adding automated asset compilation and build config checkers.",
          "Used modern AI development tools for technical research, test planning, refactoring, and generating automated unit tests."
        ],

        job2Date: "Mar 2024 — Nov 2024",
        job2Role: "Client Engineer — Custom Car Racing 3D",
        job2Company: "Gear Games · Da Nang, Vietnam",
        job2Bullets: [
          "Built a modular car customization framework for swapping parts (rims, spoilers, body kits, vinyls) and tuning color grading in 3D.",
          "Created timeline sequences for garage camera choreography, part inspection zooms, and car reveal shots.",
          "Refactored UI views and shaders to minimize draw calls and optimize GPU batching across mobile hardware."
        ],

        job3Date: "Aug 2023 — Mar 2024",
        job3Role: "Client Engineer — Idle Combat & Obstacle Prototype",
        job3Company: "Gear Games · Da Nang, Vietnam",
        job3Bullets: [
          "Wrote trigger volumes and physics interaction code for moving obstacles and timed platforms.",
          "Built character state machines (FSM) that handle auto-attack rotations, skill cooldown priorities, and pathing around arena obstacles.",
          "Designed a modular gear framework with dynamic stat calculations, hit-stop camera VFX, and responsive mobile HUDs."
        ],

        job4Date: "Nov 2021 — Aug 2023",
        job4Role: "Client Engineer — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Da Nang, Vietnam",
        job4Bullets: [
          "Stage 1 (Prototype): Wrote weapon ballistics, character skills, and combat hooks for a multiplayer survival prototype running on Photon Quantum; fixed logic desyncs in Unity.",
          "Stage 2 (Released Title): Primary client owner for the commercial release of Puzzle Strike: Combat RPG. Wrote match-3 grid logic, cascade gravity, combo multipliers, and turn-based combat damage/mana math.",
          "Integrated 3D character models into Unity, choreographed skill timelines and camera shots, and designed mobile UGUI screens with optimized draw calls."
        ],

        // Compact Milestones
        m1Date: "Apr 2021 — Nov 2021",
        m1Title: "Client Engineer Intern @ Gear Inc (6 Months)",
        m1Desc: "Built a solo Final Fantasy-inspired 2D RPG as both University Graduation Thesis and 6-month internship capstone (combat math, tilemaps, 4 heroes, save/load serialization). Re-created Flappy Bird and Gold Miner from scratch.",

        m2Date: "2020",
        m2Title: "Backend Developer Intern @ Enouvo IT Solutions",
        m2Desc: "University OJT internship. Wrote API test suites in Postman and fixed backend bugs in Node.js, realizing I wanted to work in graphics and game client engineering.",

        m3Date: "2018 — 2022",
        m3Title: "B.S. in Computing @ University of Greenwich Vietnam",
        m3Desc: "Selected as one of the first 9 Google Developer Student Club (DSC) Leads in Vietnam. Represented the university at the Google DSC SEA Summit 2019 in Kuala Lumpur, Malaysia. Ran bootcamps in Flutter, Firebase, and GCP.",

        m4Date: "2015 — 2018",
        m4Title: "Specialized in Computer Science @ Le Quy Don Gifted High School",
        m4Desc: "Won a National Award at the National Science & Tech Contest (KHKT) for an IoT early warning device, along with multiple City awards in Informatics Olympiads. Built strong foundations in algorithms and mathematical modeling."
      },
      about: {
        tag: "ABOUT ME // PROFILE",
        title: "Engineering Path & Philosophy",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Game Client & Infra Engineer",
        specsHeader: "Quick Specifications",
        specExp: "4+ Years in Production Game Engineering",
        specStudio: "Ex-Gear Games (Client & Infra)",
        specFocus: "Deterministic Netcode, Unity, Profiling, SDKs",
        specDegree: "B.S. Computing · Greenwich Vietnam",
        specHonors: "Ex-Google DSC Lead · National KHKT Award",
        lead: "I’m a game client and infrastructure engineer based in Da Nang, Vietnam. Over four years at Gear Games, my work moved between two worlds: shipping player-facing gameplay systems and untangling low-level engine and native SDK crashes on iOS and Android.",
        p1: "At Gear Games, I started on the gameplay client team, writing match-3 algorithms, turn-based combat math, vehicle customization frameworks, and Photon Quantum multiplayer prototypes. Later, I moved into infrastructure, diagnosing third-party native SDK crashes (IAP, Firebase, Facebook SDK), analyzing production telemetry in Splunk, and writing macOS desktop tools in Swift.",
        p2: "My engineering background started with competitive informatics at Le Quy Don High School for the Gifted, winning a National Award at the National Science & Technology Contest (KHKT) for an embedded IoT alert device, and serving as one of the first 9 Google Developer Student Club (DSC) Leads in Vietnam, attending the 2019 Malaysia Summit.",
        p3: "I value clean, readable code, strict deterministic state in multiplayer, and digging into profilers to keep frame rates steady on mobile hardware."
      },
      contact: {
        tag: "COMMUNICATION CHANNELS",
        title: "Let's Build Something Together",
        desc: "If you're looking for a game engineer to build gameplay systems, work through multiplayer netcode, or fix native engine and SDK issues, feel free to reach out:",
        composeEmail: "Send Direct Email",
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
        intro: "Xin chào, mình là",
        title: "IrrationaL",
        realname: "Vũ Đình Nghĩa Hưng",
        role: "KỸ SƯ GAME CLIENT & HẠ TẦNG ENGINE",
        summary: "Mình là kỹ sư game client và hạ tầng với hơn 4 năm kinh nghiệm tại Gear Games. Mình chuyên xây dựng gameplay multiplayer đồng bộ bằng Photon Quantum, viết hệ thống client bằng C#/C++, và xử lý các lỗi crash native trên iOS và Android.",
        exploreWork: "Khám Phá Dự Án",
        downloadCv: "Tải CV PDF",
        getInTouch: "Kết Nối Ngay",
        location: "Đà Nẵng, Việt Nam",
        experiencePill: "4+ Năm tại Gear Games",
        focusPill: "Photon Quantum & Engine Infra"
      },
      projects: {
        tag: "HỒ SƠ NĂNG LỰC DỰ ÁN",
        title: "Dự Án Tiêu Biểu",
        desc: "Các tựa game mobile thương mại, nguyên mẫu gameplay và công cụ nội bộ mình từng tham gia phát triển.",
        shippedLabel: "GAME THƯƠNG MẠI & SẢN XUẤT LIVE-OPS",
        prototypesLabel: "NGUYÊN MẪU GAMEPLAY & ĐỒ ÁN TỐT NGHIỆP",
        platformsLabel: "NỀN TẢNG WEB & CÔNG CỤ NỘI BỘ",
        innovationsLabel: "DỰ ÁN SÁNG TẠO SỚM & PHẦN CỨNG R&D",

        p1Role: "Kỹ Sư Client (Gameplay & Hệ Thống Chiến Đấu) — Vai trò Full-time Đầu Tiên",
        p1Title: "Puzzle Strike: Combat RPG & Nguyên Mẫu Sinh Tồn",
        p1Desc: "<strong>Giai đoạn 1 (Nguyên mẫu Sinh tồn PUBG + Match-3):</strong> Thử nghiệm ý tưởng sinh tồn kết hợp ghép ngọc dùng Photon Quantum trên Unity. Mình lập trình đường đạn vũ khí, kích hoạt chiêu thức nhân vật và xử lý các lỗi lệch đồng bộ (desync).<br/><strong>Giai đoạn 2 (Bản phát hành Puzzle Strike: Combat RPG):</strong> Chịu trách nhiệm chính toàn bộ client khi game phát hành thương mại: tự viết thuật toán bàn cờ match-3, hiệu ứng cascade rơi ngọc, toán combat theo lượt (nguyên tố, mana, buff), gắn timeline diễn hoạt cho mô hình 3D và dựng giao diện mobile tối ưu draw call.",
        watchTrailer: "Xem Trailer Gameplay",
        newsCoverage: "Báo chí đưa tin (AFKmobi)",

        p2Role: "Hỗ Trợ Kỹ Thuật Outsource Client & Native SDKs",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Hỗ trợ kỹ thuật client cho tựa game casino POP! Slots của playSTUDIOS. Điều tra và sửa các lỗi crash native trên mạng quảng cáo, SDK đo lường và cổng thanh toán. Tối ưu bộ nhớ trên thiết bị Android đời cũ, vá plugin cầu nối native (C++/Java/Obj-C) và đo đạc profiler để giảm giật lag.",
        officialSite: "Trang Web playSTUDIOS",

        p3Role: "Nguyên mẫu Đua Xe 3D Di Động",
        p3Title: "Custom Car Racing 3D",
        p3Desc: "Nguyên mẫu game đua xe 3D di động tại Gear Games. Xây dựng framework tùy biến xe 3D dạng module (thay mâm, cánh gió, body kit, màu sơn) và dàn dựng timeline góc máy gara, tối ưu shader để giữ draw call ở mức thấp trên máy cấu hình yếu.",

        p4Role: "Phòng Nghiên Cứu Đổi Mới Nội Bộ",
        p4Title: "Idle Combat & Obstacle Battleground",
        p4Desc: "Nguyên mẫu gameplay kết hợp đánh tự động với vượt chướng ngại vật tại Gear Games. Thiết kế logic bẫy và chướng ngại vật di động, máy trạng thái (FSM) cho nhân vật tự đánh, hệ thống đồ đạc (gear) và hiệu ứng rung camera hit-stop.",

        p5Role: "Đồ Án Tốt Nghiệp & Thực Tập 6 Tháng",
        p5Title: "Final Fantasy-Style 2D RPG",
        p5Desc: "Đồ án tốt nghiệp Đại học Greenwich kiêm đồ án kết thúc thực tập 6 tháng tại Gear Inc (solo 100% từ chọn sprite, âm thanh, vẽ tilemap, hệ thống 4 nhân vật, combat theo lượt đến lưu/tải dữ liệu người chơi).",

        p6Role: "Cổng Thông Tin Esports Full-Stack",
        p6Title: "Giải Đấu LMHT Gear Games",
        p6Desc: "Cổng thông tin giải đấu nội bộ công ty với tính năng cập nhật nhánh đấu thời gian thực, tự động xếp hạng bảng đấu, lịch thi đấu và hiệu ứng Poro vui nhộn.",
        liveDemo: "Xem Trực Tiếp",
        sourceCode: "Mã Nguồn",

        p7Role: "Cổng Thông Tin Sân Đấu Thời Gian Thực",
        p7Title: "Giải Cầu Lông Gear Games 2026",
        p7Desc: "Cổng thông tin giải vô địch cầu lông nội bộ với chấm điểm sân đấu trực tiếp, tích hợp luật BWF và hỗ trợ xoay vòng giao cầu đôi.",

        p8Role: "Ứng Dụng Web Tương Tác",
        p8Title: "Velvet Vines",
        p8Desc: "Ứng dụng web trò chơi tiệc tùng và thẻ bài dành cho điện thoại với chuyển động mượt mà."
      },
      innovations: {
        tag: "NỀN TẢNG KỸ THUẬT",
        title: "Dự Án Sáng Tạo Sớm & Phần Cứng R&D",
        desc: "Các dự án phần cứng và phần mềm từ thời học Chuyên Lê Quý Đôn và giai đoạn tự học lập trình.",
        inno1Role: "Giải Cuộc thi KHKT Cấp Quốc Gia",
        inno1Title: "Thiết Bị Cảnh Báo Cháy & Ô Nhiễm Không Khí",
        inno1Desc: "Hệ thống IoT phát hiện khí độc (khói, CO, benzen, cồn) bằng cảm biến MQ-135 và giải thuật lọc trung bình động trên Arduino Uno. Cảnh báo tại chỗ qua màn hình LCD 16x2 + còi báo động và gửi SMS khẩn cấp qua module SIM900A GSM/GPRS. Đoạt Giải Cấp Quốc Gia KHKT và nhiều Giải Nhất/Nhì cấp Thành phố.",

        inno2Role: "Công Nghệ Hỗ Trợ Người Khuyết Tật",
        inno2Title: "Kính Thông Minh Hỗ Trợ Người Khuyết Tật",
        inno2Desc: "Đồng phát triển kính thông minh giúp người khuyết tật vận động điều khiển chuột máy tính bằng cảm biến gia tốc chuyển động đầu và thực hiện lệnh bằng giọng nói (Speech-to-Text).",

        inno3Role: "Nghiên Cứu Thị Giác Máy Tính",
        inno3Title: "Tối Ưu Hóa Đèn Giao Thông Thông Minh (OpenCV)",
        inno3Desc: "Nghiên cứu ước tính mật độ phương tiện thời gian thực tại các ngã tư bằng xử lý ảnh OpenCV để tự động điều chỉnh chu kỳ đèn tín hiệu giao thông.",

        inno4Role: "Tự Học Quản Trị Mạng & Web",
        inno4Title: "Tự Quản Trị Domain, Hosting & Diễn Đàn (Lớp 8–9)",
        inno4Desc: "Tự học cấu hình DNS, cài đặt hosting Linux, modding và quản trị các diễn đàn mã nguồn mở (phpBB, vBulletin, WordPress, PHP/MySQL) từ thời cấp 2."
      },
      skills: {
        tag: "CHUYÊN MÔN KỸ THUẬT",
        title: "Kỹ Năng & Kiến Trúc",
        desc: "Bộ kỹ năng thực chiến được áp dụng hàng ngày qua các game engine, netcode, native SDK và profiler.",
        comp1Title: "Kiến Trúc Gameplay & Hệ Thống Chiến Đấu",
        comp1Desc: "Công thức giảm trừ sát thương turn-based, máy trạng thái (FSM/HSM), chia lưới tọa độ 2D, thuật toán match-3 rơi combo, timeline diễn hoạt và đệm dữ liệu phím bấm (input buffering).",
        comp2Title: "Game Engine & Multiplayer Đồng Bộ (Deterministic)",
        comp2Desc: "Vòng đời component Unity 2D/3D, mô phỏng ECS đồng bộ với Photon Quantum bằng C# (không cấp phát rác trong game loop, tách biệt hoàn toàn simulation và visual view), lockstep và phát hiện lệch mạng.",
        comp3Title: "Phân Tích Hiệu Năng & Tối Ưu Engine",
        comp3Desc: "Chẩn đoán điểm nghẽn CPU/GPU với Unity Memory Profiler, Frame Debugger, Xcode Instruments (Time Profiler, Leaks, Allocations), Android GPU Inspector, gom nhóm GPU batching, cô lập Canvas UGUI và Addressables.",
        comp4Title: "Ngôn Ngữ Lập Trình, Native SDKs & Công Cụ",
        comp4Desc: "Kinh nghiệm thực chiến với C# (tối ưu vòng lặp, kiểm soát bộ nhớ) và C++ (native plugin, memory pooling). Sửa lỗi Native iOS/Android SDK (IAP, Firebase, Facebook), truy vấn dữ liệu Splunk, viết tool macOS (Swift/Xcode/Python) và quy trình CI/CD."
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
          "Xử lý các lỗi SDK phức tạp liên quan đến In-App Purchases (lệch trạng thái xác thực biên lai), Firebase (delay remote config, crash reporting) và Facebook SDK (vòng đời token đăng nhập, thất thoát event).",
          "Viết query Splunk lọc chữ ký crash và chỉ số bất thường trên môi trường live; truy vết luồng code để tìm nguyên nhân gốc rễ gây lỗi bộ nhớ native và deadlock.",
          "Bảo trì và phát triển công cụ nội bộ trên macOS cho team Live Ops bằng Xcode, Swift và Python, tự động hóa khâu đóng gói asset và kiểm tra file cấu hình trước khi release.",
          "Ứng dụng các công cụ AI vào quy trình làm việc hàng ngày: tra cứu tài liệu, lên kế hoạch kiến trúc, refactor code và sinh unit test tự động."
        ],

        job2Date: "03/2024 — 11/2024",
        job2Role: "Kỹ Sư Client — Custom Car Racing 3D",
        job2Company: "Gear Games · Đà Nẵng, Việt Nam",
        job2Bullets: [
          "Xây dựng framework tùy biến xe 3D dạng module (thay phụ tùng: mâm xe, cánh gió, body kit, màu sơn).",
          "Dàn dựng timeline cho các góc quay camera gara, phóng to kiểm tra phụ tùng và hiển thị giới thiệu xe.",
          "Tái cấu trúc UI/UX và shader để giảm draw call, giúp game chạy ổn định trên các thiết bị Android tầm trung và thấp."
        ],

        job3Date: "08/2023 — 03/2024",
        job3Role: "Kỹ Sư Client — Idle Combat & Obstacle Prototype",
        job3Company: "Gear Games · Đà Nẵng, Việt Nam",
        job3Bullets: [
          "Đảm nhiệm toàn bộ phần client: lập trình tương tác vật lý và logic kích hoạt cho chướng ngại vật di động và bẫy theo nhịp thời gian.",
          "Xây dựng máy trạng thái (FSM) cho nhân vật tự đánh, quản lý thứ tự dùng chiêu và né tránh chướng ngại vật.",
          "Thiết kế hệ thống đồ đạc (gear) với tính toán chỉ số động, hiệu ứng va đập (hit-stop, rung camera) và giao diện HUD mobile."
        ],

        job4Date: "11/2021 — 08/2023",
        job4Role: "Kỹ Sư Client — Survival Prototype & Puzzle Strike",
        job4Company: "Gear Games · Đà Nẵng, Việt Nam",
        job4Bullets: [
          "Giai đoạn 1 (Nguyên mẫu): Lập trình cơ chế đường đạn vũ khí, kỹ năng tướng và điểm nối tính toán tương tác với netcode đồng bộ Photon Quantum; sửa lỗi lệch mạng trên Unity.",
          "Giai đoạn 2 (Sản phẩm phát hành): Chịu trách nhiệm chính toàn bộ client khi phát hành thương mại Puzzle Strike: Combat RPG. Tự viết thuật toán ghép ngọc match-3, hiệu ứng cascade rơi combo, tính toán sát thương combat theo lượt và logic tích lũy mana.",
          "Đưa mô hình 3D vào Unity, dàn dựng timeline cho chiêu thức và góc máy, xây dựng giao diện mobile UGUI tối ưu draw call."
        ],

        m1Date: "04/2021 — 11/2021",
        m1Title: "Thực Tập Sinh Kỹ Sư Client @ Gear Inc (6 Tháng)",
        m1Desc: "Tự tay phát triển game 2D RPG phong cách Final Fantasy độc lập 100% cho cả Đồ án tốt nghiệp Đại học Greenwich và Đồ án kết thúc thực tập tại Gear Inc (combat, tilemap, 4 nhân vật, lưu/tải dữ liệu). Viết lại 2 game kinh điển: Flappy Bird và Gold Miner.",

        m2Date: "2020",
        m2Title: "Thực Tập Sinh Backend @ Enouvo IT Solutions",
        m2Desc: "Thực tập OJT Đại học. Viết test API bằng Postman và gỡ lỗi dịch vụ backend Node.js, qua đó nhận ra niềm đam mê với đồ họa tương tác và game client.",

        m3Date: "2018 — 2022",
        m3Title: "Cử Nhân CNTT @ Đại Học Greenwich Việt Nam",
        m3Desc: "Được Google Developers chọn là 1 trong 9 Leader đầu tiên của Google Developer Student Clubs tại Việt Nam. Đại diện tham dự Google DSC SEA Summit 2019 tại Malaysia. Tổ chức các buổi workshop kỹ thuật về Flutter, Firebase và GCP.",

        m4Date: "2015 — 2018",
        m4Title: "Chuyên Tin Học @ THPT Chuyên Lê Quý Đôn Đà Nẵng",
        m4Desc: "Đoạt Giải Cấp Quốc Gia Cuộc thi Khoa học Kỹ thuật (KHKT) với Thiết bị cảnh báo cháy & chất lượng không khí. Nhiều Giải Nhất & Nhì Học sinh Giỏi Tin Học Đà Nẵng. Nền tảng thuật toán, cấu trúc dữ liệu và mô hình hóa toán học vững chắc."
      },
      about: {
        tag: "VỀ BẢN THÂN // HỒ SƠ",
        title: "Hành Trình & Tôn Chỉ Nghề Nghiệp",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Kỹ Sư Game Client & Hạ Tầng",
        specsHeader: "Thông Số Tổng Quan",
        specExp: "4+ Năm Kỹ Thuật Game Thực Chiến",
        specStudio: "Ex-Gear Games (Client & Infra)",
        specFocus: "Multiplayer Đồng Bộ, Unity, Profiling, SDKs",
        specDegree: "Cử Nhân CNTT · Greenwich Việt Nam",
        specHonors: "Ex-Google DSC Lead · Giải KHKT Quốc Gia",
        lead: "Mình là kỹ sư game client và hạ tầng tại Đà Nẵng, có hơn 4 năm kinh nghiệm làm việc tại Gear Games. Công việc của mình trải từ lập trình gameplay (multiplayer đồng bộ trên Photon Quantum, thuật toán match-3, toán combat) đến xử lý lỗi native SDK (IAP, Firebase, Facebook), đọc log truy vết crash bằng Splunk và viết tool tự động cho team Live Ops bằng Swift/Python.",
        p1: "Tại Gear Games, mình bắt đầu ở team gameplay client, phụ trách thuật toán bàn cờ match-3, toán combat theo lượt, framework tùy biến xe 3D và nguyên mẫu multiplayer dùng Photon Quantum. Sau đó, mình chuyển sang làm hạ tầng, chẩn đoán lỗi crash native SDK bên thứ ba (IAP, Firebase, Facebook SDK), lọc telemetry bằng Splunk và phát triển tool nội bộ trên macOS bằng Swift.",
        p2: "Nền tảng kỹ thuật của mình bắt đầu từ lớp Chuyên Tin trường THPT Chuyên Lê Quý Đôn Đà Nẵng, đoạt Giải Cấp Quốc Gia Cuộc thi Khoa học Kỹ thuật (KHKT) với thiết bị IoT nhúng cảnh báo cháy, và vinh dự là 1 trong 9 đại diện đầu tiên tại Việt Nam được Google Developers lựa chọn làm Google DSC Lead, tham dự hội nghị tại Malaysia năm 2019.",
        p3: "Mình coi trọng mã nguồn rõ ràng, tính chính xác tuyệt đối của logic đồng bộ trong multiplayer, và việc chủ động đào sâu vào profiler để giữ framerate luôn ổn định trên thiết bị di động."
      },
      contact: {
        tag: "KÊNH KẾT NỐI",
        title: "Cùng Nhau Tạo Nên Trải Nghiệm Đột Phá",
        desc: "Nếu bạn đang tìm một kỹ sư game để xây dựng hệ thống gameplay, giải quyết netcode multiplayer đồng bộ, hoặc xử lý các vấn đề engine và native SDK, hãy liên hệ trực tiếp với mình:",
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
