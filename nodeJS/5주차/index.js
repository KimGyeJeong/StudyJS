const express = require('express');
const path = require("path");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 5000);

// morgan. 로그용 
app.use(morgan('dev'));

// static. 정적인 파일들을 제공하는 라우터 역할.
//public 폴더를 만들고 css나 js, 이미지 파일들을 public 폴더에 넣으면 브라우저에서 접근할 수 있음
app.use('/', express.static(path.join(__dirname, 'public')));

// body-parser. 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어주는 미들웨어.
//json 형식의 데이터 전달 방식.
app.use(express.json());
//extended가 false 이면 querystring 모듈을 사용하여 쿼리스트링을 해석하고, true 이면 qs 모듈을 사용하여 쿼리스트링을 해석함.
app.use(express.urlencoded({ extended: false }));

// cookie-parser. 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만듬.
app.use(cookieParser(process.env.SECRET));

// express-session. 세션 관리용 미들웨어
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

// 미들웨어
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