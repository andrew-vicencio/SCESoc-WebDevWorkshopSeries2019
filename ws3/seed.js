const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:admin123@ds015915.mlab.com:15915/scesoc")
  .then(() => {
    console.log("Connected");
  });

for (let i = 0; i < 10; i++) {
  Post.create({
    title: `Title ${i}`,
    body: `Lorum Ipsum ${i}`
  });
}
