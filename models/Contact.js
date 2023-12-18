// const mongoose = require('mongoose');

// const ContactSchema = mongoose.Schema({
//     user:{
//         type: mongoose.Schema.Type.ObjectId,
//         ref: 'users'
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//     },
//     type: {
//         type: String,
//         default: 'personal'
//     },
//     date:{
//         type: Date,
//         default: Date.now(),
//     }
// });

// module.exports = mongoose.model('contact', ContactSchema);

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Corrected 'Type' to 'Types'
        ref: 'users'
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model('contact', ContactSchema);
