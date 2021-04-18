const router = require('express').Router();


router.use('/timetables', require('./doctorstimetables'));

// router.use('/users', require('./users'));
// router.use('/push_notifications', require('./push_notifications'));

module.exports = router