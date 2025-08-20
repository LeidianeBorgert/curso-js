function totalCompra() {
    /*1) Total da compra
    Objetivo: somar preços e exibir total e média.
    
    Solicite 4 preços (use parseFloat e troque , por . se necessário).
    
    Use while para repetir 4 vezes.
    
    Ao final, mostre total e média com toFixed(2).
    Massa de dados: 3,50 | 10 | 7,99 | 8,5*/

    let soma = 0;
    let indice = 0;
    let preco = [];

    while (indice < 4) {
        let precos = parseFloat(prompt("Informe o preço:").replace(",", "."));
        soma = soma + precos;
        indice = indice + 1;

    }
    let media = soma / indice;


    alert("Soma: " + soma.toFixed(2) +
        "\nMédia: " + media.toFixed(2) +
        "\nMassa de dados: " + )
}
totalCompra()
