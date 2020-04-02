const request = require('request');

const search = (searchText, callback) => {
        const url = 'https://api.covid19api.com/countries';
        request({ url, json: true }, (error, response) => {
                for (let i = 0; i < response.body.length; i++) {
                        const current = response.body[i];
                        if (current.Country === searchText) {
                                callback(current.Slug);
                        }
                }
        });
};

module.exports = search;
