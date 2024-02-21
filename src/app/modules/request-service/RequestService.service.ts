import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IRequestService } from "./RequestService.interface";
import { ComputerServiceRequests } from "./RequestService.model";

const createComputerServiceRequest = async (payload: IRequestService) => {
  const isExist = await ComputerServiceRequests.isSellerExists(
    payload.sellerEmail
  );
  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Seller not found! give a valid email address");
  }
  const result = await ComputerServiceRequests.create(payload);
  return result;
};

const getComputerServiceRequests = async (id: string) => {
  const result = await ComputerServiceRequests.find({ user: id });
  return result;
};

export const computerServiceRequestServices = {
  createComputerServiceRequest,
  getComputerServiceRequests,
};
