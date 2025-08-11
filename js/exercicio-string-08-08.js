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
        prompt("Digite um valor: ")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", ""));

    let numero = parseFloat(valor);
    let valorFormatado = "R$ " + numero.toFixed(2).replace(".", ",");
    console.log(valorFormatado);
}