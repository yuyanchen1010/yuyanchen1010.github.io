export type Language = "zh" | "en";

export type ProfileLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "scholar";
};

export type CardItem = {
  title: string;
  meta: string;
  type: string;
  description: string;
  tags: string[];
  image?: {
    src: string;
    alt: string;
  };
  gallery?: {
    src: string;
    alt: string;
  }[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  time: string;
  details: string[];
};

export type SiteContent = {
  nav: {
    aria: string;
    home: string;
    about: string;
  };
  profile: {
    ariaLabel: string;
    linkAria: string;
    initials: string;
    portrait: string;
    portraitAlt: string;
    badge: string;
    name: string;
    title: string;
    focus: string;
    location: string;
    email: string;
    phone: string;
    cvUrl: string;
    cvLabel: string;
    contactLabel: string;
    links: ProfileLink[];
  };
  homeHero: {
    kicker: string;
    heading: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    about: string;
    research: string;
    education: string;
    projects: string;
    academic: string;
    funds: string;
    awards: string;
    activities: string;
    works: string;
    news: string;
    contact: string;
  };
  about: {
    short: string[];
    long: string[];
  };
  researchInterests: {
    title: string;
    description: string;
  }[];
  education: TimelineItem[];
  projects: CardItem[];
  academicExperience: CardItem[];
  funds: CardItem[];
  awards: CardItem[];
  activities: CardItem[];
  works: CardItem[];
  news: {
    date: string;
    text: string;
  }[];
  contact: {
    body: string;
    emailLabel: string;
  };
  aboutPage: {
    kicker: string;
    heading: string;
    lead: string;
    motivationTitle: string;
    motivation: string[];
    futureTitle: string;
    future: string[];
    skillsTitle: string;
  };
  skills: {
    title: string;
    description: string;
  }[];
};

const researchImages = {
  lczpm: "/materials/research/LCZPM01.png",
  lczpmThumb: "/materials/research/LCZPM01-thumb.jpg",
  gvipm: "/materials/research/GVIPM02.png",
  gvipmThumb: "/materials/research/GVIPM02-thumb.jpg",
  cooling: "/materials/research/cooling03.png",
  coolingThumb: "/materials/research/cooling03-thumb.jpg",
  jwjt: "/materials/research/JWJT04.png",
  jwjtThumb: "/materials/research/JWJT04-thumb.jpg",
  zhichen: "/materials/research/zhichen05.pdf",
  zhichenThumb: "/materials/research/zhichen05-thumb.jpg",
  dali: "/materials/research/dali06.png",
  daliThumb: "/materials/research/dali06-thumb.jpg",
};

const conferenceImages = {
  valse2026: "/materials/conferences/valse2026-wuhan.jpg",
  planning2025: "/materials/conferences/planning2025-shenyang.jpg",
  landscape2024: "/materials/conferences/landscape2024-shenzhen.jpg",
  landscape2025: "/materials/conferences/landscape2025-kunming.jpg",
  workshop2024: [
    "/materials/conferences/child-friendly-campus-certificate.jpg",
    "/materials/conferences/child-friendly-campus-group.jpg",
    "/materials/conferences/child-friendly-campus-workshop.jpg",
  ],
};

const workImages = {
  asla2026: [
    "/materials/works/asla2026-1.jpg",
    "/materials/works/asla2026-2.jpg",
    "/materials/works/asla2026-3.jpg",
  ],
  ifla2026: [
    "/materials/works/ifla2026-1.jpg",
    "/materials/works/ifla2026-2.jpg",
    "/materials/works/ifla2026-3.jpg",
  ],
  asla2025: [
    "/materials/works/asla2025-1.jpg",
    "/materials/works/asla2025-2.jpg",
    "/materials/works/asla2025-3.jpg",
  ],
};

const googleScholarUrl =
  "https://scholar.google.com/citations?hl=en&user=NJkzaIcAAAAJ&view_op=list_works&citft=1&citft=2&citft=3&email_for_op=ooooofset%40gmail.com&authuser=1&gmla=ACrTK9XhUHBjkyXvR6AljuG2Uw6SPZ6r-rbo93cKMHRmsbjDwNWOebaaQcVk4YvnuELjG3p0-sTNW0pGwYf88wY34CEbEvcTV4ZCMUK7wlCTrR56lSgPQIPIuNw1PT9EKq9NJx-C9HdsaDkGPRqO6enNX2StdXhowH8bbiK8E2m7anlo6jDtq3Z3Wu-YI5E2wFcdWuvlRvq5TlICXysYQ8JGNqgtwDlgCPkPXN58YX-lxHVLLabTDyPV0UXRAVijjjw";

export const content: Record<Language, SiteContent> = {
  zh: {
    nav: {
      aria: "主导航",
      home: "首页",
      about: "关于我",
    },
    profile: {
      ariaLabel: "个人信息",
      linkAria: "学术与社交链接",
      initials: "CY",
      portrait: "/materials/profile/portrait.jpg",
      portraitAlt: "陈玉妍个人照片",
      badge: "硕士研究生 / PhD Applicant",
      name: "陈玉妍",
      title: "华中科技大学风景园林硕士研究生",
      focus: "Landscape Architecture / Urban Planning / GIS / Urban Green Space / Environmental Exposure",
      location: "湖北武汉 / Open to global PhD opportunities",
      email: "yuyanchen@hust.edu.cn",
      phone: "1530-715-2883",
      cvUrl: "/cv.pdf",
      cvLabel: "下载 CV",
      contactLabel: "联系我",
      links: [
        { label: "GitHub", href: "https://github.com/", icon: "github" },
        { label: "Google Scholar", href: googleScholarUrl, icon: "scholar" },
        { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
      ],
    },
    homeHero: {
      kicker: "Academic Portfolio",
      heading: "面向博士申请的城市绿色空间与环境健康研究主页",
      body:
        "我目前就读于华中科技大学风景园林专业硕士，研究关注城市绿色空间、建成环境、空气污染与热风险之间的空间关系，擅长将 GIS、遥感、街景数据、空间计量与机器学习方法转化为规划设计证据。",
      primaryCta: "查看研究经历",
      secondaryCta: "阅读完整介绍",
    },
    sections: {
      about: "自我介绍",
      research: "研究兴趣",
      education: "教育背景",
      projects: "科研经历 / 论文",
      academic: "学术经历",
      funds: "参与基金",
      awards: "奖项与奖学金",
      activities: "竞赛、会议与证书",
      works: "其他作品",
      news: "动态",
      contact: "联系",
    },
    about: {
      short: [
        "我叫陈玉妍，23 岁，来自湖北武汉。本科毕业于北京林业大学风景园林专业，目前为华中科技大学风景园林专业硕士研究生，预计 2027 年 6 月毕业，师从戴菲老师。",
        "我的本科绩点为 90.37/100，排名 5/122；研究生阶段排名 3/18。英语方面，CET-6 为 577 分，CET-4 为 607 分，并具备较好的学术沟通与写作基础。",
      ],
      long: [
        "我接受过系统的风景园林与规划训练，同时持续积累 GIS 空间分析、遥感反演、街景图像解析、机器学习解释模型和学术写作经验。当前研究多围绕城市绿色空间在空气污染削减、碳汇协同、热风险缓解与步行可达性中的作用展开。",
        "我希望在博士阶段继续推进数据驱动的景观与城市环境研究，关注绿色空间形态、街区建成环境和环境暴露之间的非线性关系，并将研究结果转译为更具可操作性的规划控制与更新策略。",
        "这个网站用于集中呈现我的个人背景、论文进展、图示材料与后续申请资料。研究经历中的条目已按照材料文件名后缀编号配对整理，同一编号对应同一篇论文或会议稿。",
      ],
    },
    researchInterests: [
      {
        title: "Urban Form & Low-Carbon Communities",
        description: "利用多源城市大数据，研究城市形态、住房空置、土地利用效率与碳排放之间的耦合关系",
      },
      {
        title: "LLMs & Human-Scale Urban Perception",
        description: "研究大语言模型、街景感知与公众环境感知数据在城市环境评价中的应用",
      },
      {
        title: "Urban Climate Risk & Policy-Oriented Planning",
        description: "研究极端高温、空气污染与社会脆弱性叠加下的城市健康风险，并构建面向气候适应和城市更新的决策支持方法。",
      },
    ],
    education: [
      {
        title: "华中科技大学",
        subtitle: "风景园林硕士研究生，保研\n师从戴菲教授",
        time: "2024 - 2027 预计",
        details: ["研究生绩点 3.75/4.00，排名 3/18", "研究方向包括城市绿色空间、环境暴露、GIS 与空间机器学习"],
      },
      {
        title: "北京林业大学",
        subtitle: "风景园林本科",
        time: "2020 - 2024",
        details: ["绩点 90.37/100，排名 5/122，前 4%", "CET-6 577 分，CET-4 607 分"],
      },
    ],
    projects: [
      {
        title: "Unravelling the Differentiated Effects of the Block Built Environment on PM2.5 Concentrations: A New Research Framework based on the Perspective of Source–Flow–Sink",
        meta: "Paper 01 / Sustainable Cities and Society / under review",
        type: "First Author",
        description:
          "以武汉街区为对象，构建 Source-Flow-Sink 框架，结合 XGBoost 降尺度、SOM 聚类、GWRF-SHAP、ALE、pSEM 与 Bayesian networks，解释建成环境对 PM2.5 风险的过程耦合机制。",
        tags: ["PM2.5", "Source-Flow-Sink", "GWRF-SHAP", "Wuhan"],
        image: { src: researchImages.lczpmThumb, alt: "LCZPM01 research figure" },
        links: [{ label: "Figure", href: researchImages.lczpm }],
      },
      {
        title: "A Pedestrian-Perspective 2D–3D-Visible Framework for Assessing Block-Scale Associations Between Green-Space Configuration and PM2.5",
        meta: "Paper 02 / Environmental Impact Assessment Review / with editor",
        type: "Second Author",
        description:
          "建立可比较的 2D-3D 绿色空间格局指标框架，评估二维水平绿地与街景可见绿地配置对武汉街区 PM2.5 的贡献差异、空间异质性与非线性响应。",
        tags: ["Street View", "Visible Green Space", "PM2.5", "2D-3D Framework"],
        image: { src: researchImages.gvipmThumb, alt: "GVIPM02 research figure" },
        links: [{ label: "Figure", href: researchImages.gvipm }],
      },
      {
        title: "From Green Space to Park-Based Cooxling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit",
        meta: "Paper 03 / Sustainable Cities and Society, accepted",
        type: "Online Research Assistant",
        description:
          "以底特律为案例，将公园冷却强度、步行网络可达性和社会空间脆弱性结合，构建 Walkable Cooling Access Index，识别步行冷却沙漠与局部冷却绿洲。",
        tags: ["Urban Heat", "Park Cooling", "Walkability", "Detroit"],
        image: { src: researchImages.coolingThumb, alt: "Cooling03 research figure" },
        links: [
          { label: "Article homepage", href: "https://www.sciencedirect.com/science/article/pii/S2210670726004865" },
          { label: "Figure", href: researchImages.cooling },
        ],
      },
      {
        title: "城市绿色空间多维属性对“降碳减污”效益的协同与权衡关系——以武汉市主城区街区单元为例",
        meta: "Paper 04 / Journal manuscript",
        type: "Second Author",
        description:
          "以武汉主城区 251 个控规单元为研究对象，使用 GWRF 与 SHAP 揭示绿色空间指标对碳汇与污染削减效益的非线性影响，并提出分区化绿色更新路径。",
        tags: ["Carbon Mitigation", "Pollution Reduction", "Trade-off", "Regulatory Planning"],
        image: { src: researchImages.jwjtThumb, alt: "JWJT04 research figure" },
        links: [{ label: "Figure", href: researchImages.jwjt }],
      },
      {
        title: "基于滞尘模型的绿色空间格局对PM2.5影响研究",
        meta: "Paper 05 / 中国城市规划年会 Poster",
        type: "First Author",
        description:
          "基于北京市中心城区空气质量监测点与滞尘模型，比较线性回归、地理加权回归与随机森林，从 MSPA 要素角度解释绿色空间格局对 PM2.5 滞留能力的差异化影响。",
        tags: ["Dust Retention", "MSPA", "Beijing", "Conference Poster"],
        image: { src: researchImages.zhichenThumb, alt: "Zhichen05 conference poster preview" },
        links: [{ label: "Poster PDF", href: researchImages.zhichen }],
      },
      {
        title: "基于空间计量的文化遗产廊道构建研究——以大理市为例",
        meta: "Paper 06 / 中国风景园林年会",
        type: "First Author",
        description:
          "以大理市 102 处文物保护单位为研究对象，运用 GIS 空间分析、模糊综合评价和最小阻力模型，提出文化遗产廊道的分级分类评估与协同保护策略。",
        tags: ["Cultural Heritage", "Corridor", "FCE", "MCR", "Dali"],
        image: { src: researchImages.daliThumb, alt: "Dali06 research figure" },
        links: [{ label: "Figure", href: researchImages.dali }],
      },
    ],
    academicExperience: [],
    funds: [
      {
        title: "国家自然科学基金重点项目基金申报",
        meta: "2026.02 - 2026.03",
        type: "参与申报",
        description: "参与《协同推进“降碳、减污、扩绿、增长”城乡生态空间规划理论与方法》申报，负责研究内容、各子项目研究框图、研究方法以及拟采取的研究方案。",
        tags: ["NSFC", "重点项目", "城乡生态空间", "研究方案"],
      },
      {
        title: "国家社会科学基金重大项目投标",
        meta: "2025.07",
        type: "参与投标",
        description: "参与《基于多源时空异构大数据的绿色转型风险监测与防范研究》投标，负责子项目三《基于多源时空异构大数据的“降碳-减污”风险识别与动态监测研究》。",
        tags: ["国家社科基金", "重大项目", "绿色转型", "风险监测"],
      },
      {
        title: "山区河流保护与治理全国重点实验室开放合作基金申请",
        meta: "2025.11 - 2025.12",
        type: "参与申请",
        description: "参与四川大学山区河流保护与治理全国重点实验室开放合作基金《金沙江下游生态产品价值时空演变机制及影响因素研究》申请，负责已有工作基础及相关研究成果、申请人简历。",
        tags: ["开放合作基金", "金沙江下游", "生态产品价值", "申请材料"],
      },
    ],
    awards: [
      {
        title: "研究生阶段荣誉奖项",
        meta: "2023 - 2025",
        type: "荣誉奖项",
        description: "2024-2025 学年度：华中科技大学科技创新奖学金、华中科技大学二等硕士学业奖学金。\n2023-2024 学年度：华中科技大学一等硕士学业奖学金。",
        tags: ["科技创新奖学金", "一等硕士学业奖学金", "二等硕士学业奖学金", "HUST"],
      },
      {
        title: "本科阶段荣誉奖项",
        meta: "2020 - 2024",
        type: "荣誉奖项",
        description: "2023-2024 学年度：北京林业大学优秀毕业生。\n2020-2023 学年度：校优秀学生二等奖学金（连续 3 年）。\n2020-2022 学年度：校三好学生（连续 2 年）。\n2022-2023 学年度：院十佳团干部（全院仅 10 人）。\n2020-2021 学年度：校优秀组织委员（全校仅 55 人）、校优秀学生干部。",
        tags: ["优秀毕业生", "二等奖学金", "三好学生", "十佳团干部", "学生干部"],
      },
      {
        title: "竞赛经历",
        meta: "2022 - 2025",
        type: "竞赛经历",
        description: "2025.07-2025.12：2025 园冶杯大学生国际竞赛二等奖（1/3）。\n2025.02-2025.03：世界人居建筑与环境设计大赛银奖（1/5）。\n2023.02-2023.06：2023 园冶杯大学生国际竞赛荣誉奖（1/1）。\n2022.05-2022.06：2022 园冶杯大学生国际竞赛荣誉奖（4/5）。",
        tags: ["园冶杯", "二等奖", "银奖", "荣誉奖"],
      },
    ],
    activities: [
      {
        title: "儿童友好&校园景观中英联合工作营",
        meta: "2024.10.19-10.23 / 华中科技大学 × University of Sheffield",
        type: "International Workshop",
        description: "参与华中科技大学与谢菲尔德大学联合举办的“儿童友好&校园景观”中英联合工作营，围绕儿童友好校园景观设计开展跨文化协作学习，并获评优秀营员。",
        tags: ["Child-Friendly Campus", "University of Sheffield", "International Workshop", "优秀营员"],
        gallery: conferenceImages.workshop2024.map((src, index) => ({
          src,
          alt: `儿童友好&校园景观中英联合工作营照片 ${index + 1}`,
        })),
      },
      {
        title: "第十六届视觉与学习青年学者研讨会（VALSE 2026）",
        meta: "2026.05.08-05.10 / 武汉国际会议中心",
        type: "Academic Conference",
        description: "参加第十六届视觉与学习青年学者研讨会（Vision And Learning SEminar, VALSE），关注视觉与学习领域的前沿研究方法，并拓展其与城市空间感知、街景图像解析和环境建模的交叉应用。",
        tags: ["Vision And Learning SEminar", "VALSE", "2026.05.08-05.10", "武汉国际会议中心"],
        image: { src: conferenceImages.valse2026, alt: "第十六届视觉与学习青年学者研讨会 VALSE 2026 武汉国际会议中心材料" },
        links: [{ label: "会议材料", href: conferenceImages.valse2026 }],
      },
      {
        title: "中国城市规划年会 2025",
        meta: "2025.08.30-09.01 / 沈阳市，沈阳新世界博览馆",
        type: "Academic Conference",
        description: "参加 2025 中国城市规划年会，围绕城市更新、绿色空间绩效与规划治理等议题学习并交流，进一步完善绿色空间与环境健康研究的规划转译视角。",
        tags: ["2025中国城市规划年会", "2025.08.30-09.01", "沈阳新世界博览馆"],
        image: { src: conferenceImages.planning2025, alt: "2025 中国城市规划年会沈阳新世界博览馆材料" },
        links: [{ label: "会议材料", href: conferenceImages.planning2025 }],
      },
      {
        title: "第十五届中国风景园林学会年会",
        meta: "2025.11.17-11.20 / 昆明市，昆明云安会都酒店",
        type: "Academic Conference",
        description: "参加 2025 年第十五届中国风景园林学会年会，持续关注风景园林学科在生态修复、绿色基础设施、城市环境绩效与遗产保护中的研究进展。",
        tags: ["2025年第十五届中国风景园林学会年会", "2025.11.17-11.20", "昆明云安会都酒店"],
        image: { src: conferenceImages.landscape2025, alt: "2025 年第十五届中国风景园林学会年会昆明云安会都酒店材料" },
        links: [{ label: "会议材料", href: conferenceImages.landscape2025 }],
      },
      {
        title: "第十四届中国风景园林学会年会",
        meta: "2024.11.08-11.11 / 深圳市光明区，深圳光明文化艺术中心",
        type: "Academic Conference",
        description: "参加 2024 年第十四届中国风景园林学会年会，了解风景园林规划设计、城市生态与公共空间研究的新议题，为后续会议投稿与论文写作积累学术视野。",
        tags: ["2024年第十四届中国风景园林学会年会", "2024.11.08-11.11", "深圳光明文化艺术中心"],
        image: { src: conferenceImages.landscape2024, alt: "2024 年第十四届中国风景园林学会年会深圳光明文化艺术中心材料" },
        links: [{ label: "会议材料", href: conferenceImages.landscape2024 }],
      },
    ],
    works: [
      {
        title: "Lungs of the City: Optimizing Designing Streetscapes for Runner Health",
        meta: "ASLA 2026 专业组",
        type: "Competition Boards",
        description: "围绕跑者健康与街道景观优化展开设计，结合方法分析、实证研究与街景策略图纸表达。",
        tags: ["ASLA 2026", "Streetscape", "Runner Health"],
        gallery: workImages.asla2026.map((src, index) => ({
          src,
          alt: `ASLA 2026 专业组作品图纸 ${index + 1}`,
        })),
      },
      {
        title: "Greenery and Wind: Landscape Strategies for Air Pollution Mitigation Along the NYC Marathon Route",
        meta: "IFLA 2026 学生组",
        type: "Competition Boards",
        description: "以纽约马拉松路线为对象，提出结合绿化密度、通风空间与灵活绿地系统的空气污染缓解景观策略。",
        tags: ["IFLA 2026", "Air Pollution", "NYC Marathon"],
        gallery: workImages.ifla2026.map((src, index) => ({
          src,
          alt: `IFLA 2026 学生组作品图纸 ${index + 1}`,
        })),
      },
      {
        title: "More Running More Greening",
        meta: "ASLA 2025 学生组",
        type: "Competition Boards",
        description: "从城市跑步路径与绿色空间联动出发，探索运动健康、公共空间与绿化系统融合的设计方案。",
        tags: ["ASLA 2025", "Urban Running", "Green Space"],
        gallery: workImages.asla2025.map((src, index) => ({
          src,
          alt: `ASLA 2025 学生组作品图纸 ${index + 1}`,
        })),
      },
    ],
    news: [
      { date: "2026.06", text: "以第二作者及 online Research Assistant 身份参与的论文《From Green Space to Park-Based Cooxling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit》被《Sustainable Cities and Society》顺利接收。" },
      { date: "2025.11", text: "以第一作者身份在中国风景园林年会上发表论文《基于空间计量的文化遗产廊道构建研究——以大理市为例》并参会。" },
      { date: "2025.08", text: "以第一作者身份在中国城市规划年会上发表 poster《基于滞尘模型的绿色空间格局对PM2.5影响研究》并参会。" },
    ],
    contact: {
      body:
        "如果您对我的研究方向、论文进展或博士申请材料感兴趣，欢迎通过邮件联系我。我可以进一步提供 CV、研究计划、论文草稿、图件或作品集材料。",
      emailLabel: "发送邮件",
    },
    aboutPage: {
      kicker: "Detailed Profile",
      heading: "个人背景、研究动机与申请材料结构",
      lead: "这一页展开介绍我的教育背景、研究基础、方法能力和博士阶段可能继续深化的研究方向。",
      motivationTitle: "研究动机",
      motivation: [
        "城市绿色空间不仅是景观设计对象，也与污染暴露、热风险、碳汇效益和居民日常可达性密切相关。我希望用更精细的空间数据和可解释模型理解这些关系。",
        "相比单一指标评价，我更关注多维建成环境、绿色空间格局和社会空间脆弱性之间的耦合机制，并尝试把模型结果转化为规划管理可以理解和使用的证据。",
      ],
      futureTitle: "未来研究计划",
      future: [
        "未来，我希望围绕“AI与多源城市大数据驱动的城市低碳转型、健康环境与气候韧性治理”开展研究。基于既有关于城市绿色空间、PM2.5缓解效应、碳汇/生态功能评估以及机器学习建模的研究基础，我计划进一步拓展对城市空间要素、环境风险与政策干预之间关系的量化分析。",
        "一方面，我希望结合遥感影像、街景图像、人口活动数据、建筑与住房数据等多源城市大数据，利用机器学习、空间统计和因果推断方法，识别城市形态、住房空置、土地利用效率与碳排放之间的耦合机制，为存量空间更新、低碳社区建设和精细化城市治理提供依据。",
        "另一方面，我也希望探索大语言模型与街景感知、城市文本数据和公众环境感知数据的结合，构建面向人本尺度的城市环境评价方法，弥补传统遥感和统计数据在微观感知、街道体验和居民暴露层面的不足。",
        "此外，面对极端高温、空气污染等复合气候风险，我计划进一步研究城市绿地、蓝绿基础设施、建筑形态和社会脆弱性对热暴露与健康风险的影响，量化不同规划策略的减缓效果，并形成可与城市更新、气候适应规划和公共政策衔接的决策支持框架。总体而言，我希望未来的研究不仅停留在环境现象识别和模型预测层面，而是进一步走向机制解释、情景模拟和政策转化，为高密度城市的低碳发展、气候适应和宜居性提升提供更具实践价值的科学证据。",
      ],
      skillsTitle: "技能",
    },
    skills: [
      { title: "空间分析", description: "熟练使用 ArcGIS/QGIS、ENVI、InVEST、Fragstats、Guidos、GeoDa。" },
      { title: "算法建模", description: "基本掌握 Python、MATLAB、SPSS、机器学习算法、MGWR 及 CiteSpace 的使用，熟练使用 Cursor、Codex 等 AI 编程工具。" },
      { title: "学术写作与排版", description: "具备高质量中英文论文写作能力，能够使用 LaTeX 进行学术论文、简历与申请材料排版。" },
      { title: "专业素养", description: "具备独立构建研究框架、多源大数据处理及高质量中英文学术论文撰写能力。" },
    ],
  },
  en: {
    nav: {
      aria: "Primary navigation",
      home: "Home",
      about: "About",
    },
    profile: {
      ariaLabel: "Profile information",
      linkAria: "Academic and social links",
      initials: "CY",
      portrait: "/materials/profile/portrait.jpg",
      portraitAlt: "Portrait of Yuyan Chen",
      badge: "Master's Student / PhD Applicant",
      name: "Yuyan Chen",
      title: "Master's Student in Landscape Architecture, HUST",
      focus: "Landscape Architecture / Urban Planning / GIS / Urban Green Space / Environmental Exposure",
      location: "Wuhan, China / Open to global PhD opportunities",
      email: "yuyanchen@hust.edu.cn",
      phone: "1530-715-2883",
      cvUrl: "/cv.pdf",
      cvLabel: "Download CV",
      contactLabel: "Contact",
      links: [
        { label: "GitHub", href: "https://github.com/", icon: "github" },
        { label: "Google Scholar", href: googleScholarUrl, icon: "scholar" },
        { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
      ],
    },
    homeHero: {
      kicker: "Academic Portfolio",
      heading: "Urban green space and environmental health research for PhD applications",
      body:
        "I am a master's student in Landscape Architecture at Huazhong University of Science and Technology. My research connects urban green space, built environment, air pollution, heat risk, GIS, remote sensing, street-view data, and interpretable spatial machine learning.",
      primaryCta: "View research experience",
      secondaryCta: "Read full profile",
    },
    sections: {
      about: "Self Introduction",
      research: "Research Interests",
      education: "Education",
      projects: "Research Experience / Papers",
      academic: "Academic Experience",
      funds: "Fund Participation",
      awards: "Awards & Scholarships",
      activities: "Competitions, Conferences & Certificates",
      works: "Other Works",
      news: "News",
      contact: "Contact",
    },
    about: {
      short: [
        "I am Yuyan Chen, 23, from Wuhan, Hubei. I received my undergraduate training in Landscape Architecture at Beijing Forestry University and am now a master's student in Landscape Architecture at Huazhong University of Science and Technology, supervised by Prof. Fei Dai.",
        "My undergraduate GPA is 90.37/100, ranked 5/122; my current graduate ranking is 3/18. I scored 577 in CET-6 and 607 in CET-4, with strong oral English performance.",
      ],
      long: [
        "My training spans landscape architecture, planning research, GIS, remote sensing, street-view image analysis, interpretable machine learning, and academic writing. My current work focuses on urban green space, air pollution mitigation, carbon-pollution synergy, heat risk, and walkable accessibility.",
        "For my PhD, I hope to continue data-driven landscape and urban environmental research, especially the nonlinear relationships between green-space morphology, built environment, environmental exposure, and planning implementation.",
        "This website organizes my profile, research pipeline, figures, and application materials. Research items are matched by the filename suffix numbers in the materials folder; the same suffix indicates the same paper or conference submission.",
      ],
    },
    researchInterests: [
      {
        title: "Urban Form & Low-Carbon Communities",
        description: "Using multi-source urban big data to study coupled relationships among urban form, housing vacancy, land-use efficiency, and carbon emissions.",
      },
      {
        title: "LLMs & Human-Scale Urban Perception",
        description: "Studying applications of large language models, street-view perception, and public environmental perception data in urban environmental evaluation.",
      },
      {
        title: "Urban Climate Risk & Policy-Oriented Planning",
        description: "Studying urban health risks under overlapping extreme heat, air pollution, and social vulnerability, and building decision-support methods for climate adaptation and urban renewal.",
      },
    ],
    education: [
      {
        title: "Huazhong University of Science and Technology",
        subtitle: "Master's Student in Landscape Architecture, recommended admission\nSupervised by Prof. Fei Dai",
        time: "2024 - 2027 expected",
        details: ["Graduate GPA: 3.75/4.00; rank: 3/18", "Research on urban green space, environmental exposure, GIS, and spatial machine learning"],
      },
      {
        title: "Beijing Forestry University",
        subtitle: "Bachelor's degree in Landscape Architecture",
        time: "2020 - 2024",
        details: ["GPA: 90.37/100; rank: 5/122, top 4%", "CET-6: 577; CET-4: 607"],
      },
    ],
    projects: [
      {
        title: "Unravelling the Differentiated Effects of the Block Built Environment on PM2.5 Concentrations: A New Research Framework based on the Perspective of Source–Flow–Sink",
        meta: "Paper 01 / Sustainable Cities and Society / under review",
        type: "First Author",
        description:
          "A Source-Flow-Sink framework for Wuhan blocks, integrating XGBoost downscaling, SOM clustering, GWRF-SHAP, ALE, pSEM, and Bayesian networks to explain coupled built-environment mechanisms of PM2.5 risk.",
        tags: ["PM2.5", "Source-Flow-Sink", "GWRF-SHAP", "Wuhan"],
        image: { src: researchImages.lczpmThumb, alt: "LCZPM01 research figure" },
        links: [{ label: "Figure", href: researchImages.lczpm }],
      },
      {
        title: "A Pedestrian-Perspective 2D–3D-Visible Framework for Assessing Block-Scale Associations Between Green-Space Configuration and PM2.5",
        meta: "Paper 02 / Environmental Impact Assessment Review / with editor",
        type: "Second Author",
        description:
          "A comparable 2D-3D green-space configuration framework for Wuhan blocks, evaluating contributions, spatial heterogeneity, and nonlinear responses of horizontal and street-view-visible greenery to PM2.5.",
        tags: ["Street View", "Visible Green Space", "PM2.5", "2D-3D Framework"],
        image: { src: researchImages.gvipmThumb, alt: "GVIPM02 research figure" },
        links: [{ label: "Figure", href: researchImages.gvipm }],
      },
      {
        title: "From Green Space to Park-Based Cooxling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit",
        meta: "Paper 03 / Sustainable Cities and Society, accepted",
        type: "Online Research Assistant",
        description:
          "A Detroit case study combining park cooling intensity, pedestrian accessibility, and socio-spatial vulnerability to identify walkable cooling deserts and localized cooling oases.",
        tags: ["Urban Heat", "Park Cooling", "Walkability", "Detroit"],
        image: { src: researchImages.coolingThumb, alt: "Cooling03 research figure" },
        links: [
          { label: "Article homepage", href: "https://www.sciencedirect.com/science/article/pii/S2210670726004865" },
          { label: "Figure", href: researchImages.cooling },
        ],
      },
      {
        title: "城市绿色空间多维属性对“降碳减污”效益的协同与权衡关系——以武汉市主城区街区单元为例",
        meta: "Paper 04 / Journal manuscript",
        type: "Second Author",
        description:
          "Using 251 regulatory planning units in Wuhan, this study applies GWRF and SHAP to reveal nonlinear green-space effects on carbon and pollution benefits, then proposes differentiated greening pathways.",
        tags: ["Carbon Mitigation", "Pollution Reduction", "Trade-off", "Regulatory Planning"],
        image: { src: researchImages.jwjtThumb, alt: "JWJT04 research figure" },
        links: [{ label: "Figure", href: researchImages.jwjt }],
      },
      {
        title: "基于滞尘模型的绿色空间格局对PM2.5影响研究",
        meta: "Paper 05 / Annual National Planning Conference Poster",
        type: "First Author",
        description:
          "A Beijing study using monitoring data and a dust retention model to compare linear regression, geographically weighted regression, and random forest models for MSPA-based green-space effects on PM2.5 retention.",
        tags: ["Dust Retention", "MSPA", "Beijing", "Conference Poster"],
        image: { src: researchImages.zhichenThumb, alt: "Zhichen05 conference poster preview" },
        links: [{ label: "Poster PDF", href: researchImages.zhichen }],
      },
      {
        title: "基于空间计量的文化遗产廊道构建研究——以大理市为例",
        meta: "Paper 06 / Chinese Landscape Architecture Annual Conference",
        type: "First Author",
        description:
          "A Dali case study of 102 protected cultural heritage sites, using GIS spatial analysis, fuzzy comprehensive evaluation, and minimum cumulative resistance modeling to construct cultural heritage corridors.",
        tags: ["Cultural Heritage", "Corridor", "FCE", "MCR", "Dali"],
        image: { src: researchImages.daliThumb, alt: "Dali06 research figure" },
        links: [{ label: "Figure", href: researchImages.dali }],
      },
    ],
    academicExperience: [],
    funds: [
      {
        title: "National Natural Science Foundation of China key project proposal",
        meta: "Feb 2026 - Mar 2026",
        type: "Proposal Participation",
        description: "Participated in the proposal for Collaborative Urban-Rural Ecological Space Planning Theory and Methods for Carbon Reduction, Pollution Reduction, Greening, and Growth. Responsible for research content, sub-project framework diagrams, research methods, and proposed technical plans.",
        tags: ["NSFC", "Key Project", "Ecological Space", "Research Plan"],
      },
      {
        title: "National Social Science Fund major project bid",
        meta: "Jul 2025",
        type: "Bid Participation",
        description: "Participated in the bid for Risk Monitoring and Prevention for Green Transformation Based on Multi-source Spatiotemporal Heterogeneous Big Data. Responsible for sub-project three on carbon-pollution risk identification and dynamic monitoring.",
        tags: ["NSSFC", "Major Project", "Green Transformation", "Risk Monitoring"],
      },
      {
        title: "Open Cooperation Fund application, State Key Laboratory of Mountain River Protection and Governance",
        meta: "Nov 2025 - Dec 2025",
        type: "Application Participation",
        description: "Participated in the Sichuan University open fund application on spatiotemporal mechanisms and influencing factors of ecological product value in the lower Jinsha River. Responsible for the research foundation, related outputs, and applicant CV materials.",
        tags: ["Open Fund", "Jinsha River", "Ecological Product Value", "Application Materials"],
      },
    ],
    awards: [
      {
        title: "Graduate honors",
        meta: "2023 - 2025",
        type: "Honors",
        description: "2024-2025: HUST Science and Technology Innovation Scholarship; HUST second-class master's academic scholarship.\n2023-2024: HUST first-class master's academic scholarship.",
        tags: ["Innovation Scholarship", "First-class Scholarship", "Second-class Scholarship", "HUST"],
      },
      {
        title: "Undergraduate honors",
        meta: "2020 - 2024",
        type: "Honors",
        description: "2023-2024: Outstanding Graduate of Beijing Forestry University.\n2020-2023: university second-class outstanding student scholarship for three consecutive years.\n2020-2022: Merit Student for two consecutive years.\n2022-2023: Top 10 Youth League Cadre in the school.\n2020-2021: Outstanding Organization Committee Member and Outstanding Student Cadre.",
        tags: ["Outstanding Graduate", "Scholarship", "Merit Student", "Student Cadre"],
      },
      {
        title: "Competition experience",
        meta: "2022 - 2025",
        type: "Competition",
        description: "Jul 2025-Dec 2025: Second Prize in the 2025 Yuan Ye Awards International Student Competition (1/3).\nFeb 2025-Mar 2025: Silver Prize in the World Habitat Architecture and Environment Design Competition (1/5).\nFeb 2023-Jun 2023: Honor Award in the 2023 Yuan Ye Awards International Student Competition (1/1).\nMay 2022-Jun 2022: Honor Award in the 2022 Yuan Ye Awards International Student Competition (4/5).",
        tags: ["Yuan Ye Awards", "Second Prize", "Silver Prize", "Honor Award"],
      },
    ],
    activities: [
      {
        title: "Child-Friendly Campus Landscape Design Workshop",
        meta: "Oct 19-23, 2024 / Huazhong University of Science and Technology × University of Sheffield",
        type: "International Workshop",
        description: "Participated in the Child-Friendly Campus Landscape Design Workshop jointly organized by Huazhong University of Science and Technology and the University of Sheffield, engaging in cross-cultural collaborative learning on child-friendly campus landscape design and receiving the Outstanding Camper certificate.",
        tags: ["Child-Friendly Campus", "University of Sheffield", "International Workshop", "Outstanding Camper"],
        gallery: conferenceImages.workshop2024.map((src, index) => ({
          src,
          alt: `Child-Friendly Campus Landscape Design Workshop photo ${index + 1}`,
        })),
      },
      {
        title: "16th Vision And Learning SEminar (VALSE 2026)",
        meta: "May 8-10, 2026 / Wuhan International Conference Center",
        type: "Academic Conference",
        description: "Attended the 16th Vision And Learning SEminar (VALSE 2026; Chinese name: 第十六届视觉与学习青年学者研讨会) to follow frontier methods in vision and learning, with attention to their connections with urban perception, street-view image analysis, and environmental modeling.",
        tags: ["Vision And Learning SEminar", "VALSE", "May 8-10, 2026", "Wuhan International Conference Center"],
        image: { src: conferenceImages.valse2026, alt: "VALSE 2026 material at Wuhan International Conference Center" },
        links: [{ label: "Material", href: conferenceImages.valse2026 }],
      },
      {
        title: "Annual National Planning Conference 2025",
        meta: "Aug 30-Sep 1, 2025 / Shenyang New World EXPO, Shenyang",
        type: "Academic Conference",
        description: "Attended the 2025 Annual National Planning Conference to engage with urban renewal, green-space performance, and planning governance topics, strengthening the planning translation of environmental-health research.",
        tags: ["2025 Annual National Planning Conference", "Aug 30-Sep 1, 2025", "Shenyang New World EXPO"],
        image: { src: conferenceImages.planning2025, alt: "2025 Annual National Planning Conference material at Shenyang New World EXPO" },
        links: [{ label: "Material", href: conferenceImages.planning2025 }],
      },
      {
        title: "15th Annual Conference of Chinese Society of Landscape Architecture",
        meta: "Nov 17-20, 2025 / Kunming Yun'an Huidu Hotel, Kunming",
        type: "Academic Conference",
        description: "Attended the 2025 15th Annual Conference of Chinese Society of Landscape Architecture, following research progress in ecological restoration, green infrastructure, urban environmental performance, and heritage conservation.",
        tags: ["Chinese Society of Landscape Architecture", "Nov 17-20, 2025", "Kunming Yun'an Huidu Hotel"],
        image: { src: conferenceImages.landscape2025, alt: "2025 15th Annual Conference of Chinese Society of Landscape Architecture material at Kunming Yun'an Huidu Hotel" },
        links: [{ label: "Material", href: conferenceImages.landscape2025 }],
      },
      {
        title: "14th Annual Meeting of Chinese Society of Landscape Architecture",
        meta: "Nov 8-11, 2024 / Guangming Culture and Art Center, Guangming District, Shenzhen",
        type: "Academic Conference",
        description: "Attended the 2024 14th Annual Meeting of Chinese Society of Landscape Architecture to learn emerging topics in landscape planning and design, urban ecology, and public-space research, supporting later conference submissions and manuscript development.",
        tags: ["Chinese Society of Landscape Architecture", "Nov 8-11, 2024", "Shenzhen Guangming Culture and Art Center"],
        image: { src: conferenceImages.landscape2024, alt: "2024 14th Annual Meeting of Chinese Society of Landscape Architecture material at Shenzhen Guangming Culture and Art Center" },
        links: [{ label: "Material", href: conferenceImages.landscape2024 }],
      },
    ],
    works: [
      {
        title: "Lungs of the City: Optimizing Designing Streetscapes for Runner Health",
        meta: "ASLA 2026 Professional Category",
        type: "Competition Boards",
        description: "A streetscape design project for runner health, combining methodological analysis, empirical evidence, and design strategy boards.",
        tags: ["ASLA 2026", "Streetscape", "Runner Health"],
        gallery: workImages.asla2026.map((src, index) => ({
          src,
          alt: `ASLA 2026 professional category board ${index + 1}`,
        })),
      },
      {
        title: "Greenery and Wind: Landscape Strategies for Air Pollution Mitigation Along the NYC Marathon Route",
        meta: "IFLA 2026 Student Category",
        type: "Competition Boards",
        description: "A landscape strategy proposal for the NYC Marathon route, integrating vegetation density, ventilation spaces, and flexible green-space systems for air-pollution mitigation.",
        tags: ["IFLA 2026", "Air Pollution", "NYC Marathon"],
        gallery: workImages.ifla2026.map((src, index) => ({
          src,
          alt: `IFLA 2026 student category board ${index + 1}`,
        })),
      },
      {
        title: "More Running More Greening",
        meta: "ASLA 2025 Student Category",
        type: "Competition Boards",
        description: "A design exploration connecting urban running routes and green-space systems to support health-oriented public spaces.",
        tags: ["ASLA 2025", "Urban Running", "Green Space"],
        gallery: workImages.asla2025.map((src, index) => ({
          src,
          alt: `ASLA 2025 student category board ${index + 1}`,
        })),
      },
    ],
    news: [
      { date: "Jun 2026", text: "The paper From Green Space to Park-Based Cooxling Potential: Performance-Weighted Walkable Access to Urban Park Cooling in Detroit, with me as second author and online Research Assistant, was accepted by Sustainable Cities and Society." },
      { date: "Nov 2025", text: "Presented the first-author paper Construction of Cultural Heritage Corridors Based on Spatial Econometrics: A Case Study of Dali at the Chinese Landscape Architecture Annual Conference." },
      { date: "Aug 2025", text: "Presented the first-author poster Effects of Green Space Pattern on PM2.5 Based on a Dust Retention Model at the Annual National Planning Conference." },
    ],
    contact: {
      body:
        "If you are interested in my research direction, manuscripts, or PhD application materials, please feel free to contact me by email. I can share my CV, research plan, paper drafts, figures, or portfolio materials.",
      emailLabel: "Email me",
    },
    aboutPage: {
      kicker: "Detailed Profile",
      heading: "Background, research motivation, and application material structure",
      lead: "This page expands my education, research foundation, methodological skills, and possible PhD research directions.",
      motivationTitle: "Research Motivation",
      motivation: [
        "Urban green space is not only a design object; it is closely related to pollution exposure, heat risk, carbon benefits, and everyday accessibility. I hope to understand these relationships with fine-grained spatial data and interpretable models.",
        "Beyond single-index evaluation, I am interested in the coupled mechanisms among multidimensional built environments, green-space patterns, and socio-spatial vulnerability, and in translating model findings into planning evidence.",
      ],
      futureTitle: "Future Research Plan",
      future: [
        "During my PhD, I hope to continue research on urban green-space performance, environmental health, street-view perception, spatial machine learning, and planning governance.",
        "The website can later include paper PDFs, posters, portfolio downloads, award certificates, and detailed project pages.",
      ],
      skillsTitle: "Skills",
    },
    skills: [
      { title: "Spatial Analysis", description: "Skilled in ArcGIS/QGIS, ENVI, InVEST, Fragstats, Guidos, and GeoDa." },
      { title: "Algorithmic Modeling", description: "Basic proficiency in Python, MATLAB, SPSS, machine learning algorithms, MGWR, and CiteSpace; experienced with AI programming tools such as Cursor and Codex." },
      { title: "Academic Writing & Typesetting", description: "Able to write high-quality Chinese and English academic papers and use LaTeX for papers, CVs, and application materials." },
      { title: "Research Competence", description: "Able to independently build research frameworks and process multi-source big data." },
    ],
  },
};
