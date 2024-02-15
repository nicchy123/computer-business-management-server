import mongoose, { Schema, model } from "mongoose";
import { ISales } from "./sales.interface";

const orderSchema = new Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dateOrdered: {
      type: Date,
      default: Date.now,
    },
    quantity: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Computers",
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.set("toJSON", {
  virtuals: true,
});

export const Sales = model<ISales>("Sales", orderSchema);
