const router = require('express').Router();
const schoolsCtrl = require('../../controllers/schools');

router.post('/create', schoolsCtrl.create);

router.get('/schools', schoolsCtrl.index);

module.exports = router;