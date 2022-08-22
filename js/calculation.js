document.getElementById('calculate').addEventListener('click', function () {
    const playerInputValue = getElementById('playerInput');
    const selectedPlayerNumber = getTextById('heading');
    const expense = getTextById('expense');

    let totalExpense = 1;
    if (selectedPlayerNumber === 6) {
        totalExpense = playerInputValue * (selectedPlayerNumber - 1);
    }
    else {
        totalExpense = playerInputValue * (selectedPlayerNumber);
    }
    setTextElementById('expense', totalExpense);
});