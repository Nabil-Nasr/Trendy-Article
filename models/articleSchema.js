const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating the articles schema
// if the value of name attribute is not like the schema it will not be saved(the input that has the right name only will be saved)
const articleSchema = new Schema({
	title: String,
	summary: String,
	body: String
});


//create a model based on the schema
// article here is the name of the database collection
const Article = mongoose.model("Article", articleSchema);

// after ending the schema and it's model
// exporting the model Article
module.exports = Article;