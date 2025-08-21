function totalCompra() {
    /*1) Total da compra
    Objetivo: somar preços e exibir total e média.
    
    Solicite 4 preços (use parseFloat e troque , por . se necessário).
    
    Use while para repetir 4 vezes.
    
    Ao final, mostre total e média com toFixed(2).
    Massa de dados: 3,50 | 10 | 7,99 | 8,5*/

    let soma = 0;
    let indice = 0;


    while (indice < 4) {
        let precos = parseFloat(prompt("Informe o preço:").replace(",", "."));
        soma = soma + precos;
        precos = indice.length;
        indice = indice + 1;

    }
    let media = soma / indice;



    alert("Soma: " + soma.toFixed(2) +
        "\nMédia: " + media.toFixed(2));
}

function contagemPorInicial() {
    /*2) Contagem por inicial
Objetivo: contar quantas palavras começam com “a”.

Solicite 5 palavras.

Converta para minúsculas com toLowerCase().trim().

Conte quantas começam com “a” usando startsWith("a").

Mostre: “Começam com ‘a’: X / Outras: Y”.
Massa de dados: Ana, casa, Amora, abacaxi, rua*/


    let indice = 0;
    let quantidadeIniciaComA = 0;
    let quantidadeOutrasLetras = 0;
    while (indice < 5) {
        let palavras = prompt("Digite algumas palavras:").trim();
        if (palavras.toLocaleLowerCase().startsWith("a")) {
            quantidadeIniciaComA = quantidadeIniciaComA + 1;
        } else {
            quantidadeOutrasLetras = quantidadeOutrasLetras + 1;
        }
        indice = indice + 1
    }
    alert("Comeaçam com 'a' : " + quantidadeIniciaComA +
        "\nOutras palavras: " + quantidadeOutrasLetras);
}
function validarIdade() {
    /*3) Validar idade
Objetivo: garantir faixa válida antes de prosseguir.

Peça uma idade com parseInt.

Enquanto a idade < 1 ou > 120, mostre mensagem de erro e peça novamente.

Quando válido, mostre: “Idade cadastrada: X”. */

    let indice = 0;

    while (indice < 4) {
        let idade = parseInt(prompt("Informe a idade."));
        if (idade < 1 || idade > 120) {
            alert("Idade incorreta. Informe idade correta.");
            return idade;
        } else {
            alert("Idade cadastrada: " + idade);
        }
        indice = indice + 1
    }
}
function maiorAlturaEntre3() {

    /*4) Maior altura entre 3
Objetivo: descobrir o maior valor lido.

Solicite 3 alturas (em metros), convertendo , para . e usando parseFloat.

Use uma variável maiorAltura iniciando em 0.

Se a altura lida for maior, atualize maiorAltura.

No final, alert com a maior altura (duas casas decimais).
Massa de dados: 1,72 | 1,80 | 1,75*/
    let indice = 0;
    let maiorAltura = 0;
    while (indice < 3) {
        let altura = parseFloat(prompt("Informe sua altura:").replace(",", "."));
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }
        indice = indice + 1
    }
    alert("Maior altura: " + maiorAltura);
}

function miniMenu() {
    /*5) Menu mini
Objetivo: treinar while com opções simples.

Mostre um menu:

1 - Saudação
2 - Par ou ímpar
100 - Sair
Enquanto a opção ≠ 100:

1: peça o nome e mostre “Olá, [nome.trim()]!”.

2: peça um inteiro e mostre “Par” ou “Ímpar” (use % 2).

Outra opção: “Opção inválida”.

Ao escolher 100, encerrar com “Sistema encerrado”. */

    let menu = `Menu:
    1 - Saudação
    2 - Par ou ímpar
    100 - Sair`

    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));
        if (opcaoEscolhida === 1) {
            let nome = prompt("Infome seu nome:").trim();
            alert("Olá, " + nome + ". " + "seja bem-vindo!")

        } else if (opcaoEscolhida === 2) {
            parImparMenu();
        } else if (opcaoEscolhida === 100) {
            alert("Sistema encerrado.");
        } else
            alert("Opção inválida.");
    }

}

function parImparMenu() {
    let parImpar = parseInt(prompt("Informe um número:"));
    if (parImpar % 2 === 0) {
        alert("Número par");
    } if (parImpar % 2 !== 0)
        alert("Número Impar");

}
function nomesAteFim() {
    /*6) Nomes até “fim” (CADERNO + PC)
Objetivo: ler nomes até o usuário digitar fim e listar tudo normalizado.

Enquanto o nome ≠ "fim" (use toLowerCase().trim()), peça nomes.

Monte uma lista em uma string (com \n) para exibir no final.

Mostre também a quantidade de nomes cadastrados.
Dica: trate entradas como " FIM " usando trim() e toLowerCase(). */
    let nome = "";
    let quantidadeNomes = 0;
    let texto = 
 
    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("Digite o nome ou fim para encerrar.");
        nome = nome + "";
        quantidadeNomes = quantidadeNomes + 1;
        
    }
    alert("Nomes cadastrados: " + nome +
        "\n"+ nome +
        "\nQuantidades de nomes cadastrados: " + quantidadeNomes)
}
nomesAteFim()