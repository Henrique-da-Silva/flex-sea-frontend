window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var stickyMenu = document.getElementById('sticky-menu');
  var mobileStickyMenu = document.getElementById('mobile-sticky-menu');
  var storyItem = document.getElementById('desktop-story');
  var approachItem = document.getElementById('desktop-approach');
  var teamItem = document.getElementById('desktop-team');

  if (window.innerWidth <= 767) {
    // Comportamento para telas menores
    stickyMenu.style.display = 'none';
    mobileStickyMenu.style.display = 'block';
  } else {
    // Comportamento para telas maiores
    stickyMenu.style.display = 'block';
    mobileStickyMenu.style.display = 'none';

    if (scrollY < 310) {
      stickyMenu.style.display = 'none';
      return;
    }

    if (scrollY >= 310 && scrollY < 767) {
      storyItem.classList.add('active');
      approachItem.classList.remove('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 767 && scrollY < 2010) {
      storyItem.classList.remove('active');
      approachItem.classList.add('active');
      teamItem.classList.remove('active');
    }

    if (scrollY >= 2010 && scrollY < 3710) {
      storyItem.classList.remove('active');
      approachItem.classList.remove('active');
      teamItem.classList.add('active');
    }

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
    top: scrollYPosition,
    behavior: 'smooth'
  });
}
