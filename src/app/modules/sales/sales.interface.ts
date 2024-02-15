import mongoose from "mongoose";

export interface ISales {
  seller: mongoose.Types.ObjectId | string;
  buyer?: mongoose.Types.ObjectId | string;
  dateOrdered: Date;
  quantity: number;
  product: mongoose.Types.ObjectId 
}