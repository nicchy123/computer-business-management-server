import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = schema.parse(req);
        if (result) {
          next();
        }
      } catch (err) {
        next(err);
      }
   
  };
};

export default validateRequest;
