const companyController = require('../controllers').company;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to Sequilizer'
    }));

    app.post('/api/company', companyController.create);
}