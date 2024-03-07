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
  for (let i = 0; i < employeesArray.length; i++) {
    total += Math.floor(parseFloat(employeesArray[i].salary));
  }
  avg = Math.floor(parseFloat(total / employeesArray.length));
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $ ${parseFloat(avg)}.00`);
  //****************************************************************************************************************//
  console.log("===");
  //****************************************************************************************************************//
  const rand = Math.floor(Math.random() * 3);
  let randomEmployee = employeesArray[rand];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner! `);
  //****************************************************************************************************************//
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

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare, one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place, based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } 
    else {
      /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

