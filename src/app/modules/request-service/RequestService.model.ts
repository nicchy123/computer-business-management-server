import { Schema, model } from "mongoose";

const computerSchema = new Schema<IRequestService>({
  name: { type: String, required: true },
  details: { type: String, required: true },
  brand: { type: String, required: true },
  serviceDateAndTime: { type: String, required: true },
 
});




export const ComputerServiceRequests = model<IRequestService>(
  "ServiceRequests",
  computerSchema
);
  