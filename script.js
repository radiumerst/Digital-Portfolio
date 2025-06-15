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
    title: "Lorem One",
    desc: "Lorem ipsum dolor sit amet.",
    img: "https://picsum.photos/400/300?random=11",
    tags: ["HTML", "CSS"],
    link: "#"
  },
  {
    title: "Lorem Two",
    desc: "Sed do eiusmod tempor incididunt.",
    img: "https://picsum.photos/400/300?random=12",
    tags: ["JavaScript"],
    link: "#"
  },
  {
    title: "Lorem Three",
    desc: "Ut enim ad minim veniam.",
    img: "https://picsum.photos/400/300?random=13",
    tags: ["Responsive"],
    link: "#"
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