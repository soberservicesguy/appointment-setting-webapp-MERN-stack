const router = require('express').Router();

router.use('/timetables', require('./doctorstimetables'));

router.use('/users', require('./users'));
router.use('/push_notifications', require('./push_notifications'));
// router.use('/video_stream', require('./video_stream'));
// router.use('/paypal_payments', require('./paypal_payments'));
// router.use('/stripe_payments', require('./stripe_payments'));
// router.use('/paypal_payments', require('./paypal_payments'));
// router.use('/stripe_payments', require('./stripe_payments'));



// router.use('/file_upload', require('./file_upload'));
// router.use('/push_notifications', require('./push_notifications'));
// router.use('/users', require('./users'));
// router.use('/video_stream', require('./video_stream'));



module.exports = router