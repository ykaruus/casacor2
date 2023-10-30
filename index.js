const express = require('express')
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const alert = require('alert')

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

const Validar = (value1, value2) => {
    const values = {
        nome: value1.split(" "),
        cargo: value2.split(/[0-9]/g, '')
    } // lucas usuario de lua
    if(values.nome == '' || values.cargo == '') 
    {
        console.log(values)
    }
}

app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname + '/public/registro.html')
})

app.post('/formulario', (req, res) => {
    Validar(req.body.nome, req.body.arquiteto)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}, e no host http://127.0.0.1:3000`)
})