function toggleContent(button) {
    const content = button.nextElementSibling; // Seleciona o conteúdo associado ao botão
    const isVisible = content.style.display === "block";

    // Fecha todos os outros conteúdos e reseta as setas
    document.querySelectorAll('.faq-item').forEach(item => {
        const itemContent = item.querySelector('.content-faq'); // Conteúdo
        const cima = item.querySelector('[class*="seta-faq-item"][alt="setaCima"]'); // Seta cima
        const baixo = item.querySelector('[class*="seta-faq-item"][alt="setaBaixo"]'); // Seta baixo

        if (itemContent && cima && baixo) {
            itemContent.style.display = 'none'; // Fecha o conteúdo
            cima.style.display = 'none'; // Esconde seta cima
            baixo.style.display = 'inline'; // Mostra seta baixo
        }
    });

    // Mostra ou oculta o conteúdo clicado e ajusta as setas
    const cima = button.querySelector('[class*="seta-faq-item"][alt="setaCima"]'); // Seta cima do botão clicado
    const baixo = button.querySelector('[class*="seta-faq-item"][alt="setaBaixo"]'); // Seta baixo do botão clicado

    if (!isVisible) {
        content.style.display = "block"; // Mostra conteúdo
        if (cima) cima.style.display = 'inline'; // Mostra seta cima
        if (baixo) baixo.style.display = 'none'; // Esconde seta baixo
    } else {
        content.style.display = "none"; // Oculta conteúdo
        if (cima) cima.style.display = 'none'; // Esconde seta cima
        if (baixo) baixo.style.display = 'inline'; // Mostra seta baixo
    }
}
