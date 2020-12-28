import { Request, Response } from "express";
import { Animal } from "./../models/animal";

export class AnimalController {

    public getAnimales(req: Request, res: Response) {
        Animal.find({}, (err, animal) => {
            if (err) {
                res.send(err);
            }
            res.json(animal);
        });
    }
}
