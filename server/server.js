const mongoose = require('mongoose');
const app = require('./app');

require('custom-env').env();

const start = () => {
    try {
        const DB = process.env.DB;
        mongoose
            .connect(DB, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
            .then(() => console.log('DB connection successful!'));

        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`server was started on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};
start();
