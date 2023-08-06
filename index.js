const express = require('express');
const app = express();
const checklistRouter = require('./src/routes/checkList');

app.use(express.json());
// ROTAS
app.use(checklistRouter);

app.listen(3000, () => console.log('Escutando na porta 3000.'));