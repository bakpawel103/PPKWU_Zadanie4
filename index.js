const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome at site, that will list all available companies with name provided in body and will generate vcf file.');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
