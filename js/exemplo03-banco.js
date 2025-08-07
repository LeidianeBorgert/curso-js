//escopo da variavel slado é global
let saldo = 2000.00;
function saca() {
    //escopo da variavel valorSaque é a função sacar
    const valorSaque = parseFloat(
        prompt("Digite o valor do saque", "R$")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", "")
    );
    if (valorSaque > saldo) {
        alert("Saldo insuficiente");
    } else {
        const confirmacao = confirm("Deseja realmente realizar o saque?");
        if (confirmacao === true) {
            saldo = saldo - valorSaque;
            apresentarSaldo();
        }
    }
}
function apresentarSaldo() {
    alert("Saldo atual: R$ " + saldo.toFixed(2).replace(".", ","));
}

function depositar() {
    const valorDeposito = parseFloat(
        prompt("Digite o valor do deposito", "R$ ")
        .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", "")
    );
    if (valorDeposito <= 0) {
        alert("Valor do déposito não pode ser menor ou igual a R$ 0,00");
        depositar();//recursão, método que chama ele mesmo(variavel chama ela mesmo dentro dela)
    } else {
        saldo = saldo + valorDeposito;
    }
}
