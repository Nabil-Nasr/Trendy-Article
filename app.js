// for adding environment variable
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
// adds security for express app
const helmet = require('helmet');
const port = 3000;
// for using ejs template engine
app.set("view engine", "ejs");
// for using static files
app.use(express.static('public'));
//  for using post request in html form (parsing it's)
app.use(express.urlencoded({ extended: true }));
// importing Article model from articleSchema
const allArticlesRouter = require('./routes/all-articles');

//for live reload
//=====================
// {
//   const path = require("path");
//   const livereload = require("livereload");
//   const liveReloadServer = livereload.createServer();
//   liveReloadServer.watch(path.join(__dirname, 'public'));

//   const connectLivereload = require("connect-livereload");
//   app.use(connectLivereload());

//   liveReloadServer.server.once("connection", () => {
//     setTimeout(() => {
//       liveReloadServer.refresh("/");
//     }, 100);
//   });
// }
//======================



// mongoose
// ====================
{
  const mongoose = require('mongoose');
  // all-articles part in the link can be removed (it's the data path in the database)(the name of the database)
  mongoose.connect(process.env.DATABASE_URL)
    .then(result => {
      // process.env.PORT will be add by the online server
      app.listen(process.env.PORT || port, () => {
        console.log(`${require('./package.json').name} app listening at http://localhost:${port}`);
        console.log("Mongoose Connected");
      });
    }).catch(err => {
      console.log(`Mongoose Failed with Error =====> \n=====> ${err}`);
    });

}
// ====================


app.use(helmet());

// the default link of the website
app.get('/', (req, res) => {
  res.redirect("/all-articles");
});

// use the router 
// by this way the route is should be edited only in the route js file
// app.use(allArticlesRouter)
// this way give us the ability to change the router path from here not from the route js file 
app.use("/all-articles", allArticlesRouter);

app.get("/new-article", (req, res) => {
  // injecting the second parameter object into new-article.ejs file
  res.render("new-article", { externalCSSPath: "/css/new-article.css", externalJSPath: "", pageTitle: "New Article" });
});



// when the path is wrong this page called
app.get("/not-found", (req, res) => {
  res.send("This page not found");
});
app.use((req, res) => {
  res.status(404).redirect("/not-found");
});

