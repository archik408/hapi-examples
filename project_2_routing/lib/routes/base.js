
const BaseController = require('../controllers/base');

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: BaseController.get

    },
    {
        method: 'GET',
        path: '/{name}',
        config: BaseController.getName
    }
];