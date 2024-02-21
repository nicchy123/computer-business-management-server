import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { computerZodValidation } from '../computer/computer.validation';
import { createComputerServiceRequestControllers } from './RequestService.controller';
import { createServiceRequestZodValidationSchema } from './RequestService.validation';

const router = express.Router();


router.post('/part-servicing', validateRequest(createServiceRequestZodValidationSchema.CreatePartServicingZodValidationSchema), createComputerServiceRequestControllers.createComputerServiceRequest);
router.get('/service-requests/:id', createComputerServiceRequestControllers.getComputerServiceRequests);

export const computerServiceRequestRoutes = router 