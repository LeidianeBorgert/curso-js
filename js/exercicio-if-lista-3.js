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
    let precoPorKwh = 0;
    let total = 0;

    if (consumo <= 0) {
        console.log("Valor invalido")
    } else if (consumo <= 100) {
        precoPorKwh = 0.60;
    } else if (consumo <= 200) {
        precoPorKwh = 0.75;
    } else {
        precoPorKwh = 0.90;
    } if (tarifaSocial === "SIM" && consumo <= 150) {
        total = 0.85;
    }
    console.log("Total a pagar: R$ " + total.toFixed(2));
}


function meiaEntrada() {
    let idade = parseInt(prompt("Informe sua idade:"));
    let estudante = prompt("Você é estudante? (SIM ou NÃO):").toUpperCase();

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida.");
        return;
    }
    if (idade < 12) {
        console.log("Paga meia-entrada. Motivo: menor de 12 anos.");
    } else if (idade >= 60) {
        console.log("Paga meia-entrada. Motivo: 60 anos ou mais.");
    } else if (estudante === "SIM") {
        console.log("Paga meia-entrada. Motivo: estudante.");
    } else {
        console.log("Paga entrada inteira. Nenhuma condição de meia-entrada aplicada.");
    }
}
function jogoDeDados() { }


function estoque() {
    let quantidadeEstoque = parseInt(prompt("Informe a quantidade em estoque:"));
    let estoqueMinimo = parseInt(prompt("Informe o estoque mínimo:"));

    if (isNaN(quantidadeEstoque) || isNaN(estoqueMinimo) || estoqueMinimo < 0) {
        console.log("Valor Inválido")
    } if (quantidadeEstoque <= 0) {
        console.log("Esgotado")
    } else if (quantidadeEstoque <= estoqueMinimo) {
        console.log("Crítico")
    } else if (quantidadeEstoque <= estoqueMinimo * 2) {
        console.log("Baixo")
    } else {
        console.log("OK")
    }
}

function contaRestaurante() { }
function freteDistancia() {
    let peso = parseFloat(prompt("Informe o peso da carga (kg):"));
    let distancia = parseFloat(prompt("Informe a distância (km):"));

    if (isNaN(peso) || peso <= 0 || isNaN(distancia) || distancia <= 0) {
        console.log("Valores inválidos.");
        return;
    }

    if (peso > 30) {
        console.log("Carga não aceita.");
        return;
    }

    let baseFrete = 0;

    if (peso <= 2) {
        baseFrete = 12;
    } else if (peso <= 10) {
        baseFrete = 25;
    } else {
        baseFrete = 40;
    }

    let adicional = 0;

    if (distancia <= 100) {
        adicional = 0;
    } else if (distancia <= 500) {
        adicional = 15;
    } else {
        adicional = 30;
    }

    let total = baseFrete + adicional;
    console.log("Valor do frete: R$ " + total.toFixed(2));
}

function horarioFuncionamento() {
    let dia = parseInt(prompt("Informe o dia da semana (1=Dom, 2=Seg ... 7=Sáb):"));
    let hora = parseInt(prompt("Informe a hora (0 a 23):"));
    let feriado = prompt("Hoje é feriado? (SIM ou NÃO):").toUpperCase();

    if (
        isNaN(dia) || dia < 1 || dia > 7 ||
        isNaN(hora) || hora < 0 || hora > 23 ||
        (feriado !== "SIM" && feriado !== "NÃO")
    ) {
        console.log("Dados inválidos.");
        return;
    }

    if (dia === 1) {
        console.log("Fechado (domingo).");
        return;
    }

    if (feriado === "SIM" && dia >= 2 && dia <= 6) {
        console.log("Fechado (feriado em dia útil).");
        return;
    }

    if (dia >= 2 && dia <= 6) { // Segunda a sexta
        if (hora >= 9 && hora < 18) {
            console.log("Aberto.");
        } else {
            console.log("Fechado (fora do horário).");
        }
    } else if (dia === 7) { // Sábado
        if (hora >= 9 && hora < 13) {
            console.log("Aberto.");
        } else {
            console.log("Fechado (fora do horário).");
        }
    } else {
        console.log("Dia inválido.");
    }
}

function validacaoNotas() { }
function credencialAcesso() {
    let perfil = parseInt(prompt("Informe o perfil (1=Usuário, 2=Gestor, 3=Admin):"));
    let chave = parseInt(prompt("Informe a chave de segurança (número):"));

    if (isNaN(perfil) || isNaN(chave)) {
        console.log("Dados inválidos.");
        return;
    }

    if (perfil === 1) {
        console.log("Acesso concedido: Usuário (acesso básico).");

    } else if (perfil === 2) {
        if (chave % 2 === 0) {
            console.log("Acesso concedido: Gestor.");
        } else {
            console.log("Acesso negado: chave deve ser PAR para gestor.");
        }

    } else if (perfil === 3) {
        if (chave > 100 && chave % 5 === 0) {
            console.log("Acesso concedido: Administrador.");
        } else {
            console.log("Acesso negado: chave deve ser múltipla de 5 e maior que 100 para admin.");
        }

    } else {
        console.log("Perfil inválido.");
    }
}
 
function simuladorCombustivel() {

    let precoEtanol = parseFloat(prompt("Informe o preço do etanol:"));
    let precoGasolina = parseFloat(prompt("Informe o preço da gasolina:"));

    if (isNaN(precoEtanol) || precoEtanol <= 0 || isNaN(precoGasolina) || precoGasolina <= 0) {
        console.log("Preços inválidos.");
        return;
    }

    let razao = precoEtanol / precoGasolina;

    console.log("Razão etanol/gasolina: " + razao.toFixed(2));

    if (razao <= 0.7) {
        console.log("Compensa usar ETANOL.");
    } else {
        console.log("Compensa usar GASOLINA.");
    }
}

function validacaoSenha() {
    let senha = prompt("Digite a senha:");
    let confirmacao = prompt("Confirme a senha:");

    if (!senha || !confirmacao) {
        console.log("Senha inválida.");
    } else if (senha !== confirmacao) {
        console.log("Senhas não coincidem.");
    } else if (senha.length < 6) {
        console.log("Senha fraca (mínimo 6).");
    } else {
        console.log("Senha cadastrada.");
    }
}

function classificacaoTemperatura() {
    function classificarTemperatura() {
        let temperatura = parseFloat(prompt("Informe a temperatura em °C:"));

        if (isNaN(temperatura)) {
            console.log("Temperatura inválida.");
            return;
        }

        if (temperatura < 0) {
            console.log("Congelante");
        } else if (temperatura <= 14) {
            console.log("Frio");
        } else if (temperatura <= 25) {
            console.log("Agradável");
        } else if (temperatura <= 35) {
            console.log("Quente");
        } else {
            console.log("Muito quente");
        }
    }
}
function validacaoHorarioProva() {
    let horaEntrada = parseInt(prompt("Informe a hora de entrada (0 a 23):"));
    let tempoProva = parseInt(prompt("Informe o tempo de prova em minutos:"));

    if (
        isNaN(horaEntrada) || horaEntrada < 0 || horaEntrada > 23 ||
        isNaN(tempoProva) || tempoProva <= 0
    ) {
        console.log("Dados inválidos.");
        return;
    }

    if (horaEntrada < 8 || horaEntrada > 10) {
        console.log("Entrada não permitida.");
    } else if (horaEntrada === 10) {
        if (tempoProva <= 120) {
            console.log("Prova permitida.");
        } else {
            console.log("Tempo excedido. Prova não permitida.");
        }
    } else {
        // Entrou entre 8h e 9h
        console.log("Prova permitida.");
    }
}

function seguroVeiculo() {
    let idade = parseInt(prompt("Informe sua idade:"));
    let anosCnh = parseInt(prompt("Quantos anos você tem de CNH?"));
    let sinistro = prompt("Houve sinistro nos últimos 12 meses? (SIM ou NÃO):").toUpperCase();

    // Validação básica
    if (
        isNaN(idade) || idade < 0 ||
        isNaN(anosCnh) || anosCnh < 0 ||
        (sinistro !== "SIM" && sinistro !== "NÃO")
    ) {
        console.log("Dados inválidos.");
        return;
    }

    // Verifica elegibilidade
    if (idade >= 21 && anosCnh >= 2 && sinistro === "NÃO") {
        let franquia = 1500;

        if (idade < 25 || anosCnh < 3) {
            franquia *= 1.2;  // aplica 20% de acréscimo
        }

        console.log("Condutor elegível ao seguro.");
        console.log("Franquia: R$ " + franquia.toFixed(2));
    } else {
        console.log("Condutor não elegível ao seguro.");
    }
}


