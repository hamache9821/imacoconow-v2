/***********************************************************
 *  今ココなう！クライアント向け互換サーバスクリプト       *
 *  共通ライブラリ                                         *
 *  Copyright (c) 2016 @Hamache9821                        *
 *  Released under the MIT license                         *
 *  http://opensource.org/licenses/mit-license.php         *
 ***********************************************************/
module.exports = (function(){
    "use strict";

    const util = require('./common-utils.js');

     return {
           getuserinfo : 
            function (req, res) {
                util.setConsolelog(req);
                console.log('user:' + req.query.user);

                if (req.query.user === undefined){
                    var d={};
                    d.result = 0;

                    res.set('Content-Type', 'text/javascript; charset=utf-8');
                    res.send('(' + JSON.stringify(d) + ')'); 

                } else {
                    UserInfo.findOne(
                        {userid : req.query.user},
                        function (err, result) {
                            var d={};

                            if (err || result === null) {
                                d.result = 0;
                            } else {
                                d.result       = 1;
                                d.name         = result.nickname    ;
                                d.ust          = result.ust         ;
                                d.channel_id   = result.nicolive    ;
                                d.chat_channel = ""                 ;
                                d.jtv          = result.jtv         ;
                                d.url          = result.web         ;
                                d.twitter      = result.twitter     ;
                                d.description  = result.description ;
                                d.popup        = result.popup       ;
                            }

                            res.set('Content-Type', 'text/javascript; charset=utf-8');
                            res.send('(' + JSON.stringify(d) + ')'); 
                        }
                    );
                }
            }
    }
})();
