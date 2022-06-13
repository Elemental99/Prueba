import { Router } from 'express';
import { crearBar, obtenerBares } from '../controllers/bar';

const router = Router();

router.get('/', obtenerBares);
// router.get('/:id', obtenerBar);
router.post('/', crearBar);
// router.put('/:id', actualizarBar);
// router.delete('/:id', borrarBar);

export default router;
