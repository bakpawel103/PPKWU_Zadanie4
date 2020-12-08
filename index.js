const express = require('express');

const https = require('http');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome at site, that will list all available companies with name provided in body and will generate vcf file.');
});

app.get('/getCompanies', (req, res) => {
  if(!req.body || (!req.body.name)) {
    res.status(500).send("Pass body with string property");
  } else {
    res.json({ result: req.body });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
