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
      bg: "#0f1419",
      surface: "#1a2129",
      "surface-elevated": "#222b35",
      primary: "#4da3ff",
      secondary: "#2dd4bf",
      "accent-warm": "#d4a373",
      success: "#4ade80",
      warning: "#f59e0b",
      danger: "#ef4444",
      text: "#e6edf3",
      "text-muted": "#9aa6b2",
      border: "rgba(148, 163, 184, 0.18)",
      "input-bg": "rgba(12, 18, 24, 0.82)",
      "focus-ring": "rgba(77, 163, 255, 0.42)",
      "shadow-sm": "0 10px 18px rgba(6, 9, 13, 0.22)",
      "shadow-md": "0 18px 28px rgba(6, 9, 13, 0.28)",
      "shadow-lg": "0 28px 44px rgba(6, 9, 13, 0.34)",
      "radius-sm": "8px",
      "radius-md": "12px",
      "radius-lg": "16px",
      "radius-xl": "20px",
      "font-body": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-heading": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-mono": '"IBM Plex Mono", "JetBrains Mono", monospace',
      "page-gradient":
        "radial-gradient(circle at top left, rgba(77, 163, 255, 0.12), transparent 30%), radial-gradient(circle at 84% 8%, rgba(212, 163, 115, 0.08), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.01), transparent 22%)",
      "hero-glow":
        "linear-gradient(135deg, rgba(77, 163, 255, 0.09), rgba(212, 163, 115, 0.05))",
      "button-primary-text": "#f4f8fb",
      "button-secondary-text": "#e6edf3",
      "button-ghost-text": "#e6edf3",
      "button-danger-text": "#fff5f5",
      "link-color": "#77b7ff",
      "service-stripe-opacity": "0.98",
      "scanline-opacity": "0.022"
    }
  },
  "retro-terminal": {
    label: "Retro Terminal",
    description:
      "A readable terminal-inspired system with phosphor green, sharper panels, and restrained CRT texture for real hacker-lab personality.",
    recommendation: "Best for personality and hacker vibes when you want strong identity.",
    tokens: {
      bg: "#07110b",
      surface: "#0d1811",
      "surface-elevated": "#122118",
      primary: "#33ff99",
      secondary: "#ffd166",
      success: "#75ff7a",
      warning: "#ffbf69",
      danger: "#ff6b6b",
      text: "#d9ffe8",
      "text-muted": "#8dc9a6",
      border: "rgba(70, 140, 97, 0.45)",
      "input-bg": "rgba(7, 17, 11, 0.88)",
      "focus-ring": "rgba(51, 255, 153, 0.38)",
      "shadow-sm": "0 0 0 rgba(0, 0, 0, 0)",
      "shadow-md": "0 0 0 rgba(0, 0, 0, 0)",
      "shadow-lg": "0 0 0 rgba(0, 0, 0, 0)",
      "radius-sm": "4px",
      "radius-md": "6px",
      "radius-lg": "10px",
      "radius-xl": "12px",
      "font-body": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-heading": '"IBM Plex Mono", "Consolas", monospace',
      "font-mono": '"IBM Plex Mono", "Consolas", monospace',
      "page-gradient":
        "radial-gradient(circle at top left, rgba(51, 255, 153, 0.08), transparent 25%), radial-gradient(circle at 80% 10%, rgba(255, 209, 102, 0.08), transparent 18%)",
      "hero-glow":
        "linear-gradient(135deg, rgba(51, 255, 153, 0.08), rgba(255, 209, 102, 0.03))",
      "button-primary-text": "#021008",
      "button-secondary-text": "#d9ffe8",
      "button-ghost-text": "#d9ffe8",
      "button-danger-text": "#fff1f1",
      "link-color": "#7bffbc",
      "service-stripe-opacity": "1",
      "scanline-opacity": "0.045"
    }
  },
  "light-modern-ops": {
    label: "Light Modern Ops",
    description:
      "A bright companion to Frontier Ops Console with the same measured structure, system framing, and cleaner daytime readability.",
    recommendation: "Best light-mode starting point when you want the same system in a brighter workspace.",
    tokens: {
      bg: "#edf3fb",
      surface: "#f7fbff",
      "surface-elevated": "#ffffff",
      primary: "#2563eb",
      secondary: "#0f9d8a",
      success: "#1f9d57",
      warning: "#c78312",
      danger: "#d24d57",
      text: "#162235",
      "text-muted": "#5d7188",
      border: "rgba(104, 132, 166, 0.18)",
      "input-bg": "rgba(255, 255, 255, 0.9)",
      "focus-ring": "rgba(37, 99, 235, 0.24)",
      "shadow-sm": "0 10px 26px rgba(89, 120, 155, 0.12)",
      "shadow-md": "0 18px 40px rgba(89, 120, 155, 0.14)",
      "shadow-lg": "0 28px 58px rgba(89, 120, 155, 0.18)",
      "radius-sm": "8px",
      "radius-md": "12px",
      "radius-lg": "18px",
      "radius-xl": "26px",
      "font-body": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-heading": '"Space Grotesk", "Segoe UI", sans-serif',
      "font-mono": '"IBM Plex Mono", "SFMono-Regular", monospace',
      "page-gradient":
        "radial-gradient(circle at top left, rgba(37, 99, 235, 0.12), transparent 28%), radial-gradient(circle at 82% 12%, rgba(15, 157, 138, 0.08), transparent 22%)",
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
  favorite: "homelab-showroom-favorite-theme"
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

  applyDensity(savedDensity || "comfortable");
  applyTheme(THEME_DEFINITIONS[savedTheme] ? savedTheme : "frontier-ops-console");
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
