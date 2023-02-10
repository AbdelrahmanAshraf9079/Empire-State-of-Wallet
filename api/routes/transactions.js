import express from "express";
import {getAllTransactions,markTransaction} from "../controllers/transactions.js"

const router = express.Router();

// API routes
router.get("/",getAllTransactions )
router.put("/",markTransaction )

export default router