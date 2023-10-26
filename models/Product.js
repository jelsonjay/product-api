import mongoose from "mongoose";

const ProductShechma = new mongoose.Schema(
{
  name:{
  type: String,
  require:[true, "Please enter a product name!"],
  },
  quantity:{
  type: Number,
  require:true,
  default: 0,
  },
  price:{
  type:Number,
  require:true,
  },
  image:{
  type:String,
  require: false
  }
},{timestamps: true}
)

export default mongoose.model("Product", ProductShechma)