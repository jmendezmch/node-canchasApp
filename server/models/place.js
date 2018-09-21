const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let placesSchema = new Schema({
    available: {
        type: Boolean,
        default: true
    },
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    description: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    rating: {
        type: Number
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    postCode: {
        type: String
    },
    country: {
        type: String
    },
    types: [String],
    sports: [String],
    images: [String],
    loc: {
        type: { type: String },
        coordinates: [Number]
    },
    created_by: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: { type: Date }
});


module.exports = mongoose.model('Place', placesSchema);


// MONGO SHELL - COMANDOS PARA CREAR UN INDEX 2dsphere para usar el aggregate
// > use canchas-app
// switched to db canchas-app

// > show collections

// > db.places.createIndex( { loc : "2dsphere" } )