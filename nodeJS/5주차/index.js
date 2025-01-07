const express = require('express');
const path = require("path");

const app = express();

app.set('port', process.env.PORT || 5000);

//미들웨어
app.use((req, res, next) => {
    console.log('모든 요청이 실행됨');
    next();
})

app.get('/', (req, res, next) => {
    console.log('GET / 요청에서 실행');
    next();
}, (req, res) => {
    throw new Error('에러는 에러처리 미들웨어로 감');
});

app.use((err, req, res, next) => {
    console.log('여기는 에러처리하는곳');
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
})