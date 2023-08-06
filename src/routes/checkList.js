const express = require('express');
const route = express.Router();

route.get('/checklist', (request, response) => {
  return response.send('Rota Da Checklist');
});

module.exports = route;