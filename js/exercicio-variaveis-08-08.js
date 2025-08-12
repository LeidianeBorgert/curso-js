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
    let nota1 = parseFloat(prompt("Informe a primeira nota:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let nota2 = parseFloat(prompt("Informe a segunda nota:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let nota3 = parseFloat(prompt("Informe a terceira nota:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let calculoMedia = (nota1 + nota2 + nota3) / 3;
    console.log("A média das notas é " + calculoMedia)

}
function descontoProduto() {
    let precoUsuario = parseFloat(prompt("Informe o valor do produto:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let porcentagemUsuario = parseFloat(prompt("Informe o valor do desconto %:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let conversaoPorcentagem = porcentagemUsuario / 100;
    let calculoDesconto = precoUsuario * conversaoPorcentagem;
    let descontoFinal = precoUsuario - calculoDesconto;
    console.log("O valor final com desconto é R$ " + descontoFinal)
}

function temperaturaFahrenheit() {
    let temperaturaUsuario = parseInt(prompt("Informe a temperatura em graus Celsius:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let conversaoFahrenheit = (temperaturaUsuario * 9 / 5) + 32;
    alert("Temperatura convertida de Celsius para Fahrenheit:  " + conversaoFahrenheit)

}
function somaMultiplicacao() {
    let numero1 = parseInt(prompt("Informe um número:  ")
        .replace(",", ".")
        .replace(" ", ""));
    let numero2 = parseInt(prompt("Informe um segundo número:  ")
        .replace(",", ".")
        .replace(" ", ""));

    let soma = numero1 + numero2;
    let multiplicação = numero1 * numero2;
    console.log("A soma é " + soma + " " + " O produto é " + multiplicação)

}

function trocaValores() {

}

