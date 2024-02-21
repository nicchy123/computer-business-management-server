import mongoose from "mongoose";
import { IUser } from "../user/user.interface";

export interface IRequestService {
    name: string;
    details: string;
    sellerEmail: string;
    brand : string;
    serviceDateAndTime : string;
    user: mongoose.Types.ObjectId
}

export interface IRequestServiceModal extends IRequestService {
    find: any;
    create: any;
    isSellerExists: (email:string) => Promise<IUser | null>;
}