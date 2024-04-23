
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const basicDoc = require('./docs/api_basic_doc_build.json');
const app = express();

app.get('/rota', (req, res) => {
res.send('Olá, esta é a rota /rota!');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(basicDoc));

 

app.listen(3000, () => {
console.log('Servidor rodando na porta 3000');
});

