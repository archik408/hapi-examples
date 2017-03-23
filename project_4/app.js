'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const plugins = [
    {
        register: require('base')
    },
    {
        register: require('base-util')
    },
    {
        register: require('inert')
    },
    {
        register: require('good'),
        options: {
            reporters: {
                console: [
                    {
                        module: 'good-squeeze',
                        name: 'Squeeze',
                        args: [{
                            response: '*',
                            log: '*'
                        }]
                    },
                    {
                        module: 'good-console'
                    },
                    'stdout'
                ]
            }
        }
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
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});
