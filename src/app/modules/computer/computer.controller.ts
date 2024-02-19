import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { computerServices } from "./computer.service";

const createComputer = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await computerServices.createComputer(data)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computer Created Successfully",
        data: result
    })
});



const getAllComputer = catchAsync(async (req, res) => {
    const result = await computerServices.getAllComputer(req?.query);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computers Retrieved Successfully",
        data: result
    })
});
const bulkDelete = catchAsync(async (req, res) => {
    const result = await computerServices.bulkDelete(req?.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computers Retrieved Successfully",
        data: result
    })
});

const getSingleComputer = catchAsync(async (req, res) => {
    const result = await computerServices.getSingleComputer(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computer Retrieved Successfully",
        data: result
    })
});
const updateComputer = catchAsync(async (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const result = await computerServices.updateComputer(id, data)
    
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computer Updated Successfully",
        data: result
    })

});
const deleteComputer = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await computerServices.deleteComputer(id)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Computer Deleted Successfully",
        data: result
    })
});

export const computerControllers = {
  createComputer,
  getAllComputer,
  updateComputer,
  deleteComputer,
  getSingleComputer,
  bulkDelete,
};
