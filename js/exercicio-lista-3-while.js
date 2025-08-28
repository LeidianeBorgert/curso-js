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
function exerciciogit13() {

    let indice = 0;
    let nomeMenorPeso = "";
    let nomeMaiorAltura = "";
    let nomeMenorAmarelos = "";
    let nomeMaiorPeso = "";
    let nomeMaiorVermelhos = "";
    let nomeMaiorAmarelos = "";
    let nomeMenorVermelhos = "";
    let menorPeso = 999999999;
    let maiorAltura = 0;
    let maiorNome = "";
    let jogadoresF = 0;
    let jogadoresM = 0;
    let menorAmarelos = 9999999;
    let menorNome = "kkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsakkjsaodjojdsa";
    let maiorPeso = 0;
    let maiorVermelhos = 0;
    let maiorAmarelos = 0;
    let menorVermelhos = 9999999;


    while (indice < 22) {
        nomeJogador = prompt("Digite o nome do jogador(a)");
        idade = parseInt(prompt("Digite a idade do jogador(a)"));
        peso = parseFloat(prompt("Digite o peso do jogador(a)"));
        sexo = prompt("Digite o sexo do jogador(a) em formato de 'F' ou 'M'").toUpperCase().replace("FEMININO", "F").replace("MASCULINO", "M");
        altura = parseFloat(prompt("Digite a altura do jogador(a)").replace(",", "."));
        quantidadeGols = parseInt(prompt("Digite a quantidade de gols marcados pelo jogador(a)"));
        quantidadeAmarelos = parseInt(prompt("Digite a quantidade de cartões amarelos recebidos pelo jogador(a)"));
        quantidadeVermelhos = parseInt(prompt("Digite a quantidade de cartões vermelhos recebidos pelo jogador(a)"));
        
        if (peso < menorPeso) {
            nomeMenorPeso = nomeJogador;
            menorPeso = peso;
        }
        if (altura > maiorAltura) {
            nomeMaiorAltura = nomeJogador;
            maiorAltura = altura;
        }
        if (nomeJogador.length > 3) {
            maiorNome = nomeJogador;
        }
        if (sexo === "F") {
            jogadoresF = jogadoresF + 1;
        } else if (sexo === "M") {
            jogadoresM = jogadoresM + 1;
        }

        if (quantidadeAmarelos < menorAmarelos) {
            nomeMenorAmarelos = nomeJogador;
            menorAmarelos = quantidadeAmarelos;
        }
        if (nomeJogador.length  < menorNome.length) {    // LUCAS, LEIDIANE E ANA
            menorNome = nomeJogador;

        }
        if (peso > maiorPeso) {
            nomeMaiorPeso = nomeJogador;
            maiorPeso = peso;
        }
        if (quantidadeVermelhos > maiorVermelhos) {
            nomeMaiorVermelhos = nomeJogador;
            maiorVermelhos = quantidadeVermelhos;
        }
        if (quantidadeAmarelos > maiorAmarelos) {
            nomeMaiorAmarelos = nomeJogador;
            maiorAmarelos = quantidadeAmarelos;
        }
        if (quantidadeVermelhos < menorVermelhos) {
            nomeMenorVermelhos = nomeJogador;
            menorVermelhos = quantidadeVermelhos;
        }



        indice = indice + 1;
    }

    alert("Jogador com menor peso: " + nomeMenorPeso +
        "\nJogador com maior altura: " + nomeMaiorAltura +
        "\nJogador com maior nome: " + maiorNome +
        "\nQuantidade de jogadores do sexo F: " + jogadoresF +
        "\nQuantidade de jogadores do sexo M: " + jogadoresM +
        "\nJogador com a menor quantidade de cartões amarelos: " + nomeMenorAmarelos +
        "\nJogador com menor nome: " + menorNome +
        "\nJogador com maior peso: " + nomeMaiorPeso +
        "\nJogador com a maior quantidade de cartões vermelhos: " + nomeMaiorVermelhos +
        "\nJogador com a maior quantidade de cartões amarelos: " + nomeMaiorAmarelos +
        "\nJogador com a menor quantidade de cartões vermelhos: " + nomeMenorVermelhos
    );


}
