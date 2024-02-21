import { Schema, model } from "mongoose";
import { IRequestService, IRequestServiceModal } from "./RequestService.interface";
import { User } from "../user/user.model";

const requestServiceSchema = new Schema<IRequestService>({
  name: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  details: { type: String, required: true },
  brand: { type: String, required: true },
  serviceDateAndTime: { type: String, required: true },
 
});


requestServiceSchema.statics.isSellerExists = async function (email: string) {
  return await User.findOne({ email, role:"seller" }).select('+password');
};


export const ComputerServiceRequests = model<IRequestService , IRequestServiceModal>(
  "ServiceRequests",
  requestServiceSchema
);
  