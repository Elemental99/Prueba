import { Router } from 'express';
import { crearPlato, obtenerPlatos } from '../controllers/plato';

const router = Router();

router.get('/', obtenerPlatos);
// router.get('/:id', obtenerPlato);
router.post('/', crearPlato);
// router.put('/:id', actualizarPlato);
// router.delete('/:id', borrarPlato);

export default router;
