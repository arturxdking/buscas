function randomico(vetor){
    while(i<10){
        vetor[i]=parseInt(Math.random() * i)
        i++
    }
}

let i=0
let nums=[]

randomico(nums)
console.log(nums)