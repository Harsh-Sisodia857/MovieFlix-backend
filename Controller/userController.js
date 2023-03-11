const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User, validate } = require("../model/user");


module.exports.creatingUser = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send("User already registered")

    user = new User(_.pick(req.body,['name','email','password']));
    // salt is random string
    const salt = await bcrypt.genSalt(10);
    // argument are password and then salt in bcrypt.hash()
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    // sending only id, name and email to the request, not password
    res.header('auth-token',token).send(_.pick(user,['_id','name','email']));
}

module.exports.getUser = async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
}