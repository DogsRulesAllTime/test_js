var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'test_express_server' , txt: 'ussual text'});
});

module.exports = router;
