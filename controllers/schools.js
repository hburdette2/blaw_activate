const School = require('../models/school');

module.exports = {
    create
}

async function create(req, res) {
    try {
        const school = await School.create(req.body);
        res.json(school);
    } catch (error) {
        res.status(400).json(error);
    }
}