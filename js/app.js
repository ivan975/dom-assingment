const names = [];
function displayPlayers() {
    const playerList = document.getElementById('list');
    playerList.innerText = names.length;

    for (let i = 0; i < names.length; i++) {
        if (names.length <= 5) {
            const player = document.createElement('li');
            player.innerHTML = `
            <li>${names[i]}</li>`;
            playerList.appendChild(player);
        }
        else {
            alert('You have reached the maximum number of players');
            break;
        }
    }
}

function addToList(element) {
    const playerName = element.parentNode.parentNode.parentNode.children[0].innerText;
    names.push(playerName);
    element.disabled = true;
    displayPlayers();
}

// function disableButton(element){
    // element.disabled = true;    
// }
// function addToList(element) {
//         const playerContainer = document.createElement('li');
//         const text = document.createTextNode(element.parentNode.parentNode.parentNode.children[0].innerText);
//         playerContainer.appendChild(text);
//         document.getElementById('list').appendChild(playerContainer);
//     }

/* <button onclick="removeFromList(this)">Remove</button>`; */ 
// }