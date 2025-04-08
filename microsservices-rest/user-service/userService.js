const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json);

app.post('/', (req,res) =>{
    const usuario = req.body;

    // await axios.post('http://localhost:4000/pedidos', {userId: usuario.id});

    // res.send({message: 'Usuário criado com sucesso!', usuario});
})

app.listen(3001, () => console.log ('User Service running on port 3000'))


