import express, { json } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import productRoute from "./routes/productRoute.js"
import {errorMiddleware} from "./middleware/errorMiddleware.js"
import cors from "cors"
const app = express()

dotenv.config()
const MONGODB_URL = process.env.MONGODB_URL
const FRONTEND = process.env.FRONTEND
var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
 
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const PORT = process.env.PORT 

//========ALL ROUTER GO HERE==========

app.use("/api/products" , productRoute)

app.get("/" , (req, res) =>{
  res.send("Server running on brawser..")
})

app.use(errorMiddleware)



//========CONNECT TO MONGODB DATABASE==========
  mongoose.connect(MONGODB_URL).then(() => {
  console.log("CONNECTED TO DATABASE MONGODB..")
//========LISTEN TO PORT==========
  app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`)
  })
  }).catch((err)=> {
  console.log(err)
  })


