const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

/**
 * Antes de configurar app.use(express.json()), o retorno foi 'undefined', 
 * pois ele nao conseguiu entender esse corpo que foi repassado.
 * 
 * Precisamos informar para o app, que iremos utilizar o JSON para o corpo das requisicoes
 */
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333)

