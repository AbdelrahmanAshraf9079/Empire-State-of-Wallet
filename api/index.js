import express from "express";
import transactionsRoute from "./routes/transactions.js";
import cors from "cors";
import NodeCache from "node-cache";
import axios from "axios";
import bp from "body-parser"


var app = express();


const port = 3000;

export const myCache = new NodeCache();

//middlewares

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, X-Auth-Token, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Cache-Control", "public, max-age=86400");
  }
  next();
});

app.use(
  cors({
    exposedHeaders: "X-Auth-Token",
    maxAge: 86400,
    preflightContinue: true,
  })
);

app.use("/api/transactions", transactionsRoute);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello API!");
});

axios
  .get("https://hadiziady.github.io/bezos_mock_api/mock_api.json")
  .then(async function (response) {
    const bezosRelated = [
      "Amazon",
      "Washington Post",
      "Whole Foods",
      "Washington Post",
    ];
    response.data.map((trans) => {
      trans.bezosRelated = bezosRelated.includes(trans.merchant_name);
      return trans;
    });

    var obj =  response.data ;
    myCache.set("key", obj);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
