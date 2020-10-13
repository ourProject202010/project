const {Router} = require('express');
const {	getAllUsers, getOneUser, deleteUser, updateUser, addOneUsers} = require('./handlers')

const userRouter = Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getOneUser);

userRouter.post('/', addOneUsers);

userRouter.delete('/:id', deleteUser);

userRouter.put('/:id', updateUser)

module.exports = userRouter