// Evento de scroll na janela que chama a função handleScroll
window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  // Obtém a posição de rolagem vertical da página
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;

  // Obtém os elementos do menu sticky e itens do menu
  var stickyMenu = document.getElementById('sticky-menu');
  var mobileStickyMenu = document.getElementById('mobile-sticky-menu');
  var storyItem = document.getElementById('desktop-story');
  var approachItem = document.getElementById('desktop-approach');
  var teamItem = document.getElementById('desktop-team');

  // Verifica se a largura da janela é para dispositivos móveis
  if (window.innerWidth <= 767) {
    // Comportamento para telas menores
    // Esconde o menu desktop e exibe o menu mobile
    stickyMenu.style.display = 'none';
    mobileStickyMenu.style.display = 'block';
  } else {
    // Comportamento para telas maiores
    // Mostra o menu desktop e esconde o menu mobile
    stickyMenu.style.display = 'block';
    mobileStickyMenu.style.display = 'none';

    // Esconde o menu sticky se o scroll estiver no topo da página
    if (scrollY < 310) {
      stickyMenu.style.display = 'none';
      return; // Sai da função para evitar aplicar outras regras
    }

    // Ativa o item "Story" do menu desktop se o scroll estiver entre 310 e 767px
    if (scrollY >= 310 && scrollY < 767) {
      storyItem.classList.add('active');
      approachItem.classList.remove('active');
      teamItem.classList.remove('active');
    }

    // Ativa o item "Approach" do menu desktop se o scroll estiver entre 767 e 2010px
    if (scrollY >= 767 && scrollY < 2010) {
      storyItem.classList.remove('active');
      approachItem.classList.add('active');
      teamItem.classList.remove('active');
    }

    // Ativa o item "Team" do menu desktop se o scroll estiver entre 2010 e 3710px
    if (scrollY >= 2010 && scrollY < 3710) {
      storyItem.classList.remove('active');
      approachItem.classList.remove('active');
      teamItem.classList.add('active');
    }

    // Esconde o menu sticky se o scroll passar de 3710px
    if (scrollY >= 3710) {
      stickyMenu.style.display = 'none';
    }
  }
}

// Adiciona eventos de clique ao menu desktop
document.getElementById('desktop-story').addEventListener('click', function () {
  scrollToSection(900);
});

document.getElementById('desktop-approach').addEventListener('click', function () {
  scrollToSection(1800);
});

document.getElementById('desktop-team').addEventListener('click', function () {
  scrollToSection(3000);
});

// Adiciona eventos de clique ao menu mobile
document.getElementById('mobile-story').addEventListener('click', function () {
  scrollToSection(900);
});

document.getElementById('mobile-approach').addEventListener('click', function () {
  scrollToSection(1800);
});

document.getElementById('mobile-team').addEventListener('click', function () {
  scrollToSection(3000);
});

function scrollToSection(scrollYPosition) {
  window.scrollTo({
    top: scrollYPosition, // Define a posição vertical para onde o scroll irá
    behavior: 'smooth' // Adiciona uma transição suave ao movimento do scroll
  });
}
