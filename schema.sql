DROP DATABASE IF EXISTS employee_tracker_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INTEGER(10) NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
id int NOT NULL AUTO_INCREMENT,
first_name varchar(30) NOT NULL,
last_name varchar(30) NOT NULL,
role_id INTEGER(10) NOT NULL,
manager_id INTEGER(10), 
PRIMARY KEY (id)
);