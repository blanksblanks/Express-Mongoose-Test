var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/assessjs');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Article;
var Schema = mongoose.Schema;

function join(arr) {
	var str = '';
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length -1)
    	    str += arr[i];
        else
            str += arr[i] + ',';
    }
    return str;
};
var ArticleSchema = new Schema({
  // setup schema here
  title: { type: String, required: 'Validation failed' },
  body: { type: String, required: 'Validation failed' },
  tags: { type: Array, get: join}
});

// read up on methods/statics

ArticleSchema.methods.asJSON = function (cb) {
  return JSON.stringify(this);
}

ArticleSchema.statics.findByTitle = function (title, cb) {
  return this.findOne({ title: new RegExp(title, 'i') }, cb);
}

Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;


