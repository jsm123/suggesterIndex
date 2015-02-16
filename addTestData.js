var config = require('./indexConfig.js');
var _suggester = require('suggester')(config).suggester;

var suggestions = [
    //'audi a4 1000 2000 € bis 200 KW blub ab 100000 km erstzulassung ab 2004 eingestellt seit vorgestern',
    'audi a4 baujahr 2010 benziner',
    'audi a4 baujahr 2011 diesel',
    'audi a4 Baujahr 2012 eletro München',
    'bla blu'
];

_suggester.createOrUpdate('bla blu');

//_suggester.createBulk(suggestions)
//    .then(function () {
//        return _suggester.createOrUpdate('bla blu');
//    })
//    .then(function () {
//        return _suggester.createOrUpdate('bla blu');
//    })
//    .then(function() {
//        console.log('test data added');
//    });