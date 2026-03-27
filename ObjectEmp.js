// Create employee object
let employee = {
    name: "Vanita",
    id: 101,
    salary: 50000,

    // Function to show salary
    showSalary: function() {
        console.log("Salary is: " + this.salary);
    }
};

// Call function
employee.showSalary();