var config = require('./indexConfig.js');
var suggester = require('suggester')(config).suggester;

var suggestions = [
    'audi a4 baujahr 2010 benziner',
    'audi a4 baujahr 2011 diesel',
    'audi a4 Baujahr 2012 eletro München',
    'bla blu'
];

suggester.createBulk(suggestions)
    .then(function () {
        return suggester.updateExisting('bla blu');
    })
    .then(function () {
        return suggester.updateExisting('bla blu');
    })
    .then(function() {
        console.log('test data added');
    });