USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("I.T."), ("Marketing"), ("Customer Service"), ("Accounts"), ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES("Full Stack Developer", 85000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES("Junior Developer", 60000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES("Senior Marketer", 80000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES("Junior Marketer", 55000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES("Customer Service Manager", 75000, 3);

INSERT INTO role (title, salary, department_id)
VALUES("Customer Service Officer", 65000.00, 3);

INSERT INTO role (title, salary, department_id)
VALUES("Managerial Accountant", 85000, 4);

INSERT INTO role (title, salary, department_id)
VALUES("Accountant", 70000.00, 4);

INSERT INTO role (title, salary, department_id)
VALUES("Human Resource Manager", 75000, 5);

INSERT INTO role (title, salary, department_id)
VALUES("Human Resource Officer", 60000.00, 5);

INSERT INTO role (title, salary, department_id)
VALUES("I.T. Manager", 90000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES("Marketing Manager", 90000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thomas", "Maglaris", 11, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Stevens", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeremy", "Doyle", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tina", "Middlesworth", 12, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Liam", "Griffen", 3, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Caroline", "Kirk", 4, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Kent", 5, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Wozniaki", 6, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "Benevento", 7, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Nathan", "Capo", 8, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Selina", "Douglas", 9, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Archie", "Simpson", 10, 5);



