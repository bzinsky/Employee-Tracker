const inquirer = require('inquirer');
const {
  getAllDepartments,
  getAllRoles,
  addDepartment,
} = require('./db/db'); // Update the path accordingly

// Main menu choices
const mainMenuChoices = [
  'View all departments',
  'View all roles',
  'View all employees',
  'Add a department',
  'Add a role',
  'Add an employee',
  'Update an employee role',
  'Exit',
];