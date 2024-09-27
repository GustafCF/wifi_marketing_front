document.getElementById("CadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // evita o envio do formulário

    const spinner = document.getElementById("spinner");
    spinner.style.display = 'inline-block'; // mostra o spinner

    const username = document.getElementById("username_cad").value;
    const password = document.getElementById("password_cad").value;

    const cadastroRequest = {
        name: username,
        password: password
    };

    fetch("http://localhost:8080/auth/cad", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cadastroRequest)
    })
    .then(response => {
        // Verifica se a resposta não é 201
        if (response.status !== 201) {
            throw new Error("Erro ao fazer o cadastro: " + response.status);
        }
        // return response.json(); // A resposta deve ser analisada apenas se o status for 201
    })
    .then(data => {
        Swal.fire({
            icon: 'success',
            title: 'Cadastro bem sucedido',
            text: 'Você será redirecionado',
            confirmButtonText: 'OK'
        })
        .then(() => {
            // Redirecione ou armazene o token conforme necessário
            window.location.href = 'index.html';
        });
    })
    .catch(error => {
        console.error("Erro:", error);

        Swal.fire({
            icon: 'error',
            title: 'Erro ao fazer o cadastro',
            text: error.message,
            confirmButtonText: 'Tente novamente'
        });
    })
    .finally(() => {
        spinner.style.display = 'none';
    });
});
