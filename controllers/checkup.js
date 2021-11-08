const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const user = require('../models').user;
const child = require('../models').child;
const checkup = require('../models').checkup;

module.exports = {
  create(req, res) {
    let foundChild;
    return user.findOne({ where: { email: req.body.email }, include: [{ model: child, where: { name: req.body.name } }] })
      .then(data => {
        foundChild = data;
        if (foundChild !== null) {
          return checkup.create({
            date: req.body.date,
            height: req.body.height,
            weight: req.body.weight,
            headSize: req.body.headSize,
            observation: req.body.observation,
            test: req.body.test,
            testResult: req.body.testResult,
            medicineName: req.body.medicineName,
            medicineAmount: req.body.medicineAmount,
            dose: req.body.dose,
            childId: foundChild.children[0].get('id')
          })
            .then(checkup => res.status(200).send(checkup))
        } else {
          return res.status(404).send("Child not found")
        }
      })
      .catch(error => res.status(400).send(error))
  },
};