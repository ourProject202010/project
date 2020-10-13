const {Router} = require('express');

const userRouter = Router();

userRouter.get('/', (req, res) => {
    console.log('ok')
})

module.exports = userRouter