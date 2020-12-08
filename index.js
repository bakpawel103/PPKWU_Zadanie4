const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome at site, that will list all available companies with name provided in body and will generate vcf file.');
});
