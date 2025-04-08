const express = require('express')
const app = express()

app.use(express.json())

app.post('/pedidos', (req,res) =>{
    const pedido = req.body
    
    console.log("Pedido solicitado", pedido)
    res.send({message: 'Pedido solicitado com sucesso', pedido})

})

app.listen(4000, () => console.log ('User Service running on port 4000'))