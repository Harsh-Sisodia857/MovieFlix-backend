const mongoose = require("mongoose");
const {genreSchema} = require('./genre');
const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim : true,
        required : true
    },
    genre: {
        type: genreSchema,
        required : true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max : 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
})

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().min(5).max(50).required(),
        genreId: Joi.required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    });

    return schema.validate(movie);
}

const Movie = mongoose.model("Movie", movieSchema);
exports.Movie = Movie;
exports.validate = validateMovie;