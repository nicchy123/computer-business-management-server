import { Schema, model } from "mongoose";
import { IComputer, computerModel } from "./computer.interface";

const computerSchema = new Schema<IComputer>({
  name: { type: String, required: true },
  productImage: { type: String, required: true,  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  brand: { type: String, required: true },
  compatibility: { type: String, required: true },
  monitor: { type: String, required: true },
  category: { type: String, required: true },
  ram: { type: String, required: true },
  graphicsCard: { type: String, required: true },
  condition: { type: String, required: true },
  hardDrive: { type: String, required: true },
  color: { type: String, required: true },
  releaseDate: { type: String, required: true },
  seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

computerSchema.statics.isComputerExists = async function (_id: string) {
  const existingUser = await Computers.findOne({ _id });
  return existingUser;
};



export const Computers = model<IComputer, computerModel>(
  "Computers",
  computerSchema
);
  