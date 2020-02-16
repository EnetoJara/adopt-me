import { DataTypes, Sequelize } from 'sequelize';
import { UserStatic } from "../../types/api/index";

export function userFactory(config: Sequelize): UserStatic {

    return <UserStatic>config.define("users", {
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
        middlename: {
            allowNull: true,
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
                len: [0, 50]
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                len: [1, 50]
            }
        },
        secondlastname: {
            allowNull: true,
            type: DataTypes.STRING,
            validate: {
                isAlpha: true,
                len: [0, 50]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isCellPhone(value) {
                    const isPhone = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
                    if (!isPhone.test(value)) {
                        throw new Error("Invalid Format");
                    }
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 150],
                notNull: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true,
                isEmail: true,
                len: [1, 60]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                notEmpty: true,
                len: [2, 30]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                notEmpty: true,
                len: [2, 30]
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
                notNull: true,
                notEmpty: true,
                len: [2, 60]
            }
        },
        numext: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
                notNull: true,
                notEmpty: true,
                len: [2, 100]
            }
        },
        numint: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
                len: [2, 100]
            }
        },
        postalcode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                notNull: true,
                notEmpty: true,
                len: [2, 100]
            }
        },
        rfc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isRFC(value) {
                    const rfc = new RegExp(/^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})\d{2}((0[1-9]|1[012])(0[1-9]|1\d|2[0-8])|(0[13456789]|1[012])(29|30)|(0[13578]|1[02])31)(\w{2})([A|a|0-9]{1}))$|^(([ÑA-Z|ña-z|&]{3}|[A-Z|a-z]{4})([02468][048]|[13579][26])0229)(\w{2})([A|a|0-9]{1})$/);
                    if (!rfc.test(value)) {
                        throw new Error("Invalid Format");

                    }
                }
            }
        },
        bday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true,
                isDate: true,
                isBefore: "2019-11-05",
            }
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
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
