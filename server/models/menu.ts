import { model, Schema } from 'mongoose';

const MenuSchema = new Schema({
    idbar  : { type: Schema.Types.ObjectId, ref: 'Bar' },
    idplato: { type: Schema.Types.ObjectId, ref: 'Plato' },
    precio : Number
});

export default model('Menu', MenuSchema);
