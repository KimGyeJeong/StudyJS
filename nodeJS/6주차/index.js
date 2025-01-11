const express = require('express');
const path = require('path');
const morgan = require('morgan');

const connect = require('./schemas');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 3000);
connect();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} Not Found`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.status(err.status || 500);
    // res.render('error');
    res.json('error');
});



app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});