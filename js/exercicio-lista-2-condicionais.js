/*Lista de exercicios em pdf github lista 2 condicionais
fazer 7,9,10,14,17 e 18 */

function numeroApresentar() {
    let numeroUsuario = parseInt(prompt("Digire um número:"))
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
    let lado1 = parseInt(prompt("Digire um número:"))
    let lado2 = parseInt(prompt("Digire um número:"))
    let lado3 = parseInt(prompt("Digire um número:"))
    let lado4 = parseInt(prompt("Digire um número:"))

    if (lado1 === lado2 && lado3 === lado4) {
        console.log("Números iguais");

    else(lado3 === lado2)

    
    } else if (lado3 === lado2 && lado1 === lado4) {
        console.log("Números iguais");
    } else if (lado4 === lado2 && lado1 === lado3) {
        console.log("Números iguais");
    } else if (lado3 !== lado2 && lado1 !== lado4) {
        console.log("Números diferentes");
    } else if (lado3 !== lado2 && lado1 !== lado4){
        console.log("Números diferentes");
    } else if (lado1 !== lado2 && lado3 !== lado4) {
        console.log("Números diferentes");
    }

}


ladoQuadrado()