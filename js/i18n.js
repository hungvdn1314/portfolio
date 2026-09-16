/**
 * IrrationaL Portfolio - Humanized Translation Engine (English & Vietnamese)
 * Day/Night Accent Support, Separated Education & Honors, Streamlined Topbar
 */

(function () {
  'use strict';

  const translations = {
    en: {
      nav: {
        projects: "Projects",
        experience: "Experience",
        competencies: "Skills",
        education: "Education",
        about: "About",
        contact: "Contact",
        cv: "CV"
      },
      hero: {
        status: "OPEN TO WORK · AVAILABLE FOR OPPORTUNITIES",
        intro: "Hi, I'm",
        title: "IrrationaL",
        realname: "Vu Dinh Nghia Hung",
        role: "GAME CLIENT & INFRA ENGINEER",
        summary: "Game client and engine infrastructure engineer with 4+ years of production experience at Gear Games (Nov 2021 — Aug 2026). Currently open to new opportunities. Quick to adapt to new tech stacks, energized by tough engineering challenges, and driven to build software that creates genuine impact.",
        exploreWork: "Explore Featured Work",
        downloadCv: "Download CV",
        getInTouch: "Get in Touch",
        location: "Da Nang, Vietnam",
        experiencePill: "4+ Years at Gear Games"
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
        p1Desc: "<strong>Stage 1 (Multiplayer Survival Prototype):</strong> My first project at Gear Games. I supported the team by implementing smaller features and fixing bugs—handling some weapon logic, coding a few character skills, and resolving data-related issues.<br/><strong>Stage 2 (Turn-Based Combat RPG Release):</strong> Worked within the client team to ship the turn-based combat RPG. We shared tasks across the codebase; I focused on match-3 grid logic (swapping, gravity cascades, combos), turn combat math (elements, buffs, mana curves), 3D character animation timelines, and mobile UI layouts.",
        watchTrailer: "Watch Gameplay Trailer",
        newsCoverage: "Press Review (AFKmobi)",

        // POP! Slots
        p2Role: "Infra & Engine Outsource Support",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Client and engine support for playSTUDIOS' POP! Slots via Gear Games across two key areas:<br/>• <strong>Crash & SDK Triage:</strong> Monitored production logs in Splunk, isolated crash patterns, and traced code to fix native issues across Facebook SDK, Firebase, and In-App Purchases (IAP).<br/>• <strong>Internal Tooling:</strong> Took ownership of several internal tools supporting the project. Handled them end-to-end—breaking down PRDs, writing TDDs, implementing features, fixing bugs, and keeping them maintained for the team.",
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

        p8Role: "Party Drinking Game (Web)",
        p8Title: "Velvet Vines",
        p8Desc: "Responsive drinking and party game web app designed for mobile browsers with clean micro-animations and randomized challenge decks for social nights."
      },
      experience: {
        tag: "CAREER TIMELINE",
        title: "Experience & Production Roles",
        desc: "4+ years of game engineering, native SDK stability, and developer tools at Gear Games.",

        job1Date: "Nov 2024 — Aug 2026",
        job1Role: "Infra Engineer",
        job1Company: "Gear Games · Da Nang, Vietnam",
        job1Bullets: [
          "Investigated production crashes and anomalies using Splunk; traced client code to identify root causes and implemented fixes across Facebook SDK, Firebase, and In-App Purchases (IAP).",
          "Took ownership of several internal tools supporting game projects—breaking down PRDs, writing TDDs, implementing features, fixing bugs, and maintaining them end-to-end.",
          "Built macOS desktop utilities and automation scripts using Xcode, Swift, and Python for the Live Ops team to validate configs and speed up asset packaging.",
          "Used AI workflows for technical research, test planning, refactoring, and automated test generation."
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
          "Stage 1 (Survival Prototype): My first project at Gear Games; supported the team by implementing smaller features and fixing bugs—handling some weapon logic, coding a few character skills, and resolving data-related issues.",
          "Stage 2 (Commercial Release): Collaborated within the client team to ship Puzzle Strike: Combat RPG; contributed to match-3 grid logic, cascade gravity, turn combat calculations, and mana mechanics.",
          "Integrated 3D character models into Unity, choreographed skill timelines and camera framing, and built mobile UI layouts."
        ],

        job5Date: "Apr 2021 — Nov 2021",
        job5Role: "Client Engineer Intern",
        job5Company: "Gear Inc · Da Nang, Vietnam",
        job5Bullets: [
          "Built a solo Final Fantasy-inspired 2D RPG as both University Graduation Thesis and 6-month internship capstone (combat math, tilemaps, 4 heroes, save/load serialization).",
          "Re-engineered classic arcade titles (Flappy Bird, Gold Miner) from scratch to master Unity component lifecycles and physics bounding."
        ],

        job6Date: "2020",
        job6Role: "Backend Developer Intern (University OJT)",
        job6Company: "Enouvo IT Solutions · Da Nang, Vietnam",
        job6Bullets: [
          "Collaborated under senior guidance to run API test suites using Postman and troubleshoot Node.js backend services, which sparked my transition into interactive graphics and game client development."
        ]
      },
      skills: {
        tag: "TECHNICAL STACK",
        title: "Skills & Technologies",
        desc: "Core programming languages, game engines, and production tools I work with.",
        cat1Title: "Languages",
        cat2Title: "Game & Systems",
        cat3Title: "Infra & Debugging",
        cat4Title: "Web & Platforms"
      },
      education: {
        tag: "ACADEMIC & HONORS",
        title: "Education & Leadership",
        desc: "Foundational computer science degrees and competitive achievements.",
        edu1Honor: "Google DSC Lead (Inaugural Cohort)",
        edu1Date: "2018 — 2022",
        edu1School: "University of Greenwich Vietnam",
        edu1Degree: "B.S. Computing",
        edu1Desc: "Selected by Google Developers as one of the first 9 pioneering DSC Leads across Vietnam. Represented the university at the Google DSC SEA Summit 2019 in Kuala Lumpur, Malaysia. Organized hands-on technical workshops in Flutter, Firebase, and cloud technologies.",

        edu2Honor: "National Awards: Tin Học Trẻ & KHKT",
        edu2Date: "2015 — 2018",
        edu2School: "Le Quy Don High School for the Gifted",
        edu2Degree: "Specialized in Computer Science (Chuyên Tin)",
        edu2Desc: "Won National Awards at both the National Youth Informatics Contest (Tin Học Trẻ Toàn Quốc) and the National Science & Technology Contest (KHKT Cấp Quốc Gia), alongside City awards in High School Informatics Olympiads. Built strong foundations in algorithms, data structures, and mathematical modeling."
      },
      innovations: {
        tag: "EARLY INNOVATIONS",
        title: "Hardware R&D & Early Projects",
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
      about: {
        tag: "ABOUT ME // PROFILE",
        title: "Engineering Path & Philosophy",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Game Client & Infra Engineer",
        specsHeader: "Quick Specifications",
        specStatus: "Open to Work · Available for Opportunities",
        specExp: "4+ Years in Production Game Engineering",
        specStudio: "Ex-Gear Games (Nov 2021 — Aug 2026)",
        specDegree: "B.S. Computing · Greenwich Vietnam",
        specHonors: "Ex-Google DSC Lead · National Awards: Tin Học Trẻ & KHKT",
        lead: "I’m a game client and infrastructure engineer based in Da Nang, Vietnam. Over four years at Gear Games (Nov 2021 — Aug 2026), I worked across gameplay client systems and low-level engine infrastructure. Currently open to new opportunities (remote or on-site). I adapt quickly to new tech stacks, love diving into hard engineering problems that demand complete focus, and care deeply about building things that make a tangible difference.",
        p1: "My work has spanned the spectrum from player-facing features to backend stability. On the gameplay side, I've shipped match-3 mechanics, combat math, animation timelines, and mobile UI, alongside early prototypes in Photon Quantum. On the infrastructure side, I dig through Splunk logs to isolate crash signatures, patch native SDK issues across iOS and Android, and build internal tools from scratch that automate daily team workflows.",
        p2: "My technical path began with competitive programming at Le Quy Don High School for the Gifted, winning National Awards in both Tin Học Trẻ Toàn Quốc and KHKT Cấp Quốc Gia. Later at the University of Greenwich, I was selected as one of Vietnam's first 9 Google Developer Student Club (DSC) Leads, representing the community at the SEA Summit in Malaysia.",
        p3: "Whether it's untangling an obscure native memory crash or engineering a snappy client mechanic, I bring curiosity, fast iteration, and an appetite for hard problems."
      },
      contact: {
        tag: "COMMUNICATION CHANNELS",
        title: "Let's Build Something Together",
        desc: "If you're looking for a game engineer to build gameplay systems, work through multiplayer netcode, or fix native engine and SDK issues, feel free to reach out. I am currently open to new opportunities and available for full-time, contract, or remote roles:",
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
        experience: "Kinh Nghiệm",
        competencies: "Kỹ Năng",
        education: "Học Vấn",
        about: "Giới Thiệu",
        contact: "Liên Hệ",
        cv: "CV"
      },
      hero: {
        status: "SẴN SÀNG CHO CƠ HỘI MỚI · OPEN TO WORK",
        intro: "Xin chào, mình là",
        title: "IrrationaL",
        realname: "Vũ Đình Nghĩa Hưng",
        role: "KỸ SƯ GAME CLIENT & HẠ TẦNG ENGINE",
        summary: "Kỹ sư game client và hạ tầng với hơn 4 năm kinh nghiệm tại Gear Games (11/2021 — 08/2026). Hiện đang sẵn sàng đón nhận các cơ hội công việc mới (Open to Work). Khả năng thích ứng nhanh với các công nghệ mới, đam mê chinh phục các bài toán kỹ thuật phức tạp đòi hỏi sự tập trung cao độ, và luôn hướng tới việc xây dựng sản phẩm mang lại giá trị thực tế.",
        exploreWork: "Khám Phá Dự Án",
        downloadCv: "Tải CV PDF",
        getInTouch: "Kết Nối Ngay",
        location: "Đà Nẵng, Việt Nam",
        experiencePill: "4+ Năm tại Gear Games"
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
        p1Desc: "<strong>Giai đoạn 1 (Nguyên mẫu Sinh tồn PUBG + Match-3):</strong> Dự án đầu tiên của mình tại Gear Games. Mình hỗ trợ team phát triển các tính năng nhỏ và sửa lỗi—lập trình một phần logic vũ khí, một số kỹ năng nhân vật và xử lý các lỗi dữ liệu.<br/><strong>Giai đoạn 2 (Bản phát hành Puzzle Strike: Combat RPG):</strong> Phối hợp cùng team client đưa tựa game ra mắt chính thức. Cả team chia sẻ các đầu việc; phần mình tập trung làm gồm logic bàn cờ match-3 (đổi vị trí ngọc, cascade rơi combo), tính toán combat theo lượt (khắc hệ, mana, buff), gắn timeline diễn hoạt cho mô hình 3D và dựng giao diện mobile.",
        watchTrailer: "Xem Trailer Gameplay",
        newsCoverage: "Báo chí đưa tin (AFKmobi)",

        p2Role: "Hỗ Trợ Kỹ Thuật Outsource Client & Native SDKs",
        p2Title: "POP! Slots (playSTUDIOS)",
        p2Desc: "Hỗ trợ kỹ thuật client và engine cho tựa game POP! Slots của playSTUDIOS qua Gear Games với 2 mảng chính:<br/>• <strong>Xử lý crash & lỗi SDK:</strong> Theo dõi log thực tế qua Splunk, khoanh vùng chữ ký lỗi, đọc code để tìm nguyên nhân gốc rễ và trực tiếp sửa các sự cố liên quan đến Facebook SDK, Firebase và In-App Purchases (IAP).<br/>• <strong>Phát triển Internal Tool:</strong> Chủ động đảm nhận một số công cụ nội bộ hỗ trợ dự án: bóc tách PRD, viết TDD, code tính năng mới, sửa lỗi và bảo trì công cụ cho toàn team.",
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

        p8Role: "Game Tiệc Tùng / Drinking Game Web",
        p8Title: "Velvet Vines",
        p8Desc: "Ứng dụng web trò chơi tiệc tùng và drinking game dành cho điện thoại với chuyển động mượt mà và bộ thử thách ngẫu nhiên cho những buổi tụ tập bạn bè."
      },
      experience: {
        tag: "LỘ TRÌNH SỰ NGHIỆP",
        title: "Kinh Nghiệm & Vị Trí Sản Xuất",
        desc: "Hơn 4 năm thực chiến về kỹ thuật game, ổn định SDK native và phát triển công cụ hỗ trợ tại Gear Games.",

        job1Date: "11/2024 — 08/2026",
        job1Role: "Kỹ Sư Hạ Tầng (Infra Engineer)",
        job1Company: "Gear Games · Đà Nẵng, Việt Nam",
        job1Bullets: [
          "Điều tra crash và chỉ số bất thường trên môi trường live bằng Splunk; đọc luồng code tìm nguyên nhân gốc rễ và trực tiếp sửa lỗi liên quan đến Facebook SDK, Firebase và In-App Purchases (IAP).",
          "Chủ động đảm nhận một số công cụ nội bộ hỗ trợ dự án: tự bóc tách PRD, viết TDD, code tính năng mới, sửa lỗi và duy trì vòng đời công cụ cho toàn team.",
          "Bảo trì và phát triển công cụ tiện ích trên macOS cho team Live Ops bằng Xcode, Swift và Python, tự động hóa đóng gói tài nguyên và kiểm tra file cấu hình release.",
          "Ứng dụng AI vào công việc hàng ngày để tra cứu tài liệu kỹ thuật, lên kế hoạch kiến trúc, refactor code và sinh unit test tự động."
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
          "Giai đoạn 1 (Nguyên mẫu Sinh tồn): Dự án đầu tiên tại Gear Games; hỗ trợ team triển khai các tính năng nhỏ và sửa bug—lập trình một phần logic vũ khí, một số chiêu thức tướng và xử lý lỗi dữ liệu trong Photon Quantum và Unity.",
          "Giai đoạn 2 (Phát hành thương mại): Phối hợp cùng team client hoàn thiện Puzzle Strike: Combat RPG; tham gia viết thuật toán match-3, hiệu ứng cascade combo, tính toán sát thương theo lượt và tích lũy mana.",
          "Đưa mô hình 3D vào Unity, dàn dựng timeline cho chiêu thức và góc máy, xây dựng giao diện mobile UGUI tối ưu."
        ],

        job5Date: "04/2021 — 11/2021",
        job5Role: "Thực Tập Sinh Kỹ Sư Client",
        job5Company: "Gear Inc · Đà Nẵng, Việt Nam",
        job5Bullets: [
          "Tự tay phát triển game 2D RPG phong cách Final Fantasy độc lập 100% cho cả Đồ án tốt nghiệp Đại học Greenwich và Đồ án kết thúc thực tập tại Gear Inc (combat, tilemap, 4 nhân vật, lưu/tải dữ liệu).",
          "Tái lập trình 2 game kinh điển (Flappy Bird, Gold Miner) để làm chủ vòng đời component và vật lý va chạm trong Unity."
        ],

        job6Date: "2020",
        job6Role: "Thực Tập Sinh Backend (Thực tập OJT)",
        job6Company: "Enouvo IT Solutions · Đà Nẵng, Việt Nam",
        job6Bullets: [
          "Viết test API bằng Postman và gỡ lỗi dịch vụ backend Node.js, qua đó nhận ra niềm đam mê với đồ họa tương tác và chuyển hướng sang game client."
        ]
      },
      skills: {
        tag: "CHUYÊN MÔN KỸ THUẬT",
        title: "Kỹ Năng & Công Nghệ",
        desc: "Các ngôn ngữ lập trình chủ đạo, game engine và công cụ sản xuất mình sử dụng thường xuyên.",
        cat1Title: "Ngôn Ngữ Lập Trình",
        cat2Title: "Game & Hệ Thống",
        cat3Title: "Hạ Tầng & Gỡ Lỗi",
        cat4Title: "Web & Nền Tảng"
      },
      education: {
        tag: "HỌC VẤN & THÀNH TÍCH",
        title: "Học Vấn & Hoạt Động",
        desc: "Nền tảng đào tạo chính quy về khoa học máy tính và các thành tích nổi bật.",
        edu1Honor: "Google DSC Lead (Khoá Đầu Tiên)",
        edu1Date: "2018 — 2022",
        edu1School: "Đại Học Greenwich Việt Nam",
        edu1Degree: "Cử Nhân Công Nghệ Thông Tin (B.S. Computing)",
        edu1Desc: "Được Google Developers chọn là 1 trong 9 Leader đầu tiên của Google Developer Student Clubs tại Việt Nam. Đại diện tham dự Google DSC SEA Summit 2019 tại Malaysia. Tổ chức các buổi workshop thực chiến về Flutter, Firebase và công nghệ đám mây.",

        edu2Honor: "Giải Quốc Gia: Tin Học Trẻ & KHKT",
        edu2Date: "2015 — 2018",
        edu2School: "THPT Chuyên Lê Quý Đôn Đà Nẵng",
        edu2Degree: "Chuyên Tin Học (Computer Science)",
        edu2Desc: "Đoạt Giải Cấp Quốc Gia tại cả hai cuộc thi: Tin Học Trẻ Toàn Quốc và Cuộc thi Khoa học Kỹ thuật Cấp Quốc Gia (KHKT), cùng nhiều giải thưởng Học sinh Giỏi Tin Học cấp Thành phố. Nền tảng thuật toán, cấu trúc dữ liệu và tư duy mô hình hóa toán học vững chắc."
      },
      innovations: {
        tag: "DỰ ÁN SÁNG TẠO SỚM",
        title: "Phần Cứng R&D & Dự Án Khởi Đầu",
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
      about: {
        tag: "VỀ BẢN THÂN // HỒ SƠ",
        title: "Hành Trình & Tôn Chỉ Nghề Nghiệp",
        photoTag: "Vũ Đình Nghĩa Hưng // IrrationaL",
        photoRole: "Kỹ Sư Game Client & Hạ Tầng",
        specsHeader: "Thông Số Tổng Quan",
        specStatus: "Sẵn Sàng Nhận Việc · Open to Work",
        specExp: "4+ Năm Kỹ Thuật Game Thực Chiến",
        specStudio: "Cựu Kỹ Sư Gear Games (11/2021 — 08/2026)",
        specDegree: "Cử Nhân CNTT · Greenwich Việt Nam",
        specHonors: "Ex-Google DSC Lead · Giải Quốc Gia Tin Học Trẻ & KHKT",
        lead: "Mình là kỹ sư game client và hạ tầng tại Đà Nẵng, với hơn 4 năm kinh nghiệm tại Gear Games (11/2021 — 08/2026). Hiện tại mình đang sẵn sàng đón nhận các cơ hội nghề nghiệp mới (Open to Work - Remote / On-site). Mình có khả năng thích ứng nhanh với các công nghệ mới, hào hứng trước những bài toán kỹ thuật hóc búa đòi hỏi sự dồn sức cao độ, và luôn tâm huyết tạo ra những sản phẩm mang lại giá trị thực tế.",
        p1: "Tại Gear Games, công việc của mình trải rộng từ các tính năng phía người chơi đến độ ổn định hạ tầng. Về gameplay, mình tham gia phát triển logic bàn cờ match-3, toán combat, timeline chuyển động 3D và giao diện mobile, bên cạnh các nguyên mẫu multiplayer đồng bộ với Photon Quantum. Về hạ tầng, mình đào sâu log Splunk để khoanh vùng crash, vá lỗi native SDK trên iOS và Android, đồng thời tự phát triển các công cụ nội bộ tối ưu hóa quy trình làm việc của cả team.",
        p2: "Hành trình lập trình của mình khởi đầu từ lớp Chuyên Tin trường THPT Chuyên Lê Quý Đôn Đà Nẵng, đạt Giải Cấp Quốc Gia ở cả hai cuộc thi Tin Học Trẻ Toàn Quốc và KHKT Cấp Quốc Gia. Tại Đại học Greenwich, mình vinh dự là 1 trong 9 đại diện đầu tiên ở Việt Nam được Google Developers chọn làm Google DSC Lead, tham gia hội nghị cấp khu vực Đông Nam Á tại Malaysia.",
        p3: "Dù là giải mã một lỗi crash bộ nhớ native bí ẩn hay xây dựng một cơ chế gameplay mượt mà, mình luôn làm việc với tinh thần học hỏi nhanh, đào sâu bản chất và không ngại các thử thách kỹ thuật khó khăn."
      },
      contact: {
        tag: "KÊNH KẾT NỐI",
        title: "Cùng Nhau Tạo Nên Trải Nghiệm Đột Phá",
        desc: "Nếu bạn đang tìm một kỹ sư game để xây dựng hệ thống gameplay, giải quyết netcode multiplayer đồng bộ, hoặc xử lý các vấn đề engine và native SDK, hãy liên hệ trực tiếp với mình. Mình hiện đang sẵn sàng cho các vị trí full-time, hợp đồng dự án hoặc làm việc từ xa (remote):",
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
