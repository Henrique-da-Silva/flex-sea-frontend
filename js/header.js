      // Script para adicionar classes à barra de navegação ao fazer scroll
      var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) {
          nav.classList.add('bg-white', 'shadow', 'scrolled'); // Adiciona classes quando o usuário faz scroll
        } else {
          nav.classList.remove('bg-white', 'shadow', 'scrolled'); // Remove classes quando o usuário retorna ao topo
        }
      });