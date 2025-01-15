            // Adicionar e remover classe 'sticky' ao fazer scroll
            window.addEventListener("scroll", function() {
              const header = document.querySelector("header");
              const menuIconSpans = document.querySelectorAll(".menu-icon span");
              const isLargeScreen = window.matchMedia("(min-width: 1060px)").matches;
      
              if (window.scrollY > 0) {
                  header.classList.add('sticky');
                  header.classList.add('scroll-adjust'); // Adicionar ajuste de posição
                  // Ajustar a altura do header somente para telas maiores
                  if (isLargeScreen) {
                      header.style.height = "276px";
                  }
                  // Mudar a cor das barras do menu-icon para preto
                  menuIconSpans.forEach(span => span.style.backgroundColor = "#000000");
              } else {
                  header.classList.remove('sticky');
                  header.classList.remove('scroll-adjust'); // Remover ajuste de posição
                  // Voltar à altura padrão
                  header.style.height = ""; // Reseta para o valor padrão do CSS
                  // Mudar a cor das barras do menu-icon para branco
                  menuIconSpans.forEach(span => span.style.backgroundColor = "#FFFFFF");
              }
          });
      
          // Controle do menu responsivo
          const menu = document.querySelector('.menu');
          const menuBtn = document.querySelector('.menu-btn');
          const closeBtn = document.querySelector('.close-btn');
      
          menuBtn.addEventListener("click", () => {
              menu.classList.add('active');
          });
      
          closeBtn.addEventListener("click", () => {
              menu.classList.remove('active');
          });
      
          document.querySelectorAll('.has-submenu').forEach(item => {
              item.addEventListener('click', function(e) {
                  e.preventDefault(); // Evita navegação padrão
                  const parent = this.parentElement;
      
                  // Fecha outros submenus abertos
                  document.querySelectorAll('.menu-item').forEach(menuItem => {
                      if (menuItem !== parent) {
                          menuItem.classList.remove('active');
                      }
                  });
      
                  // Alterna a classe 'active' no item clicado
                  parent.classList.toggle('active');
              });
          });