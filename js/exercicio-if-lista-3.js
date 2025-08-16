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

    mediaBonus()