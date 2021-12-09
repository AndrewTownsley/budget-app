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

const randomID = () => {
    return Math.floor(Math.random() * 1000);
}

const localStorageTransactions = JSON.parse(
    localStorage.getItem('transactions')
  );
    
  let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

console.log(transactions);

    
    const addTransaction = (event) => {
    console.log(event.target);
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
        console.log(transactions);
        console.log(transaction);
        transactions.push(transaction)
        createTransaction(transaction);
        updateDisplayValues();
        updateLocalStorage();
        
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
    `<div>
        <span class="transaction-item-name" ><i data-feather="circle"></i>${transaction.name}</span>
    </div>
    <div>
    <span class="transaction-item-amount"> $${transaction.amount.toLocaleString('en-us')}</span>
    <button onclick="deleteTransaction(${transaction.id})">delete</button>
    </div>
    `;
    transactionList.appendChild(transactionItem);
    // Add an icon to delete the transaction.  Also a class based on a negative or positive transaction //

}


const updateDisplayValues = () => {
    let amounts = transactions.map(transaction => transaction.amount);

    let transactionTotal = amounts.reduce((a,b) => (a + b), 0);
    balance.innerText = `$${transactionTotal.toLocaleString('en-us')}`

    let incomeTotal = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);
    income.innerText = `$${incomeTotal.toLocaleString('en-us')}`;

    let expenseTotal = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0)
    expense.innerText = `$${expenseTotal.toLocaleString('en-us')}`;
}

const deleteTransaction = (id) => {
    transactions = transactions.filter(transaction => 
        transaction.id !== id)
        updateLocalStorage();
        init()
}

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
    transactionList.innerHTML = '';
    transactions.forEach(createTransaction);
    updateDisplayValues();
}

init();


inputForm.addEventListener("submit", addTransaction);

