const express = require('express');
const config = require('config');
const { mongo } = require('./mongo');

const application = express();
const configuration = {
    'port': config.get('port') || 5000,
    'mongoURL': config.get('mongoURL')
};

mongo(configuration.mongoURL).then(() => {
    application.listen(configuration.port, () => {
        console.log(`Сервер был успешно запущен на порте ${configuration.port}!`);
    });
})
