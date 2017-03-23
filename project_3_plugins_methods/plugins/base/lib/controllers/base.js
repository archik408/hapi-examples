'use strict';

// Declare internals
const internals = {};

internals.get = {
    pre: [
        {
            method: (req, reply) => reply('Hello '),
            assign: 'hello'
        },
        // request.server.methods.util.getText(request.pre.hello)
        {
            method: 'util.getText(pre.hello)',
            assign: 'text'
        }
    ],
    handler: (request, reply) => {

        reply(`${request.pre.text}!`);
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