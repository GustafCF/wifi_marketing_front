// Cria o conteúdo do header
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo">
            <h1>InterPrize</h1>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    `;
    document.getElementById('header').appendChild(header);
}

// Chama a função para criar o header
createHeader();
