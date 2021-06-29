import express, { Application } from "express";
import cors from "cors";

// Routes
import UserRoute from "../routes/user";

class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        // Inicializar middlewares.
        this.middlewares();

        // Inicializar routes.
        this.routes();
    }

    // Conexión a la Base de Datos

    // Middlewares
    middlewares() {
        // Cors
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta publica
        this.app.use(express.static('public'));
    }

    // Routes
    routes() {
        this.app.use(this.paths.users, UserRoute);
    }

    // Inicializar el servidor.
    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto' + this.port);
        });
    }

}

export default Server;