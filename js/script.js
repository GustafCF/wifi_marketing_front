document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const spinner = document.getElementById("spinner");
    spinner.style.display = 'inline-block'; // Mostra o spinner

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginRequest = {
        name: username,
        password: password
    };

    fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginRequest)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao fazer login: " + response.status);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Aqui você pode lidar com o token de acesso
        // console.log("Token recebido:", data.acessToken);
        // Exibir SweetAlert de sucesso
        Swal.fire({
            icon: 'success',
            title: 'Login bem-sucedido!',
            text: 'Você será redirecionado.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirecione ou armazene o token conforme necessário
            // window.location.href = 'outra_pagina.html'; // Exemplo de redirecionamento
        });
    })
    .catch(error => {
        console.error("Erro:", error);
        // Exibir SweetAlert de erro
        Swal.fire({
            icon: 'error',
            title: 'Login falhou!',
            text: error.message,
            confirmButtonText: 'Tente novamente'
        });
    })
    .finally(() => {
        spinner.style.display = 'none'; // Esconde o spinner após a ação ser concluída
    });
});
