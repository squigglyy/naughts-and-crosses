const cellE = document.querySelectorAll('[data-cell]')

cellE,forEach(cell => {
    cell.addEventlistner('click', handler, {once: true})
})


function handler() {
    
}