const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const logger = require("./logger.js");

// import the logger function and use it in the app
app.use(logger);

// define the home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the home page!</h1>");
});

// define a page for the admin with a query
app.get("/admin", (req, res) => {
  // check if the user is an admin
  if (req.query.user === "admin")
    res.send("<h1>Welcome to the management page!</h1>");
  else res.send("<h1>Access Denied</h1>");
});

// define a page for the public
app.get("/public", (req, res) => {
  res.send("<h1>This is a public page.</h1>");
});

// catch all the other pages and return a 404 error
app.all("*", (req, res) => {
  res.status(404).send("<h1>page not found !!</h1>");
});

// start the server
app.listen(port, () => console.log("the port is " + port));
