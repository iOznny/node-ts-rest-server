"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// Routes
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        // Inicializar middlewares.
        this.middlewares();
        // Inicializar routes.
        this.routes();
    }
    // Conexión a la Base de Datos
    // Middlewares
    middlewares() {
        // Cors
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    // Routes
    routes() {
        this.app.use(this.paths.users, user_1.default);
    }
    // Inicializar el servidor.
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        });
    }
}
exports.default = Server;
