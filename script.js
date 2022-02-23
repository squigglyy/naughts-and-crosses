const NAUGHT = 'naught'
const CROSS = 'x'
let conditon 
const cellElements = document.querySelectorAll('.tile');
cellElements.forEach(tile => {  
    tile.addEventListener('click', clickController, { once: true })
})


function clickController(expected) {
    const tile = expected.target
    const currentP = conditon ? NAUGHT : CROSS
   
    placeTile(tile, currentP)
    
    conditon ^= true;
    
}

function placeTile(tile, currentP) {
     tile.className += currentP;
    
}
