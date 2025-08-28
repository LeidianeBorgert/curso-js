function exercicio01() {
    /**1) Sistema de compras com preço BR + relatório
Objetivo: cadastrar produtos até o usuário parar, limpar preço no formato BR e gerar um pequeno relatório.

Enquanto desejaCadastrar === "sim":

Leia nome do produto (use trim() e valide length ≥ 2).

Leia preço em BR (R$ 1.299,90 etc.).

Limpe com replace/replaceAll: remova R$, espaços e pontos; troque , por .; parseFloat.

Acumule total, quantidade, maior preço e nome do mais caro.

Pergunte se deseja cadastrar outro (sim/não), normalizando com toLowerCase().trim().

Ao final, mostre no console uma “tabela” com 2 colunas: Produto (use padEnd(20," ")) e Preço (toFixed(2)).

Mostre total e média com toFixed(2).

Massa de dados:
Batata Palha | R$ 12,50 · Arroz 5kg | 29,90 · Leite | R$ 4,79 */


    let desejaCadastrar = "sim"
    let precoMaior = 0;
    let produtoMaior = "";
    let soma = 0;
    let quantidadeCadastrada = 0;
    let media = 0;

    while (desejaCadastrar === "sim") {
        let produto = prompt("Informe o produto:").trim();
        if (produto.length < 2) {
            alert("Produto incorreto maior que 2 caracteres.");
        }


        let preco = parseFloat(prompt("Informe o preço R$ : ").replace(",", ".").replace(" ", "").replace("R$", ""));

        if (preco > precoMaior) {
            precoMaior = preco;
            produtoMaior = produto;
        }

        desejaCadastrar = prompt("Deseja cadastrar outra? [sim/não]").toLowerCase().trim();

        /* if (desejaCadastrar !== "sim") {
             alert("Sistema encerrado.")
             
             }**/

        quantidadeCadastrada = quantidadeCadastrada + 1;

        soma = soma + preco;
    }
    media = soma / quantidadeCadastrada;
    alert("Preço maior: " + precoMaior +
        "\nProduto mais caro: " + produtoMaior +
        "\nTotal: " + soma +
        "\nMédia: " + media +
        "\nQuantidade de item cadastrado: " + quantidadeCadastrada)

}

function exercicio02() {
    /**2) Processar linhas “CSV” simples (id;nome;cpf;data)
Objetivo: ler 5 linhas e validar campos por regras básicas de string.

Repita 5x com while: peça uma linha no formato id;nome;cpf;aaaa-mm-dd.

Use split(";") e verifique se tem 4 partes.

Regras:

id: só dígitos (teste com replace(/\d/g,"") ⇒ deve virar "") e > 0.

nome: trim() e length ≥ 7.

cpf: tamanho 14 e substring nas posições dos pontos e traço (xxx.xxx.xxx-xx).

data: tamanho 10 e charAt(4) === '-' e charAt(7) === '-'.

Conte válidas e inválidas; liste no console quais índices foram inválidos.

Dica: Evite regex complexa; use length, substring, charAt, replace. */

    let indice = 0;
    let idInvalido = 0;
    let valido = 0;
    let nomeInvalido = 0;
    let cpfInvalido = 0;
    let dataInvalida = 0;


    while (indice < 5) {
        let linha = prompt("Infome os dados no formato id;nome;cpf;aaaa-mm-dd:").trim();


        let partes = linha.split(";");
        let id = partes[0].replace(/\d/g, "");
        let nome = partes[1].trim();
        let cpf = partes[2];
        let data = partes[3];

        if (id === "" || id <= 0) {
            idInvalido = idInvalido + 1;
        } else {
            valido = valido + 1;
        }

        if (nome.length < 7) {
            nomeInvalido = nomeInvalido + 1
        } else {
            valido = valido + 1;
        }

        if (cpf.length !== 14 || cpf.charAt(3) !== "." || cpf.charAt(7) !== "." || cpf.charAt(11) !== "-") {
            cpfInvalido = cpfInvalido + 1;
        } else {
            valido = valido + 1;
        }

        if (data.length !== 10 || data.charAt(4) !== "-" || data.charAt(7) !== "-") {
            dataInvalida = dataInvalida + 1;
        } else {
            valido = valido + 1;
        }

        indice = indice + 1;

    }

    console.log("Id invalidos: " + idInvalido +
        "\nNomes invalidos: " + nomeInvalido +
        "\nCpfs invalidos: " + cpfInvalido +
        "\nData invalida: " + dataInvalida +
        "\nTotal de validos: " + valido)


}
function exercicio03() {
    /**3) Frases: contagem e classificação por pontuação
Objetivo: ler 6 frases e classificar por final ?, ! ou outro.

Repita 6x: leia uma frase, faça trimEnd() e pegue o último caractere com substring(len-1).

Contadores: perguntas (terminam com ?), exclamações (!) e neutras (qualquer outro).

Ao final, mostre os três totais e o percentual de cada (use toFixed(1)).

Massa de dados:
“Oi?” · “Tudo bem!” · “Amanhã eu vou” · “Sério!” · “Como assim?” · “Tá certo” */

    let indice = 0;
    let terminamInterrogacao = 0;
    let terminamExclamacao = 0;
    let terminamNeutras = 0;

    while (indice < 3) {
        let frase = prompt("Informe uma frase, podendo utilizar ? ou !. ");


        if (frase.trimEnd().substring("?") ) {
            terminamInterrogacao = terminamInterrogacao + 1;
        }
        if (frase.trimEnd("!")) {
    //        terminamExclamacao = terminamExclamacao + 1;
     //   } else {
      //      terminamNeutras = terminamNeutras + 1;
      //  }
        indice = indice + 1;
    }
    alert(
        "Quantidade de frases que terminam com ? : " + terminamInterrogacao +
        "\nQuantidade de frases que terminam com ! : " + terminamExclamacao +
        "\nQuantidade de frases que tem terminação neutra: " + terminamNeutras)

}
