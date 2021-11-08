/* Controllers */
const userController = require('../controllers/user');
const loginController = require('../controllers/login');
const childController = require('../controllers/child');
const checkupController = require('../controllers/checkup');
const vaccineController = require('../controllers/vaccine');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'AnA api routes are working',
  }));

  app.put('/user', userController.create);

  app.post('/login', loginController.login);

  app.put('/child', childController.create);

  app.put('/checkup', checkupController.create);

  app.put('/vaccine', vaccineController.create);

};