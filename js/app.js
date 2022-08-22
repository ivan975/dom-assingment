const names = [];
function displayPlayers() {
    const heading = document.getElementById('heading');
    heading.innerText = names.length;

    const playerList = document.getElementById('list');
    playerList.textContent = '';
    for (let i = 0; i < names.length; i++) {
        if (names.length <= 5) {
            const player = document.createElement('tr');
            player.innerHTML = `
            <th>${i + 1}</th>
            <th>${names[i]}</th>`;
            playerList.appendChild(player);
        }
        else {
            alert('You have reached the maximum number of players');
            window.location.reload();
        }
    }
}
function addToList(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    names.push(playerName);
    element.disabled = true;
    displayPlayers();
}
