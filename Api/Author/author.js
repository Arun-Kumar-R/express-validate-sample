const Authors = require('../../Models/Author');
const { validationResult } = require('express-validator');


// REGISTER CALL API
const registerCall = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        res.status(422).json({
            message: errors.array()
        });
    } else {
                const authorData = {
                    name: req.body.name,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    password: req.body.password
                }
                const saveAuthor = new Authors(authorData);
                saveAuthor.save((err, data) => {
                    if(err) {
                        console.log(err.message);
                        res.status(400).json({
                            success: false,
                            message: 'Could not save the Author'
                        });
                    } else {
                        res.status(201).json({
                            success: true,
                            message: 'Author saved Successfully'
                        });
                    }
                })
    }
}

module.exports = registerCall;
