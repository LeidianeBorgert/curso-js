function exemploWhile01() {
    //solicitar quais os 5 itens da compra do mercado
    //Dado que preciso solicitar dados para uma quantidade definida, utilizo o indice
    let indice = 0; //indice sempre começa com 0 do tipo inteiro
    while (indice <= 4) { //enquanto indice for menor ou igual a 5, repetir
        let item = prompt("Digite o nome do item")

        //Incrementar
        indice = indice + 1;
    }

}
function exemploWhile02() {
    //Solicitar para 3 pessoas
    //Massa de dados
    //luquinhasDaGalera;1000;900;20
    //geraldao;5;5;0
    //carlos;20;0;99

    let indice = 0;
    while (indice < 3) {
        let nick = prompt("Digite seu nick").trim();
        let partidas = parseInt(prompt("Digite o número de partidas"));
        let percas = parseInt(prompt("Digite o número de percas"));
        let pdl = parseInt(prompt("Digite o PDL"));

        indice = indice + 1;
    }
}
//while descobrir o maior
function descobrirMaiorAltura() {
    //solicitar a altura de 12 alunos + professor para descobrir a maior altura

    let indice = 0;
    let maioAltura = 0;
    while (indice < 13) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maioAltura) {
            maioAltura = altura;
        }
        indice = indice + 1
    }
    alert("Maior Altura: " + maioAltura)
}

//WHILE DESCOBRIR A MENOR IDADE 
function descobrirMenorIdade() {
    //ana 24
    //pedro 15
    //leticia 18

    debugger;
    let indice = 0;
    let menorIdade = 999999999;
    while (indice < 3) {
        let nome = prompt("Digite o nome")
        let idade = parseInt(prompt("Digite a idade"));

        if (idade < menorIdade) {
            menorIdade = idade;
        }
        indice = indice + 1;
    }
    alert("Menor idade: " + menorIdade)
}

//WHILE ATÉ DIGITAR FIM 
function solicitarAteDigitarFim() {
    //solicitar o nome até digitar fim
    let nome = "";
    while (nome.toLocaleLowerCase().trim() !== "fim") {
        nome = prompt("Digite o nome ou 'fim' para encerrar");
        //alert("Nome: "+nome);
    }
}

function sistemComMenu() {
    let menu = 'Sistema: 1-Solicitar itens para compra mercado'
    '2 - Solcitar nome de 3 '
    '3 - Descobrir Maior altura'
    '4 - Descobrir Menor idade'
    '5 - Solicitar Ate Digitar '
    '100 - Sair'
    'Digite a opção escolhida';

    let opcaoEscolhida = 0;
    while (opcaoEscolhida !== 100) {
        opcaoEscolhida = parseInt(prompt(menu));
        debugger
        if (opcaoEscolhida === 1) {
            exemploWhile01();
        } else if (opcaoEscolhida === 2) {
            exemploWhile02();
        } else if (opcaoEscolhida === 3) {
            descobrirMaiorAltura();
        } else if (opcaoEscolhida === 4) {
            descobrirMenorIdade();
        } else if (opcaoEscolhida === 5) {
            solicitarAteDigitarFim();
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida");
        }
    }
}