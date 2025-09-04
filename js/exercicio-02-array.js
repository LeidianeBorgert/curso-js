//Exercício 02

// Gerar listas com os dados das músicas. v 
// Listas: titulos, anosDeLancamento, artistas, albuns, duracoesEmSegundos e generos.
// Massa de dados: Preencher as listas com 7 músicas de gêneros variados (Pop, Rock, Sertanejo, MPB, Rap).
// Criar o método que permite cadastrar nova música  v
// Criar os seguintes métodos:
// - Listar todas as músicas lançadas antes de 2000
// - Listar todas as músicas de um determinado artista (entrada via prompt)
// - Listar a música mais longa
// - Listar a música mais curta
// - Calcular a duração média das músicas cadastradas
// - Listar todas as músicas do gênero Rock
// - Listar todas as músicas cujo título tenha mais de 25 caracteres
// - Listar o álbum que possui a maior quantidade de músicas cadastradas  = futuro
// - Criar uma lista com os títulos e artistas das músicas de MPB
// - Criar uma lista com os títulos e anos de lançamento das músicas de Rap
// - Listar todas as músicas cujo título contenha a palavra "Amor"


let titulos = [];
let anosDeLancamento = [];
let artistas = [];
let albuns = [];
let duracoesEmSegundos = [];
let generos = [];

// Criar o método que permite cadastrar nova música 
function cadastrarMusicas() {
    let musica = prompt("Digite o nome da musica").trim().toLowerCase();
    let ano = parseInt(prompt("Digite o ano de lançamento").trim());
    let artista = prompt("Digite o nome do artistas").trim().toLowerCase();
    let album = prompt("Digite o nome do album").trim().toLowerCase();
    let duracao = parseFloat(prompt("Digite o o tempo de duração").trim().replace(",", "."));
    let genero = prompt("Digite o nome do gênero").trim().toLowerCase();

    titulos.push(musica);
    anosDeLancamento.push(ano);
    artistas.push(artista);
    albuns.push(album);
    duracoesEmSegundos.push(duracao);
    generos.push(genero);

    alert(`Música ${musica} cadastrada com sucesso!`);

}
// Gerar listas com os dados das músicas.
function listaDeMusicas() {
    let lista = "Lista de Músicas";
    for (i = 0; i < titulos.length; i = i + 1) {
        let musica = titulos[i];
        let ano = anosDeLancamento[i];
        let artista = artistas[i];
        let album = albuns[i];
        let duracao = duracoesEmSegundos[i];
        let genero = generos[i];


        lista = lista + "\n\t" + "Nome da música: " + musica + "\nAno de lançamento:" + ano + "\nArtista: " + artista + " " + "Album: " + album +
            "\nTempo de duração: " + duracao + " " + "Gênero: " + genero;

    }
    alert(lista);
}

// - Listar todas as músicas lançadas antes de 2000
function listarMusicasAntes2000() {
    let musicasLancadasAntes2000 = [];
    let anoDasMusica = 0;

    for (i = 0; i < titulos.length; i = i + 1) {
        let musica = titulos[i];
        let ano = anosDeLancamento[i];
        if (ano >= 2000) {
            musicasLancadasAntes2000.push(musica);
            anoDasMusica = ano;

        }

    }
    alert(`Lista de Músicas lançadas antes dos anos 2000: ${musicasLancadasAntes2000}`)
}