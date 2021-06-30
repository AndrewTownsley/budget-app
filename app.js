feather.replace();

const balance = document.getElementById('balance')
const income = document.getElementById('income')
const expense = document.getElementById('expense')
const transactionList = document.getElementById('transaction-list')
const inputText = document.getElementById('transaction-input-txt')
const inputAmount = document.getElementById('transaction-input-amount')
const addBtn = document.getElementById('add-btn')
let transactions = []

const addTransaction = () => {
    if(inputAmount  || inputText == "" || inputAmount == NaN) {
        console.log("Blank Input");
        // Add error message class to input
    } else {
        const transaction = {
            name: (inputText.value),
            amount: parseFloat(inputAmount.value),
            id: randomID(),
        }
        transactions.push(transaction)
        createTransaction();
    }

    inputText = "";
    inputAmount = ""
}

const randomID = () => {
    Math.floor(Math.random() * 1);
}