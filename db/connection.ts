import { Sequelize } from "sequelize";

const db = new Sequelize('nodets', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;