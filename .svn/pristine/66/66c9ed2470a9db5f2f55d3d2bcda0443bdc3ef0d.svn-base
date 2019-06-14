var express = require('express');
var router = express.Router();

router.get('/newInfo.html', function (req, res, next) {
    var id = req.query.id;
    res.render('news/newInfo_' + id, {});
});

module.exports = router;