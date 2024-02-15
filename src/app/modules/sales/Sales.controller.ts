import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { SalesServices } from "./Sales.service";


const createSales = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await SalesServices.createSales(data)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Sales Created Successfully",
        data: result
    })
});
    

const getAllSales = catchAsync(async (req, res) => {

    const result = await SalesServices.getAllSales(req?.params?.id, req?.params?.duration);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Sales Retrieved Successfully",
        data: result
    })
});

const getMySales = catchAsync(async (req, res) => {
    const result = await SalesServices.getMySales(req?.params?.id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "your Orders Retrieved Successfully",
        data: result
    })
});

const updateSales = catchAsync(async (req, res) => {
    const data = req.body;
    const {id} = req.params;
    const result = await SalesServices.updateSales(id, data)
    
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Sales Updated Successfully",
        data: result
    })

});
const deleteSales = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await SalesServices.deleteSales(id)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Sales Deleted Successfully",
        data: result
    })
});

export const SalesControllers = {
  createSales,
  getAllSales,
  updateSales,
  deleteSales,
  getMySales
};
