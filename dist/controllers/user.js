"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
// Obtener Usuarios.
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({
        method: 'GET',
        message: 'Listado de Users',
        users
    });
});
exports.getUsers = getUsers;
// Obtener Usuario.
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({
            message: `No existe un usuario con el id: ${id}`
        });
    }
    res.json({
        method: 'GET',
        message: 'User Obtenido',
        user
    });
});
exports.getUser = getUser;
// Crear Usuario.
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const find = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (find) {
            res.status(404).json({
                message: `Existe un usuario con el email: ${body.email}`
            });
        }
        const user = user_1.default.build(body);
        yield user.save();
        res.json({
            method: 'POST',
            message: 'User Creado',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Surjio un error al intentar crear el usuario, vuelva a intentarlo.`
        });
    }
});
exports.postUser = postUser;
// Actualizar Usuario.
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                message: `No existe un usuario con el id: ${id}`
            });
        }
        yield user.update(body);
        res.json({
            method: 'PUT',
            message: 'User Actualizado',
            user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Surjio un error al intentar actualizar el usuario, vuelva a intentarlo.`
        });
    }
});
exports.putUser = putUser;
// Eliminar Usuario.
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            message: `No existe un usuario con el id: ${id}`
        });
    }
    // Eliminación total.
    //await user.destroy();
    // Eliminación logica.
    yield user.update({ state: false });
    res.json({
        method: 'DELETE',
        message: 'User Eliminado',
        user,
    });
});
exports.deleteUser = deleteUser;
