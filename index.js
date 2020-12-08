const express = require('express');

const https = require('https');

const bodyParser = require('body-parser');
const cors = require('cors');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { writeFileSync } = require('fs')

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
    getCompaniesListFromUrl(req.body.name, function(result) {
      const dom = new JSDOM(result);
      var companyList = [];

      var element = dom.window.document.querySelectorAll(`[id="company-list"]`);
      console.log(JSON.stringify(element));

      for(let nodeListIndex = 0; nodeListIndex < element.length; nodeListIndex++) {
        var companyName = element[nodeListIndex].querySelector('.company-name').innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim();

        companyList.push({
          companyName: companyName
        });
      }

      res.send(element);
    });
  }
});

var getCompaniesListFromUrl = (name, callback) => {
  https.get(`https://panoramafirm.pl/szukaj?k=${name}&l=`, function(res) {
    var data = [];

    res.on('data', function(chunk) {
      data.push(chunk);
    }).on('end', function() {
      data = Buffer.concat(data).toString();
      callback(data);
    });
  });
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
