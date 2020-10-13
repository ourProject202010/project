const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//utils
const getPort = require('./utils/getport');

//routes
const {userRouter} = require('./routes')

const PORT = getPort();

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 204
}));

app.use(bodyParser.json());

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server works on port ${PORT}`)
})
