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
  if(!req.query || (!req.query.name)) {
    res.status(500).send("Pass body with string property");
  } else {
    getCompaniesListFromUrl(req.query.name, function(result) {
      const dom = new JSDOM(result);
      var companyList = [];

      var element = dom.window.document.querySelectorAll(`[id="company-list"]`)[0];

      var companyNames = element.querySelectorAll('.company-name');
      var companyAddresses = element.querySelectorAll('.address');
      var companyPhoneNumbers = element.querySelectorAll('.addax-cs_hl_phonenumber_click');

      for(let nodeListIndex = 0; nodeListIndex < companyNames.length; nodeListIndex++) {
        var companyName = decodeHtml(companyNames[nodeListIndex].innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim());
        var companyAddress = decodeHtml(removeTags(companyAddresses[nodeListIndex].innerHTML.replace(/(\r\n|\n|\r)/gm, "").trim()));
        var companyPhoneNumber = decodeHtml(companyPhoneNumbers[nodeListIndex].getAttribute("title").replace(/(\r\n|\n|\r)/gm, "").trim());

        companyList.push({
          name: companyName,
          address: companyAddress,
          phoneNumber: companyPhoneNumber
        });
      }

      res.send(companyList);
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

var decodeHtml = (encodedString) => {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
      "nbsp": " ",
      "amp" : "&",
      "quot": "\"",
      "lt"  : "<",
      "gt"  : ">"
  };
  return encodedString.replace(translate_re, function(match, entity) {
      return translate[entity];
  }).replace(/&#(\d+);/gi, function(match, numStr) {
      var num = parseInt(numStr, 10);
      return String.fromCharCode(num);
  });
}

var removeTags = (str) => {
  if ((str===null) || (str==='')) return false;
  else str = str.toString();

  return str.replace( /(<([^>]+)>)/ig, '');
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
