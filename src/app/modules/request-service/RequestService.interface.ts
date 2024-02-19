import mongoose from "mongoose";

export interface IRequestService {
    name: string;
    details: string;
    brand : string;
    serviceDateAndTime : string;
    user: mongoose.Types.ObjectId
}