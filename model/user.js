var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userSenha: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);