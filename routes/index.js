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
      console.log('Err: ', err);
    else
      res.json(articles);
  })
});


/**
 * Show
 */
router.get('/articles/:id', function(req, res) {
  var id = req.params.id;
  var article = model.findById(id, function(err, doc) {
    if (err) {
      // console.log(err);
      res.send(500, 'id not found');
  } else
      res.json(doc);
  })
});


/**
 * Create an article
 */
router.post('/articles', function (req, res) {
  JSON.stringify(req.body, null, 2);
  var title = req.body.title;
  var body = req.body.body;
  // console.log('req', req.body);
  // console.log('title', title);
  // console.log('body', body);
  var article = new model( { 'title': title, 'body': body } );
  // console.log(article);
  article.save(function (err) {
    if (err)
      res.send(500);
    else
      res.send( { 'message': 'Created Successfully', 'article': article } );
    });
});



/**
 * Update article
 */
router.put('/articles/:id', function (req, res) {
  JSON.stringify(req.body, null, 2);
  var id = req.params.id;
  var title = req.body.title;
  var body = req.body.body;

  var article = model.findById(id, function(err, article) {
    if (err) {
      res.send(500);
    } else {
      if (title)
        article.title = title;
      if (body)
        article.body = body;
      res.send( { 'message': 'Updated Successfully', 'article': article } );
    }
  });
});

 /**
 * END ROUTES
 */

module.exports = router;