// app.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/users"); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
