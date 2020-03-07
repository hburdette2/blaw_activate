const router = require('express').Router();
const schoolsCtrl = require('../../controllers/schools');

router.get('/', schoolsCtrl.index);

router.post('/', schoolsCtrl.create);

module.exports = router;