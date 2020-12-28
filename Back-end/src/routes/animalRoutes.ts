import { Auth } from "./../functions/auth";
import { AnimalController } from "../controllers/animalController";

export class AnimalRoutes {
    public animalController: AnimalController = new AnimalController();
    public auth: Auth;

    constructor(auth: Auth) {
        this.auth = auth;
    }

    public routes(app): void {
        app.route("/animales")
            .get(this.animalController.getAnimales);
            // .post(this.auth.jwtVerify, this.actorController.addNewContact);
    }
}