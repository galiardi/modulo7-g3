import { Router } from 'express';
import {
  createuser,
  loginuser,
  getuser,
  getAllusers,
  updateuser,
  deleteuser,
} from '../../controllers/user.controller.js';

const router = Router();

router.post('/create', createuser);
router.post('/login', loginuser);
router.get('/:id_user', getuser);
router.get('/', getAllusers);
router.put('/:id_user', updateuser);
router.delete('/:id_user', deleteuser);

export default router;
