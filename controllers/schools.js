const School = require('../models/school');

module.exports = {
    create,
    index,
    deleteOne
}

async function deleteOne(req, res) {
    try {
        const school = await School.findByIdAndDelete(req.params.id)
        res.json({});
    } catch (error) {
        res.status(400).json(error);
    }
}

async function create(req, res) {
    try {
        const school = await School.create(req.body);
        res.json(school);
    } catch (error) {
        res.status(400).json(error);
    }
}

async function index(req, res) {
    try {
        const school = await School.find({}).sort('schoolName');
        res.json(school);
    } catch (error) {
        res.status(400).json(error);
    }
}