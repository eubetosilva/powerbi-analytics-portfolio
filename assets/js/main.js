// Lista de projetos exibidos na seção "Projetos".
// Para adicionar um novo projeto: coloque a captura de tela em dashboards/
// e o(s) dataset(s) em datasets/, depois inclua um item aqui.
const PROJECTS = [
  {
    title: "Dashboard de Vendas",
    description: "Análise de desempenho de vendas por região, período e categoria de produto.",
    tags: ["Power BI", "DAX", "Vendas"],
    image: null,
    link: "dashboards/",
  },
  {
    title: "Painel Financeiro",
    description: "Acompanhamento de receitas, despesas e indicadores financeiros.",
    tags: ["Power BI", "Power Query", "Financeiro"],
    image: null,
    link: "dashboards/",
  },
  {
    title: "Análise de RH",
    description: "Indicadores de headcount, turnover e distribuição de colaboradores.",
    tags: ["Power BI", "Excel", "RH"],
    image: null,
    link: "dashboards/",
  },
];

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project) => {
    const thumb = project.image
      ? `<img src="${project.image}" alt="${project.title}" />`
      : `<div class="thumb">Captura de tela em breve</div>`;

    const tags = project.tags
      .map((tag) => `<span>${tag}</span>`)
      .join("");

    return `
      <article class="project-card">
        ${thumb}
        <div class="body">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">${tags}</div>
          <a class="link" href="${project.link}">Ver detalhes →</a>
        </div>
      </article>
    `;
  }).join("");
}

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNavToggle();
  setFooterYear();
});
