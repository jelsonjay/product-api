import Product from "../models/Product.js"
import asyncHandler  from 'express-async-handler'


// ====GET ALL PRODUCT CONTROLLER===
export const getProducts = asyncHandler(async (req, res) => {
 try{
 const products = await Product.find({})
 res.status(200).json(products)
 }catch(err){
   res.status(500)
   throw new Error(err.message)
 }
}) 

// ====GET A SINGLE PRODUCT CONTROLLER===
export const getProduct = asyncHandler(async (req, res) =>{
  try{
  const {id} = req.params
  const product = await Product.findById(id)
   res.status(200).json(product)
  }catch(err){
 res.status(500)
 throw new Error(err.message)
  }
}) 

// ====CREATE PRODUCT CONTROLLER===
export const createProduct = asyncHandler(async (req, res) => {
 try{
 const product = await Product.create(req.body)
 res.status(200).json(product)

 }catch(err){
   res.status(500)
   throw new Error(err.message)
 }
})

// ====UPDATE PRODUCT CONTROLLER===
export const updateProduct = asyncHandler( async (req, res) =>{
  try{
  const {id} = req.params
  const product = await Product.findByIdAndUpdate(id, req.body)
  // can not find any product in the detabase
  if(!product){
    res.status(404)
   throw new Error(`Can not find any product ID ${id}`)
  }
  const updatedProduct = await Product.findById(id)
  res.status(200).json(updatedProduct)
  }catch(err){
   res.status(500)
   throw new Error(err.message)
  }
}) 

// ====DELETE PRODUCT CONTROLLER===
export const deleteProduct = asyncHandler( async (req, res) =>{
  try{
  const {id} = req.params
  const product = await Product.findByIdAndDelete(id)
  if(!product){
    res.status(404)
   throw new Error(`Can not find any product ID ${id}`)
  }

   res.status(200).json(product)
  }catch(err){
    res.status(500)
   throw new Error(err.message)
  }
})