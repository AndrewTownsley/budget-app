1.  Write a Function to add a transaction
<!--

### a. make sure input is not blank

### b. Create a transaction Object with an ID, the text and amount from the Input

**/ ParseInt() to change the amount text input to a number /**

### c. push that Transaction to the List. -->

<!-- ### d. Call the function that updates the income, expenses, and balance. -->

<!-- ### e. Reset the input values to be blank -->

<!-- 2.  Generate a random ID# for the transaction items in the list. -->

3.  Write a function to add a new Transaction to the DOM.
    <!-- **_ a. Get the +Plus or -Minus sign from the transaction input. _** -->

    <!-- **_ b. Create the HTML for the transaction item. _** -->

    **_ c. Add a class to it based on it being Positive or Negative _**

    <!-- **_ d. Append the item to the transaction-list _** -->

4.  Write a function to update the value of the balance, income, and expense.

<!-- ### a. Map over the transaction list with (transaction.inputAmount) -->

<!-- ### b. Calculate the total by reducing the above^^ to $00.00 format. -->

<!-- ### c. Calculate income from step (a) above^^^ to $00.00 format. -->

<!-- ### d. Calculate expenses from step (a) above^^^ to $00.00 format. -->

<!-- ### e. Update the DOM with the Balance, income, and expense totals. -->
<!--
5.  Write a function to remove a transaction item.
    **_ a. filter the transaction list ID's to remove the item with the ID that we want to remove.(look up how to do this on stack overflow) _**

**_ b. call a function to reInitialize the list(See step 6 below) _** -->

**Store the transaction items in Local Storage \_**
**Store the transaction items in Local Storage \_**

<!--
6.  Write a function to reinitialize the transaction list when an item is removed.

### a. clear the list to be empty.

### b. call the function that creates the Items in the DOM forEach transaction.

### c. update the values of the balance, income, and expenses again.

7.  listen for the Input form to be submitted, and call the function that adds a transaction . -->

8.  Add tabs and different displays for income, expenses, and all transactions
    a. Add a button for each that selects the individual display.
    b. Add edit and delete buttons
    c. When one of the selector buttons is clicked, make that button active, with full opacity, and the others inactive, with low opacity.
    d. When a selector button is clicked, the other (income, all, expense) lists need to be hidden, while the active selection is shown to the user.

9.  Create an active() function that takes the selected button from hidden to displayed when it is clicked.

10. Create an inactive() function that takes the selected button from displayed to hidden when clicked.

11. Create a show() function that shows the selected list element when clicked.

12. Create a hide() function that hides the selected list element when clicked.
