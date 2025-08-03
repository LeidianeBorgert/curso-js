function exercicio01() {
    alert("SuperDev 7ª Edição");
}
function exercicio02() {
    let nome = "Leidiane";
    let idade = 26;
    let peso = 51;
    let altura = 1.59;
    console.log("Nome:" + nome);
    console.log("Idade:" + idade + " " + "anos");
    console.log("Peso:" + peso + " " + "kg");
    console.log("Altura:" + altura + "m");
}
function exercicio03() {
    let personagem1 = "Vin";
    let personagem1raca = "Skaa";
    let personagem1skill = "Pode queimar todos os metais allomânticos";
    let personagem1paisOrigem = "Luthadel";
    let personagem1rota = "Salvadora do mundo";

    let personagem2 = "Thalen Vashir";
    let personagem2raca = "Alezi";
    let personagem2skill = "Manipula Luz da Iluminação e Progressão";
    let personagem2paisOrigem = "Jah Keved";
    let personagem2rota = "Agora viaja registrando as verdades que ninguém quer ouvir.";

    let personagem3 = "Selis Durn";
    let personagem3raca = "Nalthisiano";
    let personagem3skill = "Pode dar vida a objetos inanimados";
    let personagem3paisOrigem = "Hallandren";
    let personagem3rota = "Ex-sacerdote do Deus-Rei, Selis fugiu com centenas de Breaths roubados.";
    alert(
        "Personagem 01: " + personagem1 +
        "\nRaça: " + personagem1raca +
        "\nSkill: " + personagem1skill +
        "\nPaís de Origem: " + personagem1paisOrigem +
        "\nRota: " + personagem1rota +

        "\n\nPersonagem 02: " + personagem2 +
        "\nRaça: " + personagem2raca +
        "\nSkill: " + personagem2skill +
        "\nPaís de Origem: " + personagem2paisOrigem +
        "\nRota: " + personagem2rota +

        "\n\nPersonagem 03: " + personagem3 +
        "\nRaça: " + personagem3raca +
        "\nSkill: " + personagem3skill +
        "\nPaís de Origem: " + personagem3paisOrigem +
        "\nRota: " + personagem3rota
    );

}
function exercicio04() {
    let nome = "Leidiane";
    let peso = 51;
    let altura = 1.59;
    let imc = peso / (altura * altura)

    alert(
        "Nome: " + nome +
        "\nPeso: " + peso + " " + "kg" +
        "\nAltura: " + altura + " " + "m" +
        "\nIMC: " + imc
    );
}
function exercicio05() {
    let numeroSom1 = 5;
    let numeroSom2 = 10;
    let soma = numeroSom1 + numeroSom2;

    let numeroDiv1 = 8;
    let numeroDiv2 = 4;
    let divisao = numeroDiv1 / numeroDiv2;

    let numeroSub1 = 10;
    let numeroSub2 = 3;
    let subtracao = numeroSub1 - numeroSub2;

    let numeroMult1 = 6;
    let numeroMult2 = 6;
    let multiplicacao = numeroMult1 * numeroMult2;

    alert(

        "Soma:" + soma +
        "\nDivisão:" + divisao +
        "\nSubtração:" + subtracao +
        "\nMultiplicação:" + multiplicacao


    );
}
function exercicio06() {

    let modeloPlacaMae = "GIGABYTE B550";
    let precoPlacaMae = 869.99;

    let modeloPlacaVideo = "NVIDIA GEFORCE RTX 5060";
    let precoPlacaVideo = 2564;

    let modeloProcessador = "AMD";
    let precoProcessador = 749.99;

    let modeloMemoriaRam = "Midgard";
    let precoMemoniaRam = 390;

    let modeloFonte = "Redragon";
    let precoFonte = 289.89;

    let total = precoPlacaMae + precoPlacaVideo + precoProcessador + precoMemoniaRam + precoFonte;

    alert(
        "Placa Mãe: " + modeloPlacaMae + "   " + "Preço:R$ " + precoPlacaMae +
        "\nPlaca de Vídeo: " + modeloPlacaVideo +  "   "  +  "Preço:R$ " + precoPlacaVideo +
        "\nProcessador: " + modeloProcessador +  "   "  + "Preço:R$ " + precoProcessador +
        "\nMémoria RAM: " + modeloMemoriaRam +  "   "  + "Preço:R$ " + precoMemoniaRam +
        "\nFonte: " + modeloFonte +  "   " + "Preço:R$ " + precoFonte +
        "\nValor Total:R$ " + total
    );


}