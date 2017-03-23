'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const plugins = [
    {
        register: require('./plugins/base'),
        options: { 
            //some options
        }
    },
    {
        register: require('./plugins/util')
    }
];

server.connection({ port: 3000 });

server.register(plugins, (err) => {

    if (err) {
        throw err;
    }
    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
