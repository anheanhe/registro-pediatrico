const user = require('../models').user;
const child = require('../models').child;
const vaccine = require('../models').vaccine;
const checkup = require('../models').checkup;

module.exports = {
  login(req, res) {
    return user.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      },
      include: [{ model: child, include: [vaccine, checkup] }]
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};