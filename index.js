import express from "express";
import conn from './db/conn.js';
import CarController from "./controllers/CarController.js";

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
)

conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err));

app.post('/carros', CarController.createCar)

  