
const expenseForm = document.getElementById('expense-form');
const expenseAmount = document.getElementById('expense-amount');
const expenseName = document.getElementById('expense-name');
const expenseList = document.getElementById('expense-list');
const totalAmountValue = document.getElementById('total-amount');
let expenses = [];
let totalAmount = 0;
function addExpense(event){
event.preventDefault();

const name = expenseName.value.trim();
const amount =parseFloat(expenseAmount.value.trim());

if(name === '' || isNaN(amount) || amount < 0){
 alert("Please enter a valid value.");
 return;
}

const expense = {
id: Date.now(),
name: name,
amount: amount,
};

expenses.push(expense);
totalAmount += amount;

updateExpenseList();
updateTotalAmount();


expenseName.value = '';
expenseName.value = '';
// or
expenseName.value = '';
expenseAmount.value = '';

}

function updateExpenseList(){
expenseList.innerHTML = '';
    
expenses.forEach((expense) => { // Use expense object directly
    const li = document.createElement('li');
    li.innerHTML = `
        ${expense.name}: $${expense.amount.toFixed(2)}
        <button onclick="removeExpense(${expense.id})">Delete</button>
    `;
    expenseList.appendChild(li);
});

}

function updateTotalAmount(){
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0); // Ensure totalAmount is updated
    totalAmountValue.textContent = totalAmount.toFixed(2);

}
function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id !== id);
    updateExpenseList();
    updateTotalAmount()
  }

expenseForm.addEventListener('submit', addExpense);


