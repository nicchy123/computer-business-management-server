import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { Sales } from "./Sales.model";
import { ISales } from "./sales.interface";
import { Computers } from "../computer/computer.model";
import mongoose from "mongoose";
import calculateStartDate from "../../utils/calculateStartDate";

const createSales = async (payload: ISales) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const isOrderExist = await Sales.findOne({
      product: payload?.product,
      buyer: payload.buyer,
    }).session(session);
    const isSellerExist = await User.findOne({ _id: payload.seller }).session(session);

    if (!isSellerExist) {
      throw new AppError(httpStatus.BAD_REQUEST, "Seller does not exist");
    }

    await Computers.findOneAndUpdate(
      { _id: payload.product },
      { $inc: { quantity: -payload.quantity } }, // Use $inc to atomically decrement quantity
      { session }
    );

    let result;

    if (isOrderExist) {
      result = await Sales.findOneAndUpdate(
        { product: payload.product },
        { $inc: { quantity: payload.quantity } }, // Use $inc to atomically increment quantity
        {
          new: true,
          session,
        }
      );
    } else {
      result = await Sales.create([payload], { session });
      result = result[0];
    }

    await session.commitTransaction();
    session.endSession();

    return result;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();

    throw new AppError(500,"something went wrong"); // Rethrow the error after handling transactions
  }
};


const getAllSales = async (id: string, duration:string) => {
  const startDate = calculateStartDate(duration);
  const endDate = new Date();
  const result = await Sales.find({ seller: id,  createdAt: { $gte: startDate, $lte: endDate } })
    .populate("buyer")
    .populate("product");
  return result;
};

const getMySales = async (id: string, duration:string) => {
  const startDate = calculateStartDate(duration);
  const endDate = new Date();
  const result = await Sales.find({ buyer: id,  createdAt: { $gte: startDate, $lte: endDate } })
    .populate("buyer")
    .populate("product");
  return result;
};

const updateSales = async (id: string, data: any) => {
  const result = "hi" || (await Sales.updateOne(data, data));
  return result;
};

const deleteSales = async (id: string) => {
  const result = await Sales.findByIdAndDelete(id);
  return result;
};

export const SalesServices = {
  getAllSales,
  createSales,
  updateSales,
  deleteSales,
  getMySales,
};
