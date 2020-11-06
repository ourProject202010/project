const router = require('express').Router();

const { catchAsyncError } = require('./../middleware/handleError');
const controllers = require('./../controllers/authController');

router.route('/signup').post(catchAsyncError(controllers.register));
router.route('/signin').post(catchAsyncError(controllers.login));

module.exports = router;
