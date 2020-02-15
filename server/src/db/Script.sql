DROP schema if exists public;

CREATE SCHEMA public AUTHORIZATION john;


-- Drop table

DROP TABLE if exists users;

CREATE TABLE users (
	id bigserial NOT NULL,
	"name" bpchar(50) NOT NULL,
	middlename bpchar(50) NULL,
	lastname bpchar(50) NOT NULL,
	secondlastname bpchar(50) NULL,
	phone bpchar(20) NOT NULL,
	password bpchar(150) not null,
	email bpchar(60) NOT NULL,
	state bpchar(60) NOT NULL,
	city bpchar(100) NOT NULL,
	street bpchar(100) NOT NULL,
	numext bpchar(20) NOT NULL,
	numint bpchar(20) NULL,
	postalcode bpchar(20) NOT NULL,
	rfc bpchar(50) NOT NULL,
	bday date NOT NULL,
	CONSTRAINT users_email_key UNIQUE (email),
	CONSTRAINT users_phone_key UNIQUE (phone),
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_rfc_key UNIQUE (rfc)
);


 DROP TABLE if exists kinds;

CREATE TABLE kinds (
	id smallserial NOT NULL,
	kind bpchar(30) NOT NULL,
	created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT kinds_kind_key UNIQUE (kind),
	CONSTRAINT kinds_pkey PRIMARY KEY (id)
);

DROP table if EXISTS pets;

CREATE TABLE pets (
	id bigserial NOT NULL,
	"name" varchar(60) NOT NULL,
	kind smallserial NOT NULL,
	years int2 NOT NULL,
	created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	description varchar(250) NOT NULL,
	"owner" bigserial NOT NULL,
	adopted int2 NOT NULL DEFAULT 0,
	since date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	picture1 text NOT NULL,
	picture2 text NOT NULL,
	picture3 text NOT NULL,
	CONSTRAINT pets_pk PRIMARY KEY (id)
);

ALTER TABLE public.pets ADD CONSTRAINT pets_fk FOREIGN KEY (id) REFERENCES kinds(id);
ALTER TABLE public.pets ADD CONSTRAINT users_fk FOREIGN KEY (id) REFERENCES users(id);


DROP table if EXISTS pet_has_comments;

CREATE TABLE pet_has_comments (
	id bigserial NOT NULL,
	"comment" varchar(250) NOT NULL,
	posted date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	poster bigserial NOT NULL,
	pet bigserial NOT NULL,
	CONSTRAINT pet_has_comments_pk PRIMARY KEY (id)
);

ALTER TABLE public.pet_has_comments ADD CONSTRAINT pet_has_comments_fk FOREIGN KEY (id) REFERENCES pets(id) ON DELETE RESTRICT;
ALTER TABLE public.pet_has_comments ADD CONSTRAINT pet_has_comments_fk_1 FOREIGN KEY (id) REFERENCES users(id) ON DELETE RESTRICT;


DROP table if EXISTS user_adopts_pet;

CREATE TABLE user_adopts_pet (
	id bigserial NOT NULL,
	adopter bigserial NOT NULL,
	last_owner bigserial NOT NULL,
	pet bigserial NOT NULL,
	adoption_date date NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT user_adopts_pet_pk PRIMARY KEY (id)
);

ALTER TABLE public.user_adopts_pet ADD CONSTRAINT user_adopts_pet_fk FOREIGN KEY (id) REFERENCES users(id) ON DELETE RESTRICT;
ALTER TABLE public.user_adopts_pet ADD CONSTRAINT user_adopts_pet_fk_1 FOREIGN KEY (id) REFERENCES users(id) ON DELETE RESTRICT;
ALTER TABLE public.user_adopts_pet ADD CONSTRAINT user_adopts_pet_fk_2 FOREIGN KEY (id) REFERENCES pets(id) ON DELETE RESTRICT;
