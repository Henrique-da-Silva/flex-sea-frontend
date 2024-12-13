function toggleContent(button) {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === "block";

    // Atualiza para buscar elementos com a nova classe 'content-faq'
    document.querySelectorAll('.faq-item .content-faq').forEach(c => c.style.display = 'none');
    
    if (!isVisible) {
        content.style.display = "block";
    }
}
