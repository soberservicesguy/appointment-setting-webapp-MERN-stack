const router = require('express').Router();

router.use(require('./doctorstimetables'));

// router.use('/users', require('./users'));
// router.use('/push_notifications', require('./push_notifications'));

module.exports = router