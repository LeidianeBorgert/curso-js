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

listaPecas()
