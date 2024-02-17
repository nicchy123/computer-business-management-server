import { z } from "zod";

const createOrderValidationSchema = z.object({
 body: z.object({
  buyer: z.string(),
  seller: z.string(),
  dateOrdered: z.string().optional(),
  product: z.string(),
  quantity: z.number(),
 })
});

export const salesZodValidation = {
  createOrderValidationSchema,
};
