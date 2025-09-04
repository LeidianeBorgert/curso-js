// Gerar listas com os dados dos livros.
// Listas: titulos, anosDePublicacao, editoras, numerosDePaginas, precos e categorias.
// Massa de dados: Preencher as listas com 7 livros de categorias diversificadas (Ficção, Romance, Financeiro, Tecnologia)
// Criar o método que permite cadastrar novo livro  V
// Criar os seguintes métodos:
// - Listar todos os livros da categoria Ficção V
// - Listar todos os livros publicados a partir do ano 2010 V
// - Listar todos os livros de uma determinada editora (entrada via prompt)
// - Listar todos os livros com mais de 300 páginas V
// - Listar o livro com maior número de páginas v
// - Listar o livro com menor número de páginas v
// - Listar a média de páginas dos livros cadastrados v
// - Listar todos os livros cujo título possua mais de 30 caracteres v
// - Listar o livro mais caro v
// - Listar o livro mais barato v
// - Criar uma lista com os títulos e preços dos livros da categoria Tecnologiav
// - Criar uma lista com os títulos e anos de publicação dos livros da categoria Romancev
// - Listar todos os livros cujo título possua a palavra "JavaScript"v

let titulos = ["O Hobbit", "Orgulho e Preconceito", "A psicologia financeira ", "Entendendo Algoritmos", "O Silmarillion", "Sacramentadora", "Yumi e o pintor de pesadelos"];
let anoPublicacao = [2019, 2023, 2021, 2017, 2019, 2024, 2025];
let editoras = ["Harper Collins", "José Olympio", "Harper Business", "Novatec", "Harper Collins", "Trama", "Trama"];
let numerosDePaginas = [336, 424, 304, 264, 496, 1536, 552];
let precos = [40.31, 67.28, 33.27, 54.15, 45.98, 134.44, 153.80];
let categorias = ["Ficção", "Romance", "Financeiro", "Tecnologia", "Ficção", "Ficção", "Ficção"];

// Criar o método que permite cadastrar novo livro

function cadastrarLivros() {
    let nome = prompt("Digite o nome do Livro").trim().toLowerCase();
    let ano = parseInt(prompt("Digite o ano de publicação do Livro"));
    let editora = prompt("Digite o nome da editora do Livro").trim().toLowerCase();
    let numeroPagina = parseInt(prompt("Digite o número de páginas do Livro"));
    let preco = parseFloat(prompt("Digite o preço do Livro").replace(",", "."));
    let categoria = prompt("Digite a categoria do Livro").trim().toLowerCase();

    titulos.push(nome);
    anoPublicacao.push(ano);
    editoras.push(editora);
    numerosDePaginas.push(numeroPagina);
    precos.push(preco);
    categorias.push(categoria);

    alert(`Livro ${nome} cadastrado com sucesso.`)
}
//Lista todos o livros cadastrados
function listaTodosLivros() {
    let lista = "Lista de livros";
    for (let i = 0; i < titulos.length; i = i + 1) {
        let nome = titulos[i];
        let ano = anoPublicacao[i];
        let editora = editoras[i];
        let preco = precos[i];
        let numeroPagina = numerosDePaginas[i];
        let categoria = categorias[i];

        lista = lista + "\n\t" + nome + "  " + " Ano de Publicação: " + ano + " " + " Editora: " + editora + " " + "Número de páginas:" + "(" + numeroPagina + ")" + " R$ " +
            preco + "(" + categoria + ")";
    }
    alert(lista)
}
// - Listar todos os livros da categoria Ficção
function listaLivrosFiccao() {
    let listaLivrosFiccao = [];
    for (i = 0; i < titulos.length; i = i + 1) {
        let categoria = categorias[i];
        let titulo = titulos[i];
        if (categoria === "Ficção") {
            listaLivrosFiccao.push(titulo);

        }
    }
    alert(`Lista de Livros da categoria ficção:\n${listaLivrosFiccao.join("\n")} `)
}
// - Listar todos os livros publicados a partir do ano 2010
function listaLivrosAno2010() {
    let livrosAno2010 = [];
    for (i = 0; i < titulos.length; i = i + 1) {
        let titulo = titulos[i];
        let ano = anoPublicacao[i];
        if (ano >= 2010) {
            livrosAno2010.push(titulo)
        }
    }
    alert(`Lista de Livros com ano de publicação a partir de 2010:\n${livrosAno2010.join("\n")}`)
}
// - Listar todos os livros de uma determinada editora (entrada via prompt)
function listaLivrosPorEditora() {

    let listaLivroEditora = "";
    let livrosNomePorEditora = [];
    let listarPorEditora = prompt("Digite a editora: ").trim().toLowerCase();
    for (i = 0; i < titulos.length; i = i + 1) {
        let editora = editoras[i];
        let titulo = titulos[i];

        if (editora.toLowerCase() === listarPorEditora) {
            listaLivroEditora = editora;
            livrosNomePorEditora.push(titulo);
        }
    }
    alert(`Lista de Livros da Editora:\n${livrosNomePorEditora.join("\n")}\nEditora:  ${listaLivroEditora}`)
}
// - Listar todos os livros com mais de 300 páginas
function livrosComMais300Paginas() {
    let quantidadeMaior300Paginas = 0;
    let listarLivrosPaginas = [];
    for (i = 0; i < titulos.length; i = i + 1) {
        let numeroPagina = numerosDePaginas[i];
        let titulo = titulos[i];
        if (numeroPagina >= 300) {
            quantidadeMaior300Paginas = quantidadeMaior300Paginas + 1;
            listarLivrosPaginas.push(titulo);
        }
    }
    alert(`Lista de Livros com mais de 300 páginas:\n${listarLivrosPaginas.join("\n")} `)
}
// - Listar o livro com maior número de páginas
function livroComMaiorNumeroDePaginas() {
    let livroMaiorPaginas = 0;
    let tituloLivroMaiorPaginas = "";
    for (i = 0; i < titulos.length; i = i + 1) {
        let numeroPagina = numerosDePaginas[i];
        let titulo = titulos[i];
        if (numeroPagina > livroMaiorPaginas) {
            livroMaiorPaginas = numeroPagina;
            tituloLivroMaiorPaginas = titulo;
        }
    }
    alert(` ${tituloLivroMaiorPaginas} é o maior livro com um total de ${livroMaiorPaginas} páginas.  `)
}
// - Listar o livro com menor número de páginas
function livroComMenorNumeroDePaginas() {
    let livroMenorPaginas = 9999999999999;
    let tituloLivroMenorPaginas = "";

    for (i = 0; i < titulos.length; i = i + 1) {
        let numeroPagina = numerosDePaginas[i];
        let titulo = titulos[i];
        if (numeroPagina < livroMenorPaginas) {
            livroMenorPaginas = numeroPagina;
            tituloLivroMenorPaginas = titulo;
        }

    }
    alert(` ${tituloLivroMenorPaginas} é o menor livro com um total de ${livroMenorPaginas} páginas.  `)
}

// - Listar a média de páginas dos livros cadastrados
function mediaDePaginas() {
    let somaPaginas = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let numeroPagina = numerosDePaginas[i];
        somaPaginas = somaPaginas + numeroPagina;
    }
    let media = somaPaginas / titulos.length;
    alert(`Média de páginas por Livros Cadastrados é : ${media.toFixed(2)}`);
}

// - Listar todos os livros cujo título possua mais de 30 caracteres
function tituloMaiorQue30() {
    let tituloLivroMaiorQue30 = "";
    for (i = 0; i < titulos.length; i = i + 1) {
        let titulo = titulos[i];
        if (titulo.length < 30) {
            tituloLivroMaiorQue30 = titulo;

        }
    }
    alert(`Livros com títulos maiores que 30 caracteres : ${tituloLivroMaiorQue30}`);
}

// - Listar o livro mais caro
function livroMaisCaro() {
    let livroMaisCaro = 0;
    let tituloLivroMaisCaro = "";

    for (i = 0; i < titulos.length; i = i + 1) {
        let preco = precos[i];
        let titulo = titulos[i];

        if (preco > livroMaisCaro) {
            livroMaisCaro = preco;
            tituloLivroMaisCaro = titulo;

        }

    }
    alert(` ${tituloLivroMaisCaro} é o livro mais caro com o valor de R$ ${livroMaisCaro.toFixed(2)}.  `)
}

// - Listar o livro mais barato
function livroMaisBarato() {
    let livroMaisBarato = 9999999;
    let tituloLivroMaisBarato = "";

    for (i = 0; i < titulos.length; i = i + 1) {
        let preco = precos[i];
        let titulo = titulos[i];

        if (preco < livroMaisBarato) {
            livroMaisBarato = preco;
            tituloLivroMaisBarato = titulo;

        }

    }
    alert(` ${tituloLivroMaisBarato} é o livro mais barato com o valor de R$ ${livroMaisBarato.toFixed(2)}.  `)
}
// - Criar uma lista com os títulos e preços dos livros da categoria Tecnologia
function listaLivrosDeTecnologia() {
    let listaLivrosTecnologia = "";
    let precoLivroTecnologia = 0;
    for (i = 0; i < titulos.length; i = i + 1) {
        let titulo = titulos[i];
        let categoria = categorias[i];
        let preco = precos[i];
        if (categoria === "Tecnologia") {
            listaLivrosTecnologia = titulo;
            precoLivroTecnologia = preco;

        }
    }
    alert(`Lista de livros de Tecnologia: \n${listaLivrosTecnologia} R$ ${precoLivroTecnologia}`)
}

// - Criar uma lista com os títulos e anos de publicação dos livros da categoria Romance
function listaLivroDeRomance() {
    let listaLivrosRomance = "";
    let anoLivroRomance = 0;
    for (i = 0; i < titulos.length; i = i + 1) {
        let titulo = titulos[i];
        let categoria = categorias[i];
        let ano = anoPublicacao[i];
        if (categoria === "Romance") {
            listaLivrosRomance = titulo;
            anoLivroRomance = ano;
        }
    }

    alert(`Lista de livros de Romance : \n${listaLivrosRomance}. Ano de Publicação ${anoLivroRomance}`)
}

// - Listar todos os livros cujo título possua a palavra "JavaScript"

function nomeLivroComJavaScript() {
    let livroComJava = "";
    for (i = 0; i < titulos.length; i = i + 1) {
        let titulo = titulos[i];
        if (titulo.includes("JavaScript")) { //utilizado includes para procurar o texto desejado
            livroComJava = titulo;
        }

    }
    alert(`Lista de livros que tem o título com JavaScript: \n${livroComJava}`)
}