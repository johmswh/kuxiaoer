var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");
// 引入工具数据包
var utils = require("./utils.js");

router.post('/submitQuery', function(req, res, next) {
    console.log(req.body);
    // {
    //     userName: '姓名',
    //     userNumber: '电话',
    //     userBrandName: '品牌名',
    //     userArea: '地区'
    // }
    var userName = req.body.userName;
    var userNumber = req.body.userNumber;
    if (!utils.isMobileNumber(userNumber))
        res.end('no');
    var userBrandName = req.body.userBrandName;
    var userArea = req.body.userArea;

    db.query("insert into userqueryinfo(userName,userNumber,userBrandName,userArea) values('" + userName + "','" + userNumber + "','" + userBrandName + "','" + userArea + "')", function (err, rows) {
        if (err) {
            console.log("add error : " + err);
            res.end('no');
        } else {
            res.end("ok" );
        }
    })
});

router.post('/submitEnter', function(req, res, next) {
    console.log(req.body);
// {
//     selectInType: '入驻类型',
//     youPhone: '电话',
//     youQQ: 'QQ号码',
//     youDescription: '描述信息',

//     userGender: '性别'
// }
    var phoneNumer = req.body.youPhone || "noInput";
    var userName = req.body.userName || "noInput";
    var inPlatform = req.body.selectInType || "noInput";
    var userQQ = req.body.youQQ || "noInput";
    var userWX = req.body.youWX || "noInput";
    var userDescription = req.body.youDescription || "noInput";
    var userGender = req.body.userGender || "1";
    if (!utils.isMobileNumber(phoneNumer))
        res.end('no');
    var submitTime = Date.now();
    if (userGender === '1')
        userGender = '先生';
    else
        userGender = '女士';
    const sqlStr = "insert into inenterinfo(phoneNumer,userName,inPlatform,userQQ,userWX,userDescription,userGender,submitTime)" +
        " values('" +
            phoneNumer + "','" +
            userName + "','" +
            inPlatform + "','" +
            userQQ +  "','"  +
            userWX + "','" +
            userDescription + "','" +
            userGender + "'," +
            submitTime +
        ")";
    db.query(sqlStr, function (err, rows) {
        if (err) {
            console.log("add error : " + err);
            res.end('no');
        } else {
            res.end("ok" );
        }
    })

});

module.exports = router;