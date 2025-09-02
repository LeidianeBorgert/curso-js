let numeros = [];
function cadastrarNumero() {
    let nome = prompt("Digite um número ");
    numeros.push(nome);
}
function listarNumeros() {
    let lista = "Lista de números preferidos";
    for (let i = 0; i < numeros.length; i = i + 1) {
        let numero = numeros[i];
        lista = lista + "\n\t" + i + "=>" + numero;
    }
    alert(lista)
}
function removerNumero() {
    let indiceParaApagar = parseInt(prompt("Digite o indice do número que deseja apagar"));
    numeros.splice(indiceParaApagar, 1);
    alert("Número removido com sucesso");

}
function alterarNumero() {
    let indiceParaAlterar = parseInt(prompt("Digite o indice do número que deseja alterar"));
    numeros[indiceParaAlterar] = prompt("Digite o novo número");
    alert("Número alterado com sucesso");
}