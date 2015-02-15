var config = require('./indexConfig.js');
var suggester = require('suggester')(_config).suggester;

var suggestions = [
    'audi a4 baujahr 2010 benziner',
    'audi a4 baujahr 2011 diesel',
    'audi a4 Baujahr 2012 eletro München',
    'bla blu'
];

suggester.createBulk(suggestions);
suggester.updateExisting('bla blu');
console.log('test data added');

//_client.index({
//    index: _config.index,
//    type: _config.type,
//    id: '1',
//    body: {
//        'suggest': {
//            'input': 'audi a4 baujahr 2010 benziner',
//            //'output': 'audi a4 baujahr 2010 benziner',
//            //'payload': {'artistId': 2321},
//            'weight': 1
//        }
//    }
//    }).
//    then(function () {
//        console.log('done adding data');
//    });