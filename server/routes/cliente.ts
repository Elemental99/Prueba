import { Router } from 'express';
import {
    crearCliente,
    loginCliente,
    obtenerClienteById,
    obtenerClientes,
} from '../controllers/cliente';

const router = Router();

router.get('/login', loginCliente);
router.get('/ver/:id', obtenerClienteById);
router.get('/', obtenerClientes);
router.post('/', crearCliente);

export default router;
