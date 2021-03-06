const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/video_stream', require('./video_stream'));
router.use('/push_notifications', require('./push_notifications'));
router.use('/paypal_payments', require('./paypal_payments'));
router.use('/stripe_payments', require('./stripe_payments'));

router.use('/doctorstimetables', require('./doctorstimetables'));
module.exports = router;