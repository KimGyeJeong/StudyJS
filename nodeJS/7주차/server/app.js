const express= require('express');
const cookieParser= require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const passportConfig = ('./passport');
const connectDB = require('./mongoose');

dotenv.config();
const pageRouter = require('./routes/page');

const app = express();

connectDB();
app.set('port', process.env.PORT || 8000);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure : false,
    },
}));

app.use('/api', pageRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} not found`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.mesage = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});