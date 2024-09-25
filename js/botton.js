// botton.js

document.getElementById('confirmButton').addEventListener('click', function() {
    // Mostra o spinner
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'inline-block';

    // Obtenha os valores de username e password
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pwd').value;

    // Faça o login para obter o token JWT
    fetch('http://localhost:8081/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const token = data.token; // Aqui assumimos que o token JWT é retornado no campo "token"
        localStorage.setItem('jwt', token); // Armazena o token no localStorage

        Swal.fire('Login realizado com sucesso!', '', 'success'); // Exemplo usando SweetAlert
    })
    .catch((error) => {
        console.error('Error:', error);
        Swal.fire('Erro ao realizar login', '', 'error'); // Exemplo usando SweetAlert
    })
    .finally(() => {
        // Esconde o spinner após a ação ser concluída
        spinner.style.display = 'none';
    });
});
