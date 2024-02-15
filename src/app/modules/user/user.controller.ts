import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponce";
import { UserServices } from "./user.service";

const createUser = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await UserServices.createUser(data)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User created Successfully",
        data: result
    })
});

const getAllUser = catchAsync(async (req, res) => {
    const result = await UserServices.getAllUser()
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Users retrieved Successfully",
        data: result
    })
});

const getSignleUser = catchAsync(async (req, res) => {
    const result = await UserServices.getSignleUser(req.params.email)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User retrieved Successfully",
        data: result
    })
});

const updateUser = catchAsync(async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    const result = await UserServices.updateUser(id, data)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User Updated Successfully",
        data: result
    })
});

const deleteUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await UserServices.deleteUser(id)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "User Deleted Successfully",
        data: result
    })
});

export const userControllers = {
    createUser,
    getAllUser,
    updateUser,
    deleteUser,
    getSignleUser
  };