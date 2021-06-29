"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
// Obtener Usuarios.
const getUsers = (req, res) => {
    res.json({
        method: 'GET',
        message: 'Users'
    });
};
exports.getUsers = getUsers;
// Obtener Usuario.
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        method: 'GET',
        message: 'User',
        id
    });
};
exports.getUser = getUser;
// Crear Usuario.
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        method: 'POST',
        message: 'User',
        body
    });
};
exports.postUser = postUser;
// Actualizar Usuario.
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        method: 'PUT',
        message: 'User',
        id,
        body
    });
};
exports.putUser = putUser;
// Eliminar Usuario.
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        method: 'DELETE',
        message: 'User',
        id,
    });
};
exports.deleteUser = deleteUser;
