import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IComputer } from "./computer.interface";
import { Computers } from "./computer.model";
import { User } from "../user/user.model";
import QueryBuilder from "../../builder/QueryBuilder";
import { ComputerSearchableFields } from "./computer.constant";
import { Sales } from "../sales/Sales.model";
import mongoose from "mongoose";

const createComputer = async (payload: IComputer) => {
  const isSellerExist = await User.findOne({ _id: payload.seller });
  if (!isSellerExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "Seller does not exist");
  }
  const result = await Computers.create(payload);
  return result;
};


const getAllComputer = async (query: Record<string, unknown>) => {
  const computerQuery = new QueryBuilder(
    Computers.find({ quantity: { $gte: 1 } }).populate("seller"),
    query
  )
    .search(ComputerSearchableFields)
    .filter()
    .sort()
    .fields();
  const result = await computerQuery.modelQuery;
  return result;
};

const getSingleComputer = async (id: string) => {
  const isComputerExists = await Computers.isComputerExists(id);
  if (!isComputerExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "Computer does not exist");
  }
  const result = await Computers.findOne({
    quantity: { $gte: 1 },
    _id: id,
  }).populate("seller");
  return result;
};

const bulkDelete = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
   const res= await Sales.deleteMany({ product: { $in: id } }, { session });
   const result = await Computers.deleteMany({ _id: { $in: id } }).session(session);
    await session.commitTransaction();
    session.endSession();
    return result;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
  }
 
};

const updateComputer = async (_id: string, data: any) => {
  const result = await Computers.findOneAndUpdate({ _id }, data, {
    new: true,
  });
  return result;
};

const deleteComputer = async (id: string) => {
  const isExists = await Computers.isComputerExists(id);
  if (!isExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Computer does not exist");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
   const res= await Sales.findOneAndDelete({ product: id }, { session });
    const result = await Computers.findByIdAndDelete(id).session(session);
    await session.commitTransaction();
    session.endSession();
    return result;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
  }
};

export const computerServices = {
  getAllComputer,
  createComputer,
  updateComputer,
  getSingleComputer,
  deleteComputer,
  bulkDelete
};
