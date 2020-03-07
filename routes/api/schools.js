const router = require('express').Router();
const schoolsCtrl = require('../../controllers/schools');

router.get('/', schoolsCtrl.index);
router.delete('/:id', schoolsCtrl.deleteOne)
router.post('/', schoolsCtrl.create);

module.exports = router;