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
    if(inputText == "" || inputAmount == "") {
        console.log("Blank Input");
        // Add error message class to input
    } else {
        const transaction = {
            name: inputText.value,
            amount: inputAmount.value,
            id: randomID(),
        }
        transactions.push(transaction)
        createTransaction();
        console.log(inputText.value);
        console.log(inputAmount.value);
        console.log(transaction);
    }

    inputText.value = "";
    inputAmount.value = ""
}

const createTransaction = () => {

}



inputForm.addEventListener("submit", addTransaction)
