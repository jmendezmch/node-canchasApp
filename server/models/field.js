const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let validState = {
    values: ['CONFIRMED', 'RESERVED', 'CANCELED'],
    message: '{VALUE} no es un rol valido'
}

let fieldsSchema = new Schema({
    place_id: { type: Schema.Types.ObjectId, ref: 'Place' },
    /* reserved: [{
         from: { type: Date },
         to: { type: Date },
         user: { type: Schema.Types.ObjectId, ref: 'User' },
         state: {
             type: String,
             enum: validState,
             default: 'RESERVED'
         },
         reservation_id: { type: Schema.Types.ObjectId, ref: 'Reservation' },
         update: { type: Date }
     }],
     */
    reserved: [{ type: Schema.Types.ObjectId, ref: 'Reservation' }],
    rating: {
        type: Number,
        default: 0
    },
    players: {
        type: Number
    },
    type: {
        type: String
    },
    available: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number
    },
    sports: [String],
    images: [String],
    created_at: { type: Date }
});

fieldsSchema.plugin(uniqueValidator, { message: 'El {PATH} ya se encuentra en uso' });
module.exports = mongoose.model('Field', fieldsSchema);