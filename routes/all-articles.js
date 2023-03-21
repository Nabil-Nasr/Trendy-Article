const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// we deleted here the text (/all-articles) before (/)
// because in app.js we wrote it in ==>
// app.use("/all-articles",allArticlesRouter)
// that means the path below is read by the browser (/all-articles/)
router.get("/", articleController.article_index_get);

// creating post request with the same path of html form action
router.post('/', articleController.article_post);

// by :articleID we are adding parameters to the url request that can be changed in the href of every article (we can add what ever we want params number like ==> /all-articles/article-details/:articleTitle/:articleID)
// thats makes dynamic request
router.get("/article-details/:articleID", articleController.article_article_details_get);

router.delete("/article-details/:articleID", articleController.article_delete);

module.exports = router;