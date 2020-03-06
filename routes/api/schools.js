const router = require('express').Router();
const schoolsCtrl = require('../../controllers/schools');

router.post('/create', schoolsCtrl.create);

module.exports = router;