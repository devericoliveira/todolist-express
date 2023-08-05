const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>');
});

app.get('/json', (resquest, response) => {
  response.json({
    id: 1,
    title: 'Tarefa 1',
    done: false
  })
})

app.listen(3000, () => console.log('Escutando na porta 3000.'));