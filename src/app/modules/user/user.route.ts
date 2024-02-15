import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userControllers } from "./user.controller";
import { userZodValidation } from "./user.validation";

const router = express.Router();

router.get("/", userControllers.getAllUser);
router.get("/:email", userControllers.getSignleUser);
router.post(
  "/create-user",
  validateRequest(userZodValidation.CreateUserZodValidationSchema),
  userControllers.createUser
);
router.patch(
  "/:id",
  validateRequest(userZodValidation.updateUserZodValidationSchema),
  userControllers.updateUser
);
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
