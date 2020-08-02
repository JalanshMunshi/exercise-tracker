import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        tpe: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
}, {
    timestamps: true,
})

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;