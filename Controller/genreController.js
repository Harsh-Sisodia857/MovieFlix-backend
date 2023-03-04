const Joi = require("Joi");
const Genre = require("../model/genre");


module.exports.getAllGenre = async function (req, res) {
    const genres =await Genre.find().sort('name') // This line sort the genre in asceding order by default
   // const genres = Genre.find().sort('-name') // This line sort the genre in descending order
    res.send(genres)
}

module.exports.PostingGenre = async function (req, res) {
    // checking for errors
    const validate = validateGenre(req.body)
    const error = validate.error;
    if (error) return res.status(400).send(error);

    let genre = new Genre({ name: req.body.name })
    genre = await genre.save() // saving the above object to the db with id property included
    res.send(genre);
}

module.exports.updatingGenre = async function (req, res) {
    //checking for error
    const validate = validateGenre(req.body);
    const error = validate.error;
    if (error) return res.status(400).error.details;

    const genre = await Genre.findByIdAndUpdate(req.params.id,{name : req.body.name},{new : true});
    if (!genre) return res.status(404).send(`Genre with id ${req.params.id} not found`);

    res.send(genre);
}

module.exports.deletingGenre = async function (req, res) {
    const genre = await Genre.findByIdAndDelete(req.params.id);
   
    if (!genre) return res.status(404).send(`Genre with id ${req.params.id} not found`);

    res.send(genre);
}

module.exports.getSpecificGenre = async function (req, res) {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).send("Genre not found");

    res.send(genre);
}

function validateGenre(genre) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(genre);
}