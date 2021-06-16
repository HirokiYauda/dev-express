const db = require('../models');

module.exports = {
    // ユーザー情報取得
    getUser: function (req, res, next) {
        db.User.findAll().then(users => {
        });
        res.end();
    }
}