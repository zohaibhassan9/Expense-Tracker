let expenses = [];
let totalAmount = 0;

function addExpense(){
const name = document.getElementById("expense-name").value.trim();
const amount = document.getElementById("expense-amount").value.trim();

if (name==='' || isNaN(amount) || amount <= 0){
    alert('please enter a valied name or amount');
    return;
}


}

function deleteExpense(index){
expenses.splice(index, 1);
updateExpenseList();
updateTotalAmount();
}