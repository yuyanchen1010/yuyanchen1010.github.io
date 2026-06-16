import { StrictMode, useEffect, useMemo, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Download,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Newspaper,
  Palette,
  ScrollText,
  Sparkles,
  Trophy,
} from "lucide-react";
import { content, type CardItem, type Language, type SiteContent, type TimelineItem } from "./content/siteContent";
import "./styles.css";

const getInitialLanguage = (): Language => {
  if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("zh")) {
    return "zh";
  }

  return "en";
};

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const site = content[language];
  const switchLabel = language === "zh" ? "EN" : "中文";

  const context = useMemo(() => ({ language, site }), [language, site]);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = language === "zh" ? "陈玉妍 | 学术主页与博士申请作品集" : "Yuyan Chen | Academic Portfolio";
  }, [language]);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <AmbientBlobs />
        <Header
          language={language}
          switchLabel={switchLabel}
          onLanguageChange={() => setLanguage(language === "zh" ? "en" : "zh")}
        />
        <main className="site-layout">
          <ProfileSidebar site={site} />
          <div className="content-column">
            <Routes>
              <Route path="/" element={<HomePage {...context} />} />
              <Route path="/about" element={<AboutPage {...context} />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

function Header({
  language,
  switchLabel,
  onLanguageChange,
}: {
  language: Language;
  switchLabel: string;
  onLanguageChange: () => void;
}) {
  const nav = content[language].nav;

  return (
    <header className="top-nav" aria-label={nav.aria}>
      <Link className="brand-mark" to="/" aria-label={nav.home}>
        <Sparkles size={20} aria-hidden="true" />
      </Link>
      <nav className="nav-links" aria-label={nav.aria}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          {nav.home}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          {nav.about}
        </NavLink>
      </nav>
      <button className="language-button" type="button" onClick={onLanguageChange}>
        <Languages size={18} aria-hidden="true" />
        <span>{switchLabel}</span>
      </button>
    </header>
  );
}

function ProfileSidebar({ site }: { site: SiteContent }) {
  const links = site.profile.links;

  return (
    <aside className="profile-card" aria-label={site.profile.ariaLabel}>
      <div className="avatar" aria-hidden="true">
        {site.profile.portrait ? <img src={site.profile.portrait} alt="" /> : <span>{site.profile.initials}</span>}
      </div>
      <p className="eyebrow">{site.profile.badge}</p>
      <h1>{site.profile.name}</h1>
      <p className="profile-title">{site.profile.title}</p>
      <p className="profile-focus">{site.profile.focus}</p>
      <div className="profile-meta">
        <span>
          <MapPin size={17} aria-hidden="true" />
          {site.profile.location}
        </span>
        <a href={`mailto:${site.profile.email}`}>
          <Mail size={17} aria-hidden="true" />
          {site.profile.email}
        </a>
        <span>{site.profile.phone}</span>
      </div>
      <div className="profile-actions" aria-label={site.profile.linkAria}>
        <a className="primary-action" href={site.profile.cvUrl}>
          <Download size={17} aria-hidden="true" />
          {site.profile.cvLabel}
        </a>
        <a className="secondary-action" href={`mailto:${site.profile.email}`}>
          <Mail size={17} aria-hidden="true" />
          {site.profile.contactLabel}
        </a>
      </div>
      <div className="social-links">
        {links.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.icon === "github" && <Github size={18} aria-hidden="true" />}
            {link.icon === "linkedin" && <Linkedin size={18} aria-hidden="true" />}
            {link.icon === "scholar" && <BookOpen size={18} aria-hidden="true" />}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

function HomePage({ site }: { language: Language; site: SiteContent }) {
  return (
    <>
      <section className="hero-section section-card">
        <p className="eyebrow">{site.homeHero.kicker}</p>
        <h2>{site.homeHero.heading}</h2>
        <p>{site.homeHero.body}</p>
        <div className="hero-links">
          <a className="primary-action" href="#projects">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            {site.homeHero.primaryCta}
          </a>
          <Link className="secondary-action" to="/about">
            <ScrollText size={18} aria-hidden="true" />
            {site.homeHero.secondaryCta}
          </Link>
        </div>
      </section>

      <TextSection icon={<Microscope />} title={site.sections.about} paragraphs={site.about.short} />
      <InterestSection title={site.sections.research} interests={site.researchInterests} />
      <EducationSection title={site.sections.education} education={site.education} />
      <CardSection icon={<BriefcaseBusiness />} title={site.sections.projects} items={site.projects} id="projects" />
      <CardSection icon={<BookOpen />} title={site.sections.academic} items={site.academicExperience} />
      <CardSection icon={<Microscope />} title={site.sections.funds} items={site.funds} />
      <CardSection icon={<Award />} title={site.sections.awards} items={site.awards} />
      <CardSection icon={<Trophy />} title={site.sections.activities} items={site.activities} />
      <CardSection icon={<Palette />} title={site.sections.works} items={site.works} />
      <NewsSection title={site.sections.news} news={site.news} />
      <ContactSection site={site} />
    </>
  );
}

function AboutPage({ site }: { language: Language; site: SiteContent }) {
  return (
    <>
      <section className="hero-section section-card">
        <p className="eyebrow">{site.aboutPage.kicker}</p>
        <h2>{site.aboutPage.heading}</h2>
        <p>{site.aboutPage.lead}</p>
      </section>
      <TextSection icon={<ScrollText />} title={site.sections.about} paragraphs={site.about.long} />
      <TextSection
        icon={<Microscope />}
        title={site.aboutPage.motivationTitle}
        paragraphs={site.aboutPage.motivation}
      />
      <TextSection
        icon={<Sparkles />}
        title={site.aboutPage.futureTitle}
        paragraphs={site.aboutPage.future}
      />
      <CardSection icon={<BriefcaseBusiness />} title={site.sections.projects} items={site.projects} id="projects" />
      <CardSection icon={<Award />} title={site.sections.awards} items={site.awards} />
      <CardSection icon={<Palette />} title={site.sections.works} items={site.works} />
      <section className="section-card">
        <SectionHeading icon={<GraduationCap />} title={site.aboutPage.skillsTitle} />
        <div className="skill-grid">
          {site.skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection site={site} />
    </>
  );
}

function TextSection({
  icon,
  title,
  paragraphs,
}: {
  icon: ReactNode;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section className="section-card">
      <SectionHeading icon={icon} title={title} />
      <div className="text-flow">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function InterestSection({
  title,
  interests,
}: {
  title: string;
  interests: { title: string; description: string }[];
}) {
  return (
    <section className="section-card">
      <SectionHeading icon={<Sparkles />} title={title} />
      <div className="interest-grid">
        {interests.map((interest) => (
          <article className="organic-card" key={interest.title}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection({
  title,
  education,
}: {
  title: string;
  education: TimelineItem[];
}) {
  return (
    <section className="section-card">
      <SectionHeading icon={<GraduationCap />} title={title} />
      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={`${item.title}-${item.time}`}>
            <div>
              <span className="time">{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CardSection({
  icon,
  title,
  items,
  id,
}: {
  icon: ReactNode;
  title: string;
  items: CardItem[];
  id?: string;
}) {
  return (
    <section className="section-card" id={id}>
      <SectionHeading icon={icon} title={title} />
      <div className="project-list">
        {items.map((project) => (
          <article className="project-card" key={`${project.title}-${project.meta}`}>
            {project.image && (
              <a className="project-image-link" href={project.image.src} target="_blank" rel="noreferrer">
                <img src={project.image.src} alt={project.image.alt} loading="lazy" />
              </a>
            )}
            <div className="project-topline">
              <span className="time">{project.meta}</span>
              <span className="project-type">{project.type}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.links && (
              <div className="inline-links">
                {project.links.map((link) => (
                  <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function NewsSection({
  title,
  news,
}: {
  title: string;
  news: { date: string; text: string }[];
}) {
  return (
    <section className="section-card">
      <SectionHeading icon={<Newspaper />} title={title} />
      <div className="news-list">
        {news.map((item) => (
          <article className="news-item" key={`${item.date}-${item.text}`}>
            <CalendarDays size={18} aria-hidden="true" />
            <span>{item.date}</span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ site }: { site: SiteContent }) {
  return (
    <section className="contact-section section-card">
      <SectionHeading icon={<Mail />} title={site.sections.contact} />
      <p>{site.contact.body}</p>
      <div className="hero-links">
        <a className="primary-action" href={`mailto:${site.profile.email}`}>
          <Mail size={18} aria-hidden="true" />
          {site.contact.emailLabel}
        </a>
        <a className="secondary-action" href={site.profile.cvUrl}>
          <Download size={18} aria-hidden="true" />
          {site.profile.cvLabel}
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="section-heading">
      <span aria-hidden="true">{icon}</span>
      <h2>{title}</h2>
    </div>
  );
}

function AmbientBlobs() {
  return (
    <div className="ambient" aria-hidden="true">
      <span className="blob blob-one" />
      <span className="blob blob-two" />
      <span className="blob blob-three" />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
