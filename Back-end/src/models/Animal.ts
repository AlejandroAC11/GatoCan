import { Document, model, Schema } from "mongoose";
import uniqueValidator = require("mongoose-unique-validator");

interface IAnimal extends Document {
    attachment: string;
    nombre: string;
    raza: string;
    sexo: string;
    descriptionEs: string;
    descriptionGa: string;
    otrosEs: string;
    otrosGa: string;
}

export const AnimalSchema = new Schema({
    attachment: {
        type: String,
    },
    nombre: {
        required: [true, "Introduzca un nombre"],
        type: String,
    },
    raza: {
        required: [true, "Introduzca una raza"],
        type: String,
    },
    sexo: {
        required: [true, "Introduzca un sexo"],
        type: String,
    },
    descriptionEs: {
        required: [true, "Introduzca una descripcion en español"],
        type: String,
    },
    descriptionGa: {
        required: [true, "Introduzca una descripcion en gallego"],
        type: String,
    },
    otrosEs: {
        type: String,
    },
    otrosGa: {
        type: String,
    },
});

AnimalSchema.plugin(uniqueValidator);
export const Animal = model<IAnimal>("Animal", AnimalSchema);