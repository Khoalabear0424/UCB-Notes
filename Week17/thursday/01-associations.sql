/*
there's a thing called normalizing your DATABASE
	
	and that just means you break up your tables into many tables and you have joining tables connecting them together.

		so you don't have any empty columns 
*/


/*
so what are associations
	
	it's just terminology

		it helps you communicate how your tables are connected together to other developers

			so if you are a Sales Engineer, Sales Consultant, Solutions Engineer, Solutions Architect,
*/

/*
users and foods have the following association (or relationship)
	
	a has many association 

		it's also called a one to many association 

			a user has many foods

			a food belongs to a user

				what does this mean?		
					it means that you can have pasta, salad, beets all with the same user id in the foods table
*/
	
	DROP DATABASE IF EXISTS associations_one_to_many_db;

	CREATE DATABASE associations_one_to_many_db;

	USE associations_one_to_many_db;

	CREATE TABLE users (
	    id INT NOT NULL AUTO_INCREMENT, 
	    user_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
	CREATE TABLE foods (
	    id INT NOT NULL AUTO_INCREMENT, 
	    food_name VARCHAR(255) NOT NULL,
	    user_id INT NOT NULL,
	    FOREIGN KEY user_id REFERENCES users(id),
	    PRIMARY KEY(id)
	);


/*
users and drivers_licenses have the following association (or relationship)
	
	a has one association 

		it's also called a one to one association 

			a user has one drivers_license

			a drivers_license belongs to a user

				what does this mean?		
					it means that you can have one drivers_license ONLY and no more
*/

	DROP DATABASE IF EXISTS associations_one_to_one_db;

	CREATE DATABASE associations_one_to_one_db;

	USE associations_one_to_one_db;

	CREATE TABLE users (
	    id INT NOT NULL AUTO_INCREMENT, 
	    user_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);

	CREATE TABLE drivers_licenses (
	    id INT NOT NULL AUTO_INCREMENT, 
	    license_number TEXT NOT NULL,
	    user_id INT UNIQUE NOT NULL,
	    FOREIGN KEY user_id REFERENCES users(id),
	    PRIMARY KEY(id)
	);


/*
users and doctors have the following association (or relationship)
	
	a has many and belongs to 

		a user has many doctors and belongs to a doctor

		a doctor has many users and  belongs to a user

			what does this mean?		
				it means that you can have many doctors

				and a doctor can have many users 
*/

	DROP DATABASE IF EXISTS associations_has_many_and_belongs_to_db;

	CREATE DATABASE associations_has_many_and_belongs_to_db;

	USE associations_has_many_and_belongs_to_db;

	CREATE TABLE users (
	    id INT NOT NULL AUTO_INCREMENT, 
	    user_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
	CREATE TABLE doctors (
	    id INT NOT NULL AUTO_INCREMENT, 
	    doctor_name VARCHAR(255) NOT NULL,
	    speciality VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);

	/* when all you have are foreign keys, you don't need a primary key, it's a joining table - it's a table that's just connecting two tables together */
	CREATE TABLE users_doctors (
		user_id INT NOT NULL,
		doctor_id INT NOT NULL,
		FOREIGN KEY user_id REFERENCES users(id),
		FOREIGN KEY doctor_id REFERENCES doctors(id)
	);

/*
users and doctors have the following association (or relationship)
	
	a has many through

		a user has many doctors through the users_doctors table

		a doctor has many users through the users_doctors table

			what does this mean?		
				it means that you can have many doctors

				and a doctor can have many users 
*/

	DROP DATABASE IF EXISTS associations_has_many_through_db;

	CREATE DATABASE associations_has_many_through_db;

	USE associations_has_many_through_db;

	CREATE TABLE users (
	    id INT NOT NULL AUTO_INCREMENT, 
	    user_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
	CREATE TABLE doctors (
	    id INT NOT NULL AUTO_INCREMENT, 
	    doctor_name VARCHAR(255) NOT NULL,
	    speciality VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);

	/* here we have a primary key because we have a notes column and that's not a foreign key */
	CREATE TABLE users_doctors (
	    id INT NOT NULL AUTO_INCREMENT, 
		user_id INT NOT NULL,
		doctor_id INT NOT NULL,
		notes TEXT,
		FOREIGN KEY user_id REFERENCES users(id),
		FOREIGN KEY doctor_id REFERENCES doctors(id),
	    PRIMARY KEY(id)
	);

/*
cats, dogs and toys have the following association (or relationship)
	
	a polymorphic relationship

		a cat has many toys

		a dog has many toys

		a toy belongs to an owner

			what does this mean?		
				it means that a toy can be owned by either one dog or one cat 

					AND IN THE FUTURE the toy can be owned by any other animal
*/

	DROP DATABASE IF EXISTS associations_polymorphic_db;

	CREATE DATABASE associations_polymorphic_db;

	USE associations_polymorphic_db;

	CREATE TABLE cats (
	    id INT NOT NULL AUTO_INCREMENT, 
	    cat_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
		/* 1, gato */ 

	CREATE TABLE dogs (
	    id INT NOT NULL AUTO_INCREMENT, 
	    dog_name VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
		/* 1, fido */

	CREATE TABLE toys (
	    id INT NOT NULL AUTO_INCREMENT, 
	    toy_name VARCHAR(255) NOT NULL,
	    owner_id INT NOT NULL,
	    owner_type VARCHAR(255) NOT NULL,
	    PRIMARY KEY(id)
	);
		/* 1, ball, 1, 'cats' */










