const router = require('express').Router();

const { catchAsyncError } = require('./../middleware/handleError');
const controllers = require('./../controllers/authController');


router.route('/register').post(catchAsyncError(controllers.register));
router.route('/login').post(catchAsyncError(controllers.login));

module.exports = router;
