const { Schema, model } = require('mongoose');

const schema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = model('User', schema);
