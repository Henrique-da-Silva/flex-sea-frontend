window.onscroll = function() {
  handleScroll();
};

function handleScroll() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var stickyMenu = document.getElementById('sticky-menu');
  var storyItem = document.getElementById('story');
  var approachItem = document.getElementById('approach');
  var teamItem = document.getElementById('team');

  // Verifica se estamos em um dispositivo móvel (largura da tela <= 767px)
  if (window.innerWidth <= 767) {
    // Mobile-specific scroll behavior
    if (scrollY < 900) {
      stickyMenu.style.display = 'none';
      return;
    }

    if (scrollY >= 900 && scrollY < 1800) {
      stickyMenu.style.display = 'block';
      storyItem.classList.add('active');
      approachItem.classList.remove('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 1800 && scrollY < 3000) {
      stickyMenu.style.display = 'block';
      storyItem.classList.remove('active');
      approachItem.classList.add('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 3000 && scrollY < 6000) {
      stickyMenu.style.display = 'block';
      storyItem.classList.remove('active');
      approachItem.classList.remove('active');
      teamItem.classList.add('active');
    }

    if (scrollY >= 7500) {
      stickyMenu.style.display = 'none';
    }
  } else {
    // Desktop-specific scroll behavior (já existente no seu código)
    if (scrollY < 310) {
      stickyMenu.style.display = 'none';
      return;
    }

    if (scrollY >= 310 && scrollY < 767) {
      stickyMenu.style.display = 'block';
      storyItem.classList.add('active');
      approachItem.classList.remove('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 767 && scrollY < 2010) {
      stickyMenu.style.display = 'block';
      storyItem.classList.remove('active');
      approachItem.classList.add('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 2010 && scrollY < 3710) {
      stickyMenu.style.display = 'block';
      storyItem.classList.remove('active');
      approachItem.classList.remove('active');
      teamItem.classList.add('active');
    }

    if (scrollY >= 3710) {
      stickyMenu.style.display = 'none';
    }
  }
}

// Função para rolar até a posição calculada das seções
function scrollToSection(scrollYPosition) {
  window.scrollTo({
    top: scrollYPosition,
    behavior: 'smooth' // Rolar suavemente
  });
}

// Adiciona eventos de clique aos itens do menu
document.getElementById('story').addEventListener('click', function() {
  // Distância calculada para "Our story"
  scrollToSection(900);
});

document.getElementById('approach').addEventListener('click', function() {
  // Distância calculada para "Our approach"
  scrollToSection(1800);
});

document.getElementById('team').addEventListener('click', function() {
  // Distância calculada para "Our team"
  scrollToSection(3000);
});
