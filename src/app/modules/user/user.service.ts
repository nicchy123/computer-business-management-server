import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "./user.model";
import { IUser } from "./user.interface";


const createUser = async (payload: IUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const updateUser = async (id : string, data: any) => {
  const result =  (await User.findOneAndUpdate({_id:id}, data, {
    new: true
  }));
  return result;
};

const deleteUser = async (email: string) => {
  const isExists = await User.isUserExists(email);
  if (!isExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
  }
  const result = await User.findOneAndDelete({email});
  return result;
};

const getSignleUser = async (email: string) => {
  const isExists = await User.isUserExists(email);
  if (!isExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User does not exist");
  }
  const result = await User.findOne({email});
  return result;
};




export const UserServices = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getSignleUser
};
