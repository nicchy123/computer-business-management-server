import { z } from "zod";

const CreateUserZodValidationSchema = z.object({
 body: z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string({required_error:"User role is required"}),
 })
 

});

const updateUserZodValidationSchema = z.object({
  body: z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  role: z.string().optional(),
})
});



export const userZodValidation = {
    CreateUserZodValidationSchema,
    updateUserZodValidationSchema,
};
