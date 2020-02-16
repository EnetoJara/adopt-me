import { DataTypes, Sequelize } from 'sequelize';
import { CommentsStatic } from "../../types/api/index";

export function commentsFactory (config: Sequelize): CommentsStatic {
    return <CommentsStatic>config.define("comments", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
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
