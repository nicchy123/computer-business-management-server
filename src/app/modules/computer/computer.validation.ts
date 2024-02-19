import { z } from "zod";



const CreateComputerZodValidationSchema = z.object({
  body: z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  brand: z.string(),
  monitor: z.string(),
  category: z.string(),
  ram: z.string(),
  graphicsCard: z.string(),
  condition: z.string(),
  hardDrive: z.string(),
  color: z.string(),
  releaseDate: z.string(),
})
});



const updateComputerZodValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    brand: z.string().optional(),
    monitor: z.string().optional(),
    category: z.string().optional(),
    ram: z.string().optional(),
    graphicsCard: z.string().optional(),
    condition: z.string().optional(),
    hardDrive: z.string().optional(),
    color: z.string().optional(),
    releaseDate: z.string().optional(),
  })
});




export const computerZodValidation = {
  CreateComputerZodValidationSchema,
  updateComputerZodValidationSchema,
};
