import { Router } from 'express';
import { 
    getAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser, 
    getAllProducts, 
    updateProduct, 
    deleteProduct 
} from '../controllers/adminController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// User management routes
router.get('/users', authMiddleware, getAllUsers);
router.get('/users/:id', authMiddleware, getUserById);
router.put('/users/:id', authMiddleware, updateUser);
router.delete('/users/:id', authMiddleware, deleteUser);

// Product management routes
router.get('/products', authMiddleware, getAllProducts);
router.put('/products/:id', authMiddleware, updateProduct);
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;