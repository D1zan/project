let dragonHealth = document.querySelector('#dragonHealth')
let trackDragonHealth = parseInt(dragonHealth.innerHTML)


function dragonFight() {
    document.querySelector('#attack').addEventListener('click', (e) => {
        trackDragonHealth -= 20
        dragonHealth.innerHTML = trackDragonHealth
        if (trackDragonHealth <= 0) {
            updateDragonHealth()
        } 
    });
    document.querySelector('#dodge').addEventListener('click', (e) => {
        trackDragonHealth = 300
        if (trackDragonHealth  <= 0) 

    )
};
dragonFight()

function updateDragonHealth() {
    trackDragonHealth = 300
    dragonHealth.innerHTML = trackDragonHealth

}
