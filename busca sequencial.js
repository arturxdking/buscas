/*
    Busca sequencial em um vetor não ordenado
*/

function buscaSequencial(vetor, busca){
    for(i=0; i<vetor.length; i++){
        if(busca==vetor[i])
            return i
    }
    return -1
}
var vet = [20, 5, 15, 24, 67, 45, 1, 76, 21, 11]
var num = 15

var result = buscaSequencial(vet, num)
console.log(result)

/*
    Busca sequencial em um vetor ordenado
*/

function buscaSequencialOrdenado(vetor, valorBusca){
    for(i=0; i<vetor.length; i++){
        if(vetor[i]==valorBusca)
            return i
        else if(vetor[i] > valorBusca)
            return -1
    }
    return -1
}

var vet2 = [20, 5, 15, 24, 67, 45, 1, 76, 21, 11]
var num2 = 67

var result2 = buscaSequencialOrdenado(vet2, num2)
console.log(result2)