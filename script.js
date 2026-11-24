

// ===================================
// 1. VARIABLES AND ARRAY
// ===================================

// Monthly budget
let budget = 40000;

// Store multiple expenses
let expenses = [
    {
        name: "Food",
        amount: 3500,
        category: "Food"
    },
    {
        name: "Transport",
        amount: 2000,
        category: "Transport"
    },
    {
        name: "Rent",
        amount: 5000,
        category: "Rent"
    }
];


// ===================================
// 2. CALCULATE TOTAL EXPENSES
// ===================================

function calculateTotalExpenses() {
    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// ===================================
// 3. CALCULATE REMAINING BALANCE
// ===================================

function calculateBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}


// ===================================
// 4. CONDITIONAL STATEMENTS
// ===================================

function checkBudget(balance) {

    if (balance < 0) {
        return "Warning! You have exceeded your budget.";

    } else if (balance === 0) {
        return "Your budget has been fully used.";

    } else {
        return "Good job! You are within your budget.";
    }
}


// ===================================
// 5. UPDATE DASHBOARD USING DOM
// ===================================

function updateDashboard() {

    let total = calculateTotalExpenses();
    let balance = calculateBalance(budget, total);

    document.getElementById("budgetAmount").textContent =
        "KES " + budget.toLocaleString();

    document.getElementById("totalExpenses").textContent =
        "KES " + total.toLocaleString();

    document.getElementById("remainingBalance").textContent =
        "KES " + balance.toLocaleString();

    // Display budget feedback
    console.log(checkBudget(balance));

    // Display expense records
    let expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    for (let expense of expenses) {

        let item = document.createElement("p");

        item.textContent =
            expense.name + " - KES " +
            expense.amount.toLocaleString() +
            " (" + expense.category + ")";

        expenseList.appendChild(item);
    }
}


// ===================================
// 6. HANDLE USER INTERACTIONS
// ===================================

document.getElementById("expenseForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("expenseName").value.trim();

    let amount = Number(document.getElementById("expenseAmount").value);

    let category = document.getElementById("expenseCategory").value;

    if (name === "" || !Number.isFinite(amount) || amount <= 0 || category === "") {
        alert("Please enter valid expense information.");
        return;
    }

    // Add new expense to array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    // Clear the form
    document.getElementById("expenseForm").reset();

    // Update dashboard
    updateDashboard();
});


// ===================================
// 7. DISPLAY INITIAL RESULTS
// ===================================

updateDashboard();

// Display results in console
console.log("Monthly Budget:", budget);
console.log("Total Expenses:", calculateTotalExpenses());
console.log("Remaining Balance:", calculateBalance(budget, calculateTotalExpenses()));
console.log("Budget data type:", typeof budget);
console.log("Expenses data type:", typeof expenses);
