const request = require('request');
const express = require('express');
const path = require('path');
const search = require('./utils/covidapi.js');

const app = express();

const expressPath = path.join(__dirname, '../public');

app.use(express.static(expressPath));

// To Dos:
// Wire up handlebars, potnetially without hbs module
// Create front end and test serving

search(process.argv[2], data => {
        const url = `https://api.covid19api.com/country/${data}/status/confirmed`;
        request({ url, json: true }, (error, response) => {
                for (let i = 0; i < response.body.length; i++) {
                        if (response.body[i].Date === '2020-03-20T00:00:00Z') {
                                console.log(response.body[i].Cases);
                        }
                }
        });
});

app.get('', (req, res) => {
        if (!req.query.country) {
                return res.send('Please enter a country');
        }

        res.send({
                test: 'Testing',
                requestText: req.query,
        });
});

app.listen(4000, () => {
        console.log('Server starting');
});
