import express, { Application } from "express";

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

        // Inicializar routes.
        this.routes();
    }

    // Routes
    routes() {
        this.app.use(this.paths.users, UserRoute);
    }

    // Levantar el servidor.
    listen() {
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto' + this.port);
            
        });
    }
}

export default Server;