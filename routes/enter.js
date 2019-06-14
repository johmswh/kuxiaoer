var express = require('express');
var router = express.Router();

router.get('/enterone.html', function (req, res, next) {
    var id = req.query.id;
    res.render('enterview/enterone', {});
});

router.get('/enterone', function (req, res, next) {
    var id = req.query.id;
    res.render('enterview/enterone', {});
});

router.get('/entertwo.html', function (req, res, next) {
    var id = req.query.id;
    res.render('enterview/entertwo', {title:"酷小二企业服务天猫入驻"});
});

router.get('/entertwo', function (req, res, next) {
    var id = req.query.id;
    res.render('enterview/entertwo', {title:"酷小二企业服务天猫入驻"});
});

module.exports = router;