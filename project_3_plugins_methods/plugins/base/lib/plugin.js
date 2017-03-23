'use strict';

const BaseController = require('./controllers/base.js');

exports.register = (server, options, next) => {

    server.dependency(['util'], (server, next) => {

        server.route({ method: 'GET', path: '/', config: BaseController.get });
        server.route({ method: 'GET', path: '/{name}', config: BaseController.getName });
        next();
    });
    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};