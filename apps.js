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

async function mainMenu() {
    const { choice } = await inquirer.prompt({
      name: 'choice',
      type: 'list',
      message: 'Select an option:',
      choices: mainMenuChoices,
    });
  
    switch (choice) {
      case 'View all departments':
        await viewAllDepartments();
        break;
      case 'View all roles':
        await viewAllRoles();
        break;
      case 'View all employees':
        // Call the function to view all employees
        break;
      case 'Add a department':
        await addDepartmentPrompt();
        break;
      // ... (Other cases)
      case 'Exit':
        console.log('Goodbye!');
        process.exit(0);
      default:
        console.log('Invalid choice.');
        break;
    }
  
    // Return to the main menu after an action is performed
    mainMenu();
  }