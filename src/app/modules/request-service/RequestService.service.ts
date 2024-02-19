import { ComputerServiceRequests } from "./RequestService.model";

const createComputerServiceRequest = async (payload: IRequestService) => {
  const result = await ComputerServiceRequests.create(payload);
  return result;
};

export const computerServiceRequestServices = {
  createComputerServiceRequest,
};
