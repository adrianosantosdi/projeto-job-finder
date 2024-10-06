const express = require('express')
const app = express()
const db = require('./db/connection')
const bodyParser = require('body-parser')
const PORT = 5000

app.listen(PORT, function() {
    console.log('Servidor rodando');
    
})

app.use(bodyParser.urlencoded({ extended: false }))

db.authenticate()
    .then(() => {
        console.log('Conexão ativado com sucesso')        
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)        
    })

app.get('/', (req, res) => {
    res.send('Está funcionando')
})

app.use('/jobs', require('./rotes/jobs'))