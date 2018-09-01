/***********************************************************
 *  今ココなう！クライアント向け互換サーバスクリプト       *
 *  初期設定スクリプト                                     *
 *  Copyright (c) 2016-2017 @Hamache9801                   *
 *  Released under the MIT license                         *
 *  http://opensource.org/licenses/mit-license.php         *
 ***********************************************************/
"use strict";

const config = require('config');

//必須設定チェック
if (!config.dbHost) {throw 'config `dbHost` is not set';}
if (!config.dbName) {throw 'config `dbName` is not set';}
if (!config.googlemap_api_key) {
    console.log('[\u001b[33mWARN\u001b[0m] config `googlemap_api_key` is not set');
}

//モジュール宣言
require('date-utils');

const util = require('./lib/common-utils.js')
       db2 = require('./lib/db.js');

function(){
    create_admin();
    create_index();
}


function create_admin(){
    //ユーザー作成
    var _User = new db2.UserInfo();
    _User.userid   = 'admin';
    _User.nickname = 'admin';
    _User.password = util.getHash('friend');
    _User.email    = 'admin@example.com';
    _User.save();

    //nickname画像生成
    var filename = util.getUserNameImg(req.body.username, req.body.nickname, '#ffffff');

    //
    var locinfo = new db2.LocInfo();
    locinfo.valid          = true;
    locinfo.time           = req.body.time;
    locinfo.user           = req.user.userid;
    locinfo.nickname       = req.user.nickname;
    locinfo.lat            = req.body.lat;
    locinfo.lon            = req.body.lon;
    locinfo.dir            = req.body.gpsd;
    locinfo.altitude       = req.body.gpsh;
    locinfo.velocity       = req.body.gpsv;
    locinfo.type           = req.body.t;
    locinfo.flag           = '1';
    locinfo.saved          = '0';     
    locinfo.ustream_status = 'offline';
    locinfo.location = [parseFloat(req.body.lon), parseFloat(req.body.lat)];

    locinfo.save(function(err){
        if(err){
            res.send('NG');
        } else {
            res.send('OK');
        }
    });


}

function create_index(){

}
