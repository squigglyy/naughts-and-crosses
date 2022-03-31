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
    
    tile.className = marker;
    
}

function binaryCal() {
    let stringB = "";
    const board = document.getElementById("board");
    for (let i = 0; i < 64; i++) {
        console.log("1")
        if (board.children[i].className != "tile " ) {
            stringB += "1";
        } else {
            stringB += "0";
        }

    }
    
    let data = document.getElementById("output");
    data.innerHTML = "";
    data.innerHTML += stringB;
    let string1 = stringB.slice(0,8)
    let string2 = stringB.slice(8,16)
    let string3 = stringB.slice(16,24)
    let string4 = stringB.slice(24,32)
    let string5 = stringB.slice(32,40)
    let string6 = stringB.slice(40,48)
    let string7 = stringB.slice(48,56)
    let string8 = stringB.slice(56,64)
    let row1 = document.getElementById("row1");
    let row2 = document.getElementById("row2");
    let row3 = document.getElementById("row3");
    let row4 = document.getElementById("row4");
    let row5 = document.getElementById("row5");
    let row6 = document.getElementById("row6");
    let row7 = document.getElementById("row7");
    let row8 = document.getElementById("row8");
    row1.innerHTML = "";
    row2.innerHTML = "";
    row3.innerHTML = "";
    row4.innerHTML = "";
    row5.innerHTML = "";
    row6.innerHTML = "";
    row7.innerHTML = "";
    row8.innerHTML = "";
    row1.innerHTML += string1;
    row2.innerHTML += string2;
    row3.innerHTML += string3;
    row4.innerHTML += string4;
    row5.innerHTML += string5;
    row6.innerHTML += string6;
    row7.innerHTML += string7;
    row8.innerHTML += string8;
    
}