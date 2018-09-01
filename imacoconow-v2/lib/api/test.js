'use strict';

const router = require('express').Router();

const util = require('../lib/common-utils.js')
    , db = require('../lib/db.js')

router.get('/test9', (req, res) => {
    util.setConsolelog(req,'');
    res.send('hello world');
});

module.exports = router;
