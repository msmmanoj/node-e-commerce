const express = require('express');
const {check, body} = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post(
    '/login',
    [
        body('email', 'Please enter a valid email')
            .isEmail()
            .normalizeEmail(),
        body('password', 'Please enter a password with only number and text with at lease 5 characters')
            .isLength({min: 5})
            .isAlphanumeric()
            .trim()
    ],
    authController.postLogin);

router.post(
    '/signup',
    [
        check('email')
            .isEmail()
            .withMessage('Please enter a valid email')
            .normalizeEmail()
            .custom((userEmail, {req}) => {
                return User.findOne({email: userEmail})
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('E-Mail exists already, please pick a different one.')
                        }
                        return true;
                    })
            }),
        body('password', 'Please enter a password with only number and text with at lease 5 characters')
            .isLength({min: 5})
            .isAlphanumeric()
            .trim(),
        body('confirmPassword').trim().custom((confirmPassword, {req}) => {
            if (confirmPassword !== req.body.password) {
                throw new Error('Passwords have to match')
            }
            return true
        })
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

router.get('/mailcheck', authController.sendMailCheck);

module.exports = router;
