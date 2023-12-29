const tilesBox = document.querySelector('.tiles');
const colors = ['red', 'green', 'blue', 'crimson', 'yellow', 'violet', 'teal', 'pink'];
const colorList = [...colors, ...colors];
const tileCount = colorList.length;

// game state
let cardsFlipped = 0;
let activeTile = null;
let endOfTurn = false;


function buildTile(color){
    const element = document.createElement('div')
    
    element.classList.add("tile");
    element.setAttribute('data-color', color)
    element.setAttribute('data-revealed', "false")

    element.addEventListener('click', function(){

        const revealed = element.getAttribute('data-revealed')

        if (endOfTurn
            || revealed === 'true'
            || element === activeTile
            )
        {
            return;
        }

        element.style.backgroundColor = color;
        

        if (!activeTile){
            activeTile = element

            return;
        }

        const colorsMatcch = activeTile.getAttribute('data-color')

        if (colorsMatcch === color) {
            activeTile.setAttribute('data-revealed', 'true')
            element.setAttribute('data-revealed', 'true')

            activeTile = null;
            endOfTurn = false;
            cardsFlipped += 2;
            if (cardsFlipped === tileCount){
            alert ('Congtrats! refresh to play again')
            }
        return
        }

        endOfTurn = true
        setTimeout(function(){
            element.style.backgroundColor = null
            activeTile.style.backgroundColor = null

            endOfTurn = false
            activeTile = null
        }, 1000)

    
})
return element
}

// build up tiles
for (let i = 0; i < tileCount; i++) {
    const randomTile = Math.floor(Math.random() * colorList.length);
    const color = colorList[randomTile];
    const tile = buildTile(color);

    colorList.splice(randomTile, 1)
    tilesBox.appendChild(tile)

}





