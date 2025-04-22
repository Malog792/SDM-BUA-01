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

})

app.listen(4000, () => console.log ('Order Service running on port 4000'))