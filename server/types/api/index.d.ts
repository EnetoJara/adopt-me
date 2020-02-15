export interface UsersSchema {
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
}

export interface KindsSchema {
    id: number;
    kind: string;
    created: Date;
}

export interface PetsSchema {
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

export interface CommentsSchema {
    id: number;
    comment: string;
    posted: Date;
    poster: number;
    pet: number;
}

export interface UserAdoptsSchema {
    id: number;
    adopter: number;
    last_owner: number;
    pet: number;
    adoption_date: Date;
}
