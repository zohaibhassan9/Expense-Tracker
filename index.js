let expenses = [];
let totalAmount = 0;

function addExpense() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid expense details.');
        return;
    }

    const expense = { name, amount };
    expenses.push(expense);

    // Update the UI
    updateExpenseList();
    updateTotalAmount();

    // Clear input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.name}</span>
            <span>₹${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

function updateTotalAmount() {
    totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    updateExpenseList();
    updateTotalAmount();
}