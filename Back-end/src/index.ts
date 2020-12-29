import express from 'express';
import * as dotenv from 'dotenv';
import mongoose = require("mongoose");
import { Auth } from './functions/auth';
import { AnimalRoutes } from './routes/animalRoutes';

class App {
    public app: express.Application;
    private authSource = "?authSource=admin";
    private auth: Auth = new Auth();
    private animalRoutes: AnimalRoutes = new AnimalRoutes(this.auth);

    constructor() {
        this.app = express();
        this.config();
        this.animalRoutes.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        
        let path;
        /*
        switch (process.env.NODE_ENV) {
          case "test":
            path = `${__dirname}/.env.test`;
            break;
          case "production":
            path = `${__dirname}/.env.production`;
            break;
          default:
            path = `${__dirname}/.env.development`;
        }
        */
        path = `${__dirname}/.env.development`;
        dotenv.config({ path: path });
        if (!process.env.MONGO_USER) {
            throw new Error("Error, no se han cargado las variables de entorno necesarias para arrancar la API.");
        }
        
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use( (req, res, next) => {
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
           res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
           next();
        });
        // Para servir archivos 'estaticos'
        // this.app.use("/static", express.static("static"));
    }

    private mongoSetup(): void {
        let mongoUrl: string;
        (mongoose as any).Promise = global.Promise;
        // tslint:disable-next-line:max-line-length 
        mongoUrl = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}` + this.authSource;
        // console.log('URL de conexion =>', mongoUrl);
        mongoose.set("useCreateIndex", true);
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Conexión con MongoDB realizada con éxito')).catch(error => console.log('Error de conexion a BD => ', error));
    }
}

export default new App().app;
export const JWT_SECRET: string = process.env.JWT_SECRET;