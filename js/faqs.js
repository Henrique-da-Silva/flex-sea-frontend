function toggleContent(button) {
    const content = button.nextElementSibling; // Seleciona o conteúdo associado ao botão
    const isVisible = content.style.display === "block";

    // Fecha todos os outros conteúdos e reseta as setas
    document.querySelectorAll('.faq-item .content-faq').forEach(c => {
        c.style.display = 'none'; // Fecha o conteúdo
        const btn = c.previousElementSibling; // Seleciona o botão anterior
        btn.querySelector('.setaCima').style.display = 'none'; // Esconde seta cima
        btn.querySelector('.setaBaixo').style.display = 'inline'; // Mostra seta baixo
    });

    // Mostra ou oculta o conteúdo clicado e ajusta as setas
    if (!isVisible) {
        content.style.display = "block"; // Mostra conteúdo
        button.querySelector('.setaCima').style.display = 'inline'; // Mostra seta cima
        button.querySelector('.setaBaixo').style.display = 'none'; // Esconde seta baixo
    } else {
        content.style.display = "none"; // Oculta conteúdo
        button.querySelector('.setaCima').style.display = 'none'; // Esconde seta cima
        button.querySelector('.setaBaixo').style.display = 'inline'; // Mostra seta baixo
    }
}
