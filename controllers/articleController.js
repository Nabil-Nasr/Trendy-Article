// this file has the most used functions (controls the project)

const Article = require('../models/articleSchema');

// exports is the object variable that is exported by default
// instead of ==>
// module.exports = {function1,function2}
//  in the method name (article=model_name,index=rendered_file,get=the_request_method_)
exports.article_index_get = (req, res) => {
	// finding an array of articles (in the database all-articles) that match a filter
	Article.find()
		.then(result => {
			// render method reads direct from views folder
			res.render("index", { externalCSSPath: "", externalJSPath: "", pageTitle: "Trending 🔥", articles: result });
		}).catch(err => {
			console.log(err);
		});
};

exports.article_post = (req, res) => {
	const article = new Article(req.body);

	// req.body has the object that should be applied for the schema model
	console.log(req.body);

	article.save()
		.then(result => {
			console.log("the article was sended to database");
			res.redirect('/all-articles');
		}).catch(err => {
			console.log(`Sending data to database failed with Error =====> \n=====> ${err}`);
		});
};

exports.article_article_details_get = (req, res) => {
	//  req.params.____ is calling the parameters from the url request
	Article.findById(req.params.articleID)
		.then(result => {
			res.render('article-details', { externalCSSPath: "/css/article-details.css", externalJSPath: "/js/article-details.js", pageTitle: result.title, article: result });
		}).catch(err => {
			console.log(err);
			res.redirect("/not-found");
		});
};

exports.article_delete = (req, res) => {
	Article.findByIdAndDelete(req.params.articleID)
		.then(result => {
			console.log("The article deleted");
			// can't use res.redirect() in router.delete() method 
			// we use this instead to give us the ability to change url in fetch() function in front-end
			res.json({ redirectionLink: "/all-articles" });
		})
		.catch(err => console.log(err));
};
