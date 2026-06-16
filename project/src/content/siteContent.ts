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
    items: string[];
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
  zhichenThumb: "/materials/research/zhichen05-thumb.png",
  dali: "/materials/research/dali06.png",
  daliThumb: "/materials/research/dali06-thumb.jpg",
};

const conferenceImages = {
  valse2026: "/materials/conferences/valse2026-wuhan.jpg",
  planning2025: "/materials/conferences/planning2025-shenyang.jpg",
  landscape2024: "/materials/conferences/landscape2024-shenzhen.jpg",
  landscape2025: "/materials/conferences/landscape2025-kunming.jpg",
};

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
        { label: "Google Scholar", href: "https://scholar.google.com/", icon: "scholar" },
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
      funds: "基金项目",
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
        title: "Urban Green Space & Environmental Exposure",
        description: "研究二维绿地、街景可见绿量与街区 PM2.5、碳汇、热风险之间的关系。",
      },
      {
        title: "GIS, Remote Sensing & Street View Data",
        description: "整合遥感、街景、人口普查、路网与规划单元数据，构建多尺度空间分析框架。",
      },
      {
        title: "Interpretable Spatial Machine Learning",
        description: "使用 GWRF、SHAP、PDP、ALE、pSEM 与 Bayesian networks 解释空间异质性和非线性机制。",
      },
    ],
    education: [
      {
        title: "华中科技大学",
        subtitle: "风景园林硕士研究生，保研，师从戴菲老师",
        time: "2024 - 2027 预计",
        details: ["研究生排名 3/18", "研究方向包括城市绿色空间、环境暴露、GIS 与空间机器学习"],
      },
      {
        title: "北京林业大学",
        subtitle: "风景园林本科",
        time: "本科阶段",
        details: ["绩点 90.37/100，排名 5/122，前 4%", "CET-6 577 分，CET-4 607 分"],
      },
    ],
    projects: [
      {
        title: "Unravelling the Differentiated Effects of the Block Built Environment on PM2.5 Concentrations",
        meta: "Paper 01 / Sustainable Cities and Society",
        type: "First Author",
        description:
          "以武汉街区为对象，构建 Source-Flow-Sink 框架，结合 XGBoost 降尺度、SOM 聚类、GWRF-SHAP、ALE、pSEM 与 Bayesian networks，解释建成环境对 PM2.5 风险的过程耦合机制。",
        tags: ["PM2.5", "Source-Flow-Sink", "GWRF-SHAP", "Wuhan"],
        image: { src: researchImages.lczpmThumb, alt: "LCZPM01 research figure" },
        links: [{ label: "Figure", href: researchImages.lczpm }],
      },
      {
        title: "Street-view-derived visible green-space configuration for block-scale PM2.5 analysis",
        meta: "Paper 02 / Remote Sensing of Environment",
        type: "Second Author",
        description:
          "建立可比较的 2D-3D 绿色空间格局指标框架，评估二维水平绿地与街景可见绿地配置对武汉街区 PM2.5 的贡献差异、空间异质性与非线性响应。",
        tags: ["Street View", "Visible Green Space", "PM2.5", "2D-3D Framework"],
        image: { src: researchImages.gvipmThumb, alt: "GVIPM02 research figure" },
        links: [{ label: "Figure", href: researchImages.gvipm }],
      },
      {
        title: "From Green Space to Park-Based Cooling Potential",
        meta: "Paper 03 / Sustainable Cities and Society, accepted",
        type: "Second Author",
        description:
          "以底特律为案例，将公园冷却强度、步行网络可达性和社会空间脆弱性结合，构建 Walkable Cooling Access Index，识别步行冷却沙漠与局部冷却绿洲。",
        tags: ["Urban Heat", "Park Cooling", "Walkability", "Detroit"],
        image: { src: researchImages.coolingThumb, alt: "Cooling03 research figure" },
        links: [{ label: "Figure", href: researchImages.cooling }],
      },
      {
        title: "城市绿色空间多维属性对“降碳减污”效益的协同与权衡关系",
        meta: "Paper 04 / Journal manuscript",
        type: "Second Author",
        description:
          "以武汉主城区 251 个控规单元为研究对象，使用 GWRF 与 SHAP 揭示绿色空间指标对碳汇与污染削减效益的非线性影响，并提出分区化绿色更新路径。",
        tags: ["Carbon Mitigation", "Pollution Reduction", "Trade-off", "Regulatory Planning"],
        image: { src: researchImages.jwjtThumb, alt: "JWJT04 research figure" },
        links: [{ label: "Figure", href: researchImages.jwjt }],
      },
      {
        title: "基于滞尘模型的绿色空间格局对 PM2.5 影响研究",
        meta: "Paper 05 / 中国城市规划年会 Poster",
        type: "First Author",
        description:
          "基于北京市中心城区空气质量监测点与滞尘模型，比较线性回归、地理加权回归与随机森林，从 MSPA 要素角度解释绿色空间格局对 PM2.5 滞留能力的差异化影响。",
        tags: ["Dust Retention", "MSPA", "Beijing", "Conference Poster"],
        image: { src: researchImages.zhichenThumb, alt: "Zhichen05 conference poster preview" },
        links: [{ label: "Poster PDF", href: researchImages.zhichen }],
      },
      {
        title: "A Study on the Construction of Cultural Heritage Corridors Based on Spatial Econometrics",
        meta: "Paper 06 / 中国风景园林年会",
        type: "First Author",
        description:
          "以大理市 102 处文物保护单位为研究对象，运用 GIS 空间分析、模糊综合评价和最小阻力模型，提出文化遗产廊道的分级分类评估与协同保护策略。",
        tags: ["Cultural Heritage", "Corridor", "FCE", "MCR", "Dali"],
        image: { src: researchImages.daliThumb, alt: "Dali06 research figure" },
        links: [{ label: "Figure", href: researchImages.dali }],
      },
    ],
    academicExperience: [
      {
        title: "论文写作与投稿准备",
        meta: "2025 - 2026",
        type: "Research Experience",
        description: "围绕城市绿色空间、PM2.5、热风险和文化遗产保护开展多篇论文与会议投稿，承担一作与二作研究任务。",
        tags: ["Manuscript", "Submission", "Academic Writing"],
      },
      {
        title: "空间数据处理与可视化",
        meta: "GIS / Remote Sensing / Street View",
        type: "Methods",
        description: "处理遥感、街景、路网、普查、空气质量和规划单元等多源数据，形成研究图件、指标体系和模型解释结果。",
        tags: ["GIS", "Mapping", "Visualization"],
      },
      {
        title: "跨尺度环境绩效分析",
        meta: "Block / Park / City",
        type: "Research Theme",
        description: "从街区、公园和城市尺度分析绿色空间绩效，将环境效益与步行可达性、社会脆弱性和规划治理单元联系起来。",
        tags: ["Urban Environment", "Planning Evidence"],
      },
    ],
    funds: [
      {
        title: "项目材料待补充",
        meta: "Funded Projects",
        type: "Research Funding",
        description: "可继续补充基金项目名称、项目来源、个人角色、研究内容与阶段性成果。",
        tags: ["Funding", "Research"],
      },
    ],
    awards: [
      {
        title: "成绩与语言能力",
        meta: "Academic Record",
        type: "Honors",
        description: "本科排名前 4%，研究生排名 3/18；CET-6 577 分，CET-4 607 分。",
        tags: ["GPA", "Ranking", "English"],
      },
    ],
    activities: [
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
      {
        title: "中国城市规划年会 / 中国风景园林年会",
        meta: "Conference Submissions",
        type: "Academic Activities",
        description: "以一作身份准备并投稿绿色空间 PM2.5 滞尘研究与大理文化遗产廊道研究。",
        tags: ["Conference", "Poster", "First Author"],
      },
    ],
    works: [
      {
        title: "图件、模型与作品集材料",
        meta: "Portfolio",
        type: "Creative Work",
        description: "后续可继续加入作品集图纸、水彩、模型、竞赛成果与证书材料。",
        tags: ["Portfolio", "Design", "Visualization"],
      },
    ],
    news: [
      { date: "2026.06", text: "补充 VALSE 2026、2025 中国城市规划年会与中国风景园林学会年会 2024/2025 的参会材料，并标注会议日期、城市与具体场馆。" },
      { date: "2026.06", text: "根据最新自我介绍与 research experience 材料更新个人网站。" },
      { date: "2026.06", text: "整理 6 篇论文/会议稿条目，并按文件名后缀编号匹配对应图件。" },
      { date: "2026.06", text: "补充个人照片、教育背景、排名、英语成绩与联系方式。" },
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
        "博士阶段希望继续围绕城市绿色空间绩效、环境健康、街景感知、空间机器学习和规划治理展开研究。",
        "后续网站可以继续加入论文 PDF、poster、作品集下载、获奖证书与更完整的项目详情页。",
      ],
      skillsTitle: "技能",
    },
    skills: [
      { title: "Spatial Tools", items: ["ArcGIS", "QGIS", "Remote Sensing", "Network Analysis"] },
      { title: "Programming", items: ["Python", "Machine Learning", "GWRF-SHAP", "Data Visualization"] },
      { title: "Research", items: ["Academic Writing", "Spatial Econometrics", "Street View Analysis", "Planning Evidence"] },
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
        { label: "Google Scholar", href: "https://scholar.google.com/", icon: "scholar" },
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
      funds: "Funded Projects",
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
        title: "Urban Green Space & Environmental Exposure",
        description: "2D green space, street-view-visible greenery, PM2.5, carbon mitigation, and urban heat risk.",
      },
      {
        title: "GIS, Remote Sensing & Street View Data",
        description: "Multi-source spatial data workflows across remote sensing, street images, road networks, census data, and planning units.",
      },
      {
        title: "Interpretable Spatial Machine Learning",
        description: "GWRF, SHAP, PDP, ALE, pSEM, and Bayesian networks for spatial heterogeneity and nonlinear mechanisms.",
      },
    ],
    education: [
      {
        title: "Huazhong University of Science and Technology",
        subtitle: "Master's Student in Landscape Architecture, recommended admission, supervised by Prof. Fei Dai",
        time: "2024 - 2027 expected",
        details: ["Graduate ranking: 3/18", "Research on urban green space, environmental exposure, GIS, and spatial machine learning"],
      },
      {
        title: "Beijing Forestry University",
        subtitle: "Bachelor's degree in Landscape Architecture",
        time: "Undergraduate",
        details: ["GPA: 90.37/100; rank: 5/122, top 4%", "CET-6: 577; CET-4: 607"],
      },
    ],
    projects: [
      {
        title: "Unravelling the Differentiated Effects of the Block Built Environment on PM2.5 Concentrations",
        meta: "Paper 01 / Sustainable Cities and Society",
        type: "First Author",
        description:
          "A Source-Flow-Sink framework for Wuhan blocks, integrating XGBoost downscaling, SOM clustering, GWRF-SHAP, ALE, pSEM, and Bayesian networks to explain coupled built-environment mechanisms of PM2.5 risk.",
        tags: ["PM2.5", "Source-Flow-Sink", "GWRF-SHAP", "Wuhan"],
        image: { src: researchImages.lczpmThumb, alt: "LCZPM01 research figure" },
        links: [{ label: "Figure", href: researchImages.lczpm }],
      },
      {
        title: "Street-view-derived visible green-space configuration for block-scale PM2.5 analysis",
        meta: "Paper 02 / Remote Sensing of Environment",
        type: "Second Author",
        description:
          "A comparable 2D-3D green-space configuration framework for Wuhan blocks, evaluating contributions, spatial heterogeneity, and nonlinear responses of horizontal and street-view-visible greenery to PM2.5.",
        tags: ["Street View", "Visible Green Space", "PM2.5", "2D-3D Framework"],
        image: { src: researchImages.gvipmThumb, alt: "GVIPM02 research figure" },
        links: [{ label: "Figure", href: researchImages.gvipm }],
      },
      {
        title: "From Green Space to Park-Based Cooling Potential",
        meta: "Paper 03 / Sustainable Cities and Society, accepted",
        type: "Second Author",
        description:
          "A Detroit case study combining park cooling intensity, pedestrian accessibility, and socio-spatial vulnerability to identify walkable cooling deserts and localized cooling oases.",
        tags: ["Urban Heat", "Park Cooling", "Walkability", "Detroit"],
        image: { src: researchImages.coolingThumb, alt: "Cooling03 research figure" },
        links: [{ label: "Figure", href: researchImages.cooling }],
      },
      {
        title: "Synergies and Trade-offs of Multidimensional Urban Green Space for Carbon Mitigation and Pollution Reduction",
        meta: "Paper 04 / Journal manuscript",
        type: "Second Author",
        description:
          "Using 251 regulatory planning units in Wuhan, this study applies GWRF and SHAP to reveal nonlinear green-space effects on carbon and pollution benefits, then proposes differentiated greening pathways.",
        tags: ["Carbon Mitigation", "Pollution Reduction", "Trade-off", "Regulatory Planning"],
        image: { src: researchImages.jwjtThumb, alt: "JWJT04 research figure" },
        links: [{ label: "Figure", href: researchImages.jwjt }],
      },
      {
        title: "Effects of Green Space Pattern on PM2.5 Based on a Dust Retention Model",
        meta: "Paper 05 / Annual National Planning Conference Poster",
        type: "First Author",
        description:
          "A Beijing study using monitoring data and a dust retention model to compare linear regression, geographically weighted regression, and random forest models for MSPA-based green-space effects on PM2.5 retention.",
        tags: ["Dust Retention", "MSPA", "Beijing", "Conference Poster"],
        image: { src: researchImages.zhichenThumb, alt: "Zhichen05 conference poster preview" },
        links: [{ label: "Poster PDF", href: researchImages.zhichen }],
      },
      {
        title: "A Study on the Construction of Cultural Heritage Corridors Based on Spatial Econometrics",
        meta: "Paper 06 / Chinese Landscape Architecture Annual Conference",
        type: "First Author",
        description:
          "A Dali case study of 102 protected cultural heritage sites, using GIS spatial analysis, fuzzy comprehensive evaluation, and minimum cumulative resistance modeling to construct cultural heritage corridors.",
        tags: ["Cultural Heritage", "Corridor", "FCE", "MCR", "Dali"],
        image: { src: researchImages.daliThumb, alt: "Dali06 research figure" },
        links: [{ label: "Figure", href: researchImages.dali }],
      },
    ],
    academicExperience: [
      {
        title: "Manuscript writing and submission preparation",
        meta: "2025 - 2026",
        type: "Research Experience",
        description: "Prepared journal manuscripts and conference submissions on urban green space, PM2.5, heat risk, and cultural heritage protection as first or second author.",
        tags: ["Manuscript", "Submission", "Academic Writing"],
      },
      {
        title: "Spatial data processing and visualization",
        meta: "GIS / Remote Sensing / Street View",
        type: "Methods",
        description: "Built workflows for remote sensing, street-view, road-network, census, air-quality, and planning-unit data, producing research figures and model interpretation outputs.",
        tags: ["GIS", "Mapping", "Visualization"],
      },
      {
        title: "Cross-scale environmental performance analysis",
        meta: "Block / Park / City",
        type: "Research Theme",
        description: "Studied green-space performance across block, park, and city scales, linking environmental benefits with walkability, vulnerability, and planning governance units.",
        tags: ["Urban Environment", "Planning Evidence"],
      },
    ],
    funds: [
      {
        title: "Project materials to be added",
        meta: "Funded Projects",
        type: "Research Funding",
        description: "This section can later include project names, funding sources, personal roles, research content, and outputs.",
        tags: ["Funding", "Research"],
      },
    ],
    awards: [
      {
        title: "Academic record and English proficiency",
        meta: "Academic Record",
        type: "Honors",
        description: "Undergraduate rank in the top 4%; graduate rank 3/18; CET-6 577 and CET-4 607.",
        tags: ["GPA", "Ranking", "English"],
      },
    ],
    activities: [
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
      {
        title: "Annual National Planning Conference / Chinese Landscape Architecture Annual Conference",
        meta: "Conference Submissions",
        type: "Academic Activities",
        description: "Prepared first-author conference submissions on green-space dust retention and cultural heritage corridor construction.",
        tags: ["Conference", "Poster", "First Author"],
      },
    ],
    works: [
      {
        title: "Figures, models, and portfolio materials",
        meta: "Portfolio",
        type: "Creative Work",
        description: "Portfolio boards, watercolor works, models, competition outcomes, and certificates can be added in future updates.",
        tags: ["Portfolio", "Design", "Visualization"],
      },
    ],
    news: [
      { date: "Jun 2026", text: "Added materials for VALSE 2026, the 2025 Annual National Planning Conference, and the 2024/2025 Chinese Society of Landscape Architecture annual conferences, with exact dates, cities, and venues." },
      { date: "Jun 2026", text: "Updated the website with the latest self-introduction and research experience materials." },
      { date: "Jun 2026", text: "Organized six papers or conference submissions by matching the suffix numbers in material filenames." },
      { date: "Jun 2026", text: "Added portrait, education background, rankings, English scores, and contact information." },
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
      { title: "Spatial Tools", items: ["ArcGIS", "QGIS", "Remote Sensing", "Network Analysis"] },
      { title: "Programming", items: ["Python", "Machine Learning", "GWRF-SHAP", "Data Visualization"] },
      { title: "Research", items: ["Academic Writing", "Spatial Econometrics", "Street View Analysis", "Planning Evidence"] },
    ],
  },
};
