import { z } from "zod";

const CreatePartServicingZodValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    user: z.string(),
    brand: z.string(),
    details: z.string(),
    serviceDateAndTime: z.string(),
  }),
});

export const createServiceRequestZodValidationSchema = {
  CreatePartServicingZodValidationSchema
};
