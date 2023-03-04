const Joi = require("Joi");
const Customer = require("../model/customer");


module.exports.getAllCustomer = async function (req, res) {
    const customers = await Customer.find().sort('name') // This line sort the customer in asceding order by default
    // const customers = Customer.find().sort('-name') // This line sort the customer in descending order
    res.send(customers)
}

module.exports.PostingCustomer = async function (req, res) {
    // checking for errors
    const validate = validateCustomer(req.body)
    const error = validate.error;
    if (error) return res.status(400).send(error);

    let customer = new Customer({ name: req.body.name,phone : req.body.phone, isGold : req.body.isGold })
    customer = await customer.save() // saving the above object to the db with id property included
    res.send(customer);
}

module.exports.updatingCustomer = async function (req, res) {
    //checking for error
    const validate = validateCustomer(req.body);
    const error = validate.error;
    if (error) return res.status(400).error.details;

    const customer = await Customer.findByIdAndUpdate(req.params.id, { name: req.body.name, phone : req.body.phone, isGold : req.body.isGold }, { new: true });
    if (!customer) return res.status(404).send(`Customer with id ${req.params.id} not found`);

    res.send(customer);
}

module.exports.deletingCustomer = async function (req, res) {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) return res.status(404).send(`Customer with id ${req.params.id} not found`);

    res.send(customer);
}

module.exports.getSpecificCustomer = async function (req, res) {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    res.send(customer);
}

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        phone: Joi.string.min(5).max(50).required()
    });

    return schema.validate(customer);
}