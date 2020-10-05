const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});
router.post('/setUserInfo', (req, res, next) => {
  api.setUserInfo(req, res, next);
});
router.get('/getUserInfo', (req, res, next)=>{
  api.getUserInfo(req, res, next);
});

module.exports = router;