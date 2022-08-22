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

document.getElementById('calculateTotal').addEventListener('click', function () {
    const playerInputValue = getElementById('playerInput');
    const coachInputValue = getElementById('coachInput');
    const managerInputValue = getElementById('managerInput');
    const selectedPlayerNumber = getTextById('heading');
    const expense = getTextById('expense');

    // let totalExpense = 1;
    if (selectedPlayerNumber === 6) {
        totalExpense = playerInputValue * (selectedPlayerNumber - 1);
    }
    else {
        totalExpense = playerInputValue * (selectedPlayerNumber);
    }

    const total = totalExpense + coachInputValue + managerInputValue;
    setTextElementById('totalExpense', total);
});