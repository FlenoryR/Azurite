const mongoose = require('mongoose');

const mongo = async (mongoURL) => {
    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (error) {
        console.log('Ошибка!', error.message);
        process.exit(1);
    };
};

module.exports = {
    mongo
};
