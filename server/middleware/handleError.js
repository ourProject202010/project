const httpError = require('http-errors');

const catchAsyncError = fn => (req, res, next) => fn(req, res, next).catch(next);

const routeNotFound = (req, res, next) => next(new httpError[404]('Not Found! Wrong api endpoint'));

const handleError = (err, req, res) => {
    const {message, status, data} = err;
    res.status(status || 500).json({message, status, data});
};

module.exports = {
    catchAsyncError,
    routeNotFound,
    handleError,
};