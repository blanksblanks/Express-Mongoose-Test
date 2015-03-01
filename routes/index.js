var express = require('express');
var router = express.Router();
var model = require('../models/article');

/**
 *
 *___ _____ _   ___ _____   _  _ ___ ___ ___
 / __|_   _/_\ | _ \_   _| | || | __| _ \ __|
 \__ \ | |/ _ \|   / | |   | __ | _||   / _|
 |___/ |_/_/ \_\_|_\ |_|   |_||_|___|_|_\___|
						CREATE ADDITIONAL ROUTES
 */


/**
 * List
 */
router.get('/articles', function(req, res) {
  var article = model.find(function(err, articles) {
    if (err)
      console.log(err);
    else
      res.json(articles);
  })
});


/**
 * Show
 */
router.get('/articles/:id', function(req, res) {
  id = req.params.id;
  var article = model.findById(id, function(err, doc) {
    if (err)
      console.log(err);
    else
      res.json(doc);
  })
});


/**
 * Create an article
 */
router.post('/articles', function (req, res) {

});



/**
 * Update article
 */
router.put('/articles/:id', function (req, res) {

});


 /**
 * END ROUTES
 */

module.exports = router;