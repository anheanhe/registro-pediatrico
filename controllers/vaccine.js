const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const user = require('../models').user;
const child = require('../models').child;
const vaccine = require('../models').vaccine;

module.exports = {
  create(req, res) {
    let foundChild;
    return user.findOne({ where: { email: req.body.email }, include: [{ model: child, where: { name: req.body.name } }] })
      .then(data => {
        foundChild = data;
        if (foundChild !== null) {
          return vaccine.create({
            date: req.body.date,
            name: req.body.vaccineName,
            place: req.body.place,
            childId: foundChild.children[0].get('id')
          })
            .then(vaccine => res.status(200).send(vaccine))
        } else {
          return res.status(404).send("Child not found")
        }
      })
      .catch(error => res.status(400).send(error))
  },
};