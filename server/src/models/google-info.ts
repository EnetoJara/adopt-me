import { DataTypes, Sequelize } from 'sequelize';
import { UserGoogleStatic } from "../../types/api/index";

export function googleInfoFactory (config: Sequelize): UserGoogleStatic {
    return <UserGoogleStatic>config.define("google_info", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        sub: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                notNull: true,
                len: [1, 50]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                len: [1, 150]
            }
        },
        given_name: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
                len: [1, 50]
            }
        },
        family_name: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
                len: [1, 50]
            }
        },
        picture: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true,
                len: [1, 60]
            }
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        locale: {
            type: DataTypes.STRING,
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
