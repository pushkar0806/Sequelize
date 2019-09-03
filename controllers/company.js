const Company = require('../models').Company;

module.exports = {
    create(req, res) {
        return Company.create({ name: req.body.name })
            .then(company => res.status(201).send((company)))
            .catch(err => res.status(400).send((err)))
    }
}