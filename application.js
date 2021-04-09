const express = require('express');
const config = require('config');
const { mongo } = require('./mongo');
const { router } = require('./routes/auth.routes')

const application = express();
const configuration = {
    'port': config.get('port') || 5000,
    'mongoURL': config.get('mongoURL')
};

application.use('/api/auth/', router);

mongo(configuration.mongoURL).then(() => {
    application.listen(configuration.port, () => {
        console.log(`Сервер был успешно запущен на порте ${configuration.port}!`);
    });
});
