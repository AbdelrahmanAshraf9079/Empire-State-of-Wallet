import axios from "axios";
import NodeCache from "node-cache";
import { myCache } from "../index.js";

const calculateAmounts = () => {
  let dataBody = {};
  let total = 0;
  let bezosTotal = 0;
  let bezosPercentage = "";
  var cacheData = myCache.get("key");
  for (const element of cacheData) {
    total += element.amount;
    if (element.bezosRelated) {
      bezosTotal += element.amount;
    }
  }
  bezosPercentage = (bezosTotal / total) * 100 ;

  return (dataBody = {
    totals: {
      totalAmount: total,
      bezos: { totalAmount: bezosTotal, percentage: bezosPercentage },
    },
    "cacheData":cacheData,
  });
};

//GET ALL Transactions
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

  myCache.set("key", newCache);
  res.status(200).send(calculateAmounts());
};
