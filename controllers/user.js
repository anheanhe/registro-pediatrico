const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const user = require('../models').user;

module.exports = {
  create(req, res) {
    return user
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dni: req.body.dni,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
};