const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

if (savedTheme) {
  setTheme(savedTheme);
} else if (prefersDark) {
  setTheme("dark");
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

const projects = [
  {
    title: "Orbit Beats",
    desc: "A 4K rhythm game, introducing arcade-level fun in the comforts of your own home.",
    img: "images/Orbit Beats Icon.jpg",
    tags: ["C#", "Unity", "Github"],
    link: "orbitbeats.html"
  },
  {
    title: "Outlast the Storm",
    desc: "An adventure game, a world where monsters roam the world once ruled by humans.",
    img: "images/Outlast the Storm (1).jpg",
    tags: ["C#", "Unity", "Github"],
    link: "outlastthestorm.html"
  }
];

const grid = document.getElementById("projectsGrid");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project";

  card.innerHTML = `
    <img src="${project.img}" alt="${project.title}">
    <div class="project-content">
      <div>
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-tags">
          ${project.tags.map(t => `<span>${t}</span>`).join("")}
        </div>
      </div>
      <a href="${project.link}" class="btn" target="_blank">Details</a>
    </div>
  `;

  grid.appendChild(card);
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});