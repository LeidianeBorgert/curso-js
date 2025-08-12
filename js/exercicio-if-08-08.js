
/*                    Lista de exercicios 3 - If               */
function maiorIdade() {
    let idade = parseInt(prompt("Informe sua idade: "));
    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }

}
function parOuImpar() {
    let numeroUsuario = parseInt(prompt("Informe um número: "));

    if (numeroUsuario % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }


}
function aprovadoOuReprovado() {
    let notaUsuario = parseInt(prompt("Informe uma nota de prova: "));

    if (notaUsuario >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

function senhaCorreta() {
    let senhaUsuario = prompt("Infome uma senha:");

    if (senhaUsuario === "1234") { /*senha pre-definida */
        console.log("Acesso permitido");
    } else {
        console.log("Senha incorreta");
    }

}

function promocaoDesconto() {

    let valorCompra = parseInt(prompt("Informe o valor da compra: "));

    if (valorCompra > 100) {
        console.log("Você ganhou um desconto de 10%. ");
    } else {
        console.log("Sem desconto disponivel.");
    }
}


function classificacaoIdade() {
    let idade = parseInt(prompt("Informe sua idade: "));
    if (idade <= 12) {
        console.log("Criança");
    } else if (idade <= 17) {
        console.log("Adolescente");
    } else if (idade <= 59) {
        console.log("Adulto");
    } else if (idade >= 60) {
        console.log("Idoso");
    }
}

function maiorDeDoisNumeros() {
    let numero1 = parseInt(prompt("Informe o primeiro número: "));
    let numero2 = parseInt(prompt("Informe o segundo número: "));

    if (numero1 > numero2) {
        console.log("Primeiro número digitado é o maior.");
    } else if (numero2 > numero1) {
        console.log("Segundo número digitado é o maior.");
    } else if (numero1 === numero2) {
        console.log("Os números são iguais");
    }
}

function numeroPositivoNegativoOuZero() {
    let numeroUsuario = parseInt(prompt("Informe um número: "));

    if (numeroUsuario > 0) {
        console.log("Positivo");
    } else if (numeroUsuario < 0) {
        console.log("Negativo");
    } else if (numeroUsuario === 0) {
        console.log("Zero");
    }
}
function aprovadoRecuperacaoReprovado() {
    let mediaAluno = parseInt(prompt("Informe a média do aluno: "));

    if (mediaAluno >= 7) {
        console.log("Aprovado");
    } else if (mediaAluno >= 5) {
        console.log("Recuperação");
    } else if (mediaAluno < 5) {
        console.log("Reprovado");
    }

}

function multiplo3Ou5() {

}
function acessoEvento() {
    let idadeEvento = parseInt(prompt("Informe sua idade: "));
    let ingressoEvento = prompt("Possui ingresso? ");
    if (idadeEvento >= 18 && ingressoEvento === "Sim") {
        console.log("Entrada permitida");
    } else {
        console.log("Entrada negada")
    }
}

function bonusCompra() {
    let valorCompra = parseInt(prompt("Valor da compra:"));
    let clienteVip = prompt("É cliente VIP? Digite Sim ou Não: ")
    if (valorCompra > 200 || clienteVip === "Sim") {
        console.log("Você ganhou um brinde!");
    } else {
        console.log("Sem bônus disponivel!");
    }
}

function senhaUsuario() {
    const usuario = prompt("Digite o usuário");
    const senha = prompt("Digite a senha");
    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido.")
    } else {
        alert("Usuário ou senha inválidos");
    }
}

function trianguloValido() {
    let lado1 = parseInt(prompt("Informe um valor do lado 1 do triangulo: "));
    let lado2 = parseInt(prompt("Informe um valor do lado 2 do triangulo: "));
    let lado3 = parseInt(prompt("Informe um valor do lado 3 do triangulo: "));


}
function anoBissexto() {

}