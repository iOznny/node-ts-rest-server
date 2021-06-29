import { Request, Response } from "express";

// Obtener Usuarios.
export const getUsers = (req: Request, res: Response) => {
    res.json({
        method: 'GET',
        message: 'Users'
    });
}

// Obtener Usuario.
export const getUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        method: 'GET',
        message: 'User',
        id
    });
}

// Crear Usuario.
export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        method: 'POST',
        message: 'User',
        body
    });
}

// Actualizar Usuario.
export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        method: 'PUT',
        message: 'User',
        id,
        body
    });
}

// Eliminar Usuario.
export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        method: 'DELETE',
        message: 'User',
        id,
    });
}