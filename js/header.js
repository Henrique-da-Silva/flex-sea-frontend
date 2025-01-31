// Controle do menu responsivo
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

document.querySelectorAll(".menu-item").forEach((item) => {
  const arrow = item.querySelector(".arrow"); // Seleciona o span que contém a imagem SVG
  let timeoutId; // Variável para armazenar o ID do timeout

  // Evento de clique para abrir/fechar o submenu
  arrow.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    e.stopPropagation(); // Impede a propagação do evento para o link pai

    // Fecha outros submenus abertos
    document.querySelectorAll(".menu-item").forEach((menuItem) => {
      if (menuItem !== item) {
        menuItem.classList.remove("active");
      }
    });

    // Alterna a classe 'active' no item clicado
    item.classList.toggle("active");

    // Adiciona ou remove a classe 'submenu-open' no header
    const header = document.querySelector("header");
    if (item.classList.contains("active")) {
      header.classList.add("submenu-open");
    } else {
      header.classList.remove("submenu-open");
    }
  });

  // Evento de mouseenter para cancelar o timeout se o mouse voltar
  item.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId); // Cancela o timeout se o mouse voltar ao item
  });

  // Evento de mouseleave para fechar o submenu ao mover o mouse para fora
  item.addEventListener("mouseleave", function () {
    // Adiciona um pequeno atraso antes de fechar o submenu
    timeoutId = setTimeout(() => {
      item.classList.remove("active");
      const header = document.querySelector("header");
      header.classList.remove("submenu-open");
    }, 300); // Ajuste o tempo de atraso conforme necessário (300ms = 0.3s)
  });

  // Permite navegação padrão se o link principal for clicado
  item.querySelector("a").addEventListener("click", function (e) {
    if (item.classList.contains("active")) {
      e.preventDefault(); // Impede a navegação se o submenu estiver aberto
    }
  });
});

// Js para definir qual página tem Nav transparent ou Branco
const currentPage = window.location.pathname;
const transparentPages = ["/index.html"]; // Adicione as URLs das páginas aqui
const nav = document.getElementById("main-nav");

if (transparentPages.includes(currentPage)) {
  nav.classList.add("nav-transparent");
} else {
  nav.classList.add("nav-white");
}
