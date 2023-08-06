const express = require('express');
const route = express.Router();

route.get('/checklist', (request, response) => {
  return response.send('Rota Da Checklist');
});

route.post('/checklist', (request, response) => {
  console.log(request.body);
  return response.status(200).send(request.body);
});

module.exports = route;