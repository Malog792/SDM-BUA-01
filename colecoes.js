let numeros = [10, 20, 30, 40, 50, 60]
console.log(numeros[2])

let frutas = ["Maça", "Banana", "Laranja"]

console.log(frutas)

//Iterando sobre os elementos do array, ou seja, percorrer ele todo
frutas.forEach((fruta, index) =>{
    console.log(`${index} : ${fruta}`)
    
})

//Adicionando elementos


frutas.push("Uva") //Adiciona no fim
frutas.unshift("Melão") //Adiciona no início

console.log(frutas)

//Removendo elemento

frutas.pop()  //remove o último
frutas.shift() //remove o primeiro

console.log(frutas)

frutas.splice(2,1) //remove um elemento específico de acordo com o índice dado (primeiro o indice e em seguida a quantidade de remoção.) 

console.log(frutas)

// Utilizando Map, seria um array  no qual pode-se adicionar elementos de vários tipos, (string, inteiro e etc..)

let mapa = new Map()

mapa.set("nome", "Joana")
mapa.set("idade", 39 )

// Acessando valores

console.log(mapa.get("nome"))
console.log(mapa.get("idade"))

