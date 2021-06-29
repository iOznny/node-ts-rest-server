import { Router } from "express";
const router = Router();

// Controllers
import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/user';

// Routes
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;