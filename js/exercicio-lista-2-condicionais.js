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
function anoPorExtenso(){
    




}
