import express, { Application } from "express";
import cors from "cors";

// Routes
import UserRoute from "../routes/user";
import db from "../db/connection";

class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        
        // Inicializar base de datos
        this.dbConn();

        // Inicializar middlewares
        this.middlewares();

        // Inicializar routes
        this.routes();
    }

    // Conexión a la Base de Datos
    async dbConn() {
        try {
            await db.authenticate();
            console.log('Db Online');
            
        } catch (error) {
            throw new Error(error);
        }
    }

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