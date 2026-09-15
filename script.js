// ==========================================================
// Andris Tiļeckis — Portfolio
// i18n (LV/EN/RU) + dark/light theme + mobile nav
// ==========================================================

const translations = {
  lv: {
    nav_about: "Par mani",
    nav_skills: "Prasmes",
    nav_projects: "Projekti",
    nav_contact: "Kontakti",

    hero_comment: "// Sveiki! Es esmu",
    hero_role: '"Programmēšanas tehniķis"',
    hero_status: '"Mācos un veidoju"',
    hero_title: "Veidoju tīmekļa risinājumus, kas strādā —<br>ne tikai izskatās labi.",
    hero_sub: "Vidzemes tehnoloģiju un dizaina tehnikuma audzēknis programmēšanas tehniķis. Interesē backend loģika, tīmekļa lietotnes un lietas, kas patiešām funkcionē, kā arī ļoti interesē dizains.",
    hero_cta_projects: "Skatīt projektus",
    hero_cta_contact: "Sazināties",

    about_title: "Par mani",
    about_p1: 'Mani sauc Andris Tiļeckis, un es apgūstu programmēšanas tehniķa specialitāti Vidzemes dizaina un tehnoloģiju tehnikumā. Man patīk saprast, kā lietas strādā "zem pārsega" — no HTML/CSS struktūras līdz PHP un C++ loģikai, kas to visu kustina.',
    about_p2: "Šobrīd padziļinu zināšanas Laravel ietvarā un JavaScript, veidojot nelielus, bet reālus projektus — tostarp šo portfolio. Mācos, eksperimentējot un labojot kļūdas, nevis tikai lasot teoriju.",
    about_fact1_label: "Izglītība",
    about_fact1_value: "Vidzemes dizaina un tehnoloģiju tehnikums",
    about_fact2_label: "Specialitāte",
    about_fact2_value: "Programmēšanas tehniķis",
    about_fact3_label: "Fokuss",
    about_fact3_value: "Web izstrāde & backend loģika",

    skills_title: "Prasmes",
    skills_group_lang: "Valodas",
    skills_group_fw: "Ietvari & rīki",
    skills_note: "Prasmju līmeņi ir orientējoši un atspoguļo pašreizējo mācību progresu — tie pastāvīgi mainās.",

    projects_title: "Projekti",
    project_photo_badge: "Top izstrādē",
    project_photo_desc: "PHOTO projekts, veidots ar PHP. Šobrīd turpinu tā funkcionalitātes un koda uzlabošanu.",
    project_portfolio_badge: "Tiešsaistē",
    project_portfolio_desc: "Šī vietne — personīgais portfolio ar tumšo/gaišo režīmu un 3 valodām, veidots ar HTML, CSS un JavaScript.",
    projects_more_text: "Vairāk projektu un koda paraugu:",

    contact_title: "Sazināties",
    contact_intro: "Atvērts sadarbībai, praksei un ikvienam jautājumam par manis izveidoto.",
    contact_terminal_title: "terminālis",

    footer_text: "Andris Tiļeckis — veidots ar HTML, CSS & JavaScript",
  },

  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_comment: "// Hi! I'm",
    hero_role: '"Programming technician"',
    hero_status: '"Learning and building"',
    hero_title: "I build web solutions that work —<br>not just ones that look good.",
    hero_sub: "Programming technician student at Vidzeme Technical School of Design and Technology. Interested in backend logic, web apps, and things that actually function — and I'm also very into design.",
    hero_cta_projects: "View projects",
    hero_cta_contact: "Get in touch",

    about_title: "About me",
    about_p1: "My name is Andris Tiļeckis, and I'm studying to become a programming technician at Vidzeme Technical School of Design and Technology. I like understanding how things work under the hood — from HTML/CSS structure to the PHP and C++ logic that drives it.",
    about_p2: "Right now I'm deepening my knowledge of Laravel and JavaScript by building small but real projects — including this portfolio. I learn by experimenting and fixing my own mistakes, not just reading theory.",
    about_fact1_label: "Education",
    about_fact1_value: "Vidzeme Technical School of Design and Technology",
    about_fact2_label: "Specialty",
    about_fact2_value: "Programming technician",
    about_fact3_label: "Focus",
    about_fact3_value: "Web development & backend logic",

    skills_title: "Skills",
    skills_group_lang: "Languages",
    skills_group_fw: "Frameworks & tools",
    skills_note: "Skill levels are approximate and reflect current learning progress — they keep changing.",

    projects_title: "Projects",
    project_photo_badge: "In progress",
    project_photo_desc: "PHOTO project, built with PHP. I'm currently continuing to improve its functionality and code.",
    project_portfolio_badge: "Live",
    project_portfolio_desc: "This site — my personal portfolio with dark/light mode and 3 languages, built with HTML, CSS and JavaScript.",
    projects_more_text: "More projects and code samples:",

    contact_title: "Contact",
    contact_intro: "Open to collaboration, internships, and any questions about what I've built.",
    contact_terminal_title: "terminal",

    footer_text: "Andris Tiļeckis — built with HTML, CSS & JavaScript",
  },

  ru: {
    nav_about: "Обо мне",
    nav_skills: "Навыки",
    nav_projects: "Проекты",
    nav_contact: "Контакты",

    hero_comment: "// Привет! Я",
    hero_role: '"Техник-программист"',
    hero_status: '"Учусь и создаю"',
    hero_title: "Создаю веб-решения, которые работают —<br>а не просто хорошо выглядят.",
    hero_sub: "Учащийся по специальности техник-программист в Видземском техникуме дизайна и технологий. Интересуюсь backend-логикой, веб-приложениями и тем, что реально работает, а также очень интересуюсь дизайном.",
    hero_cta_projects: "Смотреть проекты",
    hero_cta_contact: "Связаться",

    about_title: "Обо мне",
    about_p1: "Меня зовут Andris Tiļeckis, я учусь по специальности техник-программист в Видземском техникуме дизайна и технологий. Мне нравится понимать, как всё устроено изнутри — от структуры HTML/CSS до логики PHP и C++, которая всё это приводит в движение.",
    about_p2: "Сейчас я углубляю знания в Laravel и JavaScript, создавая небольшие, но реальные проекты — включая это портфолио. Учусь через эксперименты и исправление собственных ошибок, а не только через теорию.",
    about_fact1_label: "Образование",
    about_fact1_value: "Видземский техникум дизайна и технологий",
    about_fact2_label: "Специальность",
    about_fact2_value: "Техник-программист",
    about_fact3_label: "Фокус",
    about_fact3_value: "Веб-разработка и backend-логика",

    skills_title: "Навыки",
    skills_group_lang: "Языки",
    skills_group_fw: "Фреймворки и инструменты",
    skills_note: "Уровни навыков приблизительны и отражают текущий прогресс обучения — они постоянно меняются.",

    projects_title: "Проекты",
    project_photo_badge: "В разработке",
    project_photo_desc: "Проект PHOTO, созданный на PHP. Сейчас продолжаю улучшать его функциональность и код.",
    project_portfolio_badge: "Онлайн",
    project_portfolio_desc: "Этот сайт — моё личное портфолио с тёмным/светлым режимом и 3 языками, создано на HTML, CSS и JavaScript.",
    projects_more_text: "Больше проектов и примеров кода:",

    contact_title: "Контакты",
    contact_intro: "Открыт для сотрудничества, стажировок и любых вопросов о моих проектах.",
    contact_terminal_title: "терминал",

    footer_text: "Andris Tiļeckis — создано с HTML, CSS & JavaScript",
  },
};

const LANG_KEY = "portfolio-lang";
const THEME_KEY = "portfolio-theme";

// Safe storage wrapper (falls back to in-memory if storage is unavailable,
// e.g. inside a sandboxed preview) so the site never throws.
const memoryStore = {};
const storage = {
  get(key) {
    try { return localStorage.getItem(key); }
    catch (e) { return memoryStore[key] ?? null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); }
    catch (e) { memoryStore[key] = value; }
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.lv;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.setAttribute("lang", lang);
  storage.set(LANG_KEY, lang);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  storage.set(THEME_KEY, theme);
}

function initLanguage() {
  const saved = storage.get(LANG_KEY);
  const browserLang = (navigator.language || "lv").slice(0, 2);
  const initial = saved || (translations[browserLang] ? browserLang : "lv");
  applyLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

function initTheme() {
  const saved = storage.get(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".main-nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initSkillBars() {
  const bars = document.querySelectorAll(".skill-fill");
  if (!("IntersectionObserver" in window)) {
    bars.forEach((bar) => bar.classList.add("filled"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("filled");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initTheme();
  initMobileNav();
  initSkillBars();
});
