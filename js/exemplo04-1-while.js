/*  CADERNO
------------------------ COMO DEPURAR --------------------------
Debug => Depurar (ir analisando o código linha a linha, para entender pq está ou n funcionando)
Breakpoint => Ponto de parada (quando chegar naquela linha ele para)
Step over (F10) => Vai para a próxima linha 
Step into (F11) => Entrar na função ou ir para a próxima linha
Resume (F8) => Continuar até encontrar outro breakpoint
Ex.: de chamar uma função: nomeDaFuncao()
Ex.: de chamar uma função prompt("asodjaosdj")
----------------------------------------------------------------
*/

function exemploWhile01() { // CADERNO + PC
    // Solicitar quais os 5 itens da compra do mercado 
    // Dado que preciso solicitar dados para uma quantidade definida, utilizo o indice
    let indice = 0; // Indice sempre começa com 0 do tipo inteiro
    while (indice <= 4) { // enquanto indice for menor ou igual a 5, repetir
        let item = prompt("Digite o nome do item");

        // Incrementar
        indice = indice + 1;
    }
}


function exemploWhile02() {
    // Solicitar para 3 pessoas
    // Massa de dados
    // luquinhasDaGalera;1000;900;20
    // geraldao;5;5;0
    // carlos;20;0;99 

    let indice = 0;
    while (indice < 3) {
        let nick = prompt("Digite seu nick").trim();
        let partidas = parseInt(prompt("Digite o número de partidas"));
        let percas = parseInt(prompt("Digite o número de percas"));
        let pdl = parseInt(prompt("Digite o PDL"));

        indice = indice + 1;
    }
}

// while descobrir o maior (Caderno + PC)
function descobrirMaiorAltura() {
    // solicitar a altura de 12 alunos + professor para descobrir a maior altura
    /*
     Massa de dados:
        Francisco 1,72
        Lucas 1,73
        Guilherme 1,75
        joshua 1,82
        Thiago 1,72
        vitor 1,80
        Gustavo 1,82
        Carlos 1,73
        John 1,73
        Vanderlei,178
        Felipe 1,68
        João 1,70
        Leidiane 1,59
    */
    let indice = 0;
    let maiorAltura = 0;
    while (indice < 13) {
        let altura = parseFloat(prompt("Digite a altura").replace(",", "."));

        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }
    alert("Maior Altura: " + maiorAltura);
}


// while descobrir a menor idade
function descobrirMenorIdade() {
    // Ana 24
    // Pedro 15
    // Letícia 18
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

// while até digitar fim (Caderno + PC)
function solicitarAteDigitarFim() {
    // Solicitar o nome até digitar fim
    let nome = "";
    while (nome.toLowerCase().trim() !== "fim") {
        nome = prompt("Digite o nome ou 'fim' para encerrar");
        // alert("Nome: "+ nome);
    }
}

function sistemaComMenu() {
    let menu = `Sistema:
    01 - Solicitar itens para compra mercado
    02 - Solicitar nome de 3 pessoas
    03 - Descobrir Maior Altura
    04 - Descobrir Menor Idade
    05 - Solicitar Ate Digitar Fim
    06 - Descobrir a quantidade de determinado texto
    07 - Descobrir a quantidade começa com 
    08 - Descobrir a quantidade termina com
    09 - Solicitar se deseja cadastrar outro
    10 - Solicitar a quantidade desejada para repetir
    11 - Validar texto até digitar corretamente
    12 - Validar int até digitar corretamente
    13 - Exemplo com várias validações
    100 - Sair
    Digite a opção escolhida`;
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
        } else if (opcaoEscolhida === 6) {
            descobrirQuantidadeDeterminadoTexto();
        } else if (opcaoEscolhida === 7) {
            descobrirQuantidadeComecaCom();
        } else if (opcaoEscolhida === 8) {
            descobrirQuantidadeTerminaCom();
        } else if (opcaoEscolhida === 9) {
            descobrirSeDesejaCadastrarOutro();
        } else if (opcaoEscolhida === 10) {
            descobrirQuantidadeParaCadastrar();
        } else if (opcaoEscolhida === 11) {
            validarString();
        } else if (opcaoEscolhida === 12) {
            validarInt();
        } else if (opcaoEscolhida === 13) {
            exemploComVariasValidacoes();
        } else if (opcaoEscolhida !== 100) {
            alert("Opção inválida");
        }
    }
}

// while descobrir a quantidade de determinado texto
function descobrirQuantidadeDeterminadoTexto() {
    let indice = 0;
    let quantidadeSc = 0;
    let quantidadeRs = 0;
    while (indice < 5) {
        let estado = prompt("Digite o nome do estado");

        if (estado === "SC") {
            // Se caiu aqui é pq é de Santa Catarina, ou seja,
            // vou incrementar a variável de quantidade de sc
            // pois o colab é de SC
            quantidadeSc = quantidadeSc + 1;
        } else if (estado === "RS") {
            quantidadeRs = quantidadeRs + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Quantidade SC: " + quantidadeSc +
        "\nQuantidade RS: " + quantidadeRs
    )
}

// while descobrir a quantidade começa com Batata
function descobrirQuantidadeComecaCom() {
    let indice = 0;
    let quantidadeBatata = 0, quantidadeOutrosProdutos = 0;
    while (indice < 5) {
        let produto = prompt("Digite o nome do produto");

        if (produto.toLowerCase().startsWith("batata")) {
            quantidadeBatata = quantidadeBatata + 1;
        } else {
            quantidadeOutrosProdutos = quantidadeOutrosProdutos + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Quantidade Batata: " + quantidadeBatata +
        "\nQuantidade Outros Produtos: " + quantidadeOutrosProdutos
    )
}

// while descobrir a quantidade termina com LTDA
function descobrirQuantidadeTerminaCom() {
    let indice = 0;
    let quantidadeEmpresasLtda = 0;
    while (indice < 5) {
        let empresa = prompt("Digite o nome da empresa");

        if (empresa.toLowerCase().endsWith("ltda")) {
            quantidadeEmpresasLtda = quantidadeEmpresasLtda + 1;
        }

        indice = indice + 1;
    }

    let quantidadeEmpresasNaoLtda = indice - quantidadeEmpresasLtda;
    alert(
        "Quantidade empresas LTDA: " + quantidadeEmpresasLtda +
        "\nQuantidade empresas não LTDA: " + quantidadeEmpresasNaoLtda
    )
}

// while solicitar se deseja cadastrar outro
function descobrirSeDesejaCadastrarOutro() {
    let desejaCadastrar = "sim";
    while (desejaCadastrar === "sim") {
        let empresa = prompt("Digite o nome da empresa");

        desejaCadastrar = prompt("Deseja cadastrar outra? [sim/não]").toLowerCase().trim();
    }
}

// while solicitar a quantidade desejada para repetir
function descobrirQuantidadeParaCadastrar() {
    let quantidadeDesejada = parseInt(prompt("Digite a quantidade de empresas para cadastrar"));
    let indice = 0;
    while (indice < quantidadeDesejada) {
        let empresa = prompt("Digite o nome da empresa");

        indice = indice + 1;
    }
}

// while com validação de string
function validarString() {
    let cnpj = "";
    while (cnpj.length !== 18) {
        cnpj = prompt("Digite o CNPJ (00.000.000/0000-00)").trim();

        if (cnpj.length !== 18) {
            alert("CNPJ incorreto, no mínimo e no máximo 18 caracteres");
        }
    }
}

// while com validação de int
function validarInt() {
    let quantidadeColaboradores = 0;
    // min: 1
    // max: 100
    while (quantidadeColaboradores < 1 || quantidadeColaboradores > 100) {
        quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores"));

        if (quantidadeColaboradores < 1) {
            alert("Mínimo de 1 colaborador");
        } else if (quantidadeColaboradores > 100) {
            alert("Máximo de 100 colaboradores");
        }
    }
}

function exemploSoma(){
    let indice = 0;
    let soma = 0;
    while (indice < 3) {
        let idade = parseInt(prompt("Digite a idade"));

        soma = soma + idade;

        indice = indice + 1;
    }
    alert("Soma: " + soma)
}

function exemploMedia(){
    let indice = 0;
    let soma = 0;
    while (indice < 3) {
        let idade = parseInt(prompt("Digite a idade"));

        soma = soma + idade;

        indice = indice + 1;
    }
    let media = soma / indice;
    alert("Média: " + media)
}

function exemploComVariasValidacoes() {
    let quantidadeDesejada = 0;
    while (quantidadeDesejada < 1) {
        quantidadeDesejada = parseInt(prompt("Digite a quantidade de empresas para cadastrar"));

        if (quantidadeDesejada < 1) {
            alert("No mínimo 1 empresa");
        }
    }

    let indice = 0;
    while (indice < quantidadeDesejada) {
        let empresa = "";
        while (empresa.length < 3 || empresa.length > 120) {
            empresa = prompt("Digite o empresa").trim();

            if (empresa.length < 3 || empresa.length > 120) {
                alert("empresa incorreto, no mínimo 3 caracteres e no máximo 120 caracteres");
            }
        }

        let cnpj = "";
        while (cnpj.length !== 18) {
            cnpj = prompt("Digite o CNPJ (00.000.000/0000-00)").trim();

            if (cnpj.length !== 18) {
                alert("CNPJ incorreto, no mínimo e no máximo 18 caracteres");
            }
        }

        let quantidadeColaboradores = 0;
        while (quantidadeColaboradores < 1 || quantidadeColaboradores > 100) {
            quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores"));

            if (quantidadeColaboradores < 1) {
                alert("Mínimo de 1 colaborador");
            } else if (quantidadeColaboradores > 100) {
                alert("Máximo de 100 colaboradores");
            }
        }

        indice = indice + 1;
    }
}
// while com validação de int
// while com ou
// while com e




// while com while validando string/int


//AULA DO DIA 19/08
// Copiar no caderno + PC
let quantidadeFogo = 0, quantidadeVento = 0, quantidadeRelampago = 0, quantidadeTerra = 0, quantidadeAgua = 0;
let somaMissoes = 0;
let menorQuantidadeMissoes = 999999999;
let quantidadeNinjas = 0;

function sistemaNinja() {
    let desejaCadastrar = true;
    while (desejaCadastrar === true) {
        let nome = solicitarNome();
        let nivel = solicitarNivel();
        let missoes = solicitarQuantidadeMissoes();
        let vila = solicitarVila();
        let elementos = solicitarElementos();

        let salario = obterSalario(nivel);

        calcularQuantidadePorElemento(elementos);
        calcularSomaMissoes(missoes);
        descobrirMenorMissao(missoes);
        apresentarDadosDoNinja(nome, nivel, missoes, vila, elementos, salario);

        // confirm retorna true ou false
        desejaCadastrar = confirm("Deseja cadastrar outro ninja?");
        // Necessário para a média
        quantidadeNinjas = quantidadeNinjas + 1;
    }

    apresentarRelatorio();
}

function apresentarDadosDoNinja(nome, nivel, missoes, vila, elementos, salario){
    alert(
        "Ninja: " + nome + 
        "\nNível: " + nivel + 
        "\nQuantidade de Missões: " + missoes + 
        "\nVila: " + vila + 
        "\nElementos: " + elementos + 
        "\nSalário: " + salario
    )
}

function apresentarRelatorio() {
    let mediaMissoes = somaMissoes / quantidadeNinjas;
    alert(
        "Quantidade de ninjas: " + quantidadeNinjas +
        "\nQuantidade de ninjas do fogo: " + quantidadeFogo +
        "\nQuantidade de ninjas do vento: " + quantidadeVento +
        "\nQuantidade de ninjas do relâmpago: " + quantidadeRelampago +
        "\nQuantidade de ninjas do terra: " + quantidadeTerra +
        "\nQuantidade de ninjas do água: " + quantidadeAgua +
        "\nMenor quantidade de missões: " + menorQuantidadeMissoes +
        "\nMédia das missões: " + mediaMissoes)
}

function calcularSomaMissoes(missoes) {
    somaMissoes = somaMissoes + missoes;
}

function descobrirMenorMissao(missoes) {
    if (missoes < menorQuantidadeMissoes) {
        menorQuantidadeMissoes = missoes;
    }
}

function obterSalario(nivel) {
    let salario = 0;
    // Genin, Chunin, Jonin I, Jonin II, ANBU, Kage
    if (nivel === "Genin") {
        salario = 1200;
    } else if (nivel === "Chunin") {
        salario = 2500;
    } else if (nivel === "Jonin I") {
        salario = 5000;
    } else if (nivel === "Jonin II") {
        salario = 7000;
    } else if (nivel === "ANBU") {
        salario = 9000;
    } else if (nivel === "Kage") {
        salario = 15000;
    }
    return salario;
}

function calcularQuantidadePorElemento(elementos) {

    if (elementos.includes("Fogo")) {
        quantidadeFogo = quantidadeFogo + 1;
    }
    if (elementos.includes("Vento")) {
        quantidadeVento = quantidadeVento + 1;
    }
    if (elementos.includes("Relâmpago")) {
        quantidadeRelampago = quantidadeRelampago + 1;
    }
    if (elementos.includes("Terra")) {
        quantidadeTerra = quantidadeTerra + 1;
    }
    if (elementos.includes("Água")) {
        quantidadeAgua = quantidadeAgua + 1;
    }
}

function solicitarNome() {
    // nome: min: 3, max: 40
    let nomeNinja = prompt("Digite o nome do ninja").trim();

    while (nomeNinja.length < 3 || nomeNinja.length > 40) {
        nomeNinja = prompt("Nome deve conter no mínimo 3 caracteres e no máximo 40.\nDigite o nome do ninja").trim();
    }

    return nomeNinja;
}


function solicitarNivel() {

    let nivelNinja = prompt("Níveis disponíveis: Genin, Chunin, Jonin I, Jonin II, ANBU, Kage.\nDigite o nível");
    while (
        nivelNinja !== "Genin" &&
        nivelNinja !== "Chunin" &&
        nivelNinja !== "Jonin I" &&
        nivelNinja !== "Jonin II" &&
        nivelNinja !== "ANBU" &&
        nivelNinja !== "Kage") {
        nivelNinja = prompt("Nível inválido.\nNíveis disponíveis: Genin, Chunin, Jonin I, Jonin II, ANBU, Kage.\nDigite o nível");
    }
    return nivelNinja;
}

function solicitarQuantidadeMissoes() {
    let missoesNinja = parseInt(prompt("Digite a quantidade de missões"));
    while (missoesNinja < 5 || missoesNinja > 200) {
        missoesNinja = parseInt(prompt("Quantidade inválida, min: 5 e max: 200.\nDigite a quantidade de missões"));
    }
    return missoesNinja;
}

function solicitarVila() {
    let numeroDaVila = parseInt(prompt(`Vilas disponíveis:
        1 - Vila da Folha
        2 - Vila da Areia
        3 - Vila da Névoa
        4 - Vila da Nuvem
        5 - Vila da Pedra
        6 - Vila da Chuva
        7 - Vila da Grama
        8 - Vila da Cachoeira
        9 - Vila do Som
    Digite o número da vila`));
    while (numeroDaVila < 1 || numeroDaVila > 9) {
        numeroDaVila = parseInt(prompt(`Vila inválida.\nVilas disponíveis:
        1 - Vila da Folha
        2 - Vila da Areia
        3 - Vila da Névoa
        4 - Vila da Nuvem
        5 - Vila da Pedra
        6 - Vila da Chuva
        7 - Vila da Grama
        8 - Vila da Cachoeira
        9 - Vila do Som
    Digite o número da vila`));
    }

    return numeroDaVila;
}

function solicitarElementos() {
    return prompt("Digite os elementos separados por ';'");

    // let elementos = "";
    // let adicionar = true;
    // while(adicionar === true){
    //     let elemento = prompt("Digite o elemento");
    //     if(elemento === `Fogo` || elemento === `Vento` || elemento === `Relâmpago` || elemento === `Terra` || elemento === `Água`){
    //         elementos = elementos + elemento + ";";
    //     }else{
    //         alert("Elemento inválido");
    //     }
    //     adicionar = confirm("Deseja cadastrar outro elemento?")
    // }
    // return elementos;
}
function exemploLogin() {
    let usuario = "";
    let senha = "";
    let quantidadeTentativas = 0;

    while (usuario !== "admin" || senha !== "batatinha") {
        usuario = prompt("Digite o usuário");
        senha = prompt("Digite a senha");

        if (usuario === "admin" && senha === "batatinha") {
            alert("🎉 Finalmente acertou!");
            return;
        }

        // mensagens diferentes por tentativa (sem vetor)
        if (quantidadeTentativas === 0) {
            alert("🤨 Tá difícil? A senha não é essa, campeão...");
        } else if (quantidadeTentativas === 1) {
            alert("😒 Errou de novo! Tá gastando suas chances...");
        } else if (quantidadeTentativas === 2) {
            alert("🙄 Última tentativa, pensa direito antes de digitar!");
        }

        
        if (quantidadeTentativas === 3) {
            alert("❌ Qtd de tentativas máxima atingida. Melhor desistir 😂");
            return;
        }
        
        quantidadeTentativas = quantidadeTentativas + 1;
        console.log("Qtd de tentativas: " + quantidadeTentativas);
    }
}

