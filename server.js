var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  
  user: "root",

  
  password: "Ginobilli#20",
  database: "employee_tracker_db"
});

connection.connect(function (err) {
  if (err) throw err;
  //home table function
  init();
});

function init() {
  inquirer.prompt({
    name: "home",
    type: "rawlist",
    message: "Choose an option",
    choices: [
      "View departments",
      "Add a department",
      "View roles",
      "Add a role",
      "View employees",
      "Add an employee",
      "Update Role",
      "Exit"
    ]
  }).then(function (userResponse) {
    switch (userResponse.home) {
      case "View departments":
        viewDepartments();
        break;

      case "Add a department":
        addDepartment();
        break;
      
      case "View roles":
        viewRoles();
        break;

      case "Add a role":
        addRole();
        break;

      case "View employees":
        viewEmployees();
        break;

      case "Add an employee":
        addEmployee();
        break;

      case "Update Role":
        updateRole();
        break;

      case "Exit":
        exit();
        break;
    }
  });
}


function viewDepartments() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  })
}

function viewRoles() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    init();
  })
}

function viewEmployees() {
  var query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    console.table(res);
    init();
  })
}


function addDepartment() {
  inquirer.prompt({
    name: "addDept",
    type: "input",
    message: "Add the department: "
  }).then(function (userResponse) {
    var addDept = "INSERT INTO `department` (name) VALUES (?)";
    connection.query(addDept, [userResponse.addDept], function (err, res) {
      if (err) throw err;
      console.log("Department Successfully Updated!")
      init();
    })
  })
}

function addRole() {
  inquirer.prompt([
    {
      name: "addTitle",
      type: "input",
      message: "Please add the role title:"
    },
    {
      name: "addSalary",
      type: "input",
      message: "Please add the salary for this role title:"
    },
    {
      name: "addDepartment",
      type: "input",
      message: "Please add the department ID for this role:"
    }
  ]).then(function (userResponse) {
    var addRoleData = "INSERT INTO `role` (title, salary, department_id) VALUES (?, ?, ?)";
    connection.query(addRoleData, [userResponse.addTitle, userResponse.addSalary, userResponse.addDepartment], function (err, res) {
      if (err) throw err;
      console.log("Role Successfully Added!")
      init();
    })
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      name: "addFirst",
      type: "input",
      message: "Please add employee's first name:"
    },
    {
      name: "addLast",
      type: "input",
      message: "Please add employee's last name:"
    },
    {
      name: "addRoleID",
      type: "input",
      message: "Please add the role ID for this employee:"
    },
    {
      name: "addManagerID",
      type: "input",
      message: "Please add the Manager ID for this employee:"
    }
  ]).then(function (userResponse) {
    var addEmployeeData = "INSERT INTO `employee` (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
    connection.query(addEmployeeData, [userResponse.addFirst, userResponse.addLast, userResponse.addRoleID, userResponse.addManagerID], function (err, res) {
      if (err) throw err;
      console.log("Employee Successfully Added!")
      init();
    })
  })
}

//Getting parsing error #1064 for these, solve
function updateRole() {
  inquirer.prompt([
    {
      name: "roleID",
      type: "input",
      message: "Select the role ID you want to update:"
    },
    {
      name: "roleUpdate",
      type: "rawlist",
      message: "What would you like to update?",
      choices: [
        "Role Title",
        "Role Salary",
        "Department ID",
        "Exit"
      ]
    },
    {
      name: "result",
      type: "input",
      message: "Add what you would like the change to be here:"
    }
  ]).then(function (userResponse) {
      if (userResponse.roleUpdate === "Role Title") {
        var changeTitle = "UPDATE `role` SET title (?) WHERE id = (?)";
        connection.query(changeTitle, [userResponse.result, userResponse.roleID], function (err, res) {
          if (err) throw err;
          console.log ("Successfully changed the role title!")
          init();
        })
      }
      else if (userResponse.roleUpdate === "Role Salary") {
        userResponse.result = parseInt(userResponse.result);
        userResponse.roleID = parseInt(userResponse.roleID);
        var changeSalary = "UPDATE `role` SET salary (?) WHERE id = (?)";
        connection.query(changeSalary, [userResponse.result, userResponse.roleID], function (err, res) {
          if (err) throw err;
          console.log ("Succesfully changed the role salary!")
          init();
        })
      }
      else if (userResponse.roleUpdate === "Department ID") {
        userResponse.result = parseInt(userResponse.result);
        var changeID = "UPDATE `role` SET department_id (?) WHERE id = (?)";
        connection.query(changeID, [userResponse.result, userResponse.roleID], function (err, res) {
          if (err) throw err;
          console.log ("Successfully changed the department ID!")
          init();
        })
      }
      else {
        init();
      }
  })
}

function exit() {
  console.log("Thanks for visiting!")
  connection.end;
}

