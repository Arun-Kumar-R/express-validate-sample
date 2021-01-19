const mongoose = require('mongoose');

// @schema model for create Author 
const Schema = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}

// @set collection name and Schema
const CollectionName = "Author";
const AuthorSchema = mongoose.Schema(Schema);

// @check if Author exisits or Not
AuthorSchema.pre('save', next => {
    const self = this;
    Author.find({ email: self.email, phoneNumber: self.phoneNumber }, (err, docs) => {
        console.log(docs)
        if(!docs.length) {
            next();
        } else {
            next(new Error("Author exsits"));
        }
    });
});

const Author = mongoose.model(CollectionName, AuthorSchema);

module.exports = Author;