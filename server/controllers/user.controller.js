const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

module.exports.findUser = (req,res) => {
    User.findOne({_id:jwt.decode(req.cookies.usertoken).id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}
module.exports.register = (req, res) => {
    User.create(req.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY)
            res
                .cookie("usertoken", userToken, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user, token: userToken });
        })
        .catch(err => res.status(400).json(err));
}
module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    res
        .cookie("usertoken", userToken, {
            httpOnly: true
        })
        .json({ msg: "success!", user: user, token: userToken });
}
module.exports.logout =  (req, res) => {
    res.clearCookie('usertoken');
    res.clearCookie('user');
    res.sendStatus(200);
}