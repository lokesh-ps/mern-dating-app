import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Cards from "./dbCards.js";
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json());
app.use(Cors());
const connection_url =
  "mongodb+srv://lokeshpspsl522:7w8AnaYOB0QAjNYB@mern-dating-app-cluster.ym8dk.mongodb.net/?retryWrites=true&w=majority&appName=mern-dating-app-cluster";
mongoose
  .connect(connection_url, {})
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.status(200).send("Hello This is Dating App");
});
app.post("/dating/cards", async (req, res) => {
  const dbcard = req.body;

  try {
    const newCard = await Cards.create(dbcard);
    res.status(201).json(newCard); // Return the created document
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/dating/cards", async (req, res) => {
  try {
    const newCard = await Cards.find();
    res.status(200).send(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => console.log(`Listening on localhost: ${port}`));
