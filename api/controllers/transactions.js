import axios from "axios";
import NodeCache from "node-cache";
import { myCache } from "../index.js";

// calculate all the stats displayed
const calculateAmounts = () => {
  let dataBody = {};
  let total = 0;
  let bezosTotal = 0;
  let bezosPercentage = "";
  var cacheData = myCache.get("key");
  //loop over all the amounts and calculates the total amount related to bezos companies
  for (const element of cacheData) {
    total += element.amount;
    if (element.bezosRelated) {
      bezosTotal += element.amount;
    }
  }
  //calculats the bezos percentage using the total amount and the total bezos amount
  bezosPercentage = (bezosTotal / total) * 100 ;
  //return the right format for the data to be used in the frontend
  return (dataBody = {
    totals: {
      totalAmount: total,
      bezos: { totalAmount: bezosTotal, percentage: bezosPercentage },
    },
    "cacheData":cacheData,
  });
};

//GET ALL Transactions api
export const getAllTransactions = async (req, res) => {
  res.status(200).send(calculateAmounts());
};

// marks transactions as bezos related
export const markTransaction = async (req, res) => {
  let corprate = req.body.corporate;
  var cacheData = myCache.get("key");
  const newCache = cacheData.map((e) => {
    if (e.merchant_name == corprate) {
      e.bezosRelated = !e.bezosRelated;
    }
    return e;
  });
  // updates the data in the cache
  myCache.set("key", newCache);
  res.status(200).send(calculateAmounts());
};
