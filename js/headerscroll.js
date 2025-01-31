window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    // Ajuste o valor 50 conforme necessário
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
