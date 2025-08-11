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

/*                    Lista de exercicios 2 - String e toFixed               */
function trocaPalavras() {
    let fraseUsuario = prompt("Digite uma frase:");
    let palavraUsuario = prompt("Digite uma palavra para susbtituir da frase digitada anterior: ");
    let palavraSubstituta = prompt("Digite uma palavra que voce quer colocar no lugar da outra : ");
    fraseUsuarioModificada = fraseUsuario.replace(palavraUsuario, palavraSubstituta);
    console.log(fraseUsuarioModificada);

}

function removerOcorrencias() {
    let fraseDesejada = prompt("Digite uma frase:");
    let palavraTrocar = prompt("Digite uma palavra para susbtituir da frase: ");
    novaFrase = fraseDesejada.replaceAll(palavraTrocar, " ");
    console.log(novaFrase);

}
function separarNomes() {
    let nomeCompleto = "leidiane aparecida borgert";
    let partes = nomeCompleto.split(" ");

    let primeiroNome = partes[0];
    let ultimoNome = partes[partes.length - 1];

    console.log("Primeiro nome:", primeiroNome);
    console.log("Último nome:", ultimoNome);


}
function extrairParteFrase() {
    let frase = prompt("Digite uma frase:")
    let parte = frase.substring(3, 14);
    alert(parte);

}

function removerEspacos() {
    let espacos = prompt("Digite uma frase:");
    let semEspacos = espacos.trim();
    alert(
        "Texto original: '" + espacos + "'" +
        "\nTexto modificado: '" + semEspacos + "'"
    );

}
function removerEspacosInicio() {
    let espacosInicio = prompt("Digite uma frase:");
    let semEspacosInicios = espacosInicio.trimStart();
    alert(
        "Texto original: '" + espacosInicio + "'" +
        "\nTexto modificado: '" + semEspacosInicios + "'"
    );
}
function removerEspacosFinal() {
    let espacosFim = prompt("Digite uma frase:");
    let semEspacosFim = espacosFim.trimEnd();
    alert(
        "Texto original: '" + espacosFim + "'" +
        "\nTexto modificado: '" + semEspacosFim + "'"
    );

}

function preencherCaracteres() {
    let telefone = prompt("Digite um número de telefone: ");
    let telefoneComDDD = telefone.padStart(13, "47 ");
    console.log(telefoneComDDD);

}

function preencherComZero() {
    let contaBancaria = prompt("Digite um número de uma conta bancária: ");
    let contaCompleta = contaBancaria.padEnd(10, "0");
    console.log(contaCompleta);
}

function precoFormatado() {
    let valor = parseFloat(
        prompt("Digite o valor", "R$ ")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", ""));

    let numero = parseFloat(valor);
    let valorFormatado = "R$ " + numero.toFixed(2).replace(".", ",");
    console.log(valorFormatado);
}
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

}
function senhaCorreta() {

}
function promocaoDesconto() {

}

function classificacaoIdade() {

}
function maiorDeDoisNumeros() {

}
function numeroPositivoNegativoOuZero() {

}
function aprovadoRecuperacaoReprovado() {

}
function multiplo3Ou5() {

}
function acessoEvento() {

}
function bonusCompra() {

}
function senhaUsuario() {

}
function trianguloValido() {

}
function anoBissexto() {

}