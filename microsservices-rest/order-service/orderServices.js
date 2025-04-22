const express = require('express')
const app = express();

app.use(express.json()) // o metodo use chama outro medoto que é o express.json, seria o metodo que diz o tipo de dados será utilizado, como o json

let orders = []; // array to store orders

app.post('/pedidos', (req,res) =>{ // o  post vai adicionar, ele vai mandar.

    const {id, product, quantity} = req.body; // destructure the order object
    if(!id || !product || !quantity){
        return res.status(400).send({ message: "Dados do pedido inválidos!"});
    
    }
    const newOrder = (id, product, quantity); // Create a new Order object
    orders.push(newOrder); //add the new order to the array
    res.status(201).send({ message: 'Pedido cadastrado com sucesso!', order: newOrder});

});

app.get('/pedidos', (req,res) =>{
    res.status(200).json(orders) //return the list of orders
});

app.get('/pedidos/:id', (req,res) =>{
    const orderId = req.params.id; //get the order id from the request params
    const order = orders.find(o => o.id === orderId); //find the order in the array by id
    // o find vai retornar o primeiro elemento que satisfaz a condição, se não encontrar retorna undefined
    if(!order){
        return res.status(404).send({ message: 'Pedido não encontrado!'});
    }
    res.status(200).json(order); //return the order
})

app.put('/pedidos/:id', (req,res) =>{
    const orderId = req.params.id; //get the order id from the request params
    const { product, quantity } = req.body; // destructure the order object
    const orderIndex = orders.findIndex(o => o.id === orderId); //find the order in the array by id
    if(orderIndex === -1){
        return res.status(404).send({ message: 'Pedido não encontrado!'});
    }
    if(!product || !quantity){
        return res.status(400).send({ message: "Dados do pedido inválidos!"});
    
    }
    orders[orderIndex] = { id: orderId, product, quantity }; //update the order in the array
    res.status(200).send({ message: 'Pedido atualizado com sucesso!', order: orders[orderIndex]});
})

app.listen(4000, () => console.log ('Order Service running on port 4000'))