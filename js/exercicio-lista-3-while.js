function listaPecas() {
    let indice = 0;
    while (indice <= 12) {
        let pecas = prompt("Digite o nome da peça: ");
        let preco = parseInt(prompt("Informe o valor da peça:").replace(" ", "")
            .replace("R$", "")
            .replace(",", "."));
        indice = indice + 1;
    }
}


function solicitarNomeAteDigitarFim() {
    let nome = "";
    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("Digite o nome ou 'fim' para encerrar");
    }
}

function solicitarIdade(){
    let indice = 0;
    let Idade = 0;
    while (indice > idade) {
        let idade = parseInt(prompt("Digite a idade"));
        if
        indice = indice + 1;
    }
    alert("Idade: " + idade)
}
