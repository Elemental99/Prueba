import { Request, Response } from 'express';
import { Plato } from '../models';

export const obtenerPlatos = async (req: Request, res: Response) => {
    const query    = { estado: true };
    const [platos] = await Promise.all([Plato.find(query)]);
    res.json({
        platos,
    });
};

// const obtenerPlato = async (req,res= response) =>{
//     const {id} = req.params;
//     const plato = await  Plato.findById(id);
//     res.json(plato);
// }

export const crearPlato = async (req: Request, res: Response) => {
    const { ...body } = req.body;
    // const platoExiste = await Plato.findOne({ nombre:body.nombre });
    // if (platoExiste){
    //     res.status(400).json({
    //         message:
    //         `El plato que desea crear ya existe ${platoExiste.nombre}`
    //     })
    // }
    const plato      = new Plato(body);
    const platoNuevo = await plato.save();
    res.status(201).json(platoNuevo);
};

// const actualizarPlato = async (req, res = response) => {
// 	const { id } = req.params;
// 	const { body } = req.body;

// 	const platoActualizado = await Plato.findByIdAndUpdate(id, body, {
// 		new: true,
// 	});
// 	res.json(platoActualizado);
// };

// const borrarPlato= async(req, res = response)=>{
//     const {id} = req.params
//     const platoBorrado= await Plato.findByIdAndUpdate(id,{estado:false}, {new:true});
//     res.json(platoBorrado);
// }
