import { Request, Response } from "express";
import User from '../models/user';

// Obtener Usuarios.
export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();

    res.json({
        method: 'GET',
        message: 'Listado de Users',
        users
    });
}

// Obtener Usuario.
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
        res.status(404).json({
            message: `No existe un usuario con el id: ${ id }`
        });
    }

    res.json({
        method: 'GET',
        message: 'User Obtenido',
        user
    });
}

// Crear Usuario.
export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const find = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (find) {
            res.status(404).json({
                message: `Existe un usuario con el email: ${ body.email }`
            });
        }

        const user = User.build(body);
        await user.save();

        res.json({
            method: 'POST',
            message: 'User Creado',
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Surjio un error al intentar crear el usuario, vuelva a intentarlo.`
        });
    }
}

// Actualizar Usuario.
export const putUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: `No existe un usuario con el id: ${ id }`
            });
        }

        await user.update(body);

        res.json({
            method: 'PUT',
            message: 'User Actualizado',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: `Surjio un error al intentar actualizar el usuario, vuelva a intentarlo.`
        });
    }
}

// Eliminar Usuario.
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(404).json({
            message: `No existe un usuario con el id: ${ id }`
        });
    }

    // Eliminación total.
    //await user.destroy();

    // Eliminación logica.
    await user.update({ state: false });

    res.json({
        method: 'DELETE',
        message: 'User Eliminado',
        user,
    });
}