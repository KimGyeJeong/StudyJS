const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy;

const User = require('../models/User');

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientId : '',
        callbackURL : '',
    }))
}