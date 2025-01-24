// Seleciona o spinner
const spinner = document.getElementById("spinner");

// Exibe o spinner
function showSpinner() {
    spinner.style.display = "block";
}

// Oculta o spinner
function hideSpinner() {
    spinner.style.display = "none";
}

// Adiciona eventos na navegação
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Impede a navegação padrão
        const href = this.getAttribute("href");

        // Mostra o spinner
        showSpinner();

        // Simula um pequeno delay para carregamento
        setTimeout(() => {
            // Faz a navegação após o carregamento
            window.location.href = href;
        }, 1000); // Ajuste o tempo conforme necessário
    });
});

// Oculta o spinner quando a página é carregada
window.addEventListener("load", hideSpinner);
