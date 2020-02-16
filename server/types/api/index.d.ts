import { BuildOptions, Model } from "sequelize";

export interface UserAttributes {
    id: number,
    name: string;
    middlename: string;
    lastname: string;
    secondlastname: string;
    phone: string;
    password: string;
    email: string;
    state: string;
    city: string;
    street: string;
    numext: string;
    numint: string;
    postalcode: string;
    rfc: string;
    bday: Date;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};


export interface KindsAttributes {
    id: number;
    kind: string;
    created: Date;
}


export interface KindsModel extends Model<KindsAttributes>, KindsAttributes {}
export class Kinds extends Model<KindsModel, KindsAttributes> {}

export type KindsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): KindsModel;
};


export interface PetsAttributes {
    id: number;
    name: string;
    kind: number;
    years: number;
    created: Date;
    description: string;
    owner: number;
    adopted: number;
    since: Date;
    picture1: string;
    picture2: string;
    picture3: string;
}

export interface PetsModel extends Model<PetsAttributes>, PetsAttributes {}
export class Pets extends Model<PetsModel, PetsAttributes> {}

export type PetsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): PetsModel;
};



export interface CommentsAttributes {
    id: number;
    comment: string;
    posted: Date;
    poster: number;
    pet: number;
}


export interface CommentsModel extends Model<CommentsAttributes>, CommentsAttributes {}
export class Comments extends Model<CommentsModel, CommentsAttributes> {}

export type CommentsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CommentsModel;
};

export interface UserAdoptsAttributes {
    id: number;
    adopter: number;
    last_owner: number;
    pet: number;
    adoption_date: Date;
}

export interface UserAdoptsModel extends Model<UserAdoptsAttributes>, UserAdoptsAttributes {}
export class UserAdopts extends Model<UserAdoptsModel, UserAdoptsAttributes> {}

export type UserAdoptsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserAdoptsModel;
};

export interface UserGoogleAttributes {
    id?: number;
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    picture?: string;
    email?: string;
    email_verified?: boolean;
    locale?: string;
    created?: Date;
}

export interface UserGoogleModel extends Model<UserGoogleAttributes>, UserGoogleAttributes {}
export class UserGoogle extends Model<UserGoogleModel, UserGoogleAttributes> {}

export type UserGoogleStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserGoogleModel;
};
