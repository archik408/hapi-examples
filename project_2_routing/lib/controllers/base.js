'use strict';

// Declare internals
const internals = {};

internals.get = {
    pre: [
        {
            method: (req, reply) => {

                reply('Hello')
            },
            assign: 'hello'
        },
        {
            method: (req, reply) => {

                //TODO something
                reply.continue();
            }
        }
    ],
    handler: (request, reply) => {

        var response = reply(`${request.pre.hello}, world!`);
        
    },
    tags: ['api'],
    description: 'Base get',
    notes: 'Base get'
};

internals.getName = {
    handler: (request, reply) => {

        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    },
    tags: ['api'],
    description: 'Base get name',
    notes: 'Base get name'
};


module.exports = internals;