const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRouter');

const middleware = require('./middleware/handleError');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.url);
	next()
})

app.use('/api', authRouter);

app.use(middleware.handleError);

module.exports = app;
