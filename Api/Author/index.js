const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

// CUSTOM MODULES
const AuthorAPI = require('./author');

// USERS ROUTES 
router.post('/create-author', [
    check('email').notEmpty(), 
    check('name').notEmpty(),
    check('phoneNumber')
        .matches(/\d/)
        .withMessage('must contain a number')
        .isLength({min: 10, max: 10})
        .withMessage('Mobile number should be 10 digits'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('must be at least 5 chars long')
        .matches(/\d/)
        .withMessage('must contain a number'),
    check('email').isEmail()
], AuthorAPI);


module.exports = router;
