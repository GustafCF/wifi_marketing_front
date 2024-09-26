// Cria o conteúdo do footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="social-links">
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
            <a href="https://www.instagram.com" target="_blank">Instagram</a>
        </div>
        <div class="copyright">
            &copy; 2024 InterPrize. Todos os direitos reservados.
        </div>
    `;
    // Correção: remove o '#' no getElementById
    document.getElementById('footer').appendChild(footer);
}

// Chama a função para criar o footer
createFooter();
