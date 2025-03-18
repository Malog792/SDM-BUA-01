
function ola(nome){
    return `Olá, ${nome}`
}

console.log(ola("Mauricio"))

//função declarativa atribuida a uma constante, lembrando que let é variável só de bloco.
const soma = function(a, b){

    return a + b
}

console.log(soma(10,25))

// "=>" ele define o escopo da função inteira ou retorna o que precisar da função. Tanto abstrato. 
const mult = (x,y) => x*y

console.log(mult(10,25))
