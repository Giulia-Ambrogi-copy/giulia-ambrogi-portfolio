/* ==========================================================================
   STATE
   ========================================================================== */
let currentLang = "it";
let currentFilter = "all";

/* ==========================================================================
   LANGUAGE SWITCH
   ========================================================================== */
function applyTranslations(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = I18N[lang] && I18N[lang][key];
    if (value !== undefined){
      el.innerHTML = value;
    }
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
}

function setLanguage(lang){
  currentLang = lang;
  applyTranslations(lang);
  renderWork();
  renderBlogGrid();

  // if an article is currently open, re-render it in the new language
  const articleView = document.getElementById("articleView");
  if (!articleView.classList.contains("is-hidden")){
    const slug = articleView.dataset.currentSlug;
    const post = POSTS.find(p => p.slug === slug);
    if (post) renderArticle(post);
  }
}

function initLanguageSwitch(){
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

/* ==========================================================================
   PORTFOLIO / WORK GRID
   ========================================================================== */
function renderWork(){
  const grid = document.getElementById("workGrid");
  grid.innerHTML = "";

  const items = currentFilter === "all"
    ? WORKS
    : WORKS.filter(w => w.category === currentFilter);

  const filterLabels = {
    spot: I18N[currentLang]["filters.spot"],
    doc: I18N[currentLang]["filters.doc"],
    short: I18N[currentLang]["filters.short"],
    feature: I18N[currentLang]["filters.feature"],
    marketing: I18N[currentLang]["filters.marketing"]
  };

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "work-card";
    card.innerHTML = `
      <span class="work-tag">${stripTags(filterLabels[item.category])}</span>
      <h3>${currentLang === "it" ? item.title_it : item.title_en}</h3>
      <p class="work-brand">${item.brand}</p>
      <p class="work-desc">${currentLang === "it" ? item.desc_it : item.desc_en}</p>
    `;
    grid.appendChild(card);
  });
}

function stripTags(str){
  return (str || "").replace(/&amp;/g, "&");
}

function initFilters(){
  const filters = document.getElementById("filters");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    filters.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("is-active", b === btn));
    renderWork();
  });
}

/* ==========================================================================
   BLOG
   ========================================================================== */
function renderBlogGrid(){
  const grid = document.getElementById("blogGrid");
  grid.innerHTML = "";

  POSTS.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card";
    card.innerHTML = `
      <div class="post-meta">
        <span class="post-tag">${post.lang}</span>
      </div>
      <h3>${currentLang === "it" ? post.title_it : post.title_en}</h3>
      <p class="post-excerpt">${currentLang === "it" ? post.excerpt_it : post.excerpt_en}</p>
      <button class="post-read" data-slug="${post.slug}">${I18N[currentLang]["blog.read_more"]}</button>
    `;
    grid.appendChild(card);
  });
}

function renderArticle(post){
  const view = document.getElementById("articleView");
  view.dataset.currentSlug = post.slug;
  document.getElementById("articleMeta").textContent = post.lang;
  document.getElementById("articleTitle").textContent =
    currentLang === "it" ? post.title_it : post.title_en;
  document.getElementById("articleBody").innerHTML =
    currentLang === "it" ? post.body_it : post.body_en;
}

function openArticle(slug){
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return;
  renderArticle(post);
  document.getElementById("blogList").classList.add("is-hidden");
  document.getElementById("articleView").classList.remove("is-hidden");
  document.getElementById("blog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeArticle(){
  document.getElementById("articleView").classList.add("is-hidden");
  document.getElementById("blogList").classList.remove("is-hidden");
}

function initBlog(){
  document.getElementById("blogGrid").addEventListener("click", (e) => {
    const btn = e.target.closest(".post-read");
    if (!btn) return;
    openArticle(btn.dataset.slug);
  });

  document.getElementById("articleBack").addEventListener("click", closeArticle);
}

/* ==========================================================================
   FOOTER TICKER (infinite scroll)
   ========================================================================== */
const BRANDS = [
  "Xiaomi Global", "National Geographic", "OVS", "Fox Group", "BMW",
  "Crime+Investigation", "Sky", "History Channel", "Briciola.tv",
  "RoadShine Production", "Monkey Business Production", "InTreProduction", "The Box Film"
];

function initTicker(){
  const track = document.getElementById("tickerTrack");
  // duplicate the list once so the CSS animation (translateX -50%) loops seamlessly
  const sequence = [...BRANDS, ...BRANDS];
  track.innerHTML = sequence.map(name => `<span class="ticker-item">${name}</span>`).join("");
}

/* ==========================================================================
   MOBILE NAV
   ========================================================================== */
function initMobileNav(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   CONTACT FORM (static demo)
   ========================================================================== */
function initContactForm(){
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.classList.remove("is-hidden");
    form.reset();
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  initLanguageSwitch();
  initFilters();
  initBlog();
  initMobileNav();
  initContactForm();
  initTicker();

  applyTranslations(currentLang);
  renderWork();
  renderBlogGrid();
});
