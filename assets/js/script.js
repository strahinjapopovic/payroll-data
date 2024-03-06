// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('button#add-employees-btn');
//****************************************************************************************************************//
let data;
let avg = 0;
let total = 0;
const employeesArray = [];
//****************************************************************************************************************//
// Collect employee data
const collectEmployees = function () {
  // Get user input to create and return an array of employee objects
  //****************************************************************************************************************//
  while (confirm("Do you want to add another employee data.") == true) {
    data = {};
    data.firstName = prompt("Enter employee first name:");
    data.lastName = prompt("Enter employee last name.");
    data.salary = parseFloat(prompt("Enter employee salary:"));
    if (isNaN(data.salary) || data.salary == null) {
      data["salary"] = 0;
    }
    //employeesArray.push(data);
    employeesArray[employeesArray.length] = data;
    console.log(`Salary-${employeesArray.length} : ${employeesArray[employeesArray.length - 1].salary} \n`);
  }
  console.log("===");
  console.log(`Number of objects in array : ${employeesArray.length}`);
  console.log("===");
  console.log(employeesArray);
  console.log("===");
  //****************************************************************************************************************//
  return;
}

// Display employee data in an HTML table
const displayEmployees = function () {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = new collectEmployees();

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
