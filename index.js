require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

const app = express();
app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(9999, () => {
  console.log(`Server Started at ${9999}`);
});
