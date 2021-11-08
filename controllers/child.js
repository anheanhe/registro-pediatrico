const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const user = require('../models').user;
const child = require('../models').child;

module.exports = {
  create(req, res) {
    let foundUser;
    return user.findOne({ where: { email: req.body.email } })
      .then(data => {
        foundUser = data;
        return child.create({
          name: req.body.name,
          birthDate: req.body.birthDate,
          bloodType: req.body.bloodType,
          alergies: req.body.alergies,
          diseases: req.body.diseases,
          userId: foundUser.get('id')
        })
      })
      .then(child => res.status(200).send(child))
      .catch(error => res.status(400).send(error))
  },
};