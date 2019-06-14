var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  var headers = req.headers;
  var host = headers.host;
  // console.log("host : " + host);
  if (host === 'm.xiaoervip.com')
    res.render('mobile/index', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
  else if (host === 'www.xiaoervip.com')
    res.render('index', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
  else
    res.render('index', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/mobile/index.html', function(req, res, next) {
  res.render('mobile/index', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/mobile/enter.html', function(req, res, next) {
  res.render('mobile/enter', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/mobile/enter', function(req, res, next) {
  res.render('mobile/enter', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/jdin.html', function(req, res, next) {
  res.render('jdin', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/proxyOperationJD.html', function(req, res, next) {
  res.render('proxyOperationJD', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/proxyOperationTmall.html', function(req, res, next) {
  res.render('proxyOperationTmall', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/aboutMe.html', function(req, res, next) {
  res.render('aboutMe', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/BC.html', function(req, res, next) {
  res.render('BC', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/contactUS.html', function(req, res, next) {
  res.render('contactUS', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/joinUS.html', function(req, res, next) {
  res.render('joinUS', { title: '天猫入驻_天猫商城入驻_网店入驻代理-一站式电商服务平台酷小二' });
});

router.get('/showInEnterInfo', function(req, res, next) {
  db.query('select * from inenterinfo', function (err, rows) {
    console.log(rows);
    if (err) {
      res.end("err : " + err);
    } else {
      res.end("ok : " + rows );
    }
  })
});

module.exports = router;
