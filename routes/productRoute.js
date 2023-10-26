import express from "express"
import Product from "../models/Product.js"
import {getProducts, getProduct, createProduct, deleteProduct} from "../controller/productController.js"

const router = express.Router()

//========ALL ROUTER GO HERE==========

// =====FETCH PRODUCT FROM THE DATABASE======
router.get("/", getProducts)

// =====FIND A SINGLE PRODUCT ON DATABASE======
router.get("/:id", getProduct)

// =====CREARE PRODUCT ON DATABASE======
router.post("/", createProduct)


// =====UPDATE PRODUCT ON DATABASE======
router.put("/:id", )


// =====DELETE PRODUCT ON DATABASE======
router.delete("/:id", deleteProduct)




export default router