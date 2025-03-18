let map = new Map()

//insere valores no map
map.set("nome", "Mauricio")
map.set("idade", 22)
map.set("altura", 1.69)

console.log(map.get("nome"))
console.log(map.has("idade"))
console.log(map.size)

//itera a lista um por um
map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//remove o elemento selecionado
map.delete("idade")

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//remove todos os elementos
map.clear()

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//Mostra o número de elementos no map
console.log(map.size)