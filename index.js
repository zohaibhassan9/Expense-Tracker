let expenses = [];
let totalAmount = 0;

function addExpense(){
const name = document.getElementById("expense-name").value.trim();
const amount =parseFloat(document.getElementById("expense-amount").value.trim());

if (name === '' || isNaN(amount) || amount <= 0){
alert('please enter a valied name or amount');
return;
}
const expense = {name, amount};
expenses.push(expense);

updateExpenseList();
updateTotalAmount();
// clear input fields
document.getElementById("expense-name").value = '';
document.getElementById("expense-amount").value = '';

}


function updateExpenseList(){
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
       <span>${expense.name}</span>
       <span>${expense.amount.toFixed(2)}</span>
       <button onclick = "deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });
}

function updateTotalAmount(){
    totalAmount.textContent = totalAmount.toFixed(2);
}

function deleteExpense(index){
expenses.splice(index, 1);
updateExpenseList();
updateTotalAmount();
}








// DOM Elements
// const expenseForm = document.getElementById('expenseForm');
// const expenseName = document.getElementById('expenseName');
// const expenseAmount = document.getElementById('expenseAmount');
// const expenseList = document.getElementById('expenseList');
// const totalAmountElement = document.getElementById('totalAmount');


// let expenses = [];


// function addExpense(event) {
//   event.preventDefault(); 
 
//   const name = expenseName.value;
//   const amount = parseFloat(expenseAmount.value);

  
//   if (name.trim() === '' || isNaN(amount)) {
//     alert('Please enter valid expense details.');
//     return;
//   }


//   const expense = {
//     id: Date.now(),
//     name: name,
//     amount: amount
//   };

//   expenses.push(expense);

  
//   expenseName.value = '';
//   expenseAmount.value = '';

  
//   renderExpenses();
// }


// function renderExpenses() {
 
//   expenseList.innerHTML = '';

  
//   let totalAmount = 0;

 
//   expenses.forEach((expense) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       ${expense.name}: $${expense.amount.toFixed(2)}
//       <button onclick="deleteExpense(${expense.id})">Delete</button>
//     `;
//     expenseList.appendChild(li);

  
//     totalAmount += expense.amount;
//   });

 
//   totalAmountElement.textContent = totalAmount.toFixed(2);
// }


// function deleteExpense(id) {
//   expenses = expenses.filter((expense) => expense.id !== id);
//   renderExpenses();
// }


// expenseForm.addEventListener('submit', addExpense);


// renderExpenses();