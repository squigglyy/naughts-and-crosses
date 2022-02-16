const NAUGHT = 'naught'
const CROSS = 'x'
let conditon 
const cellElements = document.querySelectorAll('[data-tile]')


cellElements.forEach(tile => {  
    tile.addEventListener('click', clickControls, { once: true })
})




function clickControls(expected) {
    const tile = expected.target
    const currentP = conditon ? NAUGHT : CROSS
    
   
    placeTile(tile, currentP)

    //check for win
    //check for draw
    //switch turns
    
}

function placeTile(tile, currentP) {
    console.log("a")
    
    tile.classlist.add(currentP)
    
}
