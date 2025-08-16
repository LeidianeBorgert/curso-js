/*Lista de exercicios em pdf github lista 2 condicionais
fazer 7,9,10,14,17 e 18 */

function numeroApresentar() {
    let numeroUsuario = parseInt(prompt("Digite um número:"))
    if (numeroUsuario > 0) {
        console.log("Positivo")
    } else if (numeroUsuario < 0) {
        console.log("Negativo");
    } else if (numeroUsuario < 0) {
        console.log("Negativo");

    } else if (numeroUsuario > 10) {
        console.log("Número maior que 10.")
    } else if (numeroUsuario <= 50) {
        console.log("Número menor ou igual a 50")
    } else if (numeroUsuario < -10) {
        console.log("Número menor que -10")
    } else if (numeroUsuario >= 30) {
        console.log("Número menor que 30")
    } else if (numeroUsuario !== 1) {
        console.log("Número diferente de 1.")
    }
}

function ladoQuadrado() {
    let lado1 = parseInt(prompt("Digite um número:"))
    let lado2 = parseInt(prompt("Digite um número:"))
    let lado3 = parseInt(prompt("Digite um número:"))
    let lado4 = parseInt(prompt("Digite um número:"))

    if (lado1 === lado2 && lado3 === lado4) {
        console.log("Números iguais pode ser um quadrado");
    } else (lado3 === lado2)
    console.log("Números diferentes não pode ser um quadrado");

}
function ladoRetangulo() {
    let lado1 = parseInt(prompt("Digite um número:"))
    let lado2 = parseInt(prompt("Digite um número:"))
    let lado3 = parseInt(prompt("Digite um número:"))
    let lado4 = parseInt(prompt("Digite um número:"))

    if (lado1 === lado3 && lado2 === lado4) {
        console.log("Números iguais pode ser um retângulo");
    } else (lado1 !== lado4)
    console.log("Números diferentes não pode ser um retângulo");

}
function ordemCrescente() {
    let ordem1 = parseInt(prompt("Digite o primeiro número:"))
    let ordem2 = parseInt(prompt("Digite o segundo número:"))
    let ordem3 = parseInt(prompt("Digite o terceiro número:"))
    let menor, meio, maior

    if (ordem1 <= ordem2 && ordem1 <= ordem3) {
        menor = ordem1
    } if (ordem2 <= ordem3) {
        meio = ordem2
        maior = ordem3
    } else (ordem3 <= ordem2)
    maior = ordem2
    meio = ordem3

    if (ordem2 <= ordem1 && ordem2 <= ordem3) {
        menor = ordem2
    } else if (ordem1 <= ordem3) {
        meio = ordem1
        maior = ordem3
    } else (ordem3 <= ordem1)
    maior = ordem1
    meio = ordem3

    if (ordem3 <= ordem1 && ordem3 <= ordem2) {
        menor = ordem3
    } else if (ordem1 <= ordem2) {
        meio = ordem1
        maior = ordem2
    } else (ordem2 <= ordem1)
    maior = ordem1
    meio = ordem2

    console.log(menor, meio, maior)

}
function anoPorExtenso() {
    let dataUsuario = parseInt(prompt("Informe sua data de nascimento: "));
    let separar = dataUsuario.split('');
    let ano = separar[0];
    let centena = separar[1];
    let dezena = separar[2];
    let unidade = separar[3];

    if (dataUsuario === 1) {
        return ano = "Mil"
    } else if (dataUsuario === 2) {
        ano = "Dois";
    } else if (dataUsuario === 3) {
        ano = "Três";
     } if (dataUsuario === 100) {
         centena = "cem";
    } else if (dataUsuario === 200) {
        centena = "duzentos";
    } else if (dataUsuario === 300) {
        centena = "trezentos";
    } else if (dataUsuario === 400) {
        centena = "quatrocentos";
    } else if (dataUsuario === 500) {
        centena = "quinhentos";
    } else if (dataUsuario === 600) {
        centena = "seiscentos";
    } else if (dataUsuario === 700) {
        centena = "setecentos";
    } else if (dataUsuario === 800) {
        centena = "oitocentos";
    } else if (dataUsuario === 900) {
        centena = "novecentos";
    } if (dataUsuario === 10) {
        dezena = "dez";
    } else if (dataUsuario === 20) {
        dezena = "vinte";
    } else if (dataUsuario === 30) {
        dezena = "trinta";
    } else if (dataUsuario === 40) {
        dezena = "quarenta";
    } else if (dataUsuario === 50) {
        dezena = "cinquenta";
    } else if (dataUsuario === 60) {
        dezena = "secenta";
    } else if (dataUsuario === 70) {
        dezena = "setenta";
    } else if (dataUsuario === 80) {
        dezena = "oitenta";
    } else if (dataUsuario === 90) {
        dezena = "noventa";
    } if (dataUsuario === 1) {
        unidade = "um";
    } else if (dataUsuario === 2) {
        unidade = "dois";
    } else if (dataUsuario === 3) {
        unidade = "três";
    } else if (dataUsuario === 4) {
        unidade = "quatro";
    } else if (dataUsuario === 5) {
        unidade = "cinco";
    } else if (dataUsuario === 6) {
        unidade = "seis";
    } else if (dataUsuario === 7) {
        unidade = "sete";
    } else if (dataUsuario === 8) {
        unidade = "oito";
    } else if (dataUsuario === 9) {
        unidade = "nove";
    }

    alert(centena + dezena + unidade)

}



