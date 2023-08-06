const express = require('express');
const route = express.Router();

route.get('/checklist', (request, response) => {
  return response.send('Rota Da Checklist');
});

route.post('/checklist', (request, response) => {
  console.log(request.body);
  return response.status(200).send(request.body);
});

route.get('/checklist/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.status(200).send(`Id: ${id}`);
});

module.exports = route;