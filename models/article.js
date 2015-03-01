var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assessjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Article;
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  // setup schema here
  title: { type: String, required: 'Validation failed' },
  body: { type: String, required: 'Validation failed' }
});

// read up on methods/statics

ArticleSchema.methods.asJSON = function (cb) {
	return JSON.stringify(this);
}

Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;


