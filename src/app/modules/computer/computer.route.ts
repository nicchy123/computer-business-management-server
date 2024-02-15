import express from 'express'
import validateRequest from '../../middlewares/validateRequest';
import { computerControllers } from './computer.controller';
import { computerZodValidation } from './computer.validation';
const router = express.Router();

router.get('/', computerControllers.getAllComputer);
router.get('/:id', computerControllers.getSingleComputer);
router.post('/create-computer', validateRequest(computerZodValidation.CreateComputerZodValidationSchema), computerControllers.createComputer);
router.patch('/:id', validateRequest(computerZodValidation.updateComputerZodValidationSchema), computerControllers.updateComputer);
router.delete('/bulk-delete',  computerControllers.bulkDelete);
router.delete('/:id', computerControllers.deleteComputer);

export const computerRoutes = router 