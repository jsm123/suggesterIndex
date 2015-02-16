    var _config = require('./indexConfig.js');
    var _client = require('suggester')(_config).client;

    console.log('deleting index if exists');
    _client.indices.delete({
        index: _config.index,
        ignore: [404]
    }).
    then(function () {
        console.log('creating index');
        return _client.indices.create({
            index: _config.index,
            type: _config.type,
            body: {
                settings: _config.settings
            }
        });
    }).
    then(function () {
        console.log('adding mapping');
        return _client.indices.putMapping({
            index: _config.index,
            type: _config.type,
            body: _config.mapping
        });
    }).
    then(function () {
        console.log('all done');
    }
);