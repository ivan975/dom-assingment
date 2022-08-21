// function displayPlayers() {
//     const playerContainer = document.getElementById('list');
//     playerContainer.textContent = '';

//     for (let i = 0; i < 5; i++) {
//         let names = [];
//         const player = document.createElement('li');
//         player.innerHTML = `
//         <span>${names[i + 1]}</span>
//         <li>${names[i].playerName}</li>
//         `;
//         playerContainer.appendChild(player);
//     }
// }

// function addToList(element) {
//     let names = [];
//     const playerName = element.parentNode.parentNode.children[0].innerText;
//     names.push(playerName);

//     displayPlayers();
// }

function addToList(element) {
    const playerContainer = document.createElement('li');
    const text = document.createTextNode(element.parentNode.parentNode.parentNode.children[0].innerText);
    playerContainer.appendChild(text);
    document.getElementById('list').appendChild(playerContainer);
}