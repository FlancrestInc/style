/*
  =========================
  Editable theme token area
  =========================
  Add or adjust themes here. Each token is applied directly to :root as a CSS
  custom property so component styles automatically update across the page.
*/
const THEME_DEFINITIONS = {
  "frontier-ops-console": {
    label: "Frontier Ops Console",
    description:
      "Future-retro command surfaces with warm industrial undertones, engineered housings, and subtle service-era wear.",
    recommendation: "Mainline console skin for the homelab. Distinctive, grounded, and built to stay readable under load.",
    tokens: {
      bg: "#111821",
      surface: "#24313d",
      "surface-elevated": "#314252",
      primary: "#67b7ff",
      secondary: "#5fd5e6",
      "accent-warm": "#d4a373",
      success: "#4ade80",
      warning: "#ffb027",
      danger: "#ff5a5a",
      text: "#edf5fb",
      "text-muted": "#bfd0de",
      border: "rgba(170, 193, 214, 0.28)",
      "input-bg": "rgba(18, 27, 35, 0.9)",
      "focus-ring": "rgba(103, 183, 255, 0.5)",
      "shadow-sm": "0 10px 18px rgba(5, 9, 12, 0.2)",
      "shadow-md": "0 18px 28px rgba(5, 9, 12, 0.25)",
      "shadow-lg": "0 28px 44px rgba(5, 9, 12, 0.3)",
      "radius-sm": "8px",
      "radius-md": "12px",
      "radius-lg": "16px",
      "radius-xl": "20px",
      "font-body": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-heading": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-mono": '"IBM Plex Mono", "JetBrains Mono", monospace',
      "page-gradient":
        "radial-gradient(circle at top left, rgba(103, 183, 255, 0.16), transparent 32%), radial-gradient(circle at 84% 8%, rgba(95, 213, 230, 0.1), transparent 26%), linear-gradient(180deg, rgba(255, 255, 255, 0.014), transparent 24%)",
      "hero-glow":
        "linear-gradient(135deg, rgba(103, 183, 255, 0.12), rgba(95, 213, 230, 0.06))",
      "button-primary-text": "#f4f8fb",
      "button-secondary-text": "#e6edf3",
      "button-ghost-text": "#e6edf3",
      "button-danger-text": "#fff5f5",
      "link-color": "#77b7ff",
      "service-stripe-opacity": "0.98",
      "scanline-opacity": "0.022"
    }
  },
  "light-modern-ops": {
    label: "Light Modern Ops",
    description:
      "A bright companion to Frontier Ops Console with the same measured structure, system framing, and cleaner daytime readability.",
    recommendation: "Best light-mode starting point when you want the same system in a brighter workspace.",
    tokens: {
      bg: "#e6eef7",
      surface: "#fbfdff",
      "surface-elevated": "#ffffff",
      primary: "#1f5fd6",
      secondary: "#0f8f9c",
      success: "#1d8d53",
      warning: "#b8760c",
      danger: "#c8434f",
      text: "#142033",
      "text-muted": "#4d647d",
      border: "rgba(95, 126, 161, 0.24)",
      "input-bg": "rgba(255, 255, 255, 0.96)",
      "focus-ring": "rgba(31, 95, 214, 0.28)",
      "shadow-sm": "0 10px 24px rgba(80, 108, 139, 0.12)",
      "shadow-md": "0 18px 38px rgba(80, 108, 139, 0.14)",
      "shadow-lg": "0 28px 54px rgba(80, 108, 139, 0.17)",
      "radius-sm": "8px",
      "radius-md": "12px",
      "radius-lg": "18px",
      "radius-xl": "26px",
      "font-body": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-heading": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-mono": '"IBM Plex Mono", "SFMono-Regular", monospace',
      "page-gradient":
        "radial-gradient(circle at top left, rgba(31, 95, 214, 0.11), transparent 28%), radial-gradient(circle at 82% 12%, rgba(15, 143, 156, 0.08), transparent 22%)",
      "hero-glow":
        "linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(37, 99, 235, 0.06))",
      "button-primary-text": "#ffffff",
      "button-secondary-text": "#162235",
      "button-ghost-text": "#162235",
      "button-danger-text": "#fff8f8",
      "link-color": "#2563eb",
      "service-stripe-opacity": "0.92",
      "scanline-opacity": "0"
    }
  },
};

const THEME_ORDER = Object.keys(THEME_DEFINITIONS);
const STORAGE_KEYS = {
  theme: "homelab-showroom-theme",
  density: "homelab-showroom-density",
  favorite: "homelab-showroom-favorite-theme",
  mobilePreview: "homelab-showroom-mobile-preview"
};

const MOTION_REDUCE_QUERY = window.matchMedia("(prefers-reduced-motion: reduce)");

const root = document.documentElement;
const body = document.body;
const themeSelect = document.getElementById("themeSelect");
const prevThemeBtn = document.getElementById("prevThemeBtn");
const nextThemeBtn = document.getElementById("nextThemeBtn");
const themeDescription = document.getElementById("themeDescription");
const tokenToggle = document.getElementById("tokenToggle");
const tokenPanel = document.getElementById("tokenPanel");
const tokenGrid = document.getElementById("tokenGrid");
const spacingToggle = document.getElementById("spacingToggle");
const mobilePreviewToggle = document.getElementById("mobilePreviewToggle");
const favoriteThemeBtn = document.getElementById("favoriteThemeBtn");
const recommendedThemeLabel = document.getElementById("recommendedThemeLabel");
const revealObserver = { current: null };
let themeShiftTimeout = null;
let favoritePulseTimeout = null;

function shouldReduceMotion() {
  return MOTION_REDUCE_QUERY.matches;
}

function markThemeShift() {
  if (shouldReduceMotion()) {
    return;
  }

  body.classList.remove("is-retheming");
  window.clearTimeout(themeShiftTimeout);
  void body.offsetWidth;
  body.classList.add("is-retheming");
  themeShiftTimeout = window.setTimeout(() => {
    body.classList.remove("is-retheming");
  }, 760);
}

function populateThemeSelect() {
  THEME_ORDER.forEach((themeKey) => {
    const option = document.createElement("option");
    option.value = themeKey;
    option.textContent = THEME_DEFINITIONS[themeKey].label;
    themeSelect.appendChild(option);
  });
}

function applyTheme(themeKey) {
  const theme = THEME_DEFINITIONS[themeKey] || THEME_DEFINITIONS["frontier-ops-console"];
  const previousTheme = body.dataset.theme;

  Object.entries(theme.tokens).forEach(([tokenName, tokenValue]) => {
    root.style.setProperty(`--${tokenName}`, tokenValue);
  });

  body.dataset.theme = themeKey;
  themeSelect.value = themeKey;
  themeDescription.textContent = `${theme.description} ${theme.recommendation}`;
  recommendedThemeLabel.textContent = theme.label;
  renderTokens(theme.tokens);
  syncFavoriteButton(themeKey);
  localStorage.setItem(STORAGE_KEYS.theme, themeKey);

  document.documentElement.style.colorScheme = themeKey === "light-modern-ops" ? "light" : "dark";

  if (previousTheme && previousTheme !== themeKey) {
    markThemeShift();
  }
}

function renderTokens(tokens) {
  tokenGrid.innerHTML = "";

  Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
    const tokenCard = document.createElement("article");
    tokenCard.className = "token-card";
    tokenCard.innerHTML = `<span class="technical-label">--${tokenName}</span><code>${tokenValue}</code>`;
    tokenGrid.appendChild(tokenCard);
  });
}

function cycleTheme(direction) {
  const currentIndex = THEME_ORDER.indexOf(themeSelect.value);
  const nextIndex = (currentIndex + direction + THEME_ORDER.length) % THEME_ORDER.length;
  applyTheme(THEME_ORDER[nextIndex]);
}

function applyDensity(density) {
  const isComfortable = density !== "dense";
  body.dataset.density = isComfortable ? "comfortable" : "dense";
  spacingToggle.setAttribute("aria-checked", String(isComfortable));
  spacingToggle.classList.toggle("is-on", isComfortable);
  localStorage.setItem(STORAGE_KEYS.density, body.dataset.density);
}

function applyMobilePreview(isEnabled) {
  body.dataset.preview = isEnabled ? "mobile" : "desktop";
  mobilePreviewToggle.setAttribute("aria-checked", String(isEnabled));
  mobilePreviewToggle.classList.toggle("is-on", isEnabled);
  localStorage.setItem(STORAGE_KEYS.mobilePreview, String(isEnabled));
}

function setTokenPanelVisibility(isVisible) {
  tokenToggle.setAttribute("aria-checked", String(isVisible));
  tokenToggle.classList.toggle("is-on", isVisible);
  tokenPanel.classList.toggle("hidden", !isVisible);

  if (isVisible && revealObserver.current && body.classList.contains("motion-enabled")) {
    const tokenCards = tokenGrid.querySelectorAll(".token-card");
    tokenCards.forEach((card, index) => {
      card.dataset.reveal = "";
      card.style.setProperty("--reveal-delay", `${Math.min(index * 35, 240)}ms`);
      revealObserver.current.observe(card);
    });
  }
}

function syncFavoriteButton(themeKey) {
  const favoriteTheme = localStorage.getItem(STORAGE_KEYS.favorite);
  const isFavorite = favoriteTheme === themeKey;
  favoriteThemeBtn.setAttribute("aria-pressed", String(isFavorite));
  favoriteThemeBtn.textContent = isFavorite ? "Pinned locally" : "Pin current skin";
}

function toggleFavoriteTheme() {
  const currentTheme = themeSelect.value;
  const favoriteTheme = localStorage.getItem(STORAGE_KEYS.favorite);

  if (favoriteTheme === currentTheme) {
    localStorage.removeItem(STORAGE_KEYS.favorite);
  } else {
    localStorage.setItem(STORAGE_KEYS.favorite, currentTheme);
  }

  syncFavoriteButton(currentTheme);

  if (!shouldReduceMotion()) {
    body.classList.remove("theme-favorited");
    window.clearTimeout(favoritePulseTimeout);
    void body.offsetWidth;
    body.classList.add("theme-favorited");
    favoritePulseTimeout = window.setTimeout(() => {
      body.classList.remove("theme-favorited");
    }, 560);
  }
}

function restorePreferences() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const savedDensity = localStorage.getItem(STORAGE_KEYS.density);
  const savedMobilePreview = localStorage.getItem(STORAGE_KEYS.mobilePreview) === "true";

  applyDensity(savedDensity || "comfortable");
  applyTheme(THEME_DEFINITIONS[savedTheme] ? savedTheme : "frontier-ops-console");
  applyMobilePreview(savedMobilePreview);
  setTokenPanelVisibility(false);
}

function setupMotion() {
  if (shouldReduceMotion()) {
    return;
  }

  const revealGroups = [
    [document.querySelector(".hero-copy"), 0],
    [document.querySelector(".control-panel"), 120],
    ...Array.from(document.querySelectorAll(".stats-row .stat-card")).map((node, index) => [node, 120 + index * 55]),
    ...Array.from(document.querySelectorAll(".section-card")).map((node, index) => [node, 80 + index * 70]),
    ...Array.from(document.querySelectorAll(".service-card")).map((node, index) => [node, 110 + index * 45]),
    ...Array.from(document.querySelectorAll(".showcase-block")).map((node, index) => [node, 80 + index * 40]),
    ...Array.from(document.querySelectorAll(".note-card")).map((node, index) => [node, 120 + index * 45]),
    ...Array.from(document.querySelectorAll(".why-panel, .type-meta, .modal-preview, .progress-group")).map((node, index) => [node, 100 + index * 40])
  ];

  body.classList.add("motion-enabled");

  revealObserver.current = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.current.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealGroups.forEach(([node, delay]) => {
    if (!node) {
      return;
    }

    node.dataset.reveal = "";
    node.style.setProperty("--reveal-delay", `${delay}ms`);
    revealObserver.current.observe(node);
  });
}

/*
  =========================
  Interaction wiring area
  =========================
  Keep browser-state behavior here so it is easy to extend with more controls.
*/
function bindEvents() {
  themeSelect.addEventListener("change", (event) => {
    applyTheme(event.target.value);
  });

  prevThemeBtn.addEventListener("click", () => cycleTheme(-1));
  nextThemeBtn.addEventListener("click", () => cycleTheme(1));

  tokenToggle.addEventListener("click", () => {
    const isVisible = tokenToggle.getAttribute("aria-checked") !== "true";
    setTokenPanelVisibility(isVisible);
  });

  spacingToggle.addEventListener("click", () => {
    const nextDensity = body.dataset.density === "dense" ? "comfortable" : "dense";
    applyDensity(nextDensity);
  });

  mobilePreviewToggle.addEventListener("click", () => {
    const nextPreviewState = body.dataset.preview !== "mobile";
    applyMobilePreview(nextPreviewState);
  });

  favoriteThemeBtn.addEventListener("click", toggleFavoriteTheme);

  const motionPreferenceListener = (event) => {
    if (event.matches) {
      body.classList.remove("motion-enabled", "is-retheming", "theme-favorited");
      if (revealObserver.current) {
        revealObserver.current.disconnect();
      }
      document.querySelectorAll("[data-reveal]").forEach((node) => {
        node.classList.add("is-visible");
      });
      return;
    }

    if (!body.classList.contains("motion-enabled")) {
      setupMotion();
    }
  };

  if (typeof MOTION_REDUCE_QUERY.addEventListener === "function") {
    MOTION_REDUCE_QUERY.addEventListener("change", motionPreferenceListener);
  }
}

populateThemeSelect();
restorePreferences();
setupMotion();
bindEvents();
