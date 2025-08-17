function mediaBonus() {
    /* media ponderada calculo
    exemplo:
    nota 8 , peso2
    nota 7 , peso3
    nota 9 , peso5

    notas + peso =(8*2)+(7*3)+(9*5)=16+21+45=82
    peso 2+3+5= 10
    media poderada 82/10=8.2
     */
    let nota1 = parseInt(prompt("Informe a primeira nota de prova: "));
    let nota2 = parseInt(prompt("Informe a segunda nota de prova: "));
    let nota3 = parseInt(prompt("Informe a terceira nota de prova: "));
    let notaExame = parseInt(prompt("Informe nota do exame: "));
    let trabalhoExtra = prompt("Possui trabalho extra: ");

    let peso1 = 2;
    let peso2 = 3;
    let peso3 = 5;

    let somaPeso = peso1 + peso2 + peso3;
    let calculoNota = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    let somaMedia = calculoNota / somaPeso;
    let somaExame = (somaMedia + notaExame) / 2;


    if (somaMedia >= 7) {
        console.log("Aprovado")
    } else if (somaMedia < 7) {
        console.log("Em exame")
    } else if (somaExame >= 6) {
        console.log("Aprovado em Exame")
    } else if (somaExame <= 6) {
        console.log("Reprovado")
    } if (somaExame >= 6.8 + 0.2 && trabalhoExtra === "Sim") {
        console.log("Aprovado")
    } else (somaExame <= 6 && trabalhoExtra === "Não")
    console.log("Reprovado")
}

function descontoCupom() {
    let valorCompra = parseFloat(prompt("Informe o valor da compra: "));
    let cupom = prompt("Informe o cupom de desconto (FRETEGRATIS, DESC10 ou deixe vazio):");
    let desconto = 0; // porque a variação de desconto nessa questão ai o desconto inicia como 
    let frete = 25;
    valorCompra = valorCompra * (1 - desconto);
    let valorFinal = valorCompra + frete;

    if (valorCompra >= 500) {
        desconto = 0.15;
    } else if (valorCompra >= 300) {
        desconto = 0.10;
    } else if (valorCompra >= 150) {
        desconto = 0.05;
    } if (cupom === "DESC10") {
        valorCompra = valorCompra * 0.9;
    } else if (cupom === "FRETEGRATIS")
        frete = 0;


    console.log(valorCompra, valorFinal)
}
function estacionamento() {
    let horasUsuario = parseFloat(prompt("Infome quantas horas ficou estacionado:"));
    let pernoite = prompt("Informe se é pernoite (SIM ou NÃO):").toUpperCase();
    let preco = 0;

    if (horasUsuario <= 1) {
        preco = 12;
    } else if (horasUsuario < 4) {
        preco = 12 + (horasUsuario * 6);
    } else if (horasUsuario === 4) {
        preco = 30;
    } else {
        preco = 30;
    } if (pernoite === "SIM" && horasUsuario > 10) {
        preco = 20;
    }

    alert(`Valor total a pagar: R$ ${preco.toFixed(2)}`);/*A sintaxe ${} é usada dentro de uma 
    template string (entre crases ` ```) para inserir o valor de uma variável ou expressão 
    diretamente no texto.*/



}

function trianguloTipos() {
    let lado1 = parseInt(prompt("Digite um número:"))
    let lado2 = parseInt(prompt("Digite um número:"))
    let lado3 = parseInt(prompt("Digite um número:"))

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        console.log("Triângulo")
    }
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Equilátero")
    } else if (lado1 === lado3 || lado1 === lado2 || lado2 === lado3) {
        console.log("Isósceles")
    } else if (lado1 !== lado2 && lado3 !== lado2 && lado3 !== lado1) {
        console.log("Escaleno")
    } else {
        console.log("Triângulo Inválido")
    }
}

function quadrante() { }

function bolsaEstudos() {
    let media = parseFloat(prompt("Informe a sua média"))
    let rendaFamiliar = parseFloat(prompt("Informe sua renda familiar: R$"));
    let numeroMoradores = parseFloat(prompt("Informe quantas pessoas moram com você:"));
    let rendaPerCapita = rendaFamiliar / numeroMoradores;

    if (media >= 8 && rendaPerCapita <= 1320) {
        console.log("Bolsa Integral")
    } else if (media >= 7 && rendaPerCapita <= 1980) {
        console.log("Bolsa Parcial")
    } else {
        console.log("Sem bolsa")
    }
}


function emprestimo() {
    let salario = parseFloat(prompt("Informe seu salário:"));
    let tempoEmprego = parseFloat(prompt("Informe quanto tempo de emprego tem:"));
    let valorParcela = parseFloat(prompt("Informe valor da parcela:"));
    let negativado = prompt("Informe se esta negativado Sim ou Não");
    let motivo = [];/*lista que armazena valores por isso usado o push que adiciona uma valor no motivo com o push*/

    if (negativado.toLowerCase() === "sim") {
        motivo.push("Está negativado");

    } if (tempoEmprego < 6) {
        motivo.push("Tempo de emprego menor que 6 meses");

    } if (valorParcela > 0.3 * salario) {
        motivo.push("Parcela maior que 30% do salário");
    } if (motivo.length === 0) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado. Motivos:" + motivo);
    }


}
function multaPorVelocidade() {
    let velocidade = parseInt(prompt("Informe a velocidade: "));
    let limiteVia = parseInt(prompt("Informe o limite de velocidade da via: "));
    let excesso = velocidade - limiteVia;
    let percentual = (excesso / limiteVia) * 100; /*tranforma em percentural para que possa validar os If abaixo*/

    if (velocidade <= limiteVia) {
        console.log("Dentro do limite")
    } else if (percentual <= 20) {
        console.log("Infração leve")
    } else if (percentual <= 50) {
        console.log("Infração grave")
    } else if (percentual > 50)
        console.log("Infração gravíssima")

}
function saudacaoPorHora() {
    let hora = parseFloat(prompt("Informe a hora: "));

    if (hora < 0 || hora > 23) {
        console.log("Hora inválida")
    } else if (hora >= 5 && hora <= 11) {
        console.log("Bom dia")
    } else if (hora >= 12 && hora <= 17) {
        console.log("Boa tarde")
    } else if (hora >= 18 && hora <= 23 || hora >= 0 && hora <= 4) {
        console.log("Boa noite")
    }

}
function planoCelular() {
    /*Peça código do plano (1=Basic, 2=Plus, 3=Pro) e se quer internet extra (sim/não).

Basic: R$ 39; Plus: R$ 59; Pro: R$ 79.

Internet extra: +R$ 15 (apenas se Plus/Pro).

Se tentar extra no Basic, negar e avisar. */
    let codigoPlano = parseInt(prompt("Informe o código do plano 1 - Basic| 2 - Plus | 3 - Pro : "));
    let internetExtra = prompt("Informe se que internet extra (SIM ou NÃO):").toUpperCase();
    let basic = 1;
    let plus = 2;
    let pro = 3;
    let precoPlanos = 0;
    let taxa = 15;

    if (codigoPlano === 1 && internetExtra === "SIM") {
        console.log("Plano de internet extra negado para Basic")
    } else if (codigoPlano === 1) {
        precoPlanos = 39;
        console.log("Plano de internet Basic: R$ " + precoPlanos);
    } else if (codigoPlano === 2 && internetExtra === "SIM") {
        precoPlanos = 59 + taxa;
        console.log("Plano de internet Plus: R$ " + precoPlanos);
    } else if (codigoPlano === 2 && internetExtra === "SIM") {
        precoPlanos = 79 + taxa;
        console.log("Plano de internet Pro: R$ " + precoPlanos);
    }
}

function validarData() {
    let dia = parseInt(prompt("Digite o dia:"));
    let mes = parseInt(prompt("Digite o mês (1-12):"));
    let ano = parseInt(prompt("Digite o ano:"));

    let diaMax;

    if (mes < 1 || mes > 12) {
        console.log("Data inválida");
        return;
    }

    // Define dias máximos com base no mês
    if (mes === 2) {
        // Ano bissexto?
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            diaMax = 29;
        } else {
            diaMax = 28;
        }
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        diaMax = 30;
    } else {
        diaMax = 31;
    }

    // Verifica se o dia é válido
    if (dia >= 1 && dia <= diaMax) {
        console.log("Data válida");
    } else {
        console.log("Data inválida");
    }
}

function energiaEletricaFaixa() {
    let consumo = parseFloat(prompt("Informe o consumo em kWh:"));
    let tarifaSocial = prompt("Possui tarifa social? (SIM ou NÃO):").toUpperCase();
    let precoPorKwh=0;
    let total = 0;

    if(consumo <=0 ){
        console.log("Valor invalido")
    } else if (consumo <= 100){
        precoPorKwh = 0.60;
    }else if (consumo <=200){
        precoPorKwh = 0.75;
    }else{
        precoPorKwh = 0.90;
    }if (tarifaSocial === "SIM" && consumo <= 150){
        total = 0.85;
    }
    console.log("Total a pagar: R$ " + total.toFixed(2));
}


function meiaEntrada() { }
function jogoDeDados() { }
function estoque() { }
function contaRestaurante() { }
function freteDistancia() { }
function horarioFuncionamento() { }
function validacaoNotas() { }
function credencialAcesso() { }
function simuladorCombustivel() { }
function validacaoSenha() { }
function classificacaoTemperatura() { }
function validacaoHorarioProva() { }
function seguroVeiculo() { }


