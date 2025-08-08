function cadastroSimples() {
    let nome = "Ana";
    let idade = 22;
    let altura = 1.67;

    console.log("Olá meu nome é " + nome + ", tenho " + idade + " anos e minha altura é " + altura + " " + "metros.");

}

function idadeFutura() {
    let idadeCincoAnos = 5;
    let idadeUsuario = parseFloat(prompt("Digite sua idade: ").replace(" ", ""));
    let soma = idadeUsuario + idadeCincoAnos

    alert("Essa será sua idade daqui 5 anos:" + soma);
}

function conversorMoedas() {
    let valorEmReais = parseFloat(prompt("Digite o valor em Reais para a conversão em Dólar: R$ ")
        .replace(" ", "")
        .replace("R$", "")
        .replace(",", "."));
    let taxaDolar = 5;
    let conversao = valorEmReais * taxaDolar
    alert("Valor convertido para Dólar: U$ " + conversao);
}

function luzAcesa() {
    let luzAcesa = false;
    let valorInformadoUsuario = parseInt(prompt("Digite 1 para acender a luz ou 0 para apagar."));
    if (luzAcesa) {
        console.log("A luz está acesa");
    } else {
        console.log("A luz está apagada");
    }
}

function areaRetangulo() {
    let valorUsuarioLargura = parseFloat(prompt("Infome a largura do retângulo: ")
        .replace(",", ".")
        .replace(" ", ""));
    let valorUsuarioAltura = parseFloat(prompt("Infome a largura do retângulo: ")
        .replace(",", ".")
        .replace(" ", ""));

    let calculo = valorUsuarioAltura * valorUsuarioLargura
    console.log("A área do retângulo é " + calculo + " metro quadrados.")

}

function mediaNotas() {

}
