feather.replace();

const balance = document.getElementById('balance')
const income = document.getElementById('income')
const expense = document.getElementById('expense')
const transactionList = document.getElementById('transaction-list')
const inputForm = document.getElementById('input-form')
let inputText = document.getElementById('transaction-input-txt')
let inputAmount = document.getElementById('transaction-input-amount')
const addBtn = document.getElementById('add-btn')
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
        createTransaction();
        updateDisplayValues();
        // console.log(inputText.value);
        console.log(inputAmount.value);
        console.log(transaction);
    }

    inputText.value = ""
    inputAmount.value = ""
}

const createTransaction = () => {
    const transactionItem = document.createElement('li');
    transactionItem.classList.add('transaction-item');
    transactionList.appendChild(transactionItem);
    transactionItem.innerHTML = `<span>${inputText.value}</span><span> $${inputAmount.value}</span>`;
    // Add an icon to delete the transaction.  Also a class based on a negative or positive transaction //

}

const updateDisplayValues = () => {
    let amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);

    let transactionTotal = amounts.reduce((a,b) => (a + b), 0);
    console.log(transactionTotal);
    balance.innerText = `$${transactionTotal}`

    let incomeTotal = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0);
        console.log(incomeTotal);
    income.innerText = `$${incomeTotal}`;

    let expenseTotal = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0)
    expense.innerText = `$${expenseTotal}`;
}



inputForm.addEventListener("submit", addTransaction)
