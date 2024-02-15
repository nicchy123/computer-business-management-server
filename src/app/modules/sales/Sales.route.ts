import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { SalesControllers } from './Sales.controller';
import { salesZodValidation } from './Sales.validation';

const router = express.Router();

router.get('/:id/:duration', SalesControllers.getAllSales);
router.get('/:id',  SalesControllers.getMySales);
router.put('/create-sales', validateRequest(salesZodValidation.createOrderValidationSchema), SalesControllers.createSales);
router.patch('/:id', SalesControllers.updateSales);
router.delete('/:id', SalesControllers.deleteSales);

export const salesRoutes = router 