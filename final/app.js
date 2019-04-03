const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-gvix5.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to the DB!");
  }
);

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String
});

const Blog = new mongoose.model("Blog", blogSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

blogPosts = [
  {
    title: "First post",
    image: "placeholder",
    body: "body"
  },
  {
    title: "Second post",
    image: "placeholder",
    body: "body"
  },
  {
    title: "Third post",
    image: "placeholder",
    body: "body"
  }
];

app.get("/", function(req, res) {
  res.render("index.ejs", { posts: blogPosts });
});

app.post("/", function(req, res) {
  blogPosts.push(req.body.post);
  res.redirect("/");
});

app.get("/new", function(req, res) {
  res.render("new.ejs");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
