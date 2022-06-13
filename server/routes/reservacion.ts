import { Router } from 'express';
import {
    actualizarReservacion,
    borrarReservacion,
    crearReservacion,
    obtenerReservacion,
    obtenerReservaciones,
} from '../controllers/reservacion';

const router = Router();

router.get('/', obtenerReservaciones);
router.get('/:id', obtenerReservacion);
// router.get('/hola/:id', obtenerReservacionbyId);
router.post('/', crearReservacion);
router.put('/:id', actualizarReservacion);
router.delete('/:id', borrarReservacion);

export default router;
