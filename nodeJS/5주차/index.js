const express = require('express');
const path = require("path");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name:'session-cookie',
}));

app.use((req,res,next)=>{
    console.log('모든 요청에 실행');
    next();
})

app.get('/',(req,res, next)=>{
    console.log('GET / 요청에서만 실행');
    next();
}, (req, res)=>{
    console.log('실행!');
    throw new Error('에러는 에러 처리 미들웨어로 감.');
});

app.use((err,req, res)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});