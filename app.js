feather.replace();

const balance = document.getElementById('balance')
const income = document.getElementById('income')
const expense = document.getElementById('expense')
const transactionList = document.getElementById('transaction-list')
const inputForm = document.getElementById('input-form')
let inputText = document.getElementById('transaction-input-txt')
let inputAmount = document.getElementById('transaction-input-amount')
const addBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')
let transactions = []



const randomID = () => {
   return Math.floor(Math.random() * 1000);
}

const addTransaction = (event) => {
    event.preventDefault();
    if(inputText.value == "" || inputAmount.value == "") {
        console.log("Blank Input");
        // Add error message class to input
    } else {
        const transaction = {
            name: inputText.value,
            amount: +inputAmount.value,
            id: randomID(),
        }
        transactions.push(transaction)
        createTransaction(transaction);
        updateDisplayValues();
        console.log(transaction);
        
        inputText.value = ""
        inputAmount.value = ""
    }
}

const createTransaction = (transaction) => {
    const transactionItem = document.createElement('li');
    transactionItem.classList.add('transaction-item');
    transaction.amount > 0 ? 
    transactionItem.classList.add('positive') : 
    transactionItem.classList.add('negative');
    transactionItem.innerHTML = 
    `<span>${transaction.name}</span>
    <span> $${transaction.amount}</span>
    <button onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    transactionList.appendChild(transactionItem);
    // Add an icon to delete the transaction.  Also a class based on a negative or positive transaction //

}

const updateDisplayValues = () => {
    let amounts = transactions.map(transaction => transaction.amount);

    let transactionTotal = amounts.reduce((a,b) => (a + b), 0);
    balance.innerText = `$${transactionTotal}`

    let incomeTotal = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);
    income.innerText = `$${incomeTotal}`;

    let expenseTotal = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0)
    expense.innerText = `$${expenseTotal}`;
}

const deleteTransaction = (id) => {
    transactions = transactions.filter(transaction => 
        transaction.id !== id)
        init()
}

function init() {
    transactionList.innerHTML = '';
    transactions.forEach(createTransaction);
    updateDisplayValues();
}

init();



inputForm.addEventListener("submit", addTransaction);

