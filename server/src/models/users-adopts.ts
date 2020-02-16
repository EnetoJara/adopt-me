import { DataTypes, Sequelize } from 'sequelize';
import { UserAdoptsStatic } from "../../types/api/index";

export function userAdoptsFActory (config: Sequelize): UserAdoptsStatic {
    return <UserAdoptsStatic>config.define("user_adopts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        adoption_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    })
}
