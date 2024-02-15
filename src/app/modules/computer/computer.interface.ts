import { Model, ObjectId, Schema } from "mongoose";
import { Computers } from "./computer.model";
import mongoose from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IComputer {
    name: string;
    compatibility: string;
    price: number;
    quantity: number;
    brand: string;
    monitor: string;
    category: string;
    ram: string;
    graphicsCard: string;
    condition: string;
    hardDrive: string;
    color: string;
    releaseDate: string;
    seller: Schema.Types.ObjectId;
    productImage?:string
  }


export interface computerModel extends Model<IComputer>{
    isComputerExists: (id: mongoose.Schema.Types.ObjectId | string | mongoose.Schema.Types.ObjectId | ObjectId) => Promise<IComputer | null>;
}