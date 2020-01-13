

    document.getElementById("btnSubmit").onclick = function () {
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let telefone = document.getElementById("telefone").value;
        let senha = document.getElementById("senha").value;
        let confirmar = document.getElementById("confirmar").value;



        if (nome == "") {
            alert("O campo nome não pode estar vazio");

        }
        if (telefone == "") {
            alert("O campo telefone não pode estar vazio");
        }
        if (email.indexOf("@") == -1 ||
            email.indexOf(".") == -1 ||
            email == "" ||
            email == null) {
            alert("Por favor, indique um e-mail válido.");
        }
        if (senha == "") {
            alert("O campo senha não pode estar vazio");

        }
        if (confirmar == "") {
            alert("O campo repeat password não pode estar vazio");

        }

        if (confirmar !== senha) {
            alert("Os campos senha e confirmar senhas não coincidem");

        } else {
            alert ([` Agradeçemos o contato, os dados enviados foram:
                Nome: ${nome}
                Telefone: ${telefone}
                Email: ${email}
                `])
        }
    };


 