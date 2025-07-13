// Select elements
const customerForm = document.getElementById("customerForm");
const customerList = document.getElementById("customerList");

// Load Customers from Local Storage
document.addEventListener("DOMContentLoaded", loadCustomers);

// Form Submit Event
customerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Validate input
  if (name === "" || email === "" || phone === "") {
    alert("Please fill out all fields");
    return;
  }

  // Create customer object
  const customer = { name, email, phone };

  // Save to localStorage
  saveCustomer(customer);

  // Add customer to table
  addCustomerToTable(customer);

  // Clear form fields
  customerForm.reset();
});

// Function to Save Customer in Local Storage
function saveCustomer(customer) {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  customers.push(customer);
  localStorage.setItem("customers", JSON.stringify(customers));
}

// Function to Load Customers from Local Storage
function loadCustomers() {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  customers.forEach((customer) => addCustomerToTable(customer));
}

// Function to Add Customer to Table
function addCustomerToTable(customer) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${customer.name}</td>
        <td>${customer.email}</td>
        <td>${customer.phone}</td>
        <td><button class="delete-btn">❌ Delete</button></td>
    `;

  // Delete Customer Event
  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
    deleteCustomer(customer);
  });

  // Append to customer list
  customerList.appendChild(row);
}

// Function to Delete Customer from Local Storage
function deleteCustomer(customer) {
  let customers = JSON.parse(localStorage.getItem("customers")) || [];
  customers = customers.filter((c) => c.email !== customer.email);
  localStorage.setItem("customers", JSON.stringify(customers));
}
