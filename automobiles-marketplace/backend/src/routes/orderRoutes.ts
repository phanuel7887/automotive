import { Router } from 'express';
import { createOrder, getOrder, updateOrderStatus } from '../controllers/orderController';

const router = Router();

// Route to create a new order
router.post('/', createOrder);

// Route to get an order by ID
router.get('/:id', getOrder);

// Route to update the status of an order
router.put('/:id/status', updateOrderStatus);

export default router;