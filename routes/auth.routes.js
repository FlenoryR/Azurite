const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const router = Router();

router.post(
    '/registration',
    [
        check('email', 'Ошибка! Введите корректную электронную почту!').isEmail()
    ],
    async (request, response
    ) => {
    try {
        const validationErrors = validationResult(request);

        if (!validationErrors.isEmpty()) {
            return response.status(400).json({
                validationErrors: validationErrors.array(),
                message: 'Ошибка! Введены некорректные данные при попытке регистрации!'
            });
        }

        const {
            firstName,
            lastName,
            password,
            email
        } = request.body;

        const userExistence = await User.findOne({ email });

        if (userExistence) {
            return response.status(400).json({
                message: 'Ошибка! Такой пользователь уже существует!'
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 12);
        const registeredUser = new User({
            firstName: firstName,
            lastName: lastName,
            password: encryptedPassword,
            email: email
        });

        await registeredUser.save();
        
        return response.status(201).json({
            message: 'Успех! Пользователь был успешно зарегистрирован.'
        });
    } catch (error) {
        return response.status(500).json({
            message: 'Ошибка! Попробуйте ещё раз.'
        });
    }
});

router.post(
    '/authorization',
    [
        check('email', 'Ошибка! Введите корректную электронную почту!').isEmail(),
        check('password', 'Ошибка! Введите пароль!').exists()
    ],
    async (request, response
    ) => {
    try {
        const validationErrors = validationResult(request);

        if (!validationErrors.isEmpty()) {
            return response.status(400).json({
                validationErrors: validationErrors.array(),
                message: 'Ошибка! Введены некорректные данные при попытке авторизации!'
            });
        }

        const {
            password,
            email
        } = request.body;

        const authorizedUser = await User.findOne({ email });

        if (!authorizedUser) {
            return response.status(400).json({
                message: 'Ошибка! Попробуйте авторизоваться снова.'
            });
        }

        const matchPassword = await bcrypt.compare(password, authorizedUser.password);

        if (!matchPassword) {
            return response.status(400).json({
                message: 'Ошибка! Попробуйте авторизоваться снова.'
            })
        }

        const authorizedUserToken = jwt.sign(
            { authorizedUserId: authorizedUser.id },
            config.get('jsonWebTokenSecretKey'),
            { expiresIn: '1h' }
        );

        return response.json({
            authorizedUserToken: authorizedUserToken,
            authorizedUserId: authorizedUser.id,
            firstName: authorizedUser.firstName,
            lastName: authorizedUser.lastName,
            email: authorizedUser.email
        });

    } catch (error) {
        return response.status(500).json({
            message: 'Ошибка! Попробуйте ещё раз.'
        });
    }
});

module.exports = {
    router
};
