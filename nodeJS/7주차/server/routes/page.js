const express = require('express');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.followingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile',isLoggedIn, (req, res) => {
    // res.render('profile', {title : '내 정보 - NodeBird'})
    res.status(200).json("title : 내 정보");
});

router.get('/join', isNotLoggedIn, (req, res) => {
    // res.render('join', {title: '회원가입 - NodeBird'});
    res.status(200).json("title : 회원가입")
})
router.get('/', (req, res, next) => {
    const twits = [];
    // const twits = [1, 2, 3,];
    res.json(
        `title : nodeBird, twits : ${twits}`
    );
})

module.exports = router;