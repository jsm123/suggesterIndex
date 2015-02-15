    var _config = require('./indexConfig.js');
    var client = require('suggester')(_config).client;

    console.log('deleting index if exists');
    client.indices.delete({
        index: _config.index,
        ignore: [404]
    }).
    then(function () {
        console.log('creating index');
        return client.indices.create({
            index: _config.index,
            type: _config.type,
            body: {
                settings: _config.settings
            }
        });
    }).
    then(function () {
        console.log('adding mapping');
        return client.indices.putMapping({
            index: _config.index,
            type: _config.type,
            body: _config.mapping
        });
    }).
    then(function () {
        console.log('all done');
    }
);