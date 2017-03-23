'use strict';

module.exports.register = (server, options, next) => {

    const getText = function (arg, next) {
        
        next(null, arg  + 'World!');
    };

    server.method('util.getText', getText, {});

    next();
};

module.exports.register.attributes = {
    pkg: require('../package.json')
};