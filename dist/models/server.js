"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Routes
const user_1 = __importDefault(require("../routes/user"));
class Server {
    constructor() {
        this.paths = {
            users: '/api/users'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        // Inicializar routes.
        this.routes();
    }
    // Routes
    routes() {
        this.app.use(this.paths.users, user_1.default);
    }
    // Levantar el servidor.
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port);
        });
    }
}
exports.default = Server;
