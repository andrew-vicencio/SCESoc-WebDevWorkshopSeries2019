const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// Connect the DB
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to the DB!");
  }
);

// Creates a schema for the database
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String
});

// Creates a model that abstracts DB calls for ease of use
const Blog = new mongoose.model("Blog", blogSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Index route
app.get("/", function(req, res) {
  Blog.find({}, function(err, posts) {
    if (err) {
      // return console.log just consolidate console.log and return onto the same line
      return console.log(err);
    }
    res.render("index.ejs", { posts: posts });
  });
});

// Create route
app.post("/", function(req, res) {
  console.log(req.body);
  Blog.create(req.body.post, function(error, post) {
    if (error) {
      // return console.log just consolidate console.log and return onto the same line
      return console.log("This thing errored: " + error);
    }
    // res.redirect just redirects to the route specified
    res.redirect("/");
  });
});

// Shows new page for post creation
app.get("/new", function(req, res) {
  res.render("new.ejs");
});

// Delete route
app.delete("/:id", function(req, res) {
  Blog.findOneAndDelete({ _id: req.params.id }, function(err, post) {
    if (err) {
      // return console.log just consolidate console.log and return onto the same line
      return console.log(err);
    }

    res.redirect("/");
  });
});

// we use process.env.PORT || 3000 to be able to enable this on
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port " + (process.env.PORT || 3000));
});
