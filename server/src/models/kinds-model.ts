import { DataTypes, Sequelize } from 'sequelize';
import { KindsStatic } from "../../types/api/index";

export function kindsFactory(config: Sequelize): KindsStatic {
    return <KindsStatic>config.define("kinds", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                len: [1, 50]
            }
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
