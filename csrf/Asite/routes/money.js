// 引入express 模块 
const express = require('express');

const router = express.Router();

// 引入user.js
const Money = require('../api/saveMoney');

// 转账操作对外公布
router.get('/transferMoney', Money.transferMoney);

module.exports = router;