
//CRUD
// i = indice
//push = para criar um elemento <nome-da-variavel>.push
//splice = deletar um elemento precisa colocar o indice que vc esta listando e a quantidade que deseja que seja deletado

let pets = []; 
function cadastrarPet() {  //CREATED (criar)
    let nomePet = prompt("Digite o nome do Pet");
    pets.push(nomePet);
}
function listarPets() { //READ (ler)
    let lista = "Lista de Pets";
    for (let i = 0; i < pets.length; i = i + 1) {
        let pet = pets[i];
        lista = lista + "\n\t" + i + "=>" + pet;
    }
    alert(lista)
}
function alterarPet() { //UPDATE (incluir um novo elemento)
    let indiceParaAlterar = parseInt(prompt("Digite o indice do Pet que deseja alterar"));
    pets[indiceParaAlterar] = prompt("Digite o novo nome do pet");
    alert("Pet alterado com sucesso");
}
function removerPet() {// DELETE (apagar o elemento )
    let indiceParaApagar = parseInt(prompt("Digite o indice do Pet que deseja apagar"));
    pets.splice(indiceParaApagar, 1);
    alert("Pet removido com sucesso");

}