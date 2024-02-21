import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { computerServiceRequestServices } from "./RequestService.service";

const createComputerServiceRequest = catchAsync(async (req, res) => {
  const data = req.body;
  const result =
    await computerServiceRequestServices.createComputerServiceRequest(data);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Computer Service Request Created Successfully",
    data: result,
  });
});

const getComputerServiceRequests = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result =
    await computerServiceRequestServices.getComputerServiceRequests(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Computer Service Request Created Successfully",
    data: result,
  });
});

export const createComputerServiceRequestControllers = {
  createComputerServiceRequest,
  getComputerServiceRequests
};
