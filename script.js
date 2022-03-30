const marker = 'x'

const pixels = document.querySelectorAll('.tile');
pixels.forEach(tile => {  
    tile.addEventListener('click', click, { once: true })
})


function click(expected) {
    const tile = expected.target
    
   
    placeTile(tile, marker)
    binaryCal()
    
    
}

function placeTile(tile, marker) {
    
    tile.className += marker;
    
}



function binaryCal() {
    let stringB = "B";
    const board = document.getElementById("board").children;
    for (let i = 0; i < 64; i++) {
        console.log("1")
        console.log(board.children[1].className)

        
        
        
    }
    
    let data = document.getElementById("output");
    data.innerHTML = "";
    data.innerHTML += stringB;
}